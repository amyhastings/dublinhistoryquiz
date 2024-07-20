
const mapStartContainer = document.querySelector(".mapquizstart");
const mapContainer = document.querySelector(".mapquizcontent");
const mapResultsContainer = document.querySelector(".mapresults");
const mapRestartButton = document.querySelector("#maprestart");
const mapTotalSpan = document.querySelector("#maptotal");
const mapCorrectSpan = document.querySelector("#mapcorrect");


document.addEventListener('click', function(e){
    const id = e.target.id;
    if (id === "mapstart") {
        mapStartContainer.classList.add("inactive");
        mapContainer.classList.remove("inactive");
    } 
});