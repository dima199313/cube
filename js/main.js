let inputOne = document.querySelector('.cube__input-one');
let inputTwo = document.querySelector('.cube__input-two');
const btn = document.querySelector('.cube__btn-result');
const form = document.querySelector('.cube__form-control');
let strongOne = document.querySelector('.strong-one');
let strongTwo = document.querySelector('.strong-two');
let strongThree = document.querySelector('.strong-three');
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

console.log(form);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  inHeight = inputOne.value;
  outHeight = inputTwo.value;
  let inCub = inCubes(inHeight);
  let outCub = outCubes(outHeight);
  let outSum = inOutSum(inCub, outCub);
  strongOne.textContent = `${inCub.toFixed(2)} м³`;
  strongTwo.textContent = `${outCub.toFixed(2)} м³`;
  strongThree.textContent = `${outSum.toFixed(2)} м³`;
});
