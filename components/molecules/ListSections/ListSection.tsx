import React from 'react'
interface ListSectionIF {list: string[], isBold?: boolean, isDecore?: boolean}
const ListSection = ({list, isBold}:ListSectionIF) => {
  return (
    <ul className={`${isBold ? " font-bold ":"font-normal"}`} >
        {list.map((item: string, index: number) => {
          let listData = item
          const checkIndex = listData.indexOf(":")
          let spanList = ""
          if(checkIndex > -1) {
            const [ partOne, partTwo ] = listData.split(':')
            listData = partTwo
            spanList= partOne
          }
            return (
                <li className= {` ml-4 `} key={index} > {checkIndex > -1 && <span className='font-bold' >{spanList}:</span> } {listData}</li>
            )
        })}
    </ul>
  )
}

export default ListSection