const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues)

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();//para que no se recargue la pagina
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}

/* btn.addEventListener('click',btnOnClick);

function btnOnClick() {
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value) ;
  pResult.innerText = "Resultado: " + sumaInputs;
} */