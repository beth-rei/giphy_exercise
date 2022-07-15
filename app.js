const $gifArea = $('#gif-area');
const $searchInput = $("#search");

// use ajax result to add a gif 

function addGif(res) {
    let numResults = res.data.length;
    if (numResults) {
        let randomIdx = Math.floor(Math.random() * numResults);
        let $newCol = $("<div>", {class: "col-md col-12-mb-4"}); //adding a new <div> elsement with the class of: "col-md-4 col-12  md=4"
        let $newGif = $("<img>", {
            src: res.data [randomIdx].images.original.url, class: "w-100"

    }
    const res = await axios.get('https://api.giphy.com/v1/gifs/random');
    const img = document.querySelector("#gif");
    img.src = res.data.message;
    console.log("Let's get this party started!");
}

//handle form submission: clear search box & make ajax call
$("form").on ("submit", async function(evt) {
    evt.perentDefault();
    
    let serachTerm = $searchInput.val();
    $searchInput.val("");

    const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
            q: serachTerm,
            api_key: "..."
        }
    });
    addGif(response.data);
});

//remove gif

$("#remove").on("click",function(){
    $gifArea.empty();
});