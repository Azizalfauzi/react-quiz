export default function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * points;
  return (
    <p className="results">
      You scored <strong>{points}</strong> out of {maxPossiblePoints}{" "}
      {Math.ceil(percentage)}%
    </p>
  );
}
