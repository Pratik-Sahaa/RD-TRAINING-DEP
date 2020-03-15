// let divResults = document.createElement('div');
// divResults.setAttribute("id" , "results");
// divResults.setAttribute("class" , "results");
// document.querySelector('body').append(divResults);

// let template1= document.createElement('template');
// template1.setAttribute("id" , "template");
// document.getElementById('results').append(template1);

// let divContainer = document.createElement('div');
// divContainer.setAttribute("id" , "container");
// divContainer.setAttribute("class" , "container");
// document.getElementById("template").append(divContainer);

// let image = document.createElement('img');
// image.setAttribute("id" , "image");
// document.getElementById('container').append(image);

// let heading= document.createElement('h2');
// heading.setAttribute("id" , "title");
// document.getElementById('container').append(heading);

// let details = document.createElement('p');
// details.setAttribute("id", "details");
// document.getElementById('container').append(details);


let divCenter = document.createElement('div');
divCenter.setAttribute("id", "center");
divCenter.setAttribute("class", "center");
document.getElementById('body').append(divCenter);

let myDiv = document.createElement('div');
myDiv.setAttribute("class", "myDIV");
myDiv.setAttribute("id", "myDIV");
document.getElementById('center').append(myDiv);

let button1 = document.createElement('button');
button1.setAttribute("class", "btn active");
button1.setAttribute('onclick', "Page(1)");
button1.innerHTML = "1";
document.getElementById('myDIV').append(button1);

let button2 = document.createElement('button');
button2.setAttribute("class", "btn");
button2.setAttribute('onclick', "Page(2)");
button2.innerHTML = "2";
document.getElementById('myDIV').append(button2);

let button3 = document.createElement('button');
button3.setAttribute("class", "btn");
button3.setAttribute('onclick', "Page(3)");
button3.innerHTML = "3";
document.getElementById('myDIV').append(button3);

let button4 = document.createElement('button');
button4.setAttribute("class", "btn");
button4.setAttribute('onclick', "Page(4)");
button4.innerHTML = "4";
document.getElementById('myDIV').append(button4);

let button5 = document.createElement('button');
button5.setAttribute("class", "btn");
button5.setAttribute('onclick', "Page(5)");
button5.innerHTML = "5";
document.getElementById('myDIV').append(button5);

let button6 = document.createElement('button');
button6.setAttribute("class", "btn");
button6.setAttribute('onclick', "Page(6)");
button6.innerHTML = "6";
document.getElementById('myDIV').append(button6);

let buttonnext = document.createElement('button');
buttonnext.setAttribute("class", "btn");
buttonnext.setAttribute('onclick', "Search()");
buttonnext.innerHTML = "Next";
document.getElementById('myDIV').append(buttonnext);


