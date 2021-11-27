import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers'

import EventForm from './components/EventForm';
import Events from './components/Events';
import Logs from './components/Logs';

import AppContext from './contexts/AppContext';

const App = (props)=>{

  const initialState = {
    events:[],
    logs:[],
  }

  const [state,dispatch] = useReducer(reducer,initialState)

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
