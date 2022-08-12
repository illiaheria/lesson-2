import React from "react";
import { AppContext } from "../../components/form/Form";
import styles from "./Input.module.css";

class Input extends React.Component {
  render() {
    return (
      <div className={styles.input}>
        <input
          type="text"
          value={this.props.value}
          onChange={this.props.handleInputChanges}
        />
      </div>
    );
  }
}
Input.contextType = AppContext;
export default Input;
