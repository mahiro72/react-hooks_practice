import React,{useState} from 'react';


const App = ()=>{
  const [count,setCount] = useState(1);

  const calc = ()=>{
    setCount((pre)=>{
      return pre*2
    })
  }

  const mod_three = ()=>{
    setCount((pre)=>{
      return (pre%3===0 ? pre/3 : pre)
    })
  }
  
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={()=>setCount(count+1)}>+1</button>
      <button onClick={()=>setCount(count-1)}>-1</button>
      <button onClick={calc}>*2</button>
      <button onClick={()=>setCount(0)}>reset</button>
      <button onClick={mod_three}>3の倍数の時だけ3で割る</button>
    </div>
  );
}

export default App;
