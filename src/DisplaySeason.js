import React from "react";
import ReactDOM from "react-dom";

const GetSeason = function (month, lat) {
  if (lat > 0) {
    return month > 2 && month < 9 ? "Yoz" : "Qish";
  } else {
    return month < 2 && month > 9 ? "Qish" : "Yoz";
  }
};

export const DisplaySeason = function (props) {
  const month = new Date().getMonth();
  return (
    <div>
      <div>{GetSeason(month, props.lat)}</div>
    </div>
  );
};
