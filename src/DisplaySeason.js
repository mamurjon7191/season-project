import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

const GetSeason = function (month, lat) {
  if (lat > 0) {
    return month > 2 && month < 9 ? "Yoz" : "Qish";
  } else {
    return month < 2 && month > 9 ? "Qish" : "Yoz";
  }
};

export const DisplaySeason = function (props) {
  const month = new Date().getMonth();
  const natija = GetSeason(month, props.lat);
  if (natija == "Qish") {
    return (
      <div className="snow">
        <i className="snowflake icon" id="icon1"></i>
        <h1 className="title">Burr,it's chilly!</h1>
        {/* {GetSeason(month, props.lat)} */}
        <i className="snowflake icon" id="icon1"></i>
      </div>
    );
  } else {
    return (
      <div className="sun12">
        <i className="sun icon" id="icon2"></i>
        <h1 className="title1">Let's hit the beach!</h1>
        {/* {GetSeason(month, props.lat)} */}
        <i className="sun icon" id="icon2"></i>
      </div>
    );
  }
};
