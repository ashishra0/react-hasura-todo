import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

const FontAwesome = () => {
  return (
    <h2>
      Loading...{" "}
      <FontAwesomeIcon
        icon={faSpinner}
        style={{ color: "blue" }}
        spin
      />
    </h2>
  )
}

export default FontAwesome;