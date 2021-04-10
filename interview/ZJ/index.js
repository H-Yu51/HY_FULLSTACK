var name = 'world!';

function abd(){
    if(typeof name === 'undefined'){
        var name = 'jack';
        console.log('goodbay'+ name);
    }else{
        console.log('hello' + name);
    }
}
abd() //goodbayjack