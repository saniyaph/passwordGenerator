import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
   const [numberAllowed, setNumberAllowed] = useState(false)
   const [charAllowed, setCharAllowed] = useState(false)
   const[password, setPassword] = useState("")

   const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if(numberAllowed) str+="0123456789"
     if(charAllowed) str+="!@#$%^&*"

     for (let i = 0; i <length; i++) {
       let char = Math.floor(Math.random()*str.length +1)
       pass += str.charAt(char)
     }
     setPassword(pass)
     
   },[length,numberAllowed,charAllowed,setPassword])

   const ref = useRef()

   useEffect(()=> {passwordGenerator()
   },[length,numberAllowed,charAllowed,setPassword])
  return (
    <>
    <div className='w-96 h-52 bg-pink-500 rounded-lg justify-center inset-0 px-1'>
      <h1 className='text-center text-grey '>Password Generator </h1>
<input className='w-36'  type="text" name="" id="" readOnly value={password} />
<button className='bg-red-400 rounded-lg p-2 duration-200'  > Copy</button>
<br />
<input type="range"  min={8}  max={99} name="" id="" onChange={e =>{setLength(e.target.value)}}/>
<label htmlFor="">Length {length}</label>
<input type="checkbox" name="" id="" defaultChecked={numberAllowed} onChange={() => {setNumberAllowed((prev) => !prev)}}/>
<label >Number</label>
<input type="checkbox" name="" id="" defaultChecked={charAllowed} onChange={() => {setCharAllowed((prev) => !prev)}}/>
<label >Character</label>
    </div>
    </>
  )
}
export default App
