import React from "react";

export const PassingCompAsPropsOne = ({ name }: { name: string }) => {
  return <h3>PassingCompAsPropsOne name {name}</h3>;
};

type PassingCompAsPropsTwoPropType = {
  component: React.ReactElement
  isLoggedIn: boolean;
};
export const PassingCompAsPropsTwo = ({
  isLoggedIn,
  component: PassedComponent,
}: PassingCompAsPropsTwoPropType) => {
    console.log(" is loggedIn ====> ", isLoggedIn)
  return  <div>{PassedComponent} hello word  </div>
};
