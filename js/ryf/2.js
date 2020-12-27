/**
 * 
 * @author hy
 * @param {any} o 
 * @param {string} type 
 * @return boolean
 */



const isType = (o, type) =>{
 
    if( ['number','boolean','function','string'].indexOf(type) > 0){   
        return  typeof o === type;
    }
    else {
        console.log(Object.prototype.toString.call(o));
        console.log(Object.prototype.toString.call(o).toLowerCase());
        console.log(Object.prototype.toString.call(o).toLowerCase().indexOf(type));
        return Object.prototype.toString.call(o).toLowerCase().indexOf(type) > 0;
    }


}

let a = () =>{};
let b = [1,2,3];
let c = 'hello';
let d = null;
console.log(isType(a,'function'));
console.log(isType(b,'array'));
console.log(isType(c,'string'));
console.log(isType(d,'null'));