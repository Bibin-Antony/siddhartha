import React from 'react';
interface PencilUnderlineProps {
  children: React.ReactNode;
  color?: string;
}
const PencilUnderline: React.FC<PencilUnderlineProps> = ({
  children,
  color = "bg-emerald-300"
}) => {
  return <span className="relative inline-block">
      {children}
      <span style={{
      clipPath: "polygon(0 0, 100% 30%, 100% 70%, 0 100%)"
    }} className="" />
    </span>;
};
export default PencilUnderline;