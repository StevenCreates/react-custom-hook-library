import { useState } from "react";
import "./App.css";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import { useValidate } from "./hooks/useValidate";

function App() {
  const [newTitle, setNewTitle] = useState("");
  const updateTitle = (event) => {
    setNewTitle(event.target.value);
  };
  useDocumentTitle(newTitle);
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const [validLength, hasNumber, upperCase, lowerCase, match] = useValidate({
    firstPassword: firstPassword,
    secondPassword: secondPassword,
  });

  const setFirst = (event) => {
    setFirstPassword(event.target.value);
  };
  const setSecond = (event) => {
    setSecondPassword(event.target.value);
  };

  return (
    <div className='App'>
      <input onChange={updateTitle} type='text' />

      <div>
        Passwords
        <input onChange={setFirst} type='text' />
        <input onChange={setSecond} type='text' />
      </div>
      <div>
        <ul>
          <li>
            Valid Length: {validLength ? <span>True</span> : <span>False</span>}
          </li>
          <li>
            Has a Number: {hasNumber ? <span>True</span> : <span>False</span>}
          </li>
          <li>
            UpperCase: {upperCase ? <span>True</span> : <span>False</span>}
          </li>
          <li>
            LowerCase: {lowerCase ? <span>True</span> : <span>False</span>}
          </li>
          <li>Match: {match ? <span>True</span> : <span>False</span>}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
