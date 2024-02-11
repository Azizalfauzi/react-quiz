import { useEffect } from "react";

export default function Timer({ dispatch, secondRemaining }) {
  useEffect(
    function () {
      setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);
    },
    [dispatch]
  );
  return <div className="timer">{secondRemaining}</div>;
}
