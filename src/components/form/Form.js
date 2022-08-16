import React from "react";
export const AppContext = React.createContext();

const Form = (props) => {
  return (
    <AppContext.Provider value={"Illia"}>{props.children}</AppContext.Provider>
  );
};

export default Form;
