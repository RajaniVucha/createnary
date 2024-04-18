import React, { useState } from "react";

function Range() {
  // State to hold the value of the slider
  const [value, setValue] = useState(50);

  // Function to handle slider value change
  const handleSliderChange = (event) => {
    setValue(parseInt(event.target.value, 10));
  };

  return (
    <div>
      {/* Slider input */}
      <input
        type="range"
        min={0}
        max={1000}
        value={value}
        onChange={handleSliderChange}
      />
      {/* Display current value */}
      <p>Number: {value}</p>
    </div>
  );
}

export default Range;
