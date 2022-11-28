// //  values

const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
const elementalBtns = document.getElementsByClassName('elementalBtns');
const memeContainer = document.getElementById('meme-image-container');
const memes = document.getElementsByClassName('preMade');

//  functions

function borderBtns() {
  const borders = ['dashed 3px rgb(255, 0, 0)',
    'double 5px rgb(0, 0, 255)',
    'groove 6px rgb(0, 128, 0)'];
  for (let i = 0; i < elementalBtns.length; i += 1) {
    elementalBtns[i].addEventListener('click', (event) => {
      memeContainer.style.border = borders[i];
      console.log(event.target.style.border);
    });
  }
}

function memesChooser() {
  for (let i = 0; i < memes.length; i += 1) {
    memes[i].addEventListener('click', (event) => {
      memeImage.src = event.target.src;
    });
  }
}

//  code execution

textInput.addEventListener('keyup', (event) => {
  if (event.target.value.length <= 60) {
    memeText.innerText = event.target.value;
  }
});

imageInput.addEventListener('change', (event) => {
  const imageReader = new FileReader();
  imageReader.readAsDataURL(event.target.files[0]);
  imageReader.addEventListener('loadend', () => {
    memeImage.src = imageReader.result;
  });
});

borderBtns();
memesChooser();
