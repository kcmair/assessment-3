console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert ("Your form was submited successfully!");
}

const mouseOnDuck = event => alert ("!!!SYSTEM FAILURE YOUR CUMPUTER WILL EXPLODE IN 10 SECONDS!!!");

const rubberDucky = document.querySelector("#duck");
rubberDucky.addEventListener("mouseover", mouseOnDuck);



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);