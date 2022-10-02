let font = document.getElementById("dynamicFont");
let suffleFontList = document.getElementById("suffleFontSize");
let suffleFontFamily = document.getElementById("suffleFontFamily");

let openFontOptions = () => {
	suffleFontList.style.display = "block";
};
let openFamilyOptions = () => {
	suffleFontFamily.style.display = "block";
};
let changeFont = (value) => {
	// console.log("HELLO", value);
	font.style.fontSize = value + "px";
	suffleFontList.style.display = "none";
};
let changeFontFamily = (family) => {
	font.style.fontFamily = family;
	suffleFontFamily.style.display = "none";
};
