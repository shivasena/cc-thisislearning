// nav
var body = document.querySelector('body'),
	navBtn = document.querySelector('.nav-btn'),
	navList = document.querySelector('.nav-list');

navBtn.addEventListener('click', function (e) {
	if (body.classList.contains('nav-open')) {
		body.classList.remove('nav-open');
		navBtn.setAttribute('aria-expanded', 'false');
	} else {
		body.classList.add('nav-open');
		navBtn.setAttribute('aria-expanded', 'true');
	}
});

document.addEventListener('click', function (e) {
	if (e.target.classList.contains('nav-list-link')) {
		body.classList.remove('nav-open');
		navBtn.setAttribute('aria-expanded', 'false');
	}
});


// panels
var panelToggles = Array.prototype.slice.call(document.querySelectorAll('.panel-toggle'));

panelToggles.forEach(function (element) {
	var content = document.querySelector('#' + element.getAttribute('aria-controls'));

	if (!content) return;
	element.removeAttribute('hidden');
	//content.setAttribute('hidden', '');

});

var toggles = document.querySelectorAll('.panel-toggle');
for (var index = 0; index < toggles.length; index++) {
	//var button = toggles[index];
	toggles[index].onclick = function() {
		var content = document.querySelector('#' + this.getAttribute('aria-controls'));
		if (!content) return;

		if (this.getAttribute('aria-expanded') === 'true') {
			this.setAttribute('aria-expanded', false);
			//content.setAttribute('hidden', '');
			content.setAttribute('aria-hidden', true);
			content.classList.remove('visible');
		} else {
			this.setAttribute('aria-expanded', true);
			//content.removeAttribute('hidden');
			content.setAttribute('aria-hidden', false);
			content.classList.add('visible');
		}
	};
}

// document.addEventListener('click', function (e) {
// 	if (!e.target.classList.contains('panel-toggle')) return;

// 	var content = document.querySelector('#' + e.target.getAttribute('aria-controls'));
// 	if (!content) return;

// 	if (e.target.getAttribute('aria-expanded') === 'true') {
// 		e.target.setAttribute('aria-expanded', false);
// 		content.setAttribute('hidden', '');
// 	} else {
// 		e.target.setAttribute('aria-expanded', true);
// 		content.removeAttribute('hidden');
// 	}

// });


// gallery carousel
var tbayGallery = document.getElementById('gallery-tbay-campus');
new Flickity(tbayGallery, {
	cellAlign: 'left',
	freeScroll: true,
	contain: true,
	pageDots: false,
	imagesLoaded: true
});

var regionalGallery = document.getElementById('gallery-regional-campus');
new Flickity(regionalGallery, {
	cellAlign: 'left',
	freeScroll: true,
	contain: true,
	pageDots: false,
	imagesLoaded: true
});

// circles carousel
var circles = document.getElementById('circles');
//new Flickity(circles, {
//	pageDots: false,
//	cellAlign: 'left',
//	groupCells: 2,
//	contain: true,
//	imagesLoaded: true
//});

$('#circles').slick({
	slidesToShow: 2,
	rows: 2,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [
		{
			breakpoint: 879,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 878,
			settings: {
				slidesToShow: 1
				

            }
		}
	]
});


jarallax(document.querySelectorAll('.jarallax'), {
	speed: 0.2
});