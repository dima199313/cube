let inputOne = document.querySelector('.cube__input-one');
let inputTwo = document.querySelector('.cube__input-two');
const btn = document.querySelector('.cube__btn-result');
const form = document.querySelector('.cube__form-control');
let strongOne = document.querySelector('.strong-one');
let strongTwo = document.querySelector('.strong-two');
let strongThree = document.querySelector('.strong-three');

let literOne = document.querySelector('.liter-one');
let literTwo = document.querySelector('.liter-two');
let literThree = document.querySelector('.liter-three');
const pitVolume = 3;
let inHeight;
let outHeight;

function inCubes(inHeight) {
  return inHeight * 3;
}
function outCubes(outHeight) {
  return outHeight * 3;
}

function inOutSum(inCub, outCub) {
  return inCub - outCub;
}

function cubicMetersToLiters(cub) {
  return Math.round(cub * 1000);
}

console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  inHeight = Number(inputOne.value);
  outHeight = Number(inputTwo.value);

  console.log(typeof outHeight);
  let inCub = inCubes(inHeight);
  let outCub = outCubes(outHeight);
  let outSum = inOutSum(inCub, outCub);
  console.log(typeof outCub);

  let inLiter = cubicMetersToLiters(inCub);
  let outLiter = cubicMetersToLiters(outCub);
  let sumLiter = inOutSum(inLiter, outLiter);

  console.log(`${outCub.toFixed(2)} м³`)
  strongOne.textContent = `${inCub.toFixed(2)} м³`;
  strongTwo.textContent = `${outCub.toFixed(2)} м³`;
  strongThree.textContent = `${outSum.toFixed(2)} м³`;

  literOne.textContent = `${inLiter} литров`;
  literTwo.textContent = `${outLiter} литров`;
  literThree.textContent = `${sumLiter} литров`;
});
