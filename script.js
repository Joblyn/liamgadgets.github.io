var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 10;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  
  //menu bar 
  var icon = document.querySelector("#menubar");
  var i = document.querySelector("#icon")
  const show = ()=>{
    nav = document.querySelector('nav');
    if(nav.className!=="menu"){
    nav.classList.add("menu");
    i.className='fa fa-times';
    i.classList.remove("fa-bars");
    } else{
      nav.classList.remove("menu");
      i.classList.remove("fa-times");
      i.classList.add("fa-bars");
    }
  }
  icon.addEventListener("click", show);
  // const menuClose=()=>{
  //   const nav = document.querySelector('nav');
  //   if(nav.className==="menu"){
  //     i.classList.remove("fa-times");
  //     i.classList.add("fa-bars");
  //   }
  // }
  // i.addEventListener("click", menuClose)
  
  // popuform
  const overlayOnPopupForm = document.querySelector("#overlayOnFormPopup");
  const popupForm = () => {
    form.style.display =  "block";
    overlayOnPopupForm.style.display = "block";
  }
  $(document).ready(setTimeout(popupForm, 8000));
  
    // grab email
  const input = document.getElementById("email");
  const emailLength = () => input.value.length;
  const grabEmail = () => {
    const email = input.value;
    console.log(email);

    const data = { Emails: email };

    fetch('https://emaillistings.herokuapp.com/api/v1/update', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

    form.innerHTML = "Thanks for Subscribing!";
  }
  
  const formClose = () => {
    form.style.display = "none";
    overlayOnPopupForm.style.display = "none";
  }
    // on submit-click
  const grabEmailonClick = () => {
    if(emailLength() > 0) {
        grabEmail();
        setTimeout(formClose, 1000);
    }  
  }
  const submit = document.getElementById("submit");
  submit.addEventListener("click", grabEmailonClick);
  
    // on "Enter" key-press
  const grabEmailAfterKeypress = (event) => {
    if (emailLength() > 0 && event.which === 13) {
       grabEmail();
       setTimeout(formClose, 1000);
    }
  }
  input.addEventListener("KeyPress", grabEmailAfterKeypress);
  document.querySelector(".icon").addEventListener("click", formClose);
  
  // order button animation
  const order = document.querySelector('.order');
  let ordericon = document.querySelector('.fa-long-arrow-right');
  const move = ()=>{
    ordericon.classList.add("move");
  }
  const out = ()=>{
      ordericon.classList.remove("move");
  }
  order.addEventListener('mouseover', move);
  order.addEventListener('mouseleave', out);