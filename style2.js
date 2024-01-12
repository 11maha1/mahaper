
const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
       console.log(entry)
         if(entry.isIntersecting){
            entry.target.classList.add('show');
         } else {
            entry.target.classList.remove('show');
         }
    });
});

const meElements = document.querySelectorAll('.me');
meElements .forEach((el) => observer.observe(el));

const skillElements = document.querySelectorAll('.skill');
skillElements .forEach((el) => observer.observe(el));

const work = document.querySelectorAll('.work');
work .forEach((el) => observer.observe(el));