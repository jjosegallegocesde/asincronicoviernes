//declarando la funcion principal
function filtrarPlanos(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,buscarPlanos){
let planos=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
let planosFiltrados= planos.filter(function(plano){
    return(plano<=10)
})
console.log(planosFiltrados)
buscarPlanos(planosFiltrados)
}

//llamando la funcion principla
filtrarPlanos(100,200,150,160,400,100,50,100,130,22,function(planos){
   if(planos.length>0){
       console.log("saliendo")
   }else{
       console.log("quedandose")
   }
})