import { useState } from "react";
import "./App.css";
import { useDocumentTitle } from "./hooks/useDocumentTitle";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const updateTitle = (event) => {
    setNewTitle(event.target.value);
  };
  useDocumentTitle(newTitle);
  return (
    <div className='App'>
      <input onChange={updateTitle} type='text' />
    </div>
  );
}

export default App;
