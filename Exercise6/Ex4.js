function change()
{
	let bored = document.getElementById("borred").value;
	let bogreen = document.getElementById("borgreen").value;
	let boblue = document.getElementById("borblue").value;
	let bowidth = document.getElementById("borwidth").value;
	let bared = document.getElementById("backred").value;
	let bagreen = document.getElementById("backgreen").value;
	let bablue = document.getElementById("backblue").value;
	document.getElementById("para").style.backgroundColor="rgb(" + bared + ", " + bagreen + ", " + bablue + ")";
	document.getElementById("para").style.borderColor="rgb(" + bored + ", " + bogreen + ", " + boblue + ")";
	document.getElementById("para").style.borderWidth=bowidth;
}
