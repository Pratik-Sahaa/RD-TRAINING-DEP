document.write("<h1> <b>Y</b>outube Search!</h1>")
document.write("<p>Search for your favorite videos anytime...</p>");

let logo = document.createElement('img');
logo.setAttribute("id", "logo");
logo.setAttribute("src", "youtubelogo.png");
document.querySelector('body').append(logo);

let line= document.createElement("hr");
line.setAttribute("id", "line");
document.querySelector('body').append(line);

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




