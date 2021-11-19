//grab button
const button = document.querySelector(".get-jokes");

//event listeners
button.addEventListener("click", getJokes);
//event handlers
function getJokes(event) {
  //get input number
  const number = document.querySelector("input[type='number']").value;
  //create xhr instance
  const xhr = new XMLHttpRequest();
  //get request,to chuck-noris-jokes html,async
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);
  //send that request
  xhr.send();
  //on response load ..
  xhr.onload = function () {
    //if response is okay
    if (this.status === 200) {
      //get responseText as response JSON
      const response = JSON.parse(this.responseText);
      //empty output initialization
      let output = ``;
      //if response type prop is success
      if (response.type == "success") {
        //iterate through each value prop of response, and add every output as joke
        response.value.forEach(function (item) {
          console.log(item);
          output += `<li>${item.joke}</li>`;
        });
      } else {
        //if not success show error
        output += ` <li>Something went wrong</li> `;
      }
      //after output created, show it to user
      document.querySelector(".jokes").innerHTML = output;
    }
  };
  event.preventDefault();
}
