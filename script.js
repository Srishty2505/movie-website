const API_KEY = "0995a55f907c0ff0f4266725916b1a2f"
const base_url = "https://api.themoviedb.org/3/"
const img_base_path ="https://image.tmdb.org/t/p/original"
var trendingDiv = document.querySelector("#trendings");


const trend =
{
    day: `trending/movie/day?language=en-US&api_key=${API_KEY}`,
    week: `trending/movie/week?language=en-US&api_key=${API_KEY}`,
};
//  moviex(base_url +trend.day)
//  moviex(base_url +trend.week)
// async function moviex(url) {
//     const response = await fetch(url)
//     const result = await response.json()
//     console.log(result)
//     ShowData(result.results)
// }
// function ShowData(arr)

// {
//     for (let i =0;i<arr.length ;i++)
//     {
//         const img = document.createElement("img")
//         img.src= img_base_path +arr[i].poster_path
//         trendingDiv.children[1].append(img)
//     }
// }

async function getDataFromAPI(url) {
    const response = await fetch(url);
    const result = await response.json();
    return result;
}

function showData(data) {
    trendingDiv.innerHTML = "";

    data.results.forEach((movie) => {
        const movieDiv = document.createElement("div");
        movieDiv.classList.add("movie");
        const poster = document.createElement("img");
        poster.classList.add("poster");
        poster.src = img_base_path + movie.poster_path;
        movieDiv.appendChild(poster);

        trendingDiv.appendChild(movieDiv);
    });
}
async function showtrendings(abc) {
    const data = await getDataFromAPI(base_url + trend[abc]);
    showData(data);
}
showtrendings("day");

const options = document.querySelectorAll("#trending input[type=radio]");
options.forEach((option) => {
  option.addEventListener("change", (e) => {
    const svalue = e.target.value;
    showtrendings(svalue);
  });
});