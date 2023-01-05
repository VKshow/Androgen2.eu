


const elems = document.querySelectorAll('.forjs'); //all text parts
const article = document.querySelector('.article');

elems.forEach(item=>{
    item.classList.toggle('hidden');
});
const first = elems[0].classList.remove('hidden');






//than choose every single text part

const mainText = document.querySelector('#main_text').innerHTML;
const missionText = document.querySelector('#mission_text').innerHTML;
const briefText = document.querySelector('#brief_text').innerHTML;
const prostText = document.querySelector('#prost_text').innerHTML;
const tradText = document.querySelector('#trad_text').innerHTML;
const newconceptText = document.querySelector('#newconcept_text').innerHTML;
const approachText = document.querySelector('#approach_text').innerHTML;
const virolText = document.querySelector('#virol_text').innerHTML;
const propText = document.querySelector('#prop_text').innerHTML;
const inferText = document.querySelector('#infer_text').innerHTML;
const termsText = document.querySelector('#terms_text').innerHTML;
const urogText = document.querySelector('#urog_text').innerHTML;
const herpesText = document.querySelector('#herpes_text').innerHTML;
const labText = document.querySelector('#lab_text').innerHTML;
const prodText = document.querySelector('#prod_text').innerHTML;
const freqText = document.querySelector('#freq_text').innerHTML;
const galleryText = document.querySelector('#gallery_text').innerHTML;
const contactText = document.querySelector('#contacts_text').innerHTML;


//choose every menu item with click listener

const main = document.querySelector('#main').addEventListener ('click', mainFunc);
const mission = document.querySelector('#mission').addEventListener ('click', missionFunc);
const brief = document.querySelector('#brief').addEventListener ('click', briefFunc);
const prost = document.querySelector('#prost').addEventListener ('click', prostFunc);
const trad = document.querySelector('#trad').addEventListener ('click', tradFunc);
const newconcept = document.querySelector('#newconcept').addEventListener ('click', newconceptFunc);
const approach = document.querySelector('#approach').addEventListener ('click', approachFunc);
const virol = document.querySelector('#virol').addEventListener ('click', virolFunc);
const prop = document.querySelector('#prop').addEventListener ('click', propFunc);
const infer = document.querySelector('#infer').addEventListener ('click', inferFunc);
const terms = document.querySelector('#terms').addEventListener ('click', termsFunc);
const urog = document.querySelector('#urog').addEventListener ('click', urogFunc);
const herpes = document.querySelector('#herpes').addEventListener ('click', herpesFunc);
const lab = document.querySelector('#lab').addEventListener ('click', labFunc);
const prod = document.querySelector('#prod').addEventListener ('click', prodFunc);
const freq = document.querySelector('#freq').addEventListener ('click', freqFunc);
const gallery = document.querySelector('#gallery').addEventListener ('click', galleryFunc);
const contact = document.querySelector('#contacts').addEventListener ('click', contactFunc);


//onclick functions



function mainFunc(e) {
    article.innerHTML = `${mainText}`;
    
};

function missionFunc() {
    article.innerHTML = `${missionText}`;
    
};

function briefFunc() {
    article.innerHTML = `${briefText}`;
    
};
function prostFunc() {
    article.innerHTML = `${prostText}`;
    
};
function tradFunc() {
    article.innerHTML = `${tradText}`;
    
};
function newconceptFunc() {
    article.innerHTML = `${newconceptText}`;
    
};
function approachFunc() {
    article.innerHTML = `${approachText}`;
    
};
function virolFunc() {
    article.innerHTML = `${virolText}`;
    
};
function propFunc() {
    article.innerHTML = `${propText}`;
    
};
function inferFunc() {
    article.innerHTML = `${inferText}`;
    
};
function termsFunc() {
    article.innerHTML = `${termsText}`;
    
};
function urogFunc() {
    article.innerHTML = `${urogText}`;
    
};
function herpesFunc() {
    article.innerHTML = `${herpesText}`;
    
};
function labFunc() {
    article.innerHTML = `${labText}`;
    
};
function prodFunc() {
    article.innerHTML = `${prodText}`;
    
};
function freqFunc() {
    article.innerHTML = `${freqText}`;
    
};
function galleryFunc() {
    article.innerHTML = `${galleryText}`;
    
};
function contactFunc() {
    article.innerHTML = `${contactText}`;
    
};

// search



var lastResFind=""; // последний удачный результат
var copy_page=""; // копия страницы в ихсодном виде
function TrimStr(s) {
     s = s.replace( /^\s+/g, '');
  return s.replace( /\s+$/g, '');
}
function FindOnPage(inputId) {//ищет текст на странице, в параметр передается ID поля для ввода
  var obj = window.document.getElementById(inputId);
  var textToFind;
 
  if (obj) {
    textToFind = TrimStr(obj.value);//обрезаем пробелы
  } else {
    alert("not found");
    return;
  }
  if (textToFind == "") {
    alert("enter a value");
    return;
  }
 
  if(article.innerHTML.indexOf(textToFind)=="-1")
  alert("not found");
 
  if(copy_page.length>0)
        article.innerHTML=copy_page;
  else copy_page=article.innerHTML;

 
  article.innerHTML = article.innerHTML.replace(eval("/name="+lastResFind+"/gi")," ");//стираем предыдущие якори для скрола
  article.innerHTML = article.innerHTML.replace(eval("/"+textToFind+"/gi"),"<a name="+textToFind+" style='background:yellow'>"+textToFind+"</a>"); //Заменяем найденный текст ссылками с якорем;
  lastResFind=textToFind; // сохраняем фразу для поиска, чтобы в дальнейшем по ней стереть все ссылки
  window.location = '#'+textToFind;//перемещаем скрол к последнему найденному совпадению
 
  function scroll (){
     
    window.scrollBy(0, -140);
  }
  scroll();
  
}

 

