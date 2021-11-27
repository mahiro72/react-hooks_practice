import React,{useState,useContext} from 'react';
import { CREATE_EVENT,DELETE_ALL_EVENT } from '../actions';

import AppContext from '../contexts/AppContext';

const EventForm = () => {

    const {state,dispatch} = useContext(AppContext);
    
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')

  
    const addEvent=(e)=>{
      e.preventDefault();
      let action ={
        type:CREATE_EVENT,
        title:title,
        body:body,
      }
      dispatch(action)
  
      setTitle('');
      setBody('');
  
    }
  
    const deleteAllEvent=(e)=>{
      e.preventDefault();
      const result = window.confirm('すべてのイベントを本当に削除してもよろしいでしょうか')
      if (result){
        let action={
          type:DELETE_ALL_EVENT
        }
        dispatch(action);
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

                <button className="btn btn-danger" onClick={deleteAllEvent} disabled={state.length===0}>
                すべてのイベント削除
                </button>

                {/* <button className="btn btn-danger">すべての操作ログの削除</button> */}

            </form>
        </>
    )
}

export default EventForm
