import deleteIfAnyCat from "./deleteImg.js";
import catUrl from "./Url.js";
import ApiKey from "./ApiKey.js";
const catButton = document.querySelector(".kittyButton")
const container = document.querySelector(".result")



const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": ApiKey 
  });
  
  let requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };

  let cats;
  


  function getCat(){
  fetch(catUrl)
    .then(response => response.json())
    .then(result => {

        deleteIfAnyCat(container)
        let cats = result

        
   let img = document.createElement("img")
   img.src = cats[0].url
   container.appendChild(img)
        console.log(cats)
    })
    .catch(error => console.log('error', error));  
  }


  catButton.addEventListener("click", () =>{
    getCat()   
  })
  