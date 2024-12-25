//click event

const parent = document.querySelector("#box")
const child = document.querySelector(".child")
const inPut = document.querySelector("#type")
// parent.addEventListener('click', () => {
//     console.log("Parent clicked")
//     parent.style.backgroundColor = "blue"
//     child.style.backgroundColor = "red"
// })
// child.addEventListener('click', (event) => {
//     console.log(event)
//     event.stopPropagation()
//     console.log("Child clicked")
// })

// parent.addEventListener('mouseleave', () => {
//     parent.innerText = "Hovered"
// })
inPut.addEventListener('keypress', () => {
    // console.log(inPut.key)
    alert("key is pressed")
    child.style.backgroundColor = "red"
})

