import React from 'react'


interface InputProps extends React.ComponentProps<"input"> {
    text:string
}
export default function Input({text, ...props}:InputProps) {
  return (
    <>
        <label>{text}</label>
        <div className='border'>
            <input className='bg-transparent outline-none w-full p-4' {...props}/>
        </div>
    </>
  )
}
