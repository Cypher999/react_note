import { useEffect, useState } from "react";
import reactDOM from "react-dom/client";
export default function Body(props) {
  //the usestate function below is used to toggle the screen when the width is below 600
  let [mini, setMini] = useState(
    window.innerWidth <= 600 ? true : false
  );
  //

  //the usestate function below is used for handling the form data, because it will be used to
  //update the selected note
  let [formData,setFormData]=useState([]);
  //

  //the useeffect below is used to set the input element inside the form, based on currentnote
  //props that is sent by app.js
  //it will run everytime the currentnote changing, in other words, when the value is changed
  //from the usestate on app.js
  useEffect(()=>{
    setFormData(props.currentNote);
  },[props.currentNote]);
  //

  //the function below is to add resize event to window, to check if the screen is on mobile category or not
  window.onresize = function () {
    let ukuranBaru = window.innerWidth <= 600 ? true : false;
    setMini(ukuranBaru);
  }
  //


  function saveNote(event){
    event.preventDefault();
    props.saveNote({"judul":formData.judul,"isi":formData.isi});
    alert('NOTE HAS BEEN SAVED');
    return false;
  }

  function formHandler(event){
    setFormData({...formData,[event.target.name]:event.target.value});
  }
  return (
    <div className={props.showTopMenu ? "body show" : "body"}>
      {mini &&
        <div className="row">
          <div className="c-20 menu-toggle">
            <input type="button" className="btn" value="MENU" onClick={props.toggleMenu}/>
          </div>
        </div>
      }
      <div className="row">
        <div className="c-20 body-container">
          <form action="" onSubmit={saveNote}>
            <input
              type="text"
              name="judul"
              placeholder="masukkan judul catatan"
              className="c-20 judul"
              value={formData.judul ? formData.judul : ""}
              onChange={formHandler}
              />
            <textarea
              rows="5"
              className="c-20"
              name="isi"
              value={formData.isi ? formData.isi : ""}
              onChange={formHandler}
            ></textarea>
            <input
              type="submit"
              className="btn btn-save"
              value="SIMPAN"
              />
          </form>
        </div>

      </div>
    </div>
  )
}