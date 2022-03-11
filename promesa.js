//funcion principal
function principal(){

    let promesa=new Promise(function(resolve,reject){

        setTimeout(function(){

            console.log("soy el proceso principal")

            let numero=1
            if(numero>=5){

                resolve("soy el proceso del callback (POSITIVO)")

            }else{

                reject("soy el proceso del callback (NEGATIVO)")

            }
            

            
            
    
        },2000)

    })

    return promesa

   
    
}


//llamando la funcion principal
principal()
.then(function(respuesta){
    console.log(respuesta)
})
.catch(function(respuesta){
    console.log(respuesta)
})