import { useState } from "react";

function Header() {
    // useState() - useState hook is used to manage the state(data) of a component;

    const [state, setState] = useState("hello");
    const [isVisible, setIsVisible]= useState(false);

    const toggleElement = ()=>{
       setState("Bye");
       setIsVisible(true);
    }
  return (
    <div>
      <h2>{state} Header</h2>
      <button onClick={toggleElement}>Toggle</button>
      {
      isVisible ? 
      <p>I am paragraph 1</p> 
      : 
      <p>I am paragraph 2</p>
      }
    </div>
  );
}
export default Header;
