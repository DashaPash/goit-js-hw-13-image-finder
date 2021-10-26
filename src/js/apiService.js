const API_KEY = '24039178-b232e977d52176d5b7f6604c7';
const BASE_URL = 'https://pixabay.com/api';
let searchQuery = '';
let pageNumber = 1;
let url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${pageNumber}&per_page=12&key=${API_KEY}`

