import Header from "./components/Header"
import InputBox from "./components/InputBox"
import Results from "./components/Results"
import { useState } from "react"

function App() {
  const[userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
  })

  const inputIsValid = userInput.duration >= 1;

  function changeHandler(inputIdentifier, newValue){
    setUserInput((prevUserInput)=>{
        return {
        ...prevUserInput,
        [inputIdentifier] : +newValue
        }
    })
  }


  return (
    <>
    <Header></Header>
    <InputBox onChange={changeHandler} userInput={userInput} ></InputBox>
    {inputIsValid && <Results userInput={userInput}></Results>}
    {!inputIsValid && <p className="center">Please enter valid duration which is grater than 0</p>}
    </>
  )
}

export default App
