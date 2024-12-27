const box = document.getElementById('box');
const button = document.getElementById('button');

box.addEventListener('click', () => {
    alert("Golu beta Bakchodi nahi")
})
box.addEventListener('mouseover', () => {
    box.style.width = "50%"
    box.style.height = "50%"
})
button.addEventListener('click', (e) => {
    alert("Golu beta proud of you!!")
    // e.stopPropagation()
})