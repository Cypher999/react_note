import { nanoid } from "nanoid";

function readAll(){
  return JSON.parse(localStorage.getItem('note'));
}

function newNote(){
  let data = JSON.parse(localStorage.getItem('note'));
  data==undefined
  ?
  data=[{
    'id': nanoid(),
    'judul': 'NOTE #1',
    'isi': '# new note'
  }]
  :
  data.push({
    'id':nanoid(),
    'judul':'NOTE #'+(data.length+1),
    'isi':'# new note'
  });
  localStorage.setItem('note',JSON.stringify(data));
}

function updateNote(data){
  localStorage.setItem('note', JSON.stringify(data));
}

export {readAll,newNote,updateNote};