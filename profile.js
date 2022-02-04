const favColor = document.getElementById("color");
const favPlace = document.getElementById("place");
const favRitual = document.getElementById("ritual");

const colorFunc = () => alert ("My favorite corlor is green");
const placeFunc = () => alert ("My favorite pace is The Bahamas");
const ritualFunc = () => alert("My favorite ritual is enjoying a meal with others");

favColor.addEventListener("click", colorFunc);
favPlace.addEventListener("click", placeFunc);
favRitual.addEventListener("click", ritualFunc);
