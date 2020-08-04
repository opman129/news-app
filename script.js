const searchNews = document.getElementById('search-news');
const showNews = document.getElementById('show-news');
const submit = document.getElementById('submit-btn');

const getNews = async() => {
  
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7
    `)
    let data = await res.json();
    console.log(data)

    const details = data.results;
    const showDetails = details.map(
        item => {
          return `
        img src = ${item.multimedia.map(imageItem => {
          return `<img src = ${imageItem.url}>`
        })}
          `
        }  
    )   
  showNews.innerHTML = showDetails
  
}

submit.addEventListener('click', getNews)