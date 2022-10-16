// JavaScript Document
let searchBox = document.querySelector('#search-input');
let images = document.querySelectorAll('.search-box .container .movies-content .movie-box');

searchBox.oninput = () =>{
	images.forEach(hide => hide.style.display = 'none');
	let value = searchBox.value;
	images.forEach(filter =>{
		let title = filter.getAttribute('data-title');
		if(value == title){
			filter.style.display = 'block';
		}
		if(searchBox.value == ''){
			filter.style.display = 'block';
		}
	});
};