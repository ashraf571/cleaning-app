import React from 'react'
interface ListSectionIF {list: string[], isBold?: boolean, isDecore?: boolean}
const ListSection = ({list, isBold, isDecore}:ListSectionIF) => {
  return (
    <ul className={`${isBold ? " font-bold ":"font-normal"}`} >
        {list.map((item: string, index: number) => {
          let listData = item
          let checkIndex = listData.indexOf(":")
          let spanList = ""
          if(checkIndex > -1) {
            let [ partOne, partTwo ] = listData.split(':')
            listData = partTwo
            spanList= partOne
          }
            return (
                <li className= {` ml-6 ${isDecore ? "list-disc": ""}`} key={index} > {checkIndex > -1 && <span className='font-bold' >{spanList}:</span> } {listData}</li>
            )
        })}
    </ul>
  )
}

export default ListSection