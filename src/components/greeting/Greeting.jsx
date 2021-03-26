  
function Greeting({ text, content }) {
    return (
      <div>
        <h1 className="text-muted fs-1">{text}</h1>
        <p>{content}</p>
      </div>
    );
  }
  
  export default Greeting;