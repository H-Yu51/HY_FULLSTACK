import React from 'react';

 
// 高阶组件 就是一个函数   返回一个组件的函数
export const withSubscription  = (WrappedComponent,selectData) => {



    return class extends React.Component{
        constructor(props){
            super(props);
            // 抽象 的数组状态的初始化
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                data:selectData
            }
        }
        componentDidMount(){
            
        }
        handleChange() {
            this.setState({
                data:[
                    ...this.state.data,
                    {
                        id:3,
                        text:'ddata3333333'

                    }
                ],
            })
        }
        render(){
            return (
                <WrappedComponent data={this.state.data}/>
            )



        }
    }
}
