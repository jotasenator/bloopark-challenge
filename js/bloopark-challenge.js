
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

// canvas minor than symbol
let canvasBack = document.getElementById("canvas-back");
let ctxBack = canvasBack.getContext("2d");
ctxBack.lineCap = "round";
ctxBack.moveTo(2, 2);
ctxBack.lineTo(9, 9);
ctxBack.lineTo(2, 17);
ctxBack.lineWidth = 3;
ctxBack.strokeStyle = 'black';
ctxBack.stroke();


// function to change elements when in sign in screen

const signInScreen =function(){

    $('.container').css({'background-color':'white','border':'1px #D4D8EB solid'})    
    
    $('.wifi,.b1,.b2,.b3,.b4,.battery,battery-tail').css('background-color','black')
    
    $('.wifi').css('box-shadow','0px 0px 0px 10px white,0px 0px 0px 30px black,0px 0px 0px 40px white,0px 0px 0px 60px black')  
    
    $('.clock').css('color','black')

    $('.join-community-button').css('display','none')

    $('.sign-up-facebook-button').css({'bottom': '390px','position': 'relative','margin': '0 auto '})

    $('.input-container').prepend(' <form action="#" >' + 
                                    '<div><label for="email">Email:</label>'+ 
                                    '<input type="mail" id="email" name="email" value=""></div>'+
                                    '<div><label for="password">Password:</label><br>'+
                                    '<input type="password" id="password" name="password" value=""></div>'+
                                    '<div><label for="confirm-password">Confirm password:</label><br>'+
                                    '<input type="password" id="password" name="password" value=""></div>'+
                                    '<input type="submit" value="Join the community">'+  
                                    '</form> ')

    $('.balls-initial-view,.sign-in-container').css('visibility','hidden')
    
    $('.indicator').css({'background-color':'black','opacity':'1','bottom':'1029px'})

    $('.join-community-container,.input-container,.or-container,.back-container').css('display','flex')


}

// function to change elements when in first screen
const homeScreen =function(){    
    location.reload();
    return false;
}

// when click join-community or sign-in button then all black
$('.join-community-button,.sign-in-container').on('click',signInScreen)

// when click back-container button back to home screen
$('.back-container').on('click',homeScreen)
