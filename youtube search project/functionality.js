function init() {
    window.value = null;
    window.value1 = null;
}

function Search(token) {
    var query = document.getElementById('searchbox').value;
    if (token) {
        var url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCiloWNkyk-lrUy7PyoZYkPsI2g9WEPTzE&type=video&part=snippet&q=${query}&maxResults=18&pageToken=${token}&q=js`
    } else {
        var url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyCiloWNkyk-lrUy7PyoZYkPsI2g9WEPTzE&type=video&part=snippet&q=${query}&maxResults=18&q=js`
    }
    fetch(url + query)
        .then(response => {
            return response.json();
        })
        .then(result => {
            searchItems(result);
        })
}

var videoList = [];

function searchItems(response) {
    window.value = response.nextPageToken;
    window.value1 = response.prevPageToken;
    console.log(response);
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
    let n = containers.length;
    while (containers.length != 0) {
        document.querySelector('.results').removeChild(containers[0]);
    }
}

