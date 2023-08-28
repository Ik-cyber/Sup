setTimeout(() => {
  const box = document.getElementById("container");
  box.style.display = "none";
}, 4000);

setTimeout(() => {
  const preloader = document.getElementsById("preloader");
  preloader.style.display = "none";
}, 1000);


const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

	const words = elem.textContent.split(' ');
	elem.innerHTML = '';

	words.forEach((el, index) => {
		words[index] = `<span><i>${words[index]}</i></span>`;
	});

	elem.innerHTML = words.join(' ');

	const children = document.querySelectorAll('span > i');
	children.forEach((node, index) => {
		node.style.animationDelay = `${index * .2}s`;
	});

});