'use strict';

const results = document.querySelector('#results')

const norrisForm = document.querySelector('#joke');
norrisForm.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const query = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${query}`,
    );
    const jsonData = await response.json();
    console.log(jsonData);

    results.innerHTML = '';
    for (const joke of jsonData.result) {
      const p = document.createElement('p');
      p.innerText = joke.value;
      const article = document.createElement('article');
      article.append(p);
      results.append(article);
    }
  } catch (error) {
    console.log(error.message);
  }
})