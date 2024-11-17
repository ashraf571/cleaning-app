import React from 'react'

const serviceDetail = ({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) => {

    console.log("params", params);
    
  return (
    <div>serviceDetail</div>
  )
}

export default serviceDetail