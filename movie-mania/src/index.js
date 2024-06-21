import { getMovieReviewData } from "./data.js";

let sortDesc = false;

function init() {
  const movieReviewData = getMovieReviewData();

  registerHandlers(movieReviewData);
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
  const sorted = flatReviewData.toSorted((a, b) => b.on - a.on);
  const movieListEL = document.querySelector("#movieListId UL");
  addMovieReviewData(movieListEL, sorted);
}

function addMovieReviewData(movieListEL, movieReview) {
  movieReview.map((movie) => {

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

function registerHandlers(movieReviewData) {
  const sortBtn = document.getElementById("srtBtnId");
  const grpBtn = document.getElementById("grpBtnId");
  
  sortBtn.addEventListener("click", () => sortByReview(movieReviewData));
  grpBtn.addEventListener("click",  () => groupReviewsByTitle(movieReviewData)); 
}

function sortByReview(movieReviewData) {
    sortDesc = !sortDesc;
    const flatReviewData = movieReviewData.flat();
    let sortedReviewData = sortDesc
        ? flatReviewData.toSorted((a, b) => b.rating - a.rating)
        : flatReviewData.toSorted((a, b) => a.rating - b.rating);
    const movieListEL = document.querySelector("#movieListId UL");
    removeAllChildNodes(movieListEL);
    addMovieReviewData(movieListEL, sortedReviewData);
}

function groupReviewsByTitle(movieReviewData) {
  console.log("groupReviewsByTitle", movieReviewData);
  const flatReviewData = movieReviewData.flat();
  const groupdReviews = Object.groupBy(flatReviewData, ({title}) => title);
  console.log(groupdReviews);

  const titleKeys = Reflect.ownKeys(groupdReviews);
  console.log(titleKeys);

  const movieListEL = document.querySelector("#movieListId UL");
  removeAllChildNodes(movieListEL);

  titleKeys.forEach((title) => {
    const liEl = document.createElement("li");
    liEl.classList.add("card", "my-2",);

    const hEl = document.createElement("h2");
    hEl.classList.add("text-3xl");
    hEl.innerText = title;
    liEl.appendChild(hEl);

    const reviews = groupdReviews[title];
    console.log(reviews);

    reviews.forEach((review) => {
      const pEl = document.createElement("p");
      pEl.classList.add("mx-2", "my-2");
      const message = `✅ <strong>${review.by}</strong> has given <strong>${review.rating}</strong> rating with a comment, <i>${review.content}</i>`;
      pEl.innerHTML = message;
      liEl.appendChild(pEl);
    })

    movieListEL.appendChild(liEl);
  })

}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

init();

