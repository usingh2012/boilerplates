import { useContext } from "react";
import myCustomContext from "./store/mycontext";

export const RenderComponent = () => {
  const myContext = useContext(myCustomContext);
  return (
    <div>
      <h3 style={{ textAlign: "center", background: "orange" }}>
        {myContext.myCustomValue}
      </h3>
    </div>
  );
};
