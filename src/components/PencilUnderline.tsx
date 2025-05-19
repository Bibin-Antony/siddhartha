
import React from 'react';

interface PencilUnderlineProps {
  children: React.ReactNode;
  color?: string;
}

const PencilUnderline: React.FC<PencilUnderlineProps> = ({
  children,
  color = "bg-emerald-300"
}) => {
  return (
    <span className="relative inline-block">
      {children}
      <span 
        className={`absolute bottom-1 left-0 w-full h-2 ${color} opacity-60`}
        style={{
          clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0 100%)"
        }} 
      />
    </span>
  );
};

export default PencilUnderline;
