let i = 0;
let speed = 300;
let txt=`Iphones | Samsung | Laptops | and accessories`;
const typing = ()=>{
    if (i < txt.length){
        document.querySelector(".anim").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    }
}
typing();
// anime.timeline({loop: true})
//   .add({
//     targets: '.ml15 .word',
//     scale: [14,1],
//     opacity: [0,1],
//     easing: "easeOutCirc",
//     duration: 800,
//     delay: (el, i) => 800 * i
//   }).add({
//     targets: '.ml15',
//     opacity: 0,
//     duration: 1000,
//     easing: "easeOutExpo",
//     delay: 1000
//   });
// let text1="Need a reliable store for UK used electronics?";
// let text2="Worry no more!!!";
// let text3="liam Gadgets";
// let text4="got you covered...";

// let cont = document.querySelector('.hometext');
// const typingEffect =()=>{
// 	 const type1 =()=>{
//     if(i<text1.length){
//         cont.innerHTML += text1.charAt(i);
// 		  i++;
// 		}
// 		setTimeout(type1, 80);
// 	}
// 	 const type2=()=>{
// 		type1();
// 		console.log("I'm done");
// 	}
// 	  type2(); 
// } 
// typingEffect();

// let i =0;
// let images = [];
// let time = 500;
// images[0] = 'image1.jpeg';
// images[1] ='image2.jpg';
// images[2] ='image3.jpg';
// const changeImg = ()=>{
// 	document.slide.src = images[i];
// 	if(i < images.length -1){
// 		i++;
// 	} else {
// 		i=0;
// 	}
// 	setTimeout(changeImg(), time);
// }
// window.onload =  changeImg;