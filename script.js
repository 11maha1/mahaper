
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

const allElements = document.querySelectorAll('.all');
allElements .forEach((el) => observer.observe(el));

const all2Elements = document.querySelectorAll('.all2');
all2Elements .forEach((el) => observer.observe(el));


const meElements = document.querySelectorAll('.me');
meElements .forEach((el) => observer.observe(el));

const myinfo = document.querySelectorAll('.myinfo');
myinfo .forEach((el) => observer.observe(el));