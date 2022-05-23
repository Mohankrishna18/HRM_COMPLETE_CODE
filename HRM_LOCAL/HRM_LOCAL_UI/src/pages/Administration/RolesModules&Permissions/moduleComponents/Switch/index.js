import React from "react";
import ReactDOM from "react-dom";

import Switch from "./Switch";
import Toggle from "./Toggle";

function SwitchButton() {
  const onToggle = state => {
    console.log("ontoggle", state);
  };
  return (
    <div className="App">
      <Toggle onToggle={onToggle}>
        {({ on, onToggle }) => (
          <div>
            <Switch on={on} onSwitch={onToggle} />
            
          </div>
        )}
      </Toggle>
    </div>
  );
}

export default SwitchButton;
