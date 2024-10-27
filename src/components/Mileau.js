import React from 'react'

export const Mileau = ({persones}) => {
  return (
    <div><div className="row2 ">
    <div className="row22">
      {persones.length ? (
        persones.map((item) => {
          return (
            <div className="cont border-bottom">
              <img
                className="imageavatare"
                src="/1-intro-photo-final.jpg"
              />
              <div className="para  ">
                <p>{item.name}</p>
                <p>{item.date}</p>
              </div>
            </div>
          );
        })
      ) : (
        <h1 className="py-5 text-center">No Rendiveau</h1>
      )}
    </div>
  </div></div>
  )
}
