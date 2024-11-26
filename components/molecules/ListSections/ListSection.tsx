import React from 'react'
interface ListSectionIF {list: string[], isBold?: boolean}
const ListSection = ({list, isBold}:ListSectionIF) => {
  return (
    <ul className={`${isBold ? " font-bold ":"font-normal"}`} >
        {list.map((item: string, index: number) => {
            return (
                <li key={index} >{item}</li>
            )
        })}
    </ul>
  )
}

export default ListSection