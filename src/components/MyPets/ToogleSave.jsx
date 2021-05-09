import { useEffect, useState } from "react";
import Switch from "react-switch";

const ToggleSave = ({
  onToggleSave,

  refreshPets,
  isSaved,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    isSaved ? setIsChecked(true) : setIsChecked(false);
  }, [isSaved]);

  const handleChange = async () => {
    await setIsChecked(!isChecked);
    await onToggleSave(isChecked);
    refreshPets();
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
