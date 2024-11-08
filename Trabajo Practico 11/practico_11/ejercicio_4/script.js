document.body.addEventListener("mousemove", movimiento);


function movimiento(){
    let rata = document.getElementById("rata");
    document.body.addEventListener("mousedown", function (){
        click = true;
    });
    document.body.addEventListener("mouseup", function (){
        click = false;
    });
    if (click == true){
        rata.style.top = `${event.clientY}px`;
        rata.style.left = `${event.clientX}px`;
    };
    };

