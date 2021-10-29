
// canvas greater than symbol
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.lineCap = "round";
ctx.moveTo(2, 2);
ctx.lineTo(9, 9);
ctx.lineTo(2, 17);
ctx.lineWidth = 3;
ctx.strokeStyle = 'white';
ctx.stroke();


// function to turn white into black of elements

const allBlack =function(){
    $('.balls-initial-view').css('visibility','hidden')

    $('.wifi,.b1,.b2,.b3,.b4,.battery,battery-tail').css('background-color','black')

    $('.wifi').css('box-shadow','0px 0px 0px 10px #22389C,0px 0px 0px 30px black,0px 0px 0px 40px #22389C,0px 0px 0px 60px black')  
        
    $('.clock').css('color','black')
}

// function to turn black into white of elements
const allWhite =function(){
    $('.balls-initial-view').css('visibility','visible')

    $('.wifi,.b1,.b2,.b3,.b4,.battery,battery-tail').css('background-color','white')

    $('.wifi').css('box-shadow','0px 0px 0px 10px #22389C,0px 0px 0px 30px white,0px 0px 0px 40px #22389C,0px 0px 0px 60px white')  
        
    $('.clock').css('color','white')
}

// when click join-community button then all black
$('.join-community-button').on('click',allBlack)
