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

  //cut event
  const handleCut = (e) => console.log("event type: ", e.type);

  //paste event
  const handlePaste = (e) => console.log("event type: ", e.type);

  //copy event
  const handleCopy = (e) => console.log("event type: ", e.type);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>KeyboardEvents</h2>
      <input
        onCut={handleCut}
        onKeyUp={handleKeyUp}
        onKeyDown={handleKeyDown}
        type="text"
        defaultValue="enter something"
      />
      <p onPaste={handlePaste} onCopy={handleCopy}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime optio
        est facilis aliquam reiciendis asperiores tempora illum, cumque, eius
        obcaecati nulla et excepturi incidunt ipsum laudantium aperiam explicabo
        quibusdam similique beatae nam, officiis eos amet adipisci. Atque ex
        modi impedit.
      </p>
    </div>
  );
};

export default KeyboardEvents;
