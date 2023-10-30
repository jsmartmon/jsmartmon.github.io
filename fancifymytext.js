document.getElementById("myB").addEventListener("click", helloWorld()); 

function helloWorld() {
    alert("Hello, world!");
}

function textBig() {
	document.getElementById("myText").style.fontSize="24px";
}

function textFancy() {
	document.getElementById("myText").style.fontWeight="bold";
	document.getElementById("myText").style.color="blue";
    document.getElementById("myText").style.textDecoration="underline";
}

function textBoring() {
	document.getElementById("myText").style.fontWeight="normal";
	document.getElementById("myText").style.color="black";
    document.getElementById("myText").style.textDecoration="none";
}

function textMoo() {
	var i = document.getElementById("myText");
    i.value = i.value.toUpperCase();
	var j = i.value;
	var parts = j.split(".");
    j = parts.join("-Moo. ");
    i.value = j;
}