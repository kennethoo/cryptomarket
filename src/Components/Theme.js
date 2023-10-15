import { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
function Theme({ triger }) {
  const [mode, setMode] = useState(localStorage.getItem("mode"));
  const loadTheme = (theme) => {
    const root = document.querySelector("#root");
    root.setAttribute("color-scheme", `${theme}`);
    localStorage.setItem("mode", theme);
    setMode(theme);
  };
  const switchToggle = () => {
    const newTheme = mode === "light" ? "dark" : "light";
    loadTheme(newTheme);
    triger();
  };
  return (
    <div className="holf-sight-upt">
      <button onClick={switchToggle}>
        {" "}
        <BsMoon /> / <BsSun />
      </button>
    </div>
  );
}

export default Theme;
