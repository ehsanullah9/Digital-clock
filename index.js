const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');
const ampmEl = document.querySelector('.ampm');

function clockUpdate(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = 'AM';

    if(h > 12){
            h = h -12;
            ampm = 'PM';
            ampmEl.style.color ='gray';
        }
        h=h<10?'0'+h:h;
        m=m<10?'0'+m:m;
        s=s<10?'0'+s:s;


    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    ampmEl.innerHTML = ampm;

        
    setTimeout(()=>{
        clockUpdate()
    },1000)
      
}
clockUpdate()
