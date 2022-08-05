const capturado = document.getElementById('dolar');
const numPessoas =document.getElementById('person');
const custom = document.getElementById('custom');
const cinco = document.getElementById('cinco');
const dez = document.getElementById('dez');
const quinze = document.getElementById('quinze');
const vinteCinco = document.getElementById('vinteCinco');
const cinquenta = document.getElementById('cinquenta');
const resultadoPes = document.getElementById('resultado1');
const resultadoFin= document.getElementById('resultado2');
const erro = document.getElementById('error');
const person = document.getElementById ('person')

//cálculo de 5%
cinco.addEventListener("click",function(){
    //Se for deixado espaços sem colocar valor apresentar: Erro!
    if(Number(capturado.value)  == "" || Number(numPessoas.value) == ""){
        erro.innerHTML = "can't be zero";
        numPessoas.style.borderColor = "red";
    }else{
    //Efetua o cálculo de conversão de porcentagem e divide para o nº de pessoas   
    var porCinco = 5 / 100 * Number(capturado.value) / Number(numPessoas.value) ;
    resultadoPes.innerHTML= porCinco.toFixed(2);

    //Efetua o cálculo Total final
    var calculo = Number(capturado.value) / Number(numPessoas.value) + porCinco;
    resultadoFin.innerHTML= calculo.toFixed(2);
    }
   
})
//cálculo de 10%
dez.addEventListener("click",function(){
   
    if(Number(capturado.value)  == "" || Number(numPessoas.value) == ""){
        erro.innerHTML = "can't be zero";
        numPessoas.style.borderColor = "red";
    }else{  
    var porCinco = 10 / 100 * Number(capturado.value) / Number(numPessoas.value) ;
    resultadoPes.innerHTML= porCinco.toFixed(2);

    var calculo = Number(capturado.value) / Number(numPessoas.value) + porCinco;
    resultadoFin.innerHTML= calculo.toFixed(2);
    }
})
//cálculo de 15%
quinze.addEventListener("click",function(){
    if(Number(capturado.value)  == "" || Number(numPessoas.value) == ""){
        erro.innerHTML = "can't be zero";
        numPessoas.style.borderColor = "red";
    }else{
    var porCinco = 15 / 100 * Number(capturado.value) / Number(numPessoas.value) ;
    resultadoPes.innerHTML= porCinco.toFixed(2);

    var calculo = Number(capturado.value) / Number(numPessoas.value) + porCinco;
    resultadoFin.innerHTML= calculo.toFixed(2);
    }
})
//cálculo de 25%
vinteCinco.addEventListener("click",function(){
    if(Number(capturado.value)  == "" || Number(numPessoas.value) == ""){
        erro.innerHTML = "can't be zero";
        numPessoas.style.borderColor = "red";
       
    }else{
    var porCinco = 25 / 100 * Number(capturado.value) / Number(numPessoas.value) ;
    resultadoPes.innerHTML= porCinco.toFixed(2);

    var calculo = Number(capturado.value) / Number(numPessoas.value) + porCinco;
    resultadoFin.innerHTML= calculo.toFixed(2);
    }
})
//cálculo de 50%
cinquenta.addEventListener("click",function(){
    if(Number(capturado.value)  == "" || Number(numPessoas.value) == ""){
        erro.innerHTML = "can't be zero";
        numPessoas.style.borderColor = "red";
    }else{
    var porCinco = 50 / 100 * Number(capturado.value) / Number(numPessoas.value) ;
    resultadoPes.innerHTML= porCinco.toFixed(2);

    var calculo = Number(capturado.value) / Number(numPessoas.value) + porCinco;
    resultadoFin.innerHTML= calculo.toFixed(2);
    }
})

/*Botão Custom: foi add um evento que ao clicar enter 
retorna o valor da porcentagem digitada do usuario*/ 
document.addEventListener("keydown", function(event){   
   
if(event.key ==="Enter"){
    if(Number(capturado.value)  == "" || Number(numPessoas.value) == "" || Number(custom.value) =="" ){
        erro.innerHTML = "can't be zero";
        numPessoas.style.borderColor = "red";
    }else{
    var porCinco = Number(custom.value) / 100 * Number(capturado.value) / Number(numPessoas.value) ;
    resultadoPes.innerHTML= porCinco.toFixed(2);

    var calculo = Number(capturado.value) / Number(numPessoas.value) + porCinco;
    resultadoFin.innerHTML= calculo.toFixed(2);
}}})

