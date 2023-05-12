import "./MenuStyle.scss";
import { listData } from "./Data";

function List({ handleClose, showText, setShow }) {
  console.log({ showText });
  return (
    <ul>
      {listData.map((item, index) => (
        <div key={index}>
          <li onClick={() => setShow(index)}>{item.title}</li>
          {showText === index && <p>{item.text}</p>}

          <button
            onClick={() => {
              handleClose(index);
              console.log("Edit");
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              handleClose(index);
              console.log("Remove");
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </ul>
  );
}

export { List };
