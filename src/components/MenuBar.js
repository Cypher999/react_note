import { useEffect, useState } from "react";
import reactDOM from "react-dom/client";
export default function MenuBar(props) {
  let elemenCatatan=props.itemMenu.map(n=>
    <li key={props.itemMenu.indexOf(n)}
      onClick={props.toggleCurrentNote.bind(null, n.id)}>
      <div
        className="noteItemList">
        <div className="row">
          <div className="c-15">
            {n.judul}
          </div>
          <input
            type="button"
            value="[X]"
            className="c-3 btn"
            onClick={props.deleteNote.bind(null,n.id)}
          />
        </div>
      </div>
    </li>);
  return (
    <div className={props.showTopMenu ? 'menubar show':'menubar'}>
      <div className="row">
        <div className="c-20 noteTitleBar">
          <div className="row">
            <h2 className="c-xl-17 c-lg-17 c-md-20 c-sm-17">NOTE</h2>
            <input
              className="c-xl-3 c-lg-3 c-md-20 c-sm-3 btn"
              type="button"
              value="[+]"
              onClick={props.addNote}
              />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="c-20 noteItem">
          <ul>
            {elemenCatatan}
          </ul>

        </div>
      </div>
    </div>
  )
}