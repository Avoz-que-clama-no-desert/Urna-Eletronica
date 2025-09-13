import { itens } from "./itens.js";
import { maq } from "./itens.js";
import { titulos } from "./itens.js";
import { eleitor } from "./eleitor.js";
import { dev } from "./itens.js";


const stringRecuperada = localStorage.getItem('votos');

// 2. Converta a string de volta para um array
const arrayRecuperado = JSON.parse(stringRecuperada);

const colocation = localStorage.getItem('posi')
const recebcolocation = JSON.parse(colocation)

var voto = []
if (arrayRecuperado ==null) {
  alert("não criado ainda")
} else {
  voto=arrayRecuperado
}

console.log(voto)
const dati = new Date()
    var d= dati.getDate()
    var me = dati.getMonth()
    var an = dati.getFullYear()
    var h = dati.getHours()
    var m = dati.getMinutes()

var hoje=""
var hora =""
var minu =""


setInterval(() => {
    const dat = new Date()
   var hi = dat.getHours()
    var mi = dat.getMinutes()
   
    hora=hi
    minu=mi
    
    
}, 1000);

var agora = hora+":"+minu
var recbhora=localStorage.getItem("hoje")
if (recbhora== undefined) {
  alert("criou hora")
  hoje=d+" / "+me+" / "+an+"    ;   hora "+h+":"+m
  localStorage.setItem("hoje",hoje)
} else {
  hoje=recbhora
}


var cri=itens.length

var domo = document.querySelector("body")

var marquee = document.createElement("marquee")
marquee.style.fontSize="25px"
marquee.setAttribute("class","marq")
marquee.style.backgroundColor="brown"
marquee.style.color="aliceblue"
marquee.innerHTML=maq
domo.appendChild(marquee)

var bus = document.createElement("div")
bus.setAttribute("class","eleitor")
domo.appendChild(bus)
var iput = document.createElement("input")
iput.setAttribute("class","iput")
iput.style.marginLeft="10%"
iput.style.width="350px"
iput.style.margin="10px"


bus.appendChild(iput)
var btn1 = document.createElement("button")
btn1.setAttribute("class","btn1")
btn1.innerHTML="Buscar"
bus.appendChild(btn1)

// buscar eleitor

var pessoa = eleitor
var dados={}

btn1.addEventListener("click", () =>{
   var pesq = document.querySelector(".iput").value
   var resut = pessoa.find(pessoa=>pessoa.nome === pesq)
   dados=pessoa.find(pessoa=>pessoa.nome === pesq)
   if (resut == undefined) {
    alert(pesq+";       nao encontrado")
    document.querySelector(".iput").value=""
   } else {
    pesq = document.querySelector(".iput").value
    var javote = voto.find(voto=>voto.nome === pesq)
    
    

    if (javote == undefined) {
      
      
      document.querySelector(".eleitor").style.display="none"
     document.querySelector(".caixa").style.display="block"
      
    } else {
      alert(javote.nome+";  já votou")
      document.querySelector(".iput").value=""
      
    }
    
    
   }
   
    
})
/**************************************************************************** */



var h1 = document.createElement("h1")
h1.style.color="darck"
h1.style.marginLeft="30%"
h1.innerHTML=titulos[0]
domo.appendChild(h1)
var h2 = document.createElement("h2")
h2.style.color="darck"
h2.style.marginLeft="30%"
h2.innerHTML=titulos[1]
domo.appendChild(h2)
var h3 = document.createElement("h3")
h3.style.color="darck"
h3.style.fontSize="16px"
h3.style.marginLeft="30%"
h3.innerHTML=titulos[2]
domo.appendChild(h3)
var h5 = document.createElement("h5")
h5.style.color="darck"
h5.style.fontSize="15px"
h5.style.marginLeft="30%"
h5.innerHTML=titulos[4]
domo.appendChild(h5)

var h4 = document.createElement("h4")
h4.style.color="darck"
h4.style.fontSize="15px"
h4.style.marginLeft="30%"
h4.innerHTML=titulos[3]+"    "+"001"
domo.appendChild(h4)
var h6 = document.createElement("h6")
h6.style.color="darck"
h6.style.fontSize="16px"
h6.style.marginLeft="30%"
h6.innerHTML="Data e Hora do inicio;  "+hoje
domo.appendChild(h6)

var pai = document.createElement("div")
pai.setAttribute("class","caixa")
domo.appendChild(pai)



var qvota={}
var chapas = itens
var guardachapa=0


addEventListener("keydown",(ev)=>{
    
    if (ev.key=="F8") {
        guardachapa++
        if (guardachapa>cri) {
            alert("Quantidade de chapa concluida")
        }else{
           var cad = prompt("coloque o nome do candidato") 
           localStorage.setItem("chapa"+guardachapa,cad)
           localStorage.setItem(cad,0) 
        }
       
    }
    if(ev.key=="PageUp"){
      var codigodev = prompt("digite a senha do desevolvedor")
      if (codigodev == dev) {
        terminar()
      }else{
        alert("Você Não tem altorização para este controle")
      }
    }

})

var numvot = []






var esco=""
chapas.map((el,chave)=>{
    
 const div =document.createElement("div")
 div.setAttribute("class", "chap")
 div.setAttribute("id","c"+chave)
 div.innerHTML=el

 div.addEventListener("click", ()=>{
     
    var chapa="chapa"+parseInt(chave+1) 
   var nome = localStorage.getItem(chapa )
   var ponto = localStorage.getItem(nome)
   ponto++
  
  esco= chave
  document.getElementById("c"+chave).style.backgroundColor="green"
   
   document.querySelector(".chap")
   
   localStorage.setItem(nome,ponto)
  qvota={
        nome:dados.nome,bloco:dados.bloco,ap:dados.ap,hora:hora+":"+minu
    }
   document.querySelector(".button").style.display="block" 
    pai.style.pointerEvents = 'none';
 })

 pai.appendChild(div)

})

var btn = document.createElement("button")
btn.textContent="Confirmar"
btn.setAttribute("class","button")
domo.appendChild(btn)

/**********confirmar voto*************************************************** */
btn.addEventListener("click",()=>{
    voto.push(qvota)
    
    const arrayComoString = JSON.stringify(voto);
    localStorage.setItem('votos', arrayComoString);
    document.querySelector(".iput").value=""
    document.querySelector(".eleitor").style.display="block"
    document.querySelector(".caixa").style.display="none"
    document.querySelector(".button").style.display="none" 
    document.getElementById("c"+esco).style.backgroundColor="gold"
    window.location.reload()


})
function terminar(){
  
  document.querySelector(".eleitor").style.display="none"
  document.querySelector(".caixa").style.display="none"
  document.querySelector(".marq").style.display="none"

  var p3 = document.createElement("p")
      p3.style.fontSize="25px"
      p3.textContent="Final de Eleição Hrs: "+hora+":"+minu
      document.body.appendChild(p3)
  var cli=1
  var colvt
  var cont = setInterval(() => {
    if (cli>cri) {
      clearInterval(cont)
      numvot.sort((a, b) => a - b);
      var tamanho = itens.length
      var cond = tamanho
      itens.map((el)=>{
        
       tamanho-- 
      var candid= "chapa"+tamanho
      if ("chapa"+tamanho == "chapa0") {
        candid="chapa"+cond
      }
      
     // alert(candid)
      var p1 = document.createElement("p")
      p1.style.fontSize="22px"
      p1.textContent=candid+"  Nome:  "+localStorage.getItem(candid)+"  votos: "+numvot[tamanho]
      document.body.appendChild(p1)
      
      
      })
      var p2 = document.createElement("p")
      p2.style.fontSize="25px"
      p2.textContent="Eleitores que votaram"
      document.body.appendChild(p2)
      
  
     voto.map((el,chave)=>{
    
     var criar=voto[chave]
    //alert(criar.bloco)
     var p = document.createElement("p")
     p.innerHTML="Nome;  "+ criar.nome+":  bloco   "+ criar.bloco+":  ap   "+ criar.ap+": Hora   "+ criar.hora

     document.body.appendChild(p)

    })
      
     
      
    } else {
    var nvot =itens[cli]
    var carry=localStorage.getItem("chapa"+cli)
     colvt =[localStorage.getItem(carry)]
      numvot.push(colvt)
     
     cli++
      
      
    }
    
  }, 1000);
  
   
var prit = setInterval(() => {
  var p4 = document.createElement("p")
      p4.style.fontSize="20px"
      p4.textContent="Sindico:"+"_______________________________________"
      document.body.appendChild(p4)
      var p5 = document.createElement("p")
      p5.style.fontSize="20px"
      p5.textContent="SubSindico:"+"____________________________________"
      document.body.appendChild(p5)
  window.print()
  clearInterval(prit)
 }, 4000); 

}





