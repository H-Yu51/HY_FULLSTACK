import * as React from 'react';
import {Header} from './components'
export const App: React.FC<{}> = (props) => {
    return (
        <div className="container-fluid">
            <Header></Header>
            {props.children}
        </div>
    )
}