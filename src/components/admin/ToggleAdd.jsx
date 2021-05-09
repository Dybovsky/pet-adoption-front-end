import { useState } from "react";
import Switch from "react-switch";

const ToggleAdd = ({ onToggleAdd }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    onToggleAdd(!isChecked);
    setIsChecked(!isChecked);
  };

  return (
    <label>
      <Switch
        onChange={handleChange}
        checked={isChecked}
        uncheckedIcon={false}
        checkedIcon={false}
        onColor={"#60B0F4"}
      />
    </label>
  );
};

export default ToggleAdd;
