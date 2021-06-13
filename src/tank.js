import "./tank.css";
import Person from "./person";

export default function Tank({ waterLevel }) {
  const canAnimate = waterLevel === 75;

  return (
    <div className="tank-container">
      <div className="water-tank">
        <div className="liquid">
          <Person animate={canAnimate} />
          <svg
            className="water"
            viewBox="0 0 200 100"
            style={{ top: `calc(100% - ${waterLevel}%)` }}
          >
            <defs>
              <linearGradient
                id="waterGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <stop offset="0" style={{ stopColor: "#29ABE2" }} />
                <stop offset="0.1643" style={{ stopColor: "#28A6E3" }} />
                <stop offset="0.3574" style={{ stopColor: "#2496E6" }} />
                <stop offset="0.5431" style={{ stopColor: "#1E7DEA" }} />
                <stop offset="0.7168" style={{ stopColor: "#1559F0" }} />
                <stop offset="0.874" style={{ stopColor: "#0B2CF7" }} />
                <stop offset="1" style={{ stopColor: "#0000FF" }} />
              </linearGradient>
            </defs>
            <path
              fill="url(#waterGradient)"
              d="
        M 0,0 v 100 h 200 v -100 
        c -10,0 -15,5 -25,5 c -10,0 -15,-5 -25,-5
        c -10,0 -15,5 -25,5 c -10,0 -15,-5 -25,-5
        c -10,0 -15,5 -25,5 c -10,0 -15,-5 -25,-5
        c -10,0 -15,5 -25,5 c -10,0 -15,-5 -25,-5
      "
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
