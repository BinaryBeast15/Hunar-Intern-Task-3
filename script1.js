
// Sample movie data
const movies = [
    { title: 'Cosmic Odyssey', image: 'movie1.jpg' },
    { title: 'Neon Nights', image: 'movie2.jpg' },
    { title: 'Echoes of Eternity', image: 'movie3.jpg' },
    { title: 'Quantum Leap', image: 'movie4.jpg' },
    { title: 'Parallel Worlds', image: 'movie5.jpg' },
    { title: 'Digital Dreams', image: 'movie6.jpg' }
];

// Function to load movies dynamically
function loadMovies() {
    const movieSliders = document.querySelectorAll('.movie-slider');
    
    movieSliders.forEach(slider => {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            
            const movieImg = document.createElement('img');
            movieImg.src = movie.image;
            movieImg.alt = movie.title;
            
            const movieTitle = document.createElement('p');
            movieTitle.innerText = movie.title;
            
            movieItem.appendChild(movieImg);
            movieItem.appendChild(movieTitle);
            slider.appendChild(movieItem);
        });
    });
}

// Function to implement horizontal scrolling
function initHorizontalScroll() {
    const sliders = document.querySelectorAll('.movie-slider');
    
    sliders.forEach(slider => {
        let isDown = false;
        let startX;
        let scrollLeft;

        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });

        slider.addEventListener('mouseleave', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mouseup', () => {
            isDown = false;
            slider.classList.remove('active');
        });

        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
    initHorizontalScroll();
});