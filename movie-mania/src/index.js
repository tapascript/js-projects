import { getMovieReviewData } from "./data.js";

function init() {
  const movieReviewData = getMovieReviewData();
  paintStatistics(movieReviewData);
  paintMovieData(movieReviewData);
}

function paintStatistics(movieReviewData) {

  const flatReviewData = movieReviewData.flat();

  const totalMovies = movieReviewData.length;
  const totalReviews = flatReviewData.length;
  const totalRating = flatReviewData.reduce((acc, item) => {
    return acc + item.rating;
  }, 0);
  const avgRating = (totalRating/totalReviews).toFixed(2);

  const totalMoviesEl = document.getElementById("tMoviesId");
  addStat(totalMoviesEl, totalMovies);

  const avgRatingEL = document.getElementById("tAvgRatingId");
  addStat(avgRatingEL, avgRating);

  const totalReviewsEl = document.getElementById("tReviewsId");
  addStat(totalReviewsEl, totalReviews);
}

function addStat(elem, value) {
  const spanEL = document.createElement("span");
  spanEL.classList.add("text-6xl")
  spanEL.innerText = value;
  elem.appendChild(spanEL);
}

function paintMovieData(movieReviewData) {
  const flatReviewData = movieReviewData.flat();
  const movieListEL = document.querySelector("#movieListId UL");

  console.log(movieListEL);

  flatReviewData.map((movie) => {
    console.log(movie);

    const liElem = document.createElement("li");
    liElem.classList.add("card", "p-2", "my-2");

    const titleElem = document.createElement("p");
    titleElem.classList.add("text-xl", "mb-2");
    titleElem.innerText = `${movie.title} - ${movie.rating}`;
    liElem.appendChild(titleElem);

    const reviewElem = document.createElement("p");
    reviewElem.classList.add("mx-2", "mb-2");
    reviewElem.innerText = movie.content;
    liElem.appendChild(reviewElem);

    const byEleme = document.createElement("p");
    byEleme.classList.add("mx-2", "mb-2");
    byEleme.innerText = `By ${movie.by} on ${new Intl.DateTimeFormat('en-IN').format(movie.on)}`;
    liElem.appendChild(byEleme);

    movieListEL.appendChild(liElem);
  })
}

init();

