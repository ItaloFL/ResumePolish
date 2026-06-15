import React from "react";

interface CircularProgressProps {
  score: number;
  size?: number;
  strokeWidth?: number;
  showLabel?: boolean;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  score,
  size = 80,
  strokeWidth = 6,
  showLabel = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (score / 100) * circumference;

  // Cor dinâmica conforme as regras do projeto
  const getColor = (val: number) => {
    if (val >= 80) return "#10b981"; // Emerald
    if (val >= 60) return "#f59e0b"; // Amber
    return "#ef4444"; // Vermelho
  };

  const getLabel = (val: number) => {
    if (val >= 80) return "Bom";
    if (val >= 60) return "Médio";
    return "Fraco";
  };

  const color = getColor(score);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="w-full h-full transform -rotate-90"
          viewBox={`0 0 ${size} ${size}`}
        >
          {/* Círculo de Background */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="stroke-neutral-800"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Círculo de Progresso */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-500 ease-out"
          />
        </svg>
        {/* Texto Central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold font-mono text-white">
            {score}
          </span>
        </div>
      </div>
      {showLabel && (
        <span className="text-xs mt-1 font-medium" style={{ color }}>
          {getLabel(score)}
        </span>
      )}
    </div>
  );
};
