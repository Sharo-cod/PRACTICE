const bodyEl = document.querySelector('body')

bodyEl.addEventListener("mousemove" , (e)=>{
    const Xposition = event.offsetX;
    const yposition = event.offsetY;
    const spanEl = document.createElement('span');
    spanEl.style.left = Xposition + 'px'
    spanEl.style.top = yposition + 'px'
    bodyEl.appendChild(spanEl)

    setTimeout(() => {
        spanEl.remove();
    },3000)
    

    const size = Math.random()*100
    spanEl.style.width = size + 'px'
    spanEl.style.height = size + 'px'
});