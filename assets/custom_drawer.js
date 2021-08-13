
drawer_toggle = document.querySelector('#drawer-toggle .checkbox')

drawer_toggle.addEventListener('click', function(element) {
	console.log('click');
	document.body.classList.toggle('drawer-open');
	document.body.classList.toggle('overflow-hidden-tablet');
});