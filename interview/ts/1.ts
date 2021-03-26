type FunctionProps ={
    // onSomething 函数  参数和返回值
    a:number
    onSomething: () => void;
    // input num 
    onChange: (id:number) => void;
    // @types/react 
    onClick(event:React.MouseEvent<HTMLButtonElement>)
}
 // T 类型占位    
type Dog<T> = {
    name:string,
    type:T
}
const dog:Dog<number> = {name: 'wewe',type:21}
React.MouseEvent<HTMLButtonElement>

interface Props {

}

const Item: React.FC<Props> = (props) => {
    return(
        <div>
        </div>

    )
}
