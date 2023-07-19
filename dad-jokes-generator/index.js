
const jokes = document.getElementById('joke');
const btnEl = document.getElementById('btn');

const Apikey = "sLHs3Y7tY7BnJBmlMwTCqA==s3O1LirSkGcyxyBL"


const option = {
  method: 'GET',
  headers: {
    "X-API-KEY": Apikey,
  }
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke() {

  try {
    jokes.innerText = 'updating...'
    btnEl.disabled = true;
    btnEl.innerText = 'loading';
    const response = await fetch(apiURL, option)
    const data = await response.json();
    const joke = data[0].joke
    jokes.innerText = joke;
    btnEl.innerText = 'TELL ME A JOKE'
    btnEl.disabled = false;

  } catch (error) {
    jokes.innerText = 'an error happen try later'
    btnEl.innerText = 'TELL ME A JOKE'
    btnEl.disabled = false;
    console.log(error);
  }


}

btnEl.addEventListener('click', getJoke)
