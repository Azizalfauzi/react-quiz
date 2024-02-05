import Header from "./Header";
import Main from "./main";
import { useEffect } from "react";

export default function App() {
  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
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
