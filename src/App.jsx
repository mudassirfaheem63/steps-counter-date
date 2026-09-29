import { useState } from 'react'
import './App.css'

function App() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0)


  return (
    <>
      <Step step={step} setStep={setStep}/>
      <Counter count={count} setCount={setCount} step={step} />
      <Today count={count}/>
    </>
  )
}

export default App

function Step({step,setStep}) {
  return(
    <div style={{display:"flex", alignItems:"center", justifyContent:"center",gap:"20px"}}>
       <button onClick={() => setStep(step - 1)}>-</button>
       <h2>Step: {step}</h2>
       <button onClick={() => setStep(step +1)}>+</button>
    </div>
  )
}

function Counter({count,setCount,step}) {
  return(
    <div style={{display:"flex", alignItems:"center", justifyContent:"center",gap:"20px"}}>
       <button onClick={() => setCount(count - step)}>-</button>
       <h2>Count: {count}</h2>
       <button onClick={() => setCount(count + step)}>+</button>
    </div>
  )
}
function Today({ count  }) {
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
      <h1>
        {count > 0
          ? `${count} days from today is ${date.toDateString()}`
          : `Today is ${date.toDateString()}`}
      </h1>
    </div>
  );
}