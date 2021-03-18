import React, { useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
// Hooks

function Child(props){
    console.log('child 执行了');
    return(
        <div onClick={props.onClick}>
            child:{props.data}
        </div>
    )
}
const Child2 = React.memo(Child);


function App() {
    const [n, setN] = useState(0);
    const [m, setM] = useState(0);
    const [k, setK] = useState(0);

    const add = () => {
        setN(i => i + 1)
    }
    const addChild = () => {
        setM(i => i + 1)
    }
    // const onClickChild = () => {}
    const onClickChild = useMemo(() =>{
        
            console.log(m);
        
    },[m])
    return (
        <div>
            <div>
                App
            n:{n}
            m:{m}
            k:{k}
                <button onClick={add}>n+1</button>
                <button onClick={addChild}>m+1</button>
            </div>
            <Child2 data={m} onClick={onClickChild}/>
        </div>

    )
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)
