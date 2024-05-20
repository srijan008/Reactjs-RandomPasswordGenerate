import { useState } from "react";
import "./App.css";
import { LC, NC, SC, UC } from "./data/PassChar";
function App() {
  let[upper, Setupper] = useState(false)
  let[lower, Setlower] = useState(false)
  let[number, Setnumber] = useState(false)
  let[symbol, Setsymbol] = useState(false)
  let[length, Setlength] = useState(10)
  let[fpass, Setfpass] = useState('')

  const generatPass = () => {
    let charSet = ''
    let finalSet = ''
    if(upper || lower || number || symbol ){
      if(upper) charSet += UC
      if(number) charSet += NC
      if(symbol) charSet += SC
      if(lower) charSet += LC
      for (let index = 0; index < length; index++) {
        finalSet += charSet.charAt(Math.floor(Math.random()*charSet.length))        
      }
      Setfpass(finalSet);
    }
    else{
      alert("Check Atleast One Checkbox !!")
    }
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(fpass).then(() => {
      
    })}
 
  return (
    <div className="body">
        <div className="passwordBox">
          <h2>Password Generator</h2>
          
          <div className="passwordBoxin">
            <input type="text" value={fpass} readOnly /> <button onClick={copyToClipboard}>Copy</button>
          </div>

          <div className="passlengh">
            <label htmlFor="">Password Length</label>
            <input type="number" max={20} min={10} value={length} onChange={(e) => Setlength(e.target.value)}/>
          </div>
          <div className="passlengh">
            <label htmlFor="">Include Uppercase Letter</label>
            <input type="checkbox" checked={upper} onChange={ () => Setupper(!upper) }/>
          </div>
          <div className="passlengh">
            <label htmlFor="">Include Lowercase Letter</label>
            <input type="checkbox" checked={lower} onChange={ () => Setlower(!lower) }/>
          </div>
          <div className="passlengh">
            <label htmlFor="">Include Number</label>
            <input type="checkbox" checked={number} onChange={ () => Setnumber(!number) }/>
          </div>
          <div className="passlengh">
            <label htmlFor="">Include Symbols</label>
            <input type="checkbox" checked={symbol} onChange={() => Setsymbol(!symbol)}/>
          </div>
          <button className="btn" onClick={generatPass}>Generate Password</button>
        </div>
    </div>
  );
}

export default App;
