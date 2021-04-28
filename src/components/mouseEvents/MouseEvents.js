import "./styles.css";

const MouseEvents = () => {
  //click event
  const handleClick = (e) => {
    console.log(`event Obj: ${e}`)
    console.log(`event type: ${e.type}`)
  }
  //doubleClick event
  const handleDoubleClick = (e) => console.log("event type: ", e.type)

  return (
    <>
      <h2>MouseEvents</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>x</span>
          </li>
          <li id="todo-2" onDoubleClick={handleDoubleClick}>
            todo item2<span>x</span>
          </li>
          <li>
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
