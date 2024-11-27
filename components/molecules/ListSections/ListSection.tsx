import React from 'react'
interface ListSectionIF {list: string[], isBold?: boolean, isDecore?: boolean, splitList?:boolean}
const ListSection = ({list, isBold, isDecore, splitList}:ListSectionIF) => {
  return (
    <ul className={`${isBold ? " font-bold ":"font-normal"}`} >
        {list.map((item: string, index: number) => {
          let listData = item
          let spanList = ""
          if(splitList) {
            let [ partOne, partTwo ] = listData.split(':')
            listData = partTwo
            spanList= partOne
          }
            return (
                <li className= {` ml-6 ${isDecore ? "list-disc": ""}`} key={index} > {splitList && <span className='font-bold' >{spanList}:</span> } {listData}</li>
            )
        })}
    </ul>
  )
}

export default ListSection