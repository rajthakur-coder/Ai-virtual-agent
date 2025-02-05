import React, { useContext } from 'react'
import "./App.css"
import va from "./assets/aii.png"
import { CiMicrophoneOn } from "react-icons/ci";
import { datacontext } from './context/UserContext';
import speaimg from "./assets/Speak.gif";
import aigif from "./assets/aiVoice.gif";


function App() {
  let { recoginition, speaking, setSpeaking, prompt, response, setPrompt, setResponse } = useContext(datacontext)


  return (
    <div className='main'>
      <img src={va} alt='' id="micky" />
      <span>I'm Micky, Your Advanced Virtual Assistant</span>
      {!speaking ?
        <button onClick={() => {
          setPrompt("listening...")
          setSpeaking(true)
          setResponse(false)
          recoginition.start()
        }}>Click here <CiMicrophoneOn /></button>
        :
        <div className="response">
          {!response ? <img src={speaimg} alt="" id="speak" />
            :
            <img src={aigif} alt="" id="aigif" />}
          <p>{prompt}</p>
        </div>
      }

    </div>
  )
}

export default App