/* Initial Navbar */
const bar = document.getElementById('bar');

const links = bar.getElementsByClassName('nav-link');

for(i=0;i<links.length;i++){
links[i].addEventListener('click',function(){
    const current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(" active","");
    this.className += " active";
})
}

/* Bottom Navbar */

const grabId = document.getElementById('bar2');
const grabClass = grabId.getElementsByClassName('nav-link2');

for(i=0;i<grabClass.length;i++){
    grabClass[i].addEventListener('click',function(){
        const result = document.getElementsByClassName('active');
        result[1].className = result[1].className.replace(' active','');
        this.className += ' active';
    })
}