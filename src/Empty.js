import { useEffect, useState } from "react";
import reactDOM from "react-dom/client";
export default function Empty(props) {
  return (
    <div className="c-xl-5 c-lg-5 c-md-10 c-sm-10 empty-container">
      <div class="row">
        <div className="c-xl-15 c-lg-15 c-md-20 c-sm-20">
          CATATAN KOSONG
        </div>
        <input
          className="c-xl-4 c-lg-4 c-md-20 c-sm-20 btn"
          type="button"
          value="[+]"
          onClick={props.addNote}
        />
      </div>
    </div>
  )
}