import React, { ComponentProps } from 'react'

// interface FormProps extends ComponentProps<"form">{
//   isValid?: boolean;
// }
// export default function Form({isValid,children, ...props}:FormProps) {
//   return (
//     <form {...props}>
//         {children}
//         {isValid === true && <p style={{ color: "green" }}>CNPJ válido!</p>}
//         {isValid === false && <p style={{ color: "red" }}>CNPJ inválido!</p>}
//     </form>
//   )
// }

export default function Form({children, ...props}:ComponentProps<"form">) {
  return (
    <form {...props}>
        {children}
    </form>
  )
}