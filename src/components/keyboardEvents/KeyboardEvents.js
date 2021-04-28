const KeyboardEvents = () => {
  //keyDown
  const handleKeyDown = (e) => {
    console.log("keydown: ", e.target.value);
    console.log("keycode: ", e.keyCode)
  };

  //keyUp
  const handleKeyUp = (e) => {
    console.log("keyup: ", e.type);
  };


  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      <input
       
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        type="text"
        defaultValue="enter something"
      />
     
    </div>
  );
};

export default KeyboardEvents;
