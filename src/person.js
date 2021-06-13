import "./person.css";

export default function Person({ animate }) {
  return (
    <div className="wrapper">
      <div
        className="head"
        style={{
          animation: `${
            animate ? "rock 1s alternate infinite ease-in-out" : "none"
          }`
        }}
      ></div>
      <div className="torso"></div>
      <div
        className="leftarm"
        style={{
          animation: `${
            animate ? "wave 1s alternate infinite ease-in-out" : "none"
          }`
        }}
      ></div>
      <div
        className="rightarm"
        style={{
          animation: `${
            animate ? "wave2 1s alternate infinite ease-in-out" : "none"
          }`
        }}
      ></div>
      <div className="leftleg"></div>
      <div className="leftfoot"></div>
      <div className="rightleg"></div>
      <div className="rightfoot"></div>
    </div>
  );
}
