import React,{useReducer} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducer from './reducers'

import EventForm from './components/EventForm';
import Events from './components/Events';

import AppContext from './contexts/AppContext';

const App = (props)=>{

  const [state,dispatch] = useReducer(reducer,[])

  return (
    <AppContext.Provider value={{
      state:state,
      dispatch:dispatch,
    }}>
      <div className="container-fluid">
        <EventForm/>
        <Events />
      </div>
    </AppContext.Provider>

  );
}


// App.defaultProps= {
//   name:'sample',
//   price:1000,
// }



export default App;
