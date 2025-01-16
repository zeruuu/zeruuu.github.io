const calculateButton = document.getElementById("calculate")
calculateButton.onclick = function() { calculateDates() }

function calculateDates() {
    let startDate = document.getElementById("startDate").value
    let endDate = document.getElementById("endDate").value

    var startSeconds = Date.parse(startDate)
    var endSeconds = Date.parse(endDate)
    var finalSeconds = endSeconds - startSeconds
    var days = finalSeconds / 86400000

    document.getElementById("result").innerHTML = "The difference is " + days + " days."
}