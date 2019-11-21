// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var movieEntries = document.getElementsByClassName("movie-entry");

var form = document.getElementById("search-and-filter-form");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    var i, entry;

    var term = document.getElementById("search").value;

    var mpaa = [];
    var mpaaCheckBoxes = document.getElementsByClassName("mpaa");

    var minIMDB = document.getElementsByClassName("minIMDB");

    for (var j = 0; j < mpaaCheckBoxes.length; j++) {
        if (mpaaCheckBoxes[j].checked) {
            mpaa.push(mpaaCheckBoxes[j].value);
        }
    }

    for (i = 0; i < movieEntries.length; i++) {

        //unhide all entries
        entry = movieEntries[i];
        entry.style.display = "block";

        //by search term
        if (term) {
            if (!entry.dataset.title.toLowerCase().includes(term.toLowerCase())) {
                entry.style.display = "none";
            }
        }

        //by mpaa rating
        if (mpaa.length > 0) {
            if (!mpaa.includes(entry.dataset.mpaa)) {
                entry.style.display = "none";
            }
        }

        //by imdb rating
        if (minIMDB) {
            if (!entry.dataset.imdb || parseFloat(minIMDB) > parseFloat(entry.dataset.imdb)) {
                entry.style.display = "none";
            }
        }
    }
});
