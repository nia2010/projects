let like = 0;
let myP = document.getElementById('myp')


const myBtn = document.getElementById('btn');
myBtn.addEventListener('click', function(){
    like = like + 1;
    myP.textContent = like;
    myBtn.style.borderColor = "blue";
})


