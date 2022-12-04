var intervalID = 0;
window.onload = fadeIn;
  
function fadeIn() {
    setInterval(show, 50);
}
  
function show() {
    var body = document.getElementById("body");
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}

let preveiwContainer = document.querySelector('.expanded');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.cards .card').forEach(card =>{
  card.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = card.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});