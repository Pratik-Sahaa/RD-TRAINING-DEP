function page(pagenum) {
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
    let container = document.querySelector('.results').getElementsByClassName('container');
    while (container.length != 0) {
        document.querySelector('.results').removeChild(container[0]);
    }
}
