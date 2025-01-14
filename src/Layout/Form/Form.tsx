import React, { ComponentProps } from 'react'

interface FormProps extends ComponentProps<"form">{
  isValid?: any;
}
export default function Form({isValid,children, ...props}:FormProps) {
  return (
    <form {...props}>
        {children}
        {isValid === true && <p style={{ color: "green" }}>CNPJ válido!</p>}
        {isValid === false && <p style={{ color: "red" }}>CNPJ inválido!</p>}
    </form>
  )
}
