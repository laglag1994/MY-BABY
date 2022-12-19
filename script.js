
const d=document.getElementById('days')
const h=document.querySelector('#hours')
const m=document.querySelector('#mins')
const s=document.querySelector('#secs')

const firstBday ='28 Nov 2023';

function countdown() {
    const firstBirthDay=new Date (firstBday);
    const currentDate=new Date();

    const distance= (firstBirthDay - currentDate)


    const days=addZero(Math.floor(distance/(1000*3600*24)))
    const hours=addZero(Math.floor(distance/(1000*3600))%24)
    const mins=addZero(Math.floor(distance/(1000*60))%60)
    const sec=addZero(Math.floor(distance/1000)%60)

    console.log(days, hours, mins, sec)

    d.innerHTML=days
    h.innerHTML=hours
    m.innerHTML=mins
    s.innerHTML=sec

}

const addZero=(num)=>{
    if (num<10){
        return '0'+num
    }
return num
}


//initial call
countdown();
setInterval(countdown, 1000);



// d.style.color ='red'