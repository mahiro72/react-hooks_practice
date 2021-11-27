import React,{useContext} from 'react'
import { DELETE_EVENT } from '../actions'
import AppContext from '../contexts/AppContext'

const Event = ({data}) => {
    const {dispatch} = useContext(AppContext);
    
    const deleteEvent=()=>{
      const result = window.confirm(`id ${data.id}のイベントを本当に削除してもよろしいでしょうか`)
      if (result){
        let action={
          type:DELETE_EVENT,
          id:data.id
        }
        dispatch(action);
      }
    }
      
    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.title}</td>
            <td>{data.body}</td>
            <td><button className="btn btn-danger"onClick={deleteEvent}>削除</button></td>
        </tr>
    )
}

export default Event
