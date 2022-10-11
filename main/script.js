


function extractDat(param){
    let today;
    switch(param){
        case 6: today = 'Lördag'; break;
        case 7: today = 'Söndag'; break;
        case 1: today = 'Måndag'; break;
        case 2: today = 'Tisdag'; break;
        case 3: today = 'Onsdag'; break;
        case 4: today = 'Torsdag'; break;
        case 5: today = 'Fredag'; break;
    }

    return today;
}

function displayInto(container, obj){
    container.innerHTML += obj;
}

const time = new Date();

console.log((time.getDay()));

const dayLable = document.querySelector('.day');
const dateLable = document.querySelector('.date');
const timeLable = document.querySelector(".time");
const locationLable = document.querySelector('.location');

// display day
displayInto(dayLable,extractDat(time.getDay()) );

// display date
displayInto(dateLable, time.getDate() + "/");
displayInto(dateLable, time.getMonth() + "/");
displayInto(dateLable, time.getFullYear());

console.log(time.getDate());

console.log(time.getTime());

// displayTime
function doDate()
{
    var str = "";
    var now = new Date();

    str += "Time: " + now.getHours() +":" + now.getMinutes() + ":" + now.getSeconds();
    document.querySelector(".time").innerHTML = str;
}

setInterval(doDate, 1000);

displayInto(locationLable, 'Örebro, Sweden');




/**fetch weather info */


const city = document.querySelector('.city');
const hTemp = document.querySelector('.temp');
const we_description = document.querySelector('.we_des');
const max_min_temp = document.querySelector('.max_min_temp');
const submitWeather = document.getElementById('submitWeather')
const inputWeather = document.querySelector('.input')



let cityToSearch = ''
submitWeather.onclick = function(){
    cityToSearch = inputWeather.value;
    inputWeather.value = ""
    updateWeather();
}




function updateWeather(){
    if(cityToSearch == "")
        cityToSearch = 'orebro';
    fetch('https://api.openweathermap.org/data/2.5/weather?&q='+ cityToSearch + '&appid=830f81136e1ef6b0c6e5deb2efc17a2f&units=metric&lang=sv')
        .then( (response) => response.json() )
        //.then( (data)=> console.log(data) );
        .then( (data) =>{
                let region = data['name']
                let weatherDesc = data['weather']['0']['main'] + ", " + data['weather']['0']['description']
                let temp = data['main']['temp']
                let wind = data['wind']['speed']
                let max_min = [data['main']['temp_max'], data['main']['temp_min'] ]
                console.log('City = ' + region)
                city.innerHTML =  `<h1> ${region} </h1>`
                hTemp.innerHTML = `<h1> ${temp}°</h1>`
                max_min_temp.innerHTML = `<span>Max-temp: ${max_min[0]}° <br> Min-temp: ${max_min[1]}°` 
                we_description.innerHTML = weatherDesc
            }
            
        )
}
if(cityToSearch == '' ){
    cityToSearch = 'orebro'    
    updateWeather()
}
/*
    fetch('https://api.openweathermap.org/data/2.5/weather?&q=orebro&appid=830f81136e1ef6b0c6e5deb2efc17a2f')
    .then( (response) => response.json() )
    .then( (data)=> console.log(data) )
    /*.then( (data)=> {
        var name = data['name']
        var desc = data['weather']['0']['description']
        var temp = data['main']['temp']
        var wndspeed = data['wind']['speed']
        console.log('name = ' + name + "desc = " + desc + " temp = " + temp + " wnd =" + wndspeed)
    } )*/
    


/*Contact section*/

mail_info = {
    Host: "smtp.elasticemail.com",
    Username : "ahmeedo.khaled@gmail.com",
    Password : "CE584131208A5B7579380A7C0428436BD9E9",
    To : 'ahmeedo.khaled@outlook.com',
    From : "ahmeedo.khaled@gmail.com",
    Subject : "Subject",
    Body : "The message"
}

const name_input = document.querySelector('.name_input');
const email_input = document.querySelector('.email_input');
const mobile_input = document.querySelector('.mobile_input');
const message_input = document.querySelector('.message_input');
const submit = document.querySelector('.submit');


submit.onclick = function(){
    // reset the inputs 
    //mail_info.From = email_input.value;
    mail_info.Subject = name_input.value;
    mail_info.Body = (message_input.value + "\n--> Mobile: " + mobile_input.value + "\n--> The sender: " + email_input.value + "\n--> Name: " + name_input.value);
    alert("clicked!!");
    //src="https://smtpjs.com/v3/smtp.js";
    Email.send(mail_info).then(
        message => alert(message)
    );

    resetValue(name_input); resetValue(email_input);resetValue(mobile_input); resetValue(message_input);

}

function resetValue(param){
    param.value = "";
}







