import React, { useContext, useState } from "react";

const myCustomContext = React.createContext({
  myCustomValue: "",
  setMyCustomValue: () => {},
});

export const MyContextProvider = (props) => {
  const [myCustomValue, setMyCustomValue] = useState("");
  const contextValue = {
    myCustomValue,
    setMyCustomValue: (val) => {
      setMyCustomValue(val);
    },
  };
  return (
    <myCustomContext.Provider value={contextValue}>
      {props.children}
    </myCustomContext.Provider>
  );
};

export default myCustomContext;
//export const useMyCustomContext = () => useContext(myCustomContext);
