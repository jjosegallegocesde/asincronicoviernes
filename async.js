function principal(){

    let promesa=new Promise(function(resolve,reject){
        setTimeout(function(){
            console.log("soy el proceso principal")
            let numero=10
            if(numero>=5){
                resolve("termine (POSITIVO)")
            }else{
                reject("termine (NEGATIVO)")
            }
        },2000)
    })
    return promesa    
}

async function secundaria(){
    try{
        await principal()
        console.log("soy el proceso del callback")
    }catch(error){
        console.log("error")
    }
}

//llamo a la funcion secudnaria
//ya que esta SOLO SE EJECUTA (ESPERA) SI Y SOLO SI la principal termina
secundaria()