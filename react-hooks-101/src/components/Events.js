import React,{useContext} from 'react';

import Event from './Event';
import AppContext from '../contexts/AppContext';


const Events = () => {
    const {state} = useContext(AppContext);

    return (
        <>
            
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
                    {state.events.map((data,index)=>
                        (<Event data={data} key={index} />)
                    )}
                    </tbody>

                </table>
            
        </>
    )
}

export default Events
