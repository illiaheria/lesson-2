import React from "react";
export const AppContext = React.createContext();

class Form extends React.Component {
  render() {
    return (
      <AppContext.Provider value={"Illia"}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default Form;
