import React from 'react'

const Event = ({index,dispatch,data}) => {
    
    const deleteEvent=()=>{
      const result = window.confirm(`id ${data.id}のイベントを本当に削除してもよろしいでしょうか`)
      if (result){
        let action={
          type:"DELETE_EVENT",
          id:data.id
        }
        dispatch(action);
      }
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
