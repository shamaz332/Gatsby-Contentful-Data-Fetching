import React from 'react'

export const Helo = ({pageContext:{data}}) => {
   console.log(data)
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}
