import {useState} from "react";
import "./styles.css";

const MouseEvents = () => {
  const [coordX, setCoordX] = useState("")
  const [coordY, setCoordY] = useState("")
  
  //click event
  const handleClick = (e) => {
    console.log(`event Obj: ${e}`)
    console.log(`event type: ${e.type}`)
  }
  
  //doubleClick event
  const handleDoubleClick = (e) => console.log("event type: ", e.type)
  
  //mouseMove event
  const handleMouseMove = (e) => {
    setCoordX(e.nativeEvent.offsetX)
    setCoordY(e.nativeEvent.offsetY)
  }

  return (
    <>
      <h2>MouseEvents</h2>
      <p><span>X</span>and Y</p>
      <p><span>{coordX}</span>and {coordY}</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>x</span>
          </li>
          <li id="todo-2" onDoubleClick={handleDoubleClick}>
            todo item2<span>x</span>
          </li>
          <li id="todo-3" onMouseMove={handleMouseMove}>
            todo item3<span>x</span>
          </li>
          <li>
            todo item4<span>x</span>
          </li>
          <li>
            todo item5<span>x</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
