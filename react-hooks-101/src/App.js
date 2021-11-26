import React,{useState,useEffect,useReducer} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from './reducers'

import Event from './components/Event';


const App = (props)=>{

  const [state,dispatch] = useReducer(reducer,[])

  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')

  useEffect(()=>{
    console.log('useEffect is invoked.')
  },[])

  const addEvent=(e)=>{
    e.preventDefault();
    let action ={
      type:"CREATE_EVENT",
      title:title,
      body:body,
    }
    dispatch(action)

    setTitle('');
    setBody('');

  }


  

  const deleteAllEvent=(e)=>{
    e.preventDefault();
    let action={
      type:"DELETE_ALL_EVENT"
    }
    dispatch(action);
  }
  

  
  return (
    <div className="container-fluid">
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

        <button className="btn btn-primary" onClick={addEvent}>イベント作成</button>
        <button className="btn btn-danger" onClick={deleteAllEvent}>すべてのイベント削除</button>
        {/* <button className="btn btn-danger">すべての操作ログの削除</button> */}

      </form>

      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>

        </thead>

        <tbody>
          {state.map((data,index)=>
            (<Event data={data} index={index} dispatch={dispatch} />)
          )}
        </tbody>

      </table>
    </div>
  );
}


// App.defaultProps= {
//   name:'sample',
//   price:1000,
// }



export default App;
