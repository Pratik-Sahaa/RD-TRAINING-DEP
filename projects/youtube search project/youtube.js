document.write("<h1>Youtube Search!</h1><p>Search for your favorite videos anytime...</p>");
// var header = document.getElementById("myDIV");
// var btns = header.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   if (current.length > 0) { 
//     current[0].className = current[0].className.replace(" active", "");
//   }
//   this.className += " active";
//   });
// }

// let searchBox= document.createElement('input');
// searchBox.setAttribute("id" , searchbox);
// searchBox.setAttribute("type", Text);
// searchBox.setAttribute("placeHolder" , Searchvideos);
// let submitButton =document.createElement('button');
// submitButton.setAttribute("onclick" , Search());
// submitButton.setAttribute("value", Search);
// submitButton.innerHTML="Search";
// document.querySelector('body').appendChild(searchBox);
// document.querySelector('body').appendChild(submitButton);

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

