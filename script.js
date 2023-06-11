let circle = document.querySelector('.circle');
let moveBy = 100;

window.addEventListener('load', () =>{
    circle.style.position = 'absolute';
    circle.style.left = 0;
    circle.style.top = 0;
});


window.addEventListener('keydown', (e) =>{
    // console.log('key: '+e.key);
    switch(e.key){
        case ('a' || 'ArrowLeft'):
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case ('d' || 'ArrowRight'):
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case ('w' || 'ArrowUp'):
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case ('s' || 'ArrowDown'):
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
        // default: alert("you press wrong key!!");
    }
            
});

window.addEventListener('keyup', (e) =>{
    // console.log('key: '+e.key);
    switch(e.key){
        case ('ArrowLeft'):
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            break;
        case ('ArrowRight'):
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            break;
        case ('ArrowUp'):
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
            break;
        case ('ArrowDown'):
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            break;
        // default: alert("you press wrong key!!");
    }
            
});
   