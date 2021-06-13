export default function RightPane({ onChange, onSubmit }) {
  return (
    <div>
      <h2>What's the capital of Tamil Nadu?</h2>
      <input onChange={onChange} />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}
