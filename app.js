//Obteniendo elementos desde el DOM
let namePlayer = '';
let greeting = document.getElementById('greeting');
const main = document.getElementById('main');
const data = document.getElementById('data');
const boxSecondView = document.createElement('div');
const header = document.getElementById('header');
const createLine  = document.createElement('hr');
const out = document.createElement('div');
let a = 21;
let b = 61;
let interval;
let loading;
let timer = document.getElementById('timer');
timer.classList.add('hide');
const myBar = document.getElementById('myBar');
out.innerHTML= '<button class="out" type="button" onclick="outPlayer()">SALIR</button>';
out.classList.add('hide');
const body = document.getElementById('body');
let alternative = document.createElement('ul');
let result = document.createElement('ul');
let correct = 0;
let incorrect = 0;
let scorePlayer = '';

//Función temporizador pero con click de usuario - Preguntas de la sección ANIMALES y CULTURAL (A, B - Animales/ D,E - Cultural / C - Funciona para ambos)

function countClickA() {
  clearInterval(interval);
  a = 20;
  timer.innerHTML = a;
  b = 40;
  countPleaseAnimals();
}

function countClickB() {
  //debugger
  clearInterval(interval);
  //timer.innerHTML = a;
  a = 20;
  b = 20;
  countPleaseAnimals();
}

function countClickD() {
  clearInterval(interval);
  a = 20;
  timer.innerHTML = a;
  b = 40;
  countPleaseCultural();
}

function countClickE() {
  clearInterval(interval);
  a = 20;
  timer.innerHTML = a;
  b = 20;
  countPleaseCultural();
}

function countClickC() {
  clearInterval(interval);
  a = 20;
  timer.innerHTML = a;
}

//Función temporizador automático - Sección ANIMALES

function countPleaseAnimals() {
interval = setInterval(count, 1000);
    function count() {
      if (b === 40) {
        a = 20;
        timer.innerHTML = a;
        nextOne();
      } else if (b === 19) {
        a = 20;
        timer.innerHTML = a;
        nextTwo();
      } else if (b === -2) {
        timer.innerHTML = a;
        a = 20;
        b = 60;
        timer.innerHTML = a;
        clearInterval(interval);
        score();
      } else {
        b--;
        a--;
        timer.innerHTML = a;
        console.log(b);
      }
    }
}

//Función temporizador automático - Sección CULTURAL

function countPleaseCultural() {
interval = setInterval(count, 1000);
    function count() {
      if (b === 40) {
        a = 20;
        timer.innerHTML = a;
        culturalNextOne();
      } else if (b === 19) {
        a = 20;
        timer.innerHTML = a;
        culturalNextTwo();
      } else if (b === -2) {
        a = 20;
        timer.innerHTML = a;
        b = 60;
        clearInterval(interval);
        score();
      } else {
        b--;
        a--;
        timer.innerHTML = a;
        console.log(b);
      }
    }
}

// Función para barra animada de cuenta regresiva

/*function move() {
  const myBar = document.getElementById("myBar");
  let width = 0;
  loading = setInterval(frame, 1000);
  function frame() {
    if (width == 100) {
      clearInterval(loading);
      width = 0;
      myBar.style.width = width + '%';
    } else {
      width = width + 4.75;
      myBar.style.width = width + '%';
    }
  }
}*/

//Función para mostrar segunda vista con opciones
function nickName() {
  boxSecondView.classList.remove('hide');
  boxSecondView.innerHTML='';
  namePlayer = document.getElementById('nick').value;
  document.getElementById('nick').value = '';
  console.log(namePlayer);
  greeting.innerHTML='Hola ' + namePlayer + '!';
  greeting.classList.remove('title');
  greeting.classList.add('questions');
  data.classList.add('hide');
  const textOptions = document.createElement('p');
  textOptions.classList.add('subTitleTwo');
  textOptions.innerHTML='Ecoge un tema';
  boxSecondView.appendChild(textOptions);
  const optionOne = document.createElement('table');
  optionOne.classList.add('tableOptions');
  optionOne.innerHTML='<tr><th><figure><img class="imageOptions" src="images/animal.jpg" alt="animales" /></figure><button class="start" type="button" onclick="animalQuestions(); countPleaseAnimals()">ANIMALES</button></th><th><figure><img class="imageOptions" src="images/cultura.jpg" alt="cultura" /></figure><button class="start" type="button" onclick="culturalQuestions(); countPleaseCultural()">CULTURA</button></th></tr>';
  boxSecondView.appendChild(optionOne);
  main.appendChild(boxSecondView);
}

//Funciones de la sección Animales

//Pregunta uno
function animalQuestions() {
  //move();
  greeting.classList.remove('title');
  greeting.classList.add('questions');
  timer.classList.remove('hide');
  createLine.classList.add('hide');
  result.classList.add('hide');
  alternative.classList.remove('hide');
  data.classList.add('hide');
  boxSecondView.classList.add('hide');
  greeting.innerHTML='¿Cuánto tiempo duermen las jirafas por día?';
  alternative.innerHTML= '<li><button class="optionsQuestions" type="button" onclick="countClickA(); nextOne(); countCorrect()">A. 2-3 horas</button></li><li><button class="optionsQuestions" type="button" onclick="countClickA(); nextOne(); countIncorrect()">B. 1 hora</button></li><li><button class="optionsQuestions" type="button" onclick="countClickA(); nextOne(); countIncorrect()">C. 5-6 horas</button></li>'
  main.appendChild(alternative);
}
//Pregunta dos
function nextOne() {
  b--;
  move();
  greeting.innerHTML='En promedio, ¿cuánto tiempo viven los gatos domésticos?';
  alternative.innerHTML='<li><button class="optionsQuestions" type="button" onclick="countClickB(); nextTwo(); countIncorrect()">A. 5 años</button></li><li><button class="optionsQuestions" type="button" onclick="countClickB(); nextTwo(); countCorrect()">B. 12 años</button></li><li><button class="optionsQuestions" type="button" onclick="countClickB(); nextTwo(); countIncorrect()">C. 25 años</button></li>';
}
//Pregunta tres
function nextTwo() {
  b--;
  //move();
  timer.innerHTML = a;
  greeting.innerHTML='¿De qué tamaño es el cerebro de un cocodrilo?';
  alternative.innerHTML='<li><button class="optionsQuestions" type="button" onclick="countClickC(); countIncorrect(); score()">A. De una pelota de tenis</button></li><li><button class="optionsQuestions" type="button" onclick="countClickC(); countCorrect(); score()">B. De un dedo pulgar</button></li><li><button class="optionsQuestions" type="button" onclick="countClickC(); countIncorrect(); score()">C. De un melón</button></li>';
}

//Funciones para la sección de Cultura
//Pregunta uno
function culturalQuestions() {
  greeting.classList.remove('title');
  greeting.classList.add('questions');
  timer.classList.remove('hide');
  createLine.classList.add('hide');
  result.classList.add('hide');
  alternative.classList.remove('hide');
  data.classList.add('hide');
  boxSecondView.classList.add('hide');
  greeting.innerHTML='¿Qué país no se encuentra en Asia?';
  alternative.innerHTML= '<li><button class="optionsQuestions" type="button" onclick="countClickD(); culturalNextOne(); countIncorrect()">A. Indonesia</button></li><li><button class="optionsQuestions" type="button" onclick="countClickD(); culturalNextOne(); countIncorrect()">B. Sri Lanka</button></li><li><button class="optionsQuestions" type="button" onclick="countClickD(); culturalNextOne(); countCorrect()">C. Comoras</button></li>'
  main.appendChild(alternative);
}
//Pregunta dos
function culturalNextOne() {
  b--;
  greeting.innerHTML='¿Qué escritor español firmaba como Fígaro?';
  alternative.innerHTML='<li><button class="optionsQuestions" type="button" onclick="countClickE(); culturalNextTwo(); countCorrect()">A. Mariano José de Larra</button></li><li><button class="optionsQuestions" type="button" onclick="countClickE(); culturalNextTwo(); countIncorrect()">B. Federico García Lorca</button></li><li><button class="optionsQuestions" type="button" onclick="countClickE(); culturalNextTwo(); countIncorrect()">C. Francisco de Quevedo</button></li>';
}
//Pregunta tres
function culturalNextTwo() {
  b--;
  greeting.innerHTML='¿Qué es el calostro?';
  alternative.innerHTML='<li><button class="optionsQuestions" type="button" onclick="countClickC(); countCorrect(); score()">A. La primera leche materna</button></li><li><button class="optionsQuestions" type="button" onclick="countClickC(); countIncorrect(); score()">B. Una enfermedad del colon</button></li><li><button class="optionsQuestions" type="button" onclick="countClickC(); countIncorrect(); score()">C. Un hueso de la espina dorsal</li>';
}

//Función para contar respuestas correctas
function countCorrect() {
  ++correct;
  console.log('correctas '+correct);
}
//Función para contar respuestas incorrectas
function countIncorrect(){
  ++incorrect;
  console.log('incorrectas '+incorrect);
}

//Función para mostrar mensaje deacuerdo a los aciertos
function average(a) {
  let average = '';
  if (a === 3) {
    average = 'Oh '+ namePlayer + ' eres excelente! ^_^';
    return average;
  } else if (a === 2) {
    average = namePlayer + ' eres buena! :)';
    return average;
  } else if (a === 1) {
    average = namePlayer + ' puedes mejorar!';
    return average;
  } else {
    average = 'Oh oh... ' + namePlayer +' inténtalo de nuevo :(';
    return average;
  }
}

//Función para mostrar la vista de RESULTADOS
function score() {
  //clearInterval(loading);
  b = 60;
  timer.classList.add('hide');
  createLine.classList.remove('hide');
  result.classList.remove('hide');
  alternative.classList.add('hide');
  const line = document.getElementById('line');
  greeting.innerHTML= 'Resultados';
  greeting.classList.remove('questions');
  greeting.classList.add('title');
  header.appendChild(result);
  scorePlayer = average(correct);
  result.innerHTML='<li class="subTitleThree">Respuestas correctas: '+ correct +'</li><li class="subTitleThree">Respuestas Incorrectas: '+ incorrect +'</li><li class="scoreNote">'+ scorePlayer +'</li>';
  header.appendChild(createLine);
  boxSecondView.classList.remove('hide');
  out.classList.remove('hide');
  boxSecondView.appendChild(out);
  correct = 0;
  incorrect = 0;
  scorePlayer = '';
}

//Función del boton para volver a la primera vista
function outPlayer() {
  data.classList.remove('hide');
  result.classList.add('hide');
  createLine.classList.add('hide');
  boxSecondView.classList.add('hide');
  greeting.innerHTML='Bienvenido <br> a <br> Trivias';
}
