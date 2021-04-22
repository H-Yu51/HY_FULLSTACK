// ctx 怎么来的


let proto ={
    
}

function defineGetter(prop,name) {
    proto.__defineGetter__(name,function() {
        return this[props][name]
    })
}

defineGetter('request','url')
defineGetter('request','path')



module.exports = proto


