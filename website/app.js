/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API
let url='https://api.openweathermap.org/data/2.5/weather?zip=';
let apikey='a906022620af1b7e1ab4062c1efd1fb8';

// Event listener to add function to existing HTML DOM element
document.getElementById("generate").addEventListener('click', action);

/* Function called by event listener */
function action(e){
    const newzip = document.getElementById('zip').value;
    const mode = document.getElementById('feelings').value;
    getwheather(url,apikey,newzip).then (function(data){
        console.log(data);
        postData('/add',{data:d, temp:data.main.tem, content:mode})
        updataUi();
    })
};

/* Function to GET Web API Data*/
const getwheather = async (url, zip, apikey)=>{

    const res = await fetch(url+zip+apikey)
    try {
  
      const data = await res.json();
      console.log(data)
      return data;
    }  catch(error) {
      console.log("error", error);
    }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },

      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData);
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

/* Function to GET Project Data */
const updateUI = async () => {
    const request = await fetch('/all');
    try{
      const allData = await request.json();
      document.getElementById('animalName').innerHTML = allData[0].animal;
      document.getElementById('animalFact').innerHTML = allData[0].facts;
      document.getElementById('animalFav').innerHTML = allData[0].fav;
  
    }catch(error){
      console.log("error", error);
    }
  }