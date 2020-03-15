
document.write("<h1> <b>Y</b>outube Search!</h1>")
document.write("<p>Search for your favorite videos anytime...</p>");

let logo = document.createElement('img');
logo.setAttribute("id", "logo");
logo.setAttribute("src", "youtubelogo.png");
document.querySelector('body').append(logo);


let div1 = document.createElement('div');
div1.setAttribute("id", "searchbar");
div1.setAttribute("class", "searchbar");
document.querySelector('body').append(div1);

let searchBox = document.createElement('input');
searchBox.setAttribute("id", "searchbox");
searchBox.setAttribute("type", "text");
searchBox.setAttribute("placeHolder", "Searchvideos");

let submitButton = document.createElement('button');
submitButton.setAttribute("onclick", "Search()");
submitButton.append("Search");
submitButton.innerHTML = "Search";

document.getElementById('searchbar').append(searchBox);
document.getElementById('searchbar').append(submitButton);


function Search() {
    var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: document.getElementById('searchbox').value,
        maxResults: 18
    });
    request.execute(searchItems);
}
var videoList = [];

function searchItems(response) {
    console.log(response.items);
    videoList = response.items;
    Page(1);
}

function Page(pagenum) {
    removeAllElementsFromResults();
    var current = (pagenum * 3) - 3;
    var clone, item, temp;
    for (i = current; i < (current + 3); i++) {
        item = videoList[i];
        temp = document.querySelector("#template");
        clone = document.importNode(temp.content, true);

        var image = clone.querySelector("img");
        image.setAttribute("src", item.snippet.thumbnails.high.url);

        var title = clone.querySelector("#title");
        title.innerHTML = item.snippet.title;

        var description = clone.querySelector('#details');
        description.innerHTML = item.snippet.description;

        document.querySelector('.results').appendChild(clone);
    }
}

function removeAllElementsFromResults() {
    let containers = document.querySelector('.results').getElementsByClassName('container');
    // console.log(containers);
    let n = containers.length;
    while (containers.length != 0) {
        document.querySelector('.results').removeChild(containers[0]);
        //     console.log(i);
    }
}

function init() {
    gapi.client.setApiKey("AIzaSyCiloWNkyk-lrUy7PyoZYkPsI2g9WEPTzE");
    gapi.client.load("youtube", "v3", function search() {
    });
}

