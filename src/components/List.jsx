import "./MenuStyle.scss";
import { listData } from "./Data";
import { useState, useRef, useEffect } from "react";

function List() {
  const listRef = useRef(null);

  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleClick = (e) => {
      console.log("target", e.target);
      if (listRef.current) {
        if (listRef.current.contains(e.target)) {
            Open ();
        }
      }
    };
  
    document.addEventListener("click", handleClick);
  
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const Open = () => {
    setShowText(true);
    console.log("open");
  };

  return (
    <ul>
      {listData.map((item, index) => (
        <div key={index}>
          <li onClick={()=>setShowText(index)} >{item.title}</li>
          {showText===index && <p>{item.text}</p>}

          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </ul>
  );
}

export { List };
