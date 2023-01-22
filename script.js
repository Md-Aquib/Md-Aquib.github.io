const animation = ['hidden','appear','drop'];
var current = '';

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        animation.forEach((type) => {
            if(entry.target.classList.contains(type)){
                current = type;
            }
        });
        if(entry.isIntersecting){
            entry.target.classList.add(current + '-show');
        } else {
            entry.target.classList.remove(current + '-show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .appear , .drop');

hiddenElements.forEach((e1) => observer.observe(e1));

