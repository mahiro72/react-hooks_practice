import React,{useContext} from 'react'

import AppContext from '../contexts/AppContext'
import Log from './Log';


const Logs = () => {
    const {state} = useContext(AppContext);

    return (
        <>
            <h4>ログ一覧</h4>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>日付</th>

                    </tr>

                </thead>

                <tbody>
                    {state.logs.map((data,index)=>
                        (<Log data={data} key={index} />)
                    )}
                </tbody>

            </table>
        </>
    )
}

export default Logs
