//import all nescesary library
import { useEffect, useState } from "react";
import reactDOM from "react-dom/client";
import Body from "./components/Body";
import MenuBar from "./components/MenuBar";
import Empty from "./Empty";
import { readAll,updateNote,newNote } from "./data";
//

//app is the main function
export default function App() {
  //for handling the showtopmenu controller, to determine if the menu is open or not when
  //screen is small
  let [showTopMenu,setShowTopMenu]=useState(false);
  //
  //handler for reading all data from local storage
  let [allData,setAllData]=useState([]);
  //
  //handler to set the current working note, this is usefull for updating the working note
  let [currentNote,setCurrentNote]=useState([]);
  //
  //to read the data when the program start, it will run once
  useEffect(()=>{
    function retrieveData(){
      let data = readAll();
      if(data!=undefined){
        setAllData(data);
        setCurrentNote(data[0]);
      }
    }
    retrieveData();
  },[])
  //
  //function to toggle the menu, thus changing the showtopmenu value, this will be exported to menu fule
  function toggleMenu(){
    setShowTopMenu(!showTopMenu);
  }
  //
  //function to toggle the current working note, this will be exported to menu
  //it used when user click another note to view or update
  function toggleCurrentNote(id){
    if (arguments[arguments.length - 1].nativeEvent.target.nodeName!="INPUT"){
      setCurrentNote(allData.filter(n => n.id == id)[0]);
    }
  }
  //
  //function for saving the change on working note, it will be exported to body.js file
  function saveNote(incomingData)
  {
    let dataToSave=allData.map((n)=>{
      if(n.id==currentNote.id){
        return {id:n.id,judul:incomingData.judul,isi:incomingData.isi}
      }
      else{
        return n;
      }
    });
    updateNote(dataToSave);
    let data = readAll();
    setAllData(data);
  }
  //
  // function for deleting the selected note, it will be exported to menubar.js
  function deleteNote(id) {
    let tanya=confirm("HAPUS CATATAN INI ?");
    if(tanya){
      let dataToSave = allData.filter((n) => {
        if (n.id != id) {
          return n;
        }
      });
      updateNote(dataToSave);
      let data = readAll();
      setAllData(data);
      setCurrentNote(data[0]);
    }
  }
  //

  //function for adding the note, it will be exported to menubar.js
  function addNote(){
    newNote();
    let data = readAll();
    setAllData(data);
    setCurrentNote(data[data.length-1]);
  }
  //
  return (
    <div className="row">{
      //if the data is empty, then the program will show 'empty' element, if not, the main
      //component from menubar and body will be used
      allData.length>0 ?<>
        <MenuBar
          showTopMenu={showTopMenu}
          itemMenu={allData}
          toggleCurrentNote={toggleCurrentNote}
          addNote={addNote}
          deleteNote={deleteNote}
        />

        <Body
          toggleMenu={toggleMenu}
          showTopMenu={showTopMenu}
          currentNote={currentNote}
          setCurrentNote={setCurrentNote}
          saveNote={saveNote}
        />
      </>
      :
      <Empty
        addNote={addNote}
      />
      }
    </div>
  )
}
//