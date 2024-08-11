import { useState } from "react";

const SignIn = ({show, setShow}) => {
  
  return (
    <div className="fixed h-full w-full left-0 right-0 top-0 bottom-0 bg-gray-500/90 flex justify-center items-center">
      <div className="bg-purple-400 w-1/2 px-4 py-4 rounded-md">
        <form action="" className="flex flex-col gap-3">
        <label htmlFor="">Email</label><input type="text" name="" id="" className="border-2 border-gray-300"/>
        <label>Password</label><input type="text" name="" id="" className="border-2 border-gray-300" />
        </form>
        <button onClick=
        {() => {
          console.log(show)
          setShow(0)
        }}
        >Close</button>

      </div>

    </div>
    
  )
}

export default SignIn
