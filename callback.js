//funcion principal
function principal(callback){

    setTimeout(function(){

        console.log("soy el proceso principal")
        callback()

    },2000)
    
}


//llamando la funcion principal
principal(function(){
    console.log("soy el proceso del callback")
})