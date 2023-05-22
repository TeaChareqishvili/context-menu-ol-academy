import { List } from "./List";
import "./MenuStyle.scss";
import { useRef, useState } from "react";
import { UseContextMenu } from "../Hook/UseContextMenu";

function ContextMenu() {
  const menuPageRef = useRef(null);
  const menuWrapperRef = useRef(null);
  const [showText, setShowText] = useState(false);

  const [handleClose] = UseContextMenu(
    menuPageRef,
    menuWrapperRef,
    setShowText
  );

  return (
    <div className="menuPage" ref={menuPageRef}>
      <div className="menuWrapper" ref={menuWrapperRef}>
        <h1>Context Menu</h1>
        <List
          showText={showText}
          handleClose={handleClose}
          setShow={setShowText}
        />
      </div>
    </div>
  );
}

export { ContextMenu };
