import React, { useContext } from "react";
import { AppContext } from "../../components/form/Form";
import styles from "./Input.module.css";

const Input = (props) => {
  const name = useContext(AppContext);

  return (
    <div className={styles.input}>
      <input
        type="text"
        value={props.value}
        onChange={props.handleInputChanges}
      />
    </div>
  );
};

export default Input;
