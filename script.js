const gallery1 = document.getElementById('gallery1');
        
gallery1.addEventListener('wheel', function(event) {    // Scroll lateral
    event.preventDefault();
    gallery1.scrollLeft += event.deltaY * 3;
})


const gallery2 = document.getElementById('gallery2');

gallery2.addEventListener('wheel', function(event) {
    event.preventDefault();
    gallery2.scrollLeft += event.deltaY * 3;
})