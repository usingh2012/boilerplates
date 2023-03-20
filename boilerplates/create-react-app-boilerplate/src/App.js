import logo from "./logo.svg";
import "./App.css";
import myCustomContext, { MyContextProvider } from "./store/mycontext";
import { useRef, useContext } from "react";
import { RenderComponent } from "./RenderComponent";

function App() {
  const inputRef = useRef("");
  const myContext = useContext(myCustomContext);
  const handleFormSubmit = (evt) => {
    evt.preventDefault();
    console.log(inputRef.current.value);
    myContext.setMyCustomValue(inputRef.current.value);
  };
  return (
    <div className="app-container">
      <div className="app-content">
        <form onSubmit={handleFormSubmit}>
          <h2 style={{ textAlign: "center" }}>Enter Your Details</h2>
          <div className="form-controls">
            <label>Input whatever you want</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
          </div>
        </form>
        <RenderComponent />
      </div>
    </div>
  );
}

export default App;
