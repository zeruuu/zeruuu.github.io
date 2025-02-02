const arrow_about = document.getElementById('arrow_about')
const about_me_box = document.getElementsByClassName('aboutme')[0]
const profile_box = document.getElementById('profile_desc')
arrow_about.onclick = function() {about_dropdown()}
about_me_box.onclick = function() {about_dropdown()}
var arrow_about_toggle = false;

function about_dropdown() {
    let aboutMe = document.getElementsByClassName('aboutme')[0]
    if (aboutMe) { 
        if (!arrow_about_toggle) {
            arrow_about_toggle = true
            aboutMe.style.width = '500px'
            aboutMe.style.height = '525px'
            aboutMe.style.transitionDelay = '0s'

            profile_box.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            profile_box.style.opacity = '1'               
            profile_box.style.width = '500px'
            profile_box.style.height = '650px'

            arrow_about.style.transitionDelay = '0.2s'
            arrow_about.style.rotate = '90deg'
        } else {
            arrow_about_toggle = false
            aboutMe.style.width = '175px'
            aboutMe.style.height = '30px'
            aboutMe.style.transitionDelay = '0.6s'

            profile_box.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            profile_box.style.opacity = '0'
            profile_box.style.width = '50px'
            profile_box.style.height = '65px'
            
            arrow_about.style.transitionDelay = '0.5s'
            arrow_about.style.rotate = '0deg'
        }
    }   
}


const arrow_progress = document.getElementById('arrow_progress')
const progress_box_parent = document.getElementsByClassName('progressbox')[0]
const progress_box = document.getElementById('progress_desc')
arrow_progress.onclick = function() {progress_dropdown()}
progress_box_parent.onclick = function() {progress_dropdown()}
var arrow_progress_toggle = false;

function progress_dropdown() {
    let progress = document.getElementsByClassName('progressbox')[0]
    if (progress) { 
        if (!arrow_progress_toggle) {
            arrow_progress_toggle = true
            progress.style.width = '475px'
            progress.style.height = '525px'
            progress.style.transitionDelay = '0s'

            progress_box.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            progress_box.style.opacity = '1'               
            progress_box.style.width = '475px'
            progress_box.style.height = '550px'

            arrow_progress.style.transitionDelay = '0.2s'
            arrow_progress.style.rotate = '90deg'
        } else {
            arrow_progress_toggle = false
            progress.style.width = '200px'
            progress.style.height = '30px'
            progress.style.transitionDelay = '0.6s'

            progress_box.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            progress_box.style.opacity = '0'
            progress_box.style.width = '50px'
            progress_box.style.height = '65px'
            
            arrow_progress.style.transitionDelay = '0.5s'
            arrow_progress.style.rotate = '0deg'
        }
    }   
}

const arrow_progress2 = document.getElementById('arrow_progress2')
const progress_box_parent2 = document.getElementsByClassName('progressbox2')[0]
const progress_box2 = document.getElementById('progress_desc2')
arrow_progress2.onclick = function() {progress2_dropdown()}
progress_box_parent2.onclick = function() {progress2_dropdown()}
var arrow_progress_toggle2 = false;

function progress2_dropdown() {
    let progress2 = document.getElementsByClassName('progressbox2')[0]
    if (progress2) { 
        if (!arrow_progress_toggle2) {
            arrow_progress_toggle2 = true
            progress2.style.width = '475px'
            progress2.style.height = '525px'
            progress2.style.transitionDelay = '0s'

            progress_box2.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            progress_box2.style.opacity = '1'               
            progress_box2.style.width = '475px'
            progress_box2.style.height = '550px'

            arrow_progress2.style.transitionDelay = '0.2s'
            arrow_progress2.style.rotate = '90deg'
        } else {
            arrow_progress_toggle2 = false
            progress2.style.width = '250px'
            progress2.style.height = '30px'
            progress2.style.transitionDelay = '0.6s'

            progress_box2.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            progress_box2.style.opacity = '0'
            progress_box2.style.width = '50px'
            progress_box2.style.height = '65px'
            
            arrow_progress2.style.transitionDelay = '0.5s'
            arrow_progress2.style.rotate = '0deg'
        }
    }   
}

// --------------------------- box2 ----------------------------

const arrow_css1 = document.getElementById('arrow_css1')
const css1_box = document.getElementsByClassName('css1')[0]
const css1_desc = document.getElementById('css_desc1')
arrow_css1.onclick = function() {css1_dropdown()}
css1_box.onclick = function() {css1_dropdown()}
var arrow_css1_toggle = false;

function css1_dropdown() {
    let css1 = document.getElementsByClassName('css1')[0]
    if (css1) { 
        if (!arrow_css1_toggle ) {
            arrow_css1_toggle  = true
            css1_box .style.width = '300px'
            css1_box .style.height = '450px'
            css1_box .style.transitionDelay = '0s'

            css1_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            css1_desc.style.opacity = '1'               
            css1_desc.style.width = '300px'
            css1_desc.style.height = '420px'

            arrow_css1.style.transitionDelay = '0.2s'
            arrow_css1.style.rotate = '90deg'
        } else {
            arrow_css1_toggle = false
            css1_box .style.width = '150px'
            css1_box .style.height = '30px'
            css1_box .style.transitionDelay = '0.6s'

            css1_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            css1_desc.style.opacity = '0'
            css1_desc.style.width = '50px'
            css1_desc.style.height = '65px'
            
            arrow_css1.style.transitionDelay = '0.5s'
            arrow_css1.style.rotate = '0deg'
        }
    }   
}

const arrow_css2 = document.getElementById('arrow_css2')
const css2_box = document.getElementsByClassName('css2')[0]
const css2_desc = document.getElementById('css_desc2')
arrow_css2.onclick = function() {css2_dropdown()}
css2_box.onclick = function() {css2_dropdown()}
var arrow_css2_toggle = false;

function css2_dropdown() {
    let css2 = document.getElementsByClassName('css2')[0]
    if (css2) { 
        if (!arrow_css2_toggle ) {
            arrow_css2_toggle  = true
            css2_box .style.width = '300px'
            css2_box .style.height = '450px'
            css2_box .style.transitionDelay = '0s'

            css2_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            css2_desc.style.opacity = '1'               
            css2_desc.style.width = '300px'
            css2_desc.style.height = '420px'

            arrow_css2.style.transitionDelay = '0.2s'
            arrow_css2.style.rotate = '90deg'
        } else {
            arrow_css2_toggle = false
            css2_box .style.width = '150px'
            css2_box .style.height = '30px'
            css2_box .style.transitionDelay = '0.6s'

            css2_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            css2_desc.style.opacity = '0'
            css2_desc.style.width = '50px'
            css2_desc.style.height = '65px'
            
            arrow_css2.style.transitionDelay = '0.5s'
            arrow_css2.style.rotate = '0deg'
        }
    }   
}

const arrow_css3 = document.getElementById('arrow_css3')
const css3_box = document.getElementsByClassName('css3')[0]
const css3_desc = document.getElementById('css_desc3')
arrow_css3.onclick = function() {css3_dropdown()}
css3_box.onclick = function() {css3_dropdown()}
var arrow_css3_toggle = false;

function css3_dropdown() {
    let css3 = document.getElementsByClassName('css3')[0]
    if (css3) { 
        if (!arrow_css3_toggle ) {
            arrow_css3_toggle  = true
            css3_box .style.width = '300px'
            css3_box .style.height = '450px'
            css3_box .style.transitionDelay = '0s'

            css3_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            css3_desc.style.opacity = '1'               
            css3_desc.style.width = '300px'
            css3_desc.style.height = '420px'

            arrow_css3.style.transitionDelay = '0.2s'
            arrow_css3.style.rotate = '90deg'
        } else {
            arrow_css3_toggle = false
            css3_box .style.width = '150px'
            css3_box .style.height = '30px'
            css3_box .style.transitionDelay = '0.6s'

            css3_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            css3_desc.style.opacity = '0'
            css3_desc.style.width = '50px'
            css3_desc.style.height = '65px'
            
            arrow_css3.style.transitionDelay = '0.5s'
            arrow_css3.style.rotate = '0deg'
        }
    }   
}

const arrow_css4 = document.getElementById('arrow_css4')
const css4_box = document.getElementsByClassName('css4')[0]
const css4_desc = document.getElementById('css_desc4')
arrow_css4.onclick = function() {css4_dropdown()}
css4_box.onclick = function() {css4_dropdown()}
var arrow_css4_toggle = false;

function css4_dropdown() {
    let css4 = document.getElementsByClassName('css4')[0]
    if (css4) { 
        if (!arrow_css4_toggle ) {
            arrow_css4_toggle  = true
            css4_box .style.width = '300px'
            css4_box .style.height = '450px'
            css4_box .style.transitionDelay = '0s'

            css4_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            css4_desc.style.opacity = '1'               
            css4_desc.style.width = '300px'
            css4_desc.style.height = '420px'

            arrow_css4.style.transitionDelay = '0.2s'
            arrow_css4.style.rotate = '90deg'
        } else {
            arrow_css4_toggle = false
            css4_box .style.width = '150px'
            css4_box .style.height = '30px'
            css4_box .style.transitionDelay = '0.6s'

            css4_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            css4_desc.style.opacity = '0'
            css4_desc.style.width = '50px'
            css4_desc.style.height = '65px'
            
            arrow_css4.style.transitionDelay = '0.5s'
            arrow_css4.style.rotate = '0deg'
        }
    }   
}

// ---------------------------- javascript

const arrow_js1 = document.getElementById('arrow_js1')
const js1_box = document.getElementsByClassName('js1')[0]
const js1_desc = document.getElementById('js_desc1')
arrow_js1.onclick = function() {js1_dropdown()}
js1_box.onclick = function() {js1_dropdown()}
var arrow_js1_toggle = false;

function js1_dropdown() {
    let js1 = document.getElementsByClassName('js1')[0]
    if (js1) { 
        if (!arrow_js1_toggle ) {
            arrow_js1_toggle  = true
            js1_box .style.width = '300px'
            js1_box .style.height = '450px'
            js1_box .style.transitionDelay = '0s'

            js1_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            js1_desc.style.opacity = '1'               
            js1_desc.style.width = '300px'
            js1_desc.style.height = '420px'

            arrow_js1.style.transitionDelay = '0.2s'
            arrow_js1.style.rotate = '90deg'
        } else {
            arrow_js1_toggle = false
            js1_box .style.width = '175px'
            js1_box .style.height = '30px'
            js1_box .style.transitionDelay = '0.6s'

            js1_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            js1_desc.style.opacity = '0'
            js1_desc.style.width = '50px'
            js1_desc.style.height = '65px'
            
            arrow_js1.style.transitionDelay = '0.5s'
            arrow_js1.style.rotate = '0deg'
        }
    }   
}

const arrow_js2 = document.getElementById('arrow_js2')
const js2_box = document.getElementsByClassName('js2')[0]
const js2_desc = document.getElementById('js_desc2')
arrow_js2.onclick = function() {js2_dropdown()}
js2_box.onclick = function() {js2_dropdown()}
var arrow_js2_toggle = false;

function js2_dropdown() {
    let js2 = document.getElementsByClassName('js2')[0]
    if (js2) { 
        if (!arrow_js2_toggle ) {
            arrow_js2_toggle  = true
            js2_box .style.width = '300px'
            js2_box .style.height = '450px'
            js2_box .style.transitionDelay = '0s'

            js2_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            js2_desc.style.opacity = '1'               
            js2_desc.style.width = '300px'
            js2_desc.style.height = '420px'

            arrow_js2.style.transitionDelay = '0.2s'
            arrow_js2.style.rotate = '90deg'
        } else {
            arrow_js2_toggle = false
            js2_box .style.width = '175px'
            js2_box .style.height = '30px'
            js2_box .style.transitionDelay = '0.6s'

            js2_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            js2_desc.style.opacity = '0'
            js2_desc.style.width = '50px'
            js2_desc.style.height = '65px'
            
            arrow_js2.style.transitionDelay = '0.5s'
            arrow_js2.style.rotate = '0deg'
        }
    }   
}

const arrow_js3 = document.getElementById('arrow_js3')
const js3_box = document.getElementsByClassName('js3')[0]
const js3_desc = document.getElementById('js_desc3')
arrow_js3.onclick = function() {js3_dropdown()}
js3_box.onclick = function() {js3_dropdown()}
var arrow_js3_toggle = false;

function js3_dropdown() {
    let js3 = document.getElementsByClassName('js3')[0]
    if (js3) { 
        if (!arrow_js3_toggle ) {
            arrow_js3_toggle  = true
            js3_box .style.width = '300px'
            js3_box .style.height = '450px'
            js3_box .style.transitionDelay = '0s'

            js3_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            js3_desc.style.opacity = '1'               
            js3_desc.style.width = '300px'
            js3_desc.style.height = '420px'

            arrow_js3.style.transitionDelay = '0.2s'
            arrow_js3.style.rotate = '90deg'
        } else {
            arrow_js3_toggle = false
            js3_box .style.width = '175px'
            js3_box .style.height = '30px'
            js3_box .style.transitionDelay = '0.6s'

            js3_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            js3_desc.style.opacity = '0'
            js3_desc.style.width = '50px'
            js3_desc.style.height = '65px'
            
            arrow_js3.style.transitionDelay = '0.5s'
            arrow_js3.style.rotate = '0deg'
        }
    }   
}

const arrow_js4 = document.getElementById('arrow_js4')
const js4_box = document.getElementsByClassName('js4')[0]
const js4_desc = document.getElementById('js_desc4')
arrow_js4.onclick = function() {js4_dropdown()}
js4_box.onclick = function() {js4_dropdown()}
var arrow_js4_toggle = false;

function js4_dropdown() {
    let js4 = document.getElementsByClassName('js4')[0]
    if (js4) { 
        if (!arrow_js4_toggle ) {
            arrow_js4_toggle  = true
            js4_box .style.width = '300px'
            js4_box .style.height = '450px'
            js4_box .style.transitionDelay = '0s'

            js4_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            js4_desc.style.opacity = '1'               
            js4_desc.style.width = '300px'
            js4_desc.style.height = '420px'

            arrow_js4.style.transitionDelay = '0.2s'
            arrow_js4.style.rotate = '90deg'
        } else {
            arrow_js4_toggle = false
            js4_box .style.width = '175px'
            js4_box .style.height = '30px'
            js4_box .style.transitionDelay = '0.6s'

            js4_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            js4_desc.style.opacity = '0'
            js4_desc.style.width = '50px'
            js4_desc.style.height = '65px'
            
            arrow_js4.style.transitionDelay = '0.5s'
            arrow_js4.style.rotate = '0deg'
        }
    }   
}

const arrow_proj1 = document.getElementById('arrow_proj1')
const proj1_box = document.getElementsByClassName('project1')[0]
const proj1_desc = document.getElementById('project_desc1')
arrow_proj1.onclick = function() {proj1_dropdown()}
proj1_box.onclick = function() {proj1_dropdown()}
var arrow_proj1_toggle = false;

function proj1_dropdown() {
    let proj1_box = document.getElementsByClassName('project1')[0]
    if (proj1_box) { 
        if (!arrow_proj1_toggle ) {
            arrow_proj1_toggle  = true
            proj1_box .style.width = '400px'
            proj1_box .style.height = '450px'
            proj1_box .style.transitionDelay = '0s'

            proj1_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            proj1_desc.style.opacity = '1'               
            proj1_desc.style.width = '400px'
            proj1_desc.style.height = '420px'

            arrow_proj1.style.transitionDelay = '0.2s'
            arrow_proj1.style.rotate = '90deg'
        } else {
            arrow_proj1_toggle = false
            proj1_box.style.width = '200px'
            proj1_box.style.height = '30px'
            proj1_box.style.transitionDelay = '0.6s'

            proj1_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            proj1_desc.style.opacity = '0'
            proj1_desc.style.width = '50px'
            proj1_desc.style.height = '65px'
            
            arrow_proj1.style.transitionDelay = '0.5s'
            arrow_proj1.style.rotate = '0deg'
        }
    }   
}

const arrow_proj2 = document.getElementById('arrow_proj2')
const proj2_box = document.getElementsByClassName('project2')[0]
const proj2_desc = document.getElementById('project_desc2')
arrow_proj2.onclick = function() {proj2_dropdown()}
proj2_box.onclick = function() {proj2_dropdown()}
var arrow_proj2_toggle = false;

function proj2_dropdown() {
    let proj2_box = document.getElementsByClassName('project2')[0]
    if (proj2_box) { 
        if (!arrow_proj2_toggle ) {
            arrow_proj2_toggle  = true
            proj2_box .style.width = '300px'
            proj2_box .style.height = '450px'
            proj2_box .style.transitionDelay = '0s'

            proj2_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            proj2_desc.style.opacity = '1'               
            proj2_desc.style.width = '300px'
            proj2_desc.style.height = '420px'

            arrow_proj2.style.transitionDelay = '0.2s'
            arrow_proj2.style.rotate = '90deg'
        } else {
            arrow_proj2_toggle = false
            proj2_box.style.width = '200ppx'
            proj2_box.style.height = '30px'
            proj2_box.style.transitionDelay = '0.6s'

            proj2_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            proj2_desc.style.opacity = '0'
            proj2_desc.style.width = '50px'
            proj2_desc.style.height = '65px'
            
            arrow_proj2.style.transitionDelay = '0.5s'
            arrow_proj2.style.rotate = '0deg'
        }
    }   
}

const arrow_proj3 = document.getElementById('arrow_proj3')
const proj3_box = document.getElementsByClassName('project3')[0]
const proj3_desc = document.getElementById('project_desc3')
arrow_proj3.onclick = function() {proj3_dropdown()}
proj3_box.onclick = function() {proj3_dropdown()}
var arrow_proj3_toggle = false;

function proj3_dropdown() {
    let proj3_box = document.getElementsByClassName('project3')[0]
    if (proj3_box) { 
        if (!arrow_proj3_toggle ) {
            arrow_proj3_toggle  = true
            proj3_box .style.width = '400px'
            proj3_box .style.height = '450px'
            proj3_box .style.transitionDelay = '0s'

            proj3_desc.style.transitionDelay = '0.8s, 0s, 0s' /* opa, wid, hei --- resize first before appear*/         
            proj3_desc.style.opacity = '1'               
            proj3_desc.style.width = '400px'
            proj3_desc.style.height = '420px'

            arrow_proj3.style.transitionDelay = '0.2s'
            arrow_proj3.style.rotate = '90deg'
        } else {
            arrow_proj3_toggle = false
            proj3_box.style.width = '200px'
            proj3_box.style.height = '30px'
            proj3_box.style.transitionDelay = '0.6s'

            proj3_desc.style.transitionDelay = '0s, 1s, 1s' /* opa, wid, hei --- let opacity disappear first before resize*/
            proj3_desc.style.opacity = '0'
            proj3_desc.style.width = '50px'
            proj3_desc.style.height = '65px'
            
            arrow_proj3.style.transitionDelay = '0.5s'
            arrow_proj3.style.rotate = '0deg'
        }
    }   
}