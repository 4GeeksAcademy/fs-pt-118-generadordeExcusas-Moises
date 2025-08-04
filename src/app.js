import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  document.querySelector("#btn").addEventListener("click", ()=>{
    document.querySelector("#the-excuse").innerHTML = generateExcuse ();

  })

  console.log('Hello rigo in the console');
};

const generateExcuse = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  


  function obtenerElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  }

    const whos = obtenerElementoAleatorio(who);
  const actions = obtenerElementoAleatorio(action);
  const whats = obtenerElementoAleatorio(what);
  const whens = obtenerElementoAleatorio(when);

  return `${whos} ${actions} ${whats} ${whens}.`;
}

