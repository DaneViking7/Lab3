function validate()
{
	var pass1 = document.getElementById("first_pass").value
	var pass2 = document.getElementById("second_pass").value
	var pass1length = document.getElementById("first_pass").value.length
	if(pass1 != pass2)
	{
		alert("The passwords are different.");
	}
	else if(pass1length < 8)
	{
		alert("Passwords cannot be shorter than 8 characters.");
	}
	else
	{
		alert("This password is valid!");
	}
}
