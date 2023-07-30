

// toggle menu icon navbar 
let menu = document.querySelector('#menu-icon');
        let navlist = document.querySelector('.navbar');

        menu.onclick = () => {
            // menu.classList.toggle('');
            navlist.classList.toggle('open');
        };
        window.onscroll = () => {
            // menu.classList.toggle('');
            navlist.classList.remove('open');
        };




        // back to top btn 
        myBtn = document.getElementById('my-btn');

        window.onscroll = function (){
            navlist.classList.remove('open');
            if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                myBtn.style.display = 'block';
            }else {
                myBtn.style.display = 'none'
            }
        }

        function topScroll(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }





// scroll active menu start here 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    navlist.classList.remove('open');
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
}



// darkmood and night mode start here 

const options = {
    bottom: '150px', // default: '32px'
    right: '50px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  




