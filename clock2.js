const sec= document.getElementById("second")
const min= document.getElementById("minute")
const hours= document.getElementById("hour")

function tiktak() {
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();

 sec.style.transform= ` rotate(${180 + (second * 6)}deg)`
 min.style.transform= ` rotate(${180 + (minute * 6)}deg)`
 hours.style.transform= ` rotate(${180 + (hour * 30)}deg)`
    console.log({sec,min,hours});
}

setInterval(tiktak, 1000)