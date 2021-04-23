import React from "react";
import podChatLogo from "./podchatlogo.svg";

export default function View() {
  return (
    <div>
      <img src={podChatLogo} alt="" />
      <h2>
        A place to have meaningful & contextual discussions about interesting
        podcast clips
      </h2>
      <form>
        <input></input>
        <input></input>
        <button>Log In</button>
      </form>
    </div>
  );
}
