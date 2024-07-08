import { useEffect, useState } from "react";

function Time({ dispatch, sec }) {
  const mins = Math.floor(sec / 60);
  const secn = sec % 60;
  useEffect(
    function () {
      const inter = setInterval(function () {
        dispatch({ type: "time" });
      }, 1000);
      return function () {
        clearInterval(inter);
      };
    },
    [dispatch]
  );
  return (
    <span className={`time  ${mins === 0 && sec <= 15 ? "red" : ""}`}>
      0{mins}:{secn >= 0 && `${secn < 10 ? `0${secn}` : secn}`}
    </span>
  );
}

export default Time;
