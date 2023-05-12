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
          !menuWrapperRef.current.contains(e.target)
        ) {
          handleClose();
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [menuWrapperRef, menuPageRef]);

  return [handleClose];
}

export { UseContextMenu };
