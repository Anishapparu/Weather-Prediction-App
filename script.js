const apikey="a1b9ec9c2f1d3411ae44b9a5d234b10b";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search #iconn"); 
const image=document.querySelector(".imgg");



async function checkWeather(city) {
    const response = await fetch(apiurl+ city + `&appid=${apikey}`);
    

    if(response.status==404){
        document.querySelector(".invalid").style.display="block";
        document.querySelector(".diss").style.display="none";
    }
    else{

    var data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".percent").innerHTML=data.main.humidity+"%";
    document.querySelector(".km").innerHTML=data.wind.speed+" km/h";  
    
    if(data.weather[0].main=="Mist"){
        image.src="./image/mist.png"
    }
    else if(data.weather[0].main=="Clear"){
        image.src="./image/clear.png"
    }
    else if(data.weather[0].main=="Rain"){
        image.src="./image/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        image.src="./image/drizzle.png"
    }
    else if(data.weather[0].main=="Clouds"){
        image.src="./image/clouds.png"
    }
    else if(data.weather[0].main=="Snow"){
        image.src="./image/snow.png"
    }

    document.querySelector(".diss").style.display="block";
    document.querySelector(".invalid").style.display="none";
        
    }
console.log(data);


}

searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
})
