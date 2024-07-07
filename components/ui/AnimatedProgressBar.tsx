import React, { useEffect, useState } from "react";

interface AnimatedProgressBarProps {
  percent: number;
}

export const AnimatedProgressBar: React.FC<AnimatedProgressBarProps> = ({ percent }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(percent);
  }, [percent]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
