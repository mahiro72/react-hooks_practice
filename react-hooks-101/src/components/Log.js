import React from 'react'

const Log = ({data}) => {
    return (
        <tr>
            <td>{data.description}</td>
            <td>{data.date}</td>
        </tr>
    )
}

export default Log
