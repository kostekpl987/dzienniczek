const cname = new Intl.DisplayNames(['PL'], { type: 'region' });





document.querySelector("#new").addEventListener("click", ()=>{
    if (localStorage.getItem("id") === null) {
        localStorage.setItem("id",1)
        let tmp ={
    temat:document.querySelector("#temat").value,
    dzial:document.querySelector("#dzial").value,
    data:document.querySelector("#data").value,
    opiekun:document.querySelector("#opiekun").value,
    sprawozdanie:document.querySelector("#sprawozdanie").value,
    godziny:document.querySelector("#godziny").value,
    step:document.querySelector("#stopien").value,
    zrealizowane:document.querySelector("#zrealizowane").value,
} 
    
    localStorage.setItem(1,JSON.stringify(tmp));
    
    }
    else{
        let tmpint=parseInt(localStorage.getItem("id"))+1;
        let tmp ={
    temat:document.querySelector("#temat").value,
    dzial:document.querySelector("#dzial").value,
    data:document.querySelector("#data").value,
    opiekun:document.querySelector("#opiekun").value,
    sprawozdanie:document.querySelector("#sprawozdanie").value,
    godziny:document.querySelector("#godziny").value,
    step:document.querySelector("#stopien").value,
} 
    
    localStorage.setItem(tmpint,JSON.stringify(tmp) );
    localStorage.setItem("id",tmpint);
    document.querySelector("#wpis2").innerHTML=""
    for(let i=1;i<parseInt(localStorage.getItem("id"));i++){
        
        newTopic(i);
    }
    }
    
    


    








})
function grade(){
    let ocena=document.querySelector("#stopien").value;
    document.querySelector("#rangeValue").innerHTML=document.querySelector("#stopien").value;
}
const dzial=document.querySelector("#dzial");
dzial.addEventListener("change",()=>{
    let front = document.querySelector("#front");
    let back = document.querySelector("#back");
    let base = document.querySelector("#base");
    let test = document.querySelector("#test");
    if(dzial.value=="Frontend"){
        front.style.display="block";
        back.style.display="none";
        base.style.display="none";
        test.style.display="none";
    }
    else if(dzial.value=="Backend"){
        front.style.display="none";
        back.style.display="block";
        base.style.display="none";
        test.style.display="none";
    }
    else if(dzial.value=="Bazy danych"){
        front.style.display="none";
        back.style.display="none";
        base.style.display="block";
        test.style.display="none";
    }
    else if(dzial.value=="Testy"){
        front.style.display="none";
        back.style.display="none";
        base.style.display="none";
        test.style.display="block";
    }
    else{
        front.style.display="none";
        back.style.display="none";
        base.style.display="none";
        test.style.display="none";
    }
    
})
for(let i=1;i<parseInt(localStorage.getItem("id"));i++){
        newTopic(i);
    }
function newTopic(id) {
    let wpis2=document.querySelector("#wpis2");
    let tmp= document.createElement("div");
    let span = document.createElement("span");
    let dzejson=JSON.parse(localStorage.getItem(id));
    span.innerHTML=`Dział: ${dzejson.dzial}`
    let p=document.createElement("p");
    p.innerHTML=`Temat: ${dzejson.temat}, Opiekun: ${dzejson.opiekun}, data: ${dzejson.data}, ilosc godzin:${dzejson.godziny}, ocena: ${dzejson.step}, sprawozdanie: ${dzejson.sprawozdanie}`
    tmp.appendChild(span);
    tmp.appendChild(p);
    wpis2.appendChild(tmp);

}
function resultParameters() {
    let front=0;
    let back=0;
    let baza=0;
    let testy=0;
    let tmp=0;
    for(let i=1;i<=parseInt(localStorage.getItem("id"));i++){
        let dzejson=JSON.parse(localStorage.getItem(i));
        let dzial=dzejson.dzial;
        
        
            tmp+=parseInt(dzejson.step);
            if(dzial == "Frontend" && dzejson.zrealizowane=="on"){
            front+=parseInt(dzejson.godziny);
            }
            if(dzial=="Backend"&& dzejson.zrealizowane=="on"){
                back+=parseInt(dzejson.godziny);
            }
            if(dzial=="Testy"&& dzejson.zrealizowane=="on"){
                baza+=parseInt(dzejson.godziny);
            }
            if(dzial=="Bazy danych"&& dzejson.zrealizowane=="on"){
                testy+=parseInt(dzejson.godziny);
            }
            
        
    }
    document.querySelector("#fHours").innerHTML=front
    document.querySelector("#bHours").innerHTML=back
    document.querySelector("#dHours").innerHTML=baza
    document.querySelector("#tHours").innerHTML=testy
    let r=front+baza+testy+back;
    srednia=tmp/parseInt(localStorage.getItem("id"))
  
    document.querySelector("#razem").innerHTML=r;
    document.querySelector("#still").innerHTML=`Pozostało: ${140-r} godz.`;
    document.querySelector("#ocenka").innerHTML="Proponowana ocena: "+srednia;
}
resultParameters();
document.querySelector("#new").addEventListener("click",resultParameters())
document.querySelector("#userData").style.display="none";
    document.querySelector("#userEdit").style.display="none";
document.querySelector("#metryczka").addEventListener("click",()=>{
    document.querySelector("#wpis").style.display="none"
    document.querySelector("#cos").style.display="none"
    document.querySelector("#userData").style.display="flex";
    document.querySelector("#userEdit").style.display="none";
    document.querySelector("#podsumowanie").style.display="none";
})
document.querySelector("#dziennik").addEventListener("click",()=>{
    document.querySelector("#wpis").style.display="flex"
    document.querySelector("#cos").style.display="flex"
    document.querySelector("#userData").style.display="none";
    document.querySelector("#userEdit").style.display="none";
    document.querySelector("#podsumowanie").style.display="none";
})
document.querySelector("#edit-User").addEventListener("click",()=>{
    document.querySelector("#userData").style.display="none";
    document.querySelector("#userEdit").style.display="flex";
    document.querySelector("#podsumowanie").style.display="none";
})
document.querySelector("#edit").addEventListener("click",()=>{
    document.querySelector("#userData").style.display="flex";
    document.querySelector("#userEdit").style.display="none";
    document.querySelector("#podsumowanie").style.display="none";
})
document.querySelector("#pod").addEventListener("click",()=>{
    document.querySelector("#wpis").style.display="none"
    document.querySelector("#cos").style.display="none"
    document.querySelector("#userData").style.display="none";
    document.querySelector("#userEdit").style.display="none";
    document.querySelector("#podsumowanie").style.display="flex";
})
function edytuj(){
    
    
if(localStorage.getItem("imie")!=null)
    document.querySelector("#imieText").innerHTML=localStorage.getItem("imie")
if(localStorage.getItem("nazwisko")!=null)
    document.querySelector("#nazwiskoText").innerHTML=localStorage.getItem("nazwisko")
if(localStorage.getItem("klasa")!=null)
    document.querySelector("#klasaText").innerHTML="Klasa: "+localStorage.getItem("klasa")
if(localStorage.getItem("rok")!=null)
    document.querySelector("#rokText").innerHTML="rok: "+localStorage.getItem("rok")
if(localStorage.getItem("firma")!=null)
    document.querySelector("#gdzieText").innerHTML="Odbytej w: "+localStorage.getItem("firma")
if(localStorage.getItem("rozp")!=null)
    document.querySelector("#rozpText").innerHTML="Rozpoczęte: "+localStorage.getItem("rozp")
if(localStorage.getItem("zako")!=null)
    document.querySelector("#zakoText").innerHTML="Zakończone: "+localStorage.getItem("zako")
fetch("https://api.nationalize.io?name="+localStorage.getItem("imie"))

.then(res => {
    return res.json();
})

.then(res => {
    if(res.country.length!=0){
        document.querySelector("#kraj").innerHTML=`Kraj pochodzenia: ${cname.of(res.country[0].country_id)}`
    }
    else{
        document.querySelector("#kraj").innerHTML=`Kraj pochodzenia: Brak danych`
    }

})
}

document.querySelector("#new").addEventListener("click", (event)=>{
      event.preventDefault();
});

document.querySelector("#edit").addEventListener("click",()=>{//przycisk edycji
    localStorage.setItem("imie",document.querySelector("#imie").value)
    localStorage.setItem("nazwisko",document.querySelector("#nazwisko").value)
    localStorage.setItem("klasa",document.querySelector("#klasa").value)
    localStorage.setItem("firma",document.querySelector("#firma").value)
    localStorage.setItem("rok",document.querySelector("#rok").value)
    localStorage.setItem("rozp",document.querySelector("#rozp").value)
    localStorage.setItem("zako",document.querySelector("#zako").value)
    document.querySelector("#imieText").innerHTML=localStorage.getItem("imie")
    document.querySelector("#nazwiskoText").innerHTML=localStorage.getItem("nazwisko")
    document.querySelector("#klasaText").innerHTML="Klasa: "+localStorage.getItem("klasa")
    document.querySelector("#rokText").innerHTML="rok: "+localStorage.getItem("rok")
    document.querySelector("#gdzieText").innerHTML="Odbytej w: "+localStorage.getItem("firma")
    document.querySelector("#rozpText").innerHTML="Rozpoczęte: "+localStorage.getItem("rozp")
    document.querySelector("#zakoText").innerHTML="Zakończone: "+localStorage.getItem("zako")
    
})
 
    
fetch("https://api.nationalize.io?name="+localStorage.getItem("imie"))

.then(res => {
    return res.json();
})

.then(res => {
    if(res.country.length!=0){
        document.querySelector("#kraj").innerHTML=`Kraj pochodzenia: ${cname.of(res.country[0].country_id)}`
    }
    else{
        document.querySelector("#kraj").innerHTML=`Kraj pochodzenia: Brak danych`
    }

})


let el;
let mapa= [1,2,3,4,5];
document.querySelector("#mprzed").innerHTML="Przed: "+mapa;
document.querySelector("#fprzed").innerHTML="Przed: "+mapa;
document.querySelector("#rprzed").innerHTML="Przed: "+mapa;
document.querySelector("#mpo").innerHTML="Po: "+mapa.map(el => el * 2);
document.querySelector("#fpo").innerHTML="Po: "+mapa.filter(el>3);
document.querySelector("#rpo").innerHTML="Po: "+mapa.reduce((prev, next) => `${prev}${next}`);
