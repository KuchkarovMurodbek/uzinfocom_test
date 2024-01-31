import { ReactNode } from "react"

type Props = {
  children:ReactNode,
  onClick:()=>void,
  bgColor:string
}

export default function Button({children,onClick,bgColor}: Props) {
  return (
    <button onClick={onClick} className={`${bgColor} py-2 px-3 text-white flex justify-center items-center`}>{children}</button>
  )
}