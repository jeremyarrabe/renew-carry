"use client";
const Button = ({ onClick, children, className }) => {
  return (
    <button className={className} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
