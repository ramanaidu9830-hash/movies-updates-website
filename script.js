// Sample movie updates. Replace these with verified news from official sources.
const movieUpdates = [
  {
    title: "Upcoming Telugu Movie",
    language: "Telugu",
    type: "News",
    date: "Update this date",
    description: "Add a short, original summary about the movie announcement or release.",
    image: "https://placehold.co/800x450/21153f/ffffff?text=Telugu+Movie",
    link: "https://www.youtube.com/"
  },
  {
    title: "New Hindi Film Update",
    language: "Hindi",
    type: "News",
    date: "Update this date",
    description: "Write a brief update and verify the information before publishing.",
    image: "https://placehold.co/800x450/1d2940/ffffff?text=Hindi+Movie",
    link: "https://www.youtube.com/"
  },
  {
    title: "Tamil Cinema News",
    language: "Tamil",
    type: "News",
    date: "Update this date",
    description: "Replace this sample text with a genuine movie news summary.",
    image: "https://placehold.co/800x450/3a1f2c/ffffff?text=Tamil+Movie",
    link: "https://www.youtube.com/"
  },
  {
    title: "Official Trailer Spotlight",
    language: "Telugu",
    type: "Trailers",
    date: "Update this date",
    description: "Add the official trailer details and link to the studio's official video.",
    image: "https://placehold.co/800x450/123a38/ffffff?text=Official+Trailer",
    link: "https://www.youtube.com/"
  },
  {
    title: "Bollywood Release Update",
    language: "Hindi",
    type: "News",
    date: "Update this date",
    description: "Add the confirmed release date and cite an official source in your article.",
    image: "https://placehold.co/800x450/3c2b17/ffffff?text=Hindi+Release",
    link: "https://www.youtube.com/"
  },
  {
    title: "Tamil Trailer Update",
    language: "Tamil",
    type: "Trailers",
    date: "Update this date",
    description: "Use an official trailer URL and your own short description here.",
    image: "https://placehold.co/800x450/25203d/ffffff?text=Tamil+Trailer",
    link: "https://www.youtube.com/"
  }
];

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");
const emptyMessage = document.getElementById("emptyMessage");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedFilter = "All";

function createMovieCard(movie) {
  const card = document.createElement("article");
  card.className = "movie-card";

  const image = document.createElement("img");
  image.className = "movie-image";
  image.src = movie.image;
  image.alt = movie.title + " image";
  image.loading = "lazy";
  image.onerror = function () {
    this.src = "https://placehold.co/800x450/141824/ffffff?text=Movie+Image";
  };

  const content = document.createElement("div");
  content.className = "movie-content";

  const meta = document.createElement("div");
  meta.className = "movie-meta";

  const languageTag = document.createElement("span");
  languageTag.className = "tag";
  languageTag.textContent = movie.language;

  const typeTag = document.createElement("span");
  typeTag.className = "tag";
  typeTag.textContent = movie.type;

  meta.append(languageTag, typeTag);

  const title = document.createElement("h3");
  title.textContent = movie.title;

  const description = document.createElement("p");
  description.textContent = movie.description;

  const date = document.createElement("p");
  date.textContent = movie.date;

  const link = document.createElement("a");
  link.className = "movie-link";
  link.href = movie.link;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Read / Watch more ↗";

  content.append(meta, title, description, date, link);
  card.append(image, content);
  return card;
}

function renderMovies() {
  const searchText = searchInput.value.trim().toLowerCase();

  const filteredMovies = movieUpdates.filter(function (movie) {
    const matchesFilter =
      selectedFilter === "All" ||
      movie.language === selectedFilter ||
      movie.type === selectedFilter;

    const searchableText =
      movie.title + " " + movie.language + " " + movie.type + " " + movie.description;

    const matchesSearch = searchableText.toLowerCase().includes(searchText);
    return matchesFilter && matchesSearch;
  });

  movieGrid.replaceChildren();

  filteredMovies.forEach(function (movie) {
    movieGrid.appendChild(createMovieCard(movie));
  });

  emptyMessage.hidden = filteredMovies.length !== 0;
}

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    filterButtons.forEach(function (item) {
      item.classList.remove("active");
    });

    button.classList.add("active");
    selectedFilter = button.dataset.filter;
    renderMovies();
  });
});

searchInput.addEventListener("input", renderMovies);
document.getElementById("year").textContent = new Date().getFullYear();

renderMovies();
