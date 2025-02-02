const header = document.getElementById('header')

const html_boxes = document.getElementById('container1')
const css_boxes = document.getElementById('container2')
const jscript_boxes = document.getElementById('container3')
const project_boxes = document.getElementById('container4')
var html_on = true // first on page load
var css_on = false
var jscript_on = false
var projects_on = false

header.onclick = function() {change_header()}

function change_header() {
    let menubar = document.getElementsByClassName('menubar')[0]
    let bottombar = document.getElementsByClassName('bottombar')[0]
    if (menubar) {
        if (html_on) {
            header.innerHTML = 'CSS'
            menubar.style.backgroundColor = '#D84040'// red
            bottombar.style.backgroundColor = '#D84040'// red
            
            html_boxes.style.opacity = '0'
            html_boxes.style.display = 'none'

            css_boxes.style.opacity = '1'
            css_boxes.style.display = 'flex'

            html_on = false
            css_on = true
        } else if (css_on) {
            header.innerHTML = 'JavaScript'
            menubar.style.backgroundColor = '#E7D283'// yellow
            bottombar.style.backgroundColor = '#E7D283'// yellow

            css_boxes.style.opacity = '0'
            css_boxes.style.display = 'none'

            jscript_boxes.style.opacity = '1'
            jscript_boxes.style.display = 'flex'

            css_on = false
            jscript_on = true
        } else if (jscript_on) {
            header.innerHTML = 'Others'
            menubar.style.backgroundColor = '#97e783' // blue
            bottombar.style.backgroundColor = '#97e783' // blue

            jscript_boxes.style.opacity = '0'
            jscript_boxes.style.display = 'none'

            project_boxes.style.opacity = '1'
            project_boxes.style.display = 'flex'

            jscript_on = false
            projects_on = true
        }else if (projects_on) {
            header.innerHTML = 'HTML'
            menubar.style.backgroundColor = '#404f81' // blue
            bottombar.style.backgroundColor = '#404f81' // blue

            project_boxes.style.opacity = '0'
            project_boxes.style.display = 'none'

            html_boxes.style.opacity = '1'
            html_boxes.style.display = 'flex'

            projects_on = false
            html_on = true
        }
    }
}
