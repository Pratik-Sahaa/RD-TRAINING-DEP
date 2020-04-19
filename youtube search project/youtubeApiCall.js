function init() {
    window.value = null;
    window.value1 = null;
}

function search(token) {
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
    console.log(response.items);
    videoList = response.items;
    page(1);
}
