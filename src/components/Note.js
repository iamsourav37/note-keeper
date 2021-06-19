import React from "react";

import "./css/noteStyle.css";

function Note() {
  return (
    <div className="box">
      <div>
        <h2>this is note title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
          consequuntur ut tenetur!
        </p>
      </div>
      <button className="del-btn">Delete</button>
    </div>
  );
}

export default Note;
