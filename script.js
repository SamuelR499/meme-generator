// //  values

const textInput = document.getElementById('text-input');
const imageInput = document.getElementById('meme-insert');
const memeText = document.getElementById('meme-text');
const memeImage = document.getElementById('meme-image');
//  functions

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
