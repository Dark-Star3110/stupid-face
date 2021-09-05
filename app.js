const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = $('body');
app.addEventListener('mousemove',eyeBall);

function eyeBall(){
    const eye = $$('.eye');
    eye.forEach((eye) => {
        // console.log(1);
        let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        // console.log(radian);
        let rot = (radian * (180/Math.PI) * -1) +270;
        eye.style.transform = `rotate(${rot}deg)`;
    })
}
