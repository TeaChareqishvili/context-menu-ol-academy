import { useEffect } from "react";

function UseContextMenu(menuPageRef, menuWrapperRef, setShowText) {
  const handleClose = () => {
    setShowText(false);
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (menuPageRef.current && menuWrapperRef.current) {
        if (
          menuPageRef.current.contains(e.target) &&
          !menuWrapperRef.current.contains(e.target) &&
          (e.button === 0 || e.button === 2)
        ) {
          handleClose();
        }
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [menuWrapperRef, menuPageRef]);

  return [handleClose];
}

export { UseContextMenu };

