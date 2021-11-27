import React,{useReducer,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers'

import EventForm from './components/EventForm';
import Events from './components/Events';
import Logs from './components/Logs';

import AppContext from './contexts/AppContext';

const APP_KEY = 'appWitthRedux'

const App = (props)=>{
  const appState = localStorage.getItem(APP_KEY);

  const initialState = appState ? JSON.parse(appState):{
    events:[],
    logs:[],
  }

  const [state,dispatch] = useReducer(reducer,initialState)

  useEffect(()=>{
    // JSON.stringifyで文字列にする
    localStorage.setItem(APP_KEY,JSON.stringify(state))
  },[state]);

  return (
    <AppContext.Provider value={{
      state:state,
      dispatch:dispatch,
    }}>
      <div className="container-fluid">
        <EventForm/>
        <Events />
        <Logs />
      </div>
    </AppContext.Provider>

  );
}


// App.defaultProps= {
//   name:'sample',
//   price:1000,
// }



export default App;
