let count = 0
document.getElementById("count").innerHTML = count

const countButton = document.getElementById("click")

countButton.onclick = function(){add()}

function add() {
    count++;
    document.getElementById("count").innerHTML = count
}

// --- Add Event Listener

// countButton.addEventListener("click", ()=>(
//     console.log("clicked")
// ))