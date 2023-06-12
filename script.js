window.addEventListener('load', () =>{
    // Ball properties
    const ball = document.getElementById("ball");
    const box = document.getElementById("box");
    const boxWidth = box.offsetWidth;
    const boxHeight = box.offsetHeight;
    const ballRadius = ball.offsetWidth / 2;
    const ballSpeed = 10;


    // Function to update the ball's position
    function updateBallPosition(dx, dy) {
        const ballX = ball.offsetLeft + dx;
        const ballY = ball.offsetTop + dy;

        // Keep the ball within the box boundaries
        if((ballX - ballRadius >= 0) &&  ( ballX + ballRadius <= boxWidth) &&   (ballY - ballRadius >= 0) &&  (ballY + ballRadius <= boxHeight)){
          ball.style.left = ballX + "px";
          ball.style.top = ballY + "px";
        }
      }

     // Function to handle key down events
     function handleKeyDown(event){
        let dx = 0;
        let dy = 0;

        switch(event.key){
          case "ArrowUp":
            dy = -ballSpeed;
            break;
          case "ArrowDown":
            dy = ballSpeed;
            break;
          case "ArrowLeft":
            dx = -ballSpeed;
            break;
          case "ArrowRight":
            dx = ballSpeed;
            break;
          case "w":
            dy = -ballSpeed;
            break;
          case "s":
            dy = ballSpeed;
            break;
          case "a":
            dx = -ballSpeed;
            break;
          case "d":
            dx = ballSpeed;
            break;
        }

        updateBallPosition(dx, dy);
      }

    // Event listener for keydown event
    document.addEventListener("keydown", handleKeyDown);
});

   