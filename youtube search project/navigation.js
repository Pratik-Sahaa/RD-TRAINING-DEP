let divCenter = document.createElement('div');
divCenter.setAttribute("id", "center");
divCenter.setAttribute("class", "center");
document.getElementById('body').append(divCenter);

let myDiv = document.createElement('div');
myDiv.setAttribute("class", "myDIV");
myDiv.setAttribute("id", "myDIV");
document.getElementById('center').append(myDiv);

let buttonPrev = document.createElement('button');
buttonPrev.setAttribute("class", "btnprev");
buttonPrev.setAttribute('onclick', "search(window.value1)");
buttonPrev.innerHTML = "Prev";
document.getElementById('myDIV').append(buttonPrev);

let button1 = document.createElement('button');
button1.setAttribute("class", "btn active");
button1.setAttribute('onclick', "page(1)");
document.getElementById('myDIV').append(button1);

let button2 = document.createElement('button');
button2.setAttribute("class", "btn");
button2.setAttribute('onclick', "page(2)");
document.getElementById('myDIV').append(button2);

let button3 = document.createElement('button');
button3.setAttribute("class", "btn");
button3.setAttribute('onclick', "page(3)");
document.getElementById('myDIV').append(button3);

let button4 = document.createElement('button');
button4.setAttribute("class", "btn");
button4.setAttribute('onclick', "page(4)");
document.getElementById('myDIV').append(button4);

let button5 = document.createElement('button');
button5.setAttribute("class", "btn");
button5.setAttribute('onclick', "page(5)");
document.getElementById('myDIV').append(button5);

let button6 = document.createElement('button');
button6.setAttribute("class", "btn");
button6.setAttribute('onclick', "page(6)");
document.getElementById('myDIV').append(button6);

let buttonnext = document.createElement('button');
buttonnext.setAttribute("class", "btnnext");
buttonnext.setAttribute('onclick', "search(window.value)");
buttonnext.innerHTML = "Next";
document.getElementById('myDIV').append(buttonnext);

var arr = document.getElementsByClassName("btn");
for (var x = 0; x < arr.length; x++) {
    var txt = document.createTextNode(x+1);      
    arr[x].appendChild(txt);
}


// $(function(){
//     $(".btn").click(function(){
//         $(".btn").toggleClass("active");
//     });
// });