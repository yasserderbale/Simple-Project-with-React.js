import React from "react";
export const Eventes = ({cleardata,viewdata}) => {
  return (
    <div>
     
      <div className="row3">
        <button onClick={cleardata} className="b ">clearAll</button>
        <button onClick={viewdata} className="b ">viewAll</button>
      </div>
    </div>
  );
};
