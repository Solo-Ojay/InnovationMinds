import { useEffect } from "react";

function LoadingScreen({ onDone }) {
  // Auto-navigate after a short delay (simulating loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone?.();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onDone]);

  return (
    <div className="ck-loading">
      <div className="ck-loading-spinner">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="40"
            cy="40"
            r="35"
            stroke="#FF8C00"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="60 200"
            className="ck-spinner-circle"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoadingScreen;

