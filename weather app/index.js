window.addEventListener("load", ()=>{

     let long;
     let lat;


     if(navigator.geolocation){
          navigator.geolocation.getCurrentPosition(position =>{

               long=position.coords.longitude;
               lat= position.coords.latitude;

               const api = "https://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ long +"&appid=7b97d0d47553127f3fb20759981443ad&units=metric"

               //Fetching url for api
                    fetch(api)
                    .then(response =>{
                              return response.json();
                              })
                    
                              .then(data =>{
                                   console.log(data);


                                   //taking variables to store data
                                   var temperature;
                                   temperature = data.main.temp;
                                   console.log(temperature);
                                   //taking  ids to show data                    
                                    tempdoc = document.getElementById('temp');
                                   //printing in id
                                    tempdoc.innerHTML =`${temperature}  C` ;



                                   //taking variable to store data 
                                   var name; 
                                   name = data.name;
                                   //taking  ids to show data
                                   namedoc = document.getElementById('city');
                                   //printing in id
                                   namedoc.innerHTML =`${name}` ;


                                   //taking variable to store data 
                                   var descr; 
                                   descr = data.weather[0].main;
                                   console.log(descr);
                                   //taking  ids to show data
                                   descdoc = document.getElementById('desc');
                                   //printing in id
                                   descdoc.innerHTML =`${descr}` ;


                                   //for icon
                                   var iconcode = data.weather[0].icon;
                                   var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
                                   $('#wicon').attr('src', iconurl);



                                   //For Wind
                                   //taking variable to store data 
                                   var wind; 
                                   wind = data.wind.speed;
                                   console.log(wind);
                                   //taking  ids to show data
                                   winddoc = document.getElementById('wind');
                                   //printing in id
                                   winddoc.innerHTML =` :${wind}` ;

                              });


          });

          



     }

     var skycons = new Skycons({"color": "white"});
     // on Android, a nasty hack is needed: {"resizeClear": true}
   
     // you can add a canvas by it's ID...
     skycons.add("icon1", Skycons.WIND);
   
     
   
     // if you're using the Forecast API, you can also supply
     // strings: "partly-cloudy-day" or "rain".
   
     // start animation!
     skycons.play();
   
     // you can also halt animation with skycons.pause()
   

   

});