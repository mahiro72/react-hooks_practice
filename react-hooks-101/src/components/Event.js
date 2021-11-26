import React from 'react'

const Event = ({index,dispatch,data}) => {
    
    const deleteEvent=()=>{
        let action={
          type:"DELETE_EVENT",
          id:data.id
        }
        dispatch(action);
      }
    
    return (
        <tr key={index}>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
            <td><button className="btn btn-danger"onClick={deleteEvent}>削除</button></td>
        </tr>
    )
}

export default Event
