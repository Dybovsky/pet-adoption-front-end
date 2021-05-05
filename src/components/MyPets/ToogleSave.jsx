import { useState } from "react";
import Switch from "react-switch";
// import icon from "/icons8-save-26.png";
const ToggleSave = ({ onToggleSave }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = async () => {
    await setIsChecked(!isChecked);
    await onToggleSave(isChecked);
  };

  return (
    <div className="toggle-save">
      <label>
        <div className="save-title"></div>
        <Switch
          onChange={handleChange}
          checked={isChecked}
          uncheckedIcon={
            <img src="/save-512.png" alt="save" className="save-icon"></img>
          }
          checkedIcon={false}
          onColor={"#CD8940"}
        />
      </label>
    </div>
  );
};

export default ToggleSave;
