import React from "react";
import "./wrap.css";
type wrapProps = {
  variant: "primary" | "secondary";
  count?: number,
  aria?: string
} & React.ComponentProps<"button">;

/*
right now the children passed is a <di>, but 
 if we need to restrict the type of the children to string only 
 we could use the following 
  & Omit<React.ComponentProps<"button"> , string>
 */ 

const WrappingComponent = ({ variant, children, ...rest }: wrapProps) => {
  return (
    <button
      onClick={() => {
        console.log("clicked");
      }}
      className={`btn-${variant}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default WrappingComponent;
