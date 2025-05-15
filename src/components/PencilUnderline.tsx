
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
      <span className={`absolute -bottom-1 left-0 right-0 h-3 ${color} opacity-40 -z-10 transform -rotate-1`} 
        style={{ 
          clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0 100%)",
        }}
      />
    </span>
  );
};

export default PencilUnderline;
