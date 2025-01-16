const submitButton = document.getElementById("submit")
submitButton.onclick = function() {addTask(task)}

function addTask(task) {
    var task = document.getElementById("task").value
    if (task !== null && task !== "") {
        const listElement = document.createElement("li")
        const node = document.createTextNode(task)
        listElement.appendChild(node)

        const list = document.getElementById("list")
        list.appendChild(listElement)

        document.getElementById("task").value = ""
    }
}

