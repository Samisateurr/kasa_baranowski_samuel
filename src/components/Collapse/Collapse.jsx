import { useState } from "react";
import "../../components/Collapse/Collapse.css";

const Collapse = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapsibles">
      <div className="collapsibles_container">
        <p key={props.title}>{props.title}</p>
        <button
          className="collapsibles_icon"
          onClick={() => setOpen(!open)}
          style={{ transform: open ? "rotate(45deg)" : "rotate(-135deg)" }}
        ></button>
      </div>
      {open && (
        <div className="collapsibles_content show" key={props.title}>
        {props.content ? props.content : props.children}
      </div>
      )}
    </div>
  );
};

export default Collapse;