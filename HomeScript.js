//Note: we will call the main function in this script upon page load (see html)




//First, a variable to monitor what page/slide we are on:
var slidenumber = 1; //Start on page 1



//A wrapper function for changing the slide
function change(n) {
    main(slidenumber += n);
}


//A function to handle the dot controls
function dotcontrol(n) {
    main(slidenumber = n);
}

function main(n) {

    //iteration variable
    var i;

    //This is a list of the slides:
    var slidelist = document.getElementsByClassName("pics");
    //This is a list of the progress dots:
    var dotlist = document.getElementsByClassName("dot");



    /*
   Our first conditional - if we are on the last slide, we want to 
   go back to the first one if the user presses the right-side arrow again:
   */
    if (n > slidelist.length) {
        slidenumber = 1;
    }

    //Same thing but if we are on slide 1 and the user presses the previous arrow:
    else if (n < 1) {
        slidenumber = slidelist.length;
    }

    //Now we have to go through the elements of the div with class "slides" and make them all 
    //invisible until we want them visible
    for (i = 0; i < slidelist.length; i++) {
        slidelist[i].style.display = "none";
    }

    //Now we iterate through the dots to make them all inactive for now, too
    for (i = 0; i < dotlist.length; i++) {
        dotlist[i].className = dotlist[i].className.replace(" active", "");
    }
    //Making the desired slide visible
    slidelist[slidenumber-1].style.display = "block";
    
    //Setting the right progress dot to active so the colour will be different
    dotlist[slidenumber-1].className += " active";
}


