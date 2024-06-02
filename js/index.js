const minutosL=document.getElementById('minutos');
const segundosL=document.getElementById('segundos');
const milisegundosL=document.getElementById('milisegundos');


const btninciar=document.getElementById('btn-iniciar');
const btnparar=document.getElementById('btn-parar');
const btnvolta=document.getElementById('btn-registrar');
const areaHistorico=document.getElementById('historico');

let tempo={
milisegundos:0,
 segundos:0,
 minutos:0
}

let mensagem="Tempo registrado :"

function iniciar(){
    
    btninciar.disabled="true";
    btninciar.style.background="#045b0485";

   timer= setInterval(() =>{
        tempo.milisegundos++;
        milisegundosL.textContent=tempo.milisegundos;
        if(tempo.milisegundos == 60){
            tempo.milisegundos=0;
            tempo.segundos++;
            segundosL.textContent=tempo.segundos;
            if(tempo.segundos==60){
                tempo.segundos=0;
                tempo.minutos++;
                minutosL.textContent=tempo.minutos;

                

                if(tempo.minutos==60){
                    clearInterval(timer);
                }
                
            }
        }
    },1);
   
    
       
}
function registrar(){

    const registro=  new Date(0, 0, 0, tempo.minutos, tempo.segundos, tempo.milisegundos).toLocaleTimeString();
    
    let article= document.createElement("article");
    article.className="historico-reg";

    let p= document.createElement("p");
    p.textContent="registro: ";

    let h1=document.createElement("h1");
    h1.textContent=registro;

    article.appendChild(p);
    article.appendChild(h1);

    areaHistorico.appendChild(article);


}
function parar(){
    btninciar.removeAttribute("disabled");
    btninciar.style.background="green";
    registrar();
    //
    tempo.milisegundos=0;
    tempo.segundos=0;
    tempo.minutos=0;
    //
    
    clearInterval(timer);
}
