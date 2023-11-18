"use strict";


const api = "https://jsonblob.com/api/jsonBlob"

fetch(api, {
    method: 'POST',
    body: JSON.stringify({
        name: 'dean',
        login: 'dean',
    }),
    // you also have to add this request header for that API
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    if (response.ok) {
        const blobID = response.headers.get('x-jsonblob');
        console.log(`POST returned a blobID = ${blobID}`);
        // return the blobID we can use to fetch the data later
        return blobID;
    }
    throw new Error('POST Request failed!')
}).then(blobID => {
   // lets do a GET to see if we get the right data
   console.log(`fetch ${api}/${blobID}`);
   return fetch(`${api}/${blobID}`)
}).then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw new Error('GET Request failed! ');
})
.then((Jsondata) => {
    console.log('Result of GET')
    console.log(Jsondata)
}).catch(error => {
    console.log('Request failure: ', error);
});












$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		$.scrollUp();
	}

	/*Responsive Navigation*/
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(350).css({'overflow-y': 'visible'});

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}

});
