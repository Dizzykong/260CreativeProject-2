function myFunction() {
  // setup URL
  //let url = "http://numberapi.com/" + number + "/" + type;
  let url = "https://api.kanye.rest/";
  // call API
  fetch(url)
    .then(function(response) {
      // make sure the request was successful
      if (response.status != 200) {
        return {
          text: "Error calling the Numbers API service: " + response.statusText
        }
      }
      return response.json();
    }).then(function(json) {
      // update DOM with response
      updateResult(json.quote);
    });
}

function updateResult(info) {
  document.getElementById('results').textContent = info;
  console.log(info);
}
myFunction();
