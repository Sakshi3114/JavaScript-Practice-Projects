let hr = document.getElementById('hour');
let min = document.getElementById('minute');
let sec = document.getElementById('second');

function displaytime(){
    let date= new Date();
    //getting hour, mins,secs from date
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let Hrotation = 30*hh + mm/2;
    let Mrotattion = 6*mm;
    let Srotattion = 6*ss;

    hr.style.transform = `rotate(${Hrotation}deg)`;
    min.style.transform=`rotate(${Mrotattion}deg)`;
    sec.style.transform=`rotate(${Srotattion}deg)`;

}

setInterval(displaytime,1000);