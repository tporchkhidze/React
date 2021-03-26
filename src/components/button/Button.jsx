import "./button.css";

function Button({type, text, onClick}) {
//   if (type === "none") {
//     return null;
//   }

  return (
    <button className={`btn ${type}`} onClick={onClick}>{text}</button>
  );
}

export default Button;
