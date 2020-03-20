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
buttonPrev.setAttribute('onclick', "Search(window.value1)");
buttonPrev.innerHTML = "Prev";
document.getElementById('myDIV').append(buttonPrev);

let button1 = document.createElement('button');
button1.setAttribute("class", "btn active");
button1.setAttribute('onclick', "Page(1)");
button1.innerHTML = "1";
document.getElementById('myDIV').append(button1);

let button2 = document.createElement('button');
button2.setAttribute("class", "btn");
button2.setAttribute('onclick', "Page(2)");
document.getElementById('myDIV').append(button2);

let button3 = document.createElement('button');
button3.setAttribute("class", "btn");
button3.setAttribute('onclick', "Page(3)");
document.getElementById('myDIV').append(button3);

let button4 = document.createElement('button');
button4.setAttribute("class", "btn");
button4.setAttribute('onclick', "Page(4)");
document.getElementById('myDIV').append(button4);

let button5 = document.createElement('button');
button5.setAttribute("class", "btn");
button5.setAttribute('onclick', "Page(5)");
document.getElementById('myDIV').append(button5);

let button6 = document.createElement('button');
button6.setAttribute("class", "btn");
button6.setAttribute('onclick', "Page(6)");
document.getElementById('myDIV').append(button6);

let buttonnext = document.createElement('button');
buttonnext.setAttribute("class", "btnnext");
buttonnext.setAttribute('onclick', "Search(window.value)");
buttonnext.innerHTML = "Next";
document.getElementById('myDIV').append(buttonnext);

// for( var p=2;p<=6;p++)
// {
//     let `button${p}` = document.createElement('button');
//     `button${p}`.setAttribute("class", "btn");
//     `button${p}`.setAttribute('onclick', "`Page(${p})`");
//     document.getElementById('myDIV').append(`button${p}`);
// }


var arr = document.getElementsByClassName("btn");
for(var x=0; x<arr.length; x++)
{
    arr[x].innerHTML= x+1;
}