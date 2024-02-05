import { useReducer } from "react";
import Header from "./Header";
import Main from "./main";
import { useEffect } from "react";

const initialState = {
  questions: [],
  // loading,error,ready,active,finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    default:
      throw new Error("Action unknown");
  }
}

export default function App() {
  const [state, dispacth] = useReducer(reducer, initialState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispacth({ type: "dataReceived", payload: data }))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Question?</p>
        <p>Hello World</p>
      </Main>
    </div>
  );
}
