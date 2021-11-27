import React,{useState,useContext} from 'react';
import { 
  CREATE_EVENT,
  DELETE_ALL_EVENT,
  ADD_LOG,
  DELETE_ALL_LOG, 
} from '../actions';

import AppContext from '../contexts/AppContext';

import { timeCurrentIso8601 } from '../utils';

const EventForm = () => {

    const {state,dispatch} = useContext(AppContext);
    
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

  
    const addEvent=(e)=>{
      e.preventDefault();

      dispatch({
        type:CREATE_EVENT,
        title:title,
        body:body,
      })

      dispatch({
        type:ADD_LOG,
        description:'イベント作成しました',
        date:timeCurrentIso8601(),
      })
  
      setTitle('');
      setBody('');
  
    }
  
    const deleteAllEvent=(e)=>{
      e.preventDefault();
      const result = window.confirm('すべてのイベントを本当に削除してもよろしいでしょうか')
      if (result){
        
        dispatch({
          type:DELETE_ALL_EVENT
        });

        dispatch({
          type:ADD_LOG,
          description:'すべてのイベントを削除しました',
          date:timeCurrentIso8601(),
        })
      }
  
    }


    const deleteAllLogs =(e)=>{
      e.preventDefault();
      const result = window.confirm('すべてのログを本当に削除してもよろしいでしょうか')
      if (result){
        dispatch({
          type:DELETE_ALL_LOG,
        })
      }
    }



    return (
        <>
            <h4>イベント作成フォーム</h4>
            <form>
                <div className="form-group">
                <label htmlFor="formEventTitle">タイトル</label>
                <input className="form-control" id="formEventTitle" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>

                <div className="form-group">
                <label htmlFor="formEventBody">ボディー</label>
                <textarea className="form-control" id="formEventBody" value={body} onChange={(e)=>setBody(e.target.value)}/>
                </div>

                <button className="btn btn-primary" onClick={addEvent} disabled={!title||!body}>
                  イベント作成
                </button>

                <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.events.length===0}>
                  すべてのイベント削除
                </button>

                <button className="btn btn-danger" onClick={deleteAllLogs} disabled={state.logs.length===0}>
                  すべての操作ログの削除
                </button>

            </form>
        </>
    )
}

export default EventForm
