import React,{useContext} from 'react'
import { 
  DELETE_EVENT,
  ADD_LOG,
  DELETE_ALL_LOG,
} from '../actions'

import AppContext from '../contexts/AppContext'
import { timeCurrentIso8601 } from '../utils'

const Event = ({data}) => {
    const {dispatch} = useContext(AppContext);
    
    const deleteEvent=()=>{
      const result = window.confirm(`id ${data.id}のイベントを本当に削除してもよろしいでしょうか`)
      if (result){

        dispatch({
          type:DELETE_EVENT,
          id:data.id
        });
        dispatch({
          type:ADD_LOG,
          description:`id ${data.id}のイベントを削除しました`,
          date:timeCurrentIso8601(),
        })
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
