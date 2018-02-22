var currentImage = 1;

function moveSlides(x)
{
	showImage(currentImage += x);
}

function showImage(x)
{
	var imgTag = document.getElementById("myImg");
	if (x > 5) 
	{
		currentImage = 1;
	}
	if(x < 1)
	{
		currentImage = 5;
	}
	if (currentImage == 1)
	{
		imgTag.src="Corgi.jpg";
	}
	if (currentImage == 2)
	{
		imgTag.src="Ferret.jpeg";
	}
	if (currentImage == 3)
	{
		imgTag.src="GermanShepard.jpg";
	}
	if (currentImage == 4)
	{
		imgTag.src="GreenConure.jpg";
	}
	if (currentImage == 5)
	{
		imgTag.src="Husky.jpg";
	}
}
