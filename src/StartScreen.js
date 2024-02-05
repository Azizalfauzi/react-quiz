export default function StartScreen({ numQuestion }) {
  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestion} Questions to the test your React Mastery</h3>
      <button className="btn btn-ui">Let's Start</button>
    </div>
  );
}
