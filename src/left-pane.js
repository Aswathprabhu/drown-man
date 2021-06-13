import Tank from "./tank";

export default function LeftPane({ waterLevel }) {
  return (
    <div>
      <h2>Save Me from drowning!</h2>
      <Tank waterLevel={waterLevel} />
    </div>
  );
}
