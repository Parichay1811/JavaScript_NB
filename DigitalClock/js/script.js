const time = document.getElementById('time')
const timeformat = document.getElementById('time-format')
document.addEventListener('DOMContentLoaded',() => {
    setInterval(showTime, 1000);
})
const showTime = () => {
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    // if(h < 10){
    //     h = '0' + h;
    // }
    // if(m < 10){
    //     m = '0' + m;
    // }
    // if(s < 10){
    //     s = '0' + s;
    // }
    // or
    h < 10 ? h = '0' + h : h;
    m < 10 ? m = '0' + m : m;
    s < 10 ? s = '0' + s : s;

    time.innerHTML = `${h} : ${m} : ${s}`
    timeformat.innerHTML = h > 12 ? " PM" : "AM"
}