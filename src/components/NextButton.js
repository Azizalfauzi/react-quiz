export default function NextButton({ dispatch, answer, index, numQuestion }) {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <div
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </div>
    );
  if (index === numQuestion - 1)
    return (
      <div className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
        Finished
      </div>
    );
}
