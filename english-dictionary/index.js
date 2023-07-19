
const inputEl = document.getElementById('input');
const infoEl = document.getElementById('info-text');
const meaningContainerEl = document.getElementById('meaning-container');
const titleEl = document.getElementById('title')
const meaningEl = document.getElementById('meaning')
const audioEl = document.getElementById('audio');


async function fetchAPI(word) {

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  const result = await fetch(url).then((res) => res.json());
  console.log(result);
}


inputEl.addEventListener('keyup', (e) => {
  if (e.target.value && e.key === 'Enter') {
    fetchAPI(e.target.value)
  }
})
