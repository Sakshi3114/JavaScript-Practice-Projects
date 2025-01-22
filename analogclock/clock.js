setInterval(()=>{
    let hh = document.getElementById('hh');
    let mm = document.getElementById('mm');
    let ss = document.getElementById('ss');

    let sec_dot = document.querySelector('.sec_dot');
    let min_dot = document.querySelector('.min_dot');
    let hr_dot = document.querySelector('.hr_dot');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let hr = document.getElementById("hr");
    let mn = document.getElementById("mn");
    let sc = document.getElementById("sc");
    
    hh.style.strokeDashoffset = 510 - (510 * h)/12;
    //12hr clock
    mm.style.strokeDashoffset= 630 - (630 * m)/60;
    //60 minutes
    ss.style.strokeDashoffset= 760 - (760 * s)/60;
    //60seconds

    sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
    min_dot.style.transform = `rotateZ(${m* 6}deg)`;
    hr_dot.style.transform = `rotateZ(${h * 30}deg)`;

    hr.style.transform=`rotateZ(${h * 30}deg)`;
    mn.style.transform=`rotateZ(${m * 6}deg)`;
    sc.style.transform=`rotateZ(${s* 6}deg)`;




})
