const ani = ScrollReveal({
	distance: '35px',
	duration: 2000,
	reset: true
});
ani.reveal('.side-1', {
	delay: 400,
	origin: 'top'
});
ani.reveal('.side-2', {
	delay: 500,
	origin: 'bottom'
});
ani.reveal('.about-img', {
	delay: 400,
	origin: 'top'
});
ani.reveal('.about-text', {
	delay: 500,
	origin: 'bottom'
});
ani.reveal('.section-header', {
	delay: 400,
	origin: 'top'
});
ani.reveal('.services-content', {
	delay: 600,
	origin: 'bottom'
});
ani.reveal('.contact-content', {
	delay: 600,
	origin: 'bottom'
});
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		scrollToTopBtn.style.display = "block";
	} else {
		scrollToTopBtn.style.display = "none";
	}
}

function scrollToTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}