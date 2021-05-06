import React, { useEffect } from "react";
import { useState } from "react";
import Switch from "react-switch";

const Toggle = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { onToggle } = props;

  const handleChange = () => {
    setIsChecked(!isChecked);
    onToggle(isChecked);
  };

  return (
    <label>
      <span>Saved Pets</span>
      <Switch
        onChange={handleChange}
        checked={isChecked}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={"#CD8940"}
      />
    </label>
  );
};

export default Toggle;
