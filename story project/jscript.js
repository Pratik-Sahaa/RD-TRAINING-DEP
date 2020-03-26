const select = document.querySelector('select');


function selectCategory() {
  const choice = select.value;

  switch (choice) {
    case 'all':
      window.location.href = "tryProject-1.html";
      break;
    case 'mystery':
      window.location.href = "mystery.html";
      break;
    case 'fiction':
      window.location.href = "fiction.html";
      break;
    case 'love':
      window.location.href = "love.html";
      break;
    case 'action':
      window.location.href = "action.html";
      break;
  }
}

function actionPage() {
  window.location.href = "action.html";
}

function mysteryPage() {
  window.location.href = "mystery.html";
}

function fictionPage() {
  window.location.href = "fiction.html:void(0)";
}

function lovePage() {
  window.location.href = "love.html";
}

function subscribePage() {
  window.location.href = "subscribe.html";
}

function homePage() {
  window.location.href = "tryProject-1.html";
}

function addnewpage() {
  window.location.href = "addnewpage.html";
}

function subscribed() {
  alert("Thank you for subscribing with us!");
}





function addNewStory() {

  let message;
  let val = confirm("Your submission was successfully saved. \n Do you want to submit more stories?");
  if (val == true) {
    window.location.href = "addnewpage.html:void(0)";
  } else {
    alert("Thank you for the submission");
    window.location.replace("tryProject-1.html");
  }

}


