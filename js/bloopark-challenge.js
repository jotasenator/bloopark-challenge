
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


// function to change elements when in sign in screen

const signInScreen =function(){

    $('.container').css({'background-color':'white','border':'1px #D4D8EB solid'})    
    
    $('.wifi,.b1,.b2,.b3,.b4,.battery,battery-tail').css('background-color','black')
    
    $('.wifi').css('box-shadow','0px 0px 0px 10px #22389C,0px 0px 0px 30px black,0px 0px 0px 40px #22389C,0px 0px 0px 60px black')  
    
    $('.clock').css('color','black')

    $('.join-community-button').css('display','none')

    $('.input-container').prepend(' <form action="#" >' + 
                                    '<div><label for="email">Email:</label>'+ 
                                    '<input type="mail" id="email" name="email" value=""></div>'+
                                    '<div><label for="password">Password:</label><br>'+
                                    '<input type="password" id="password" name="password" value=""></div>'+
                                    '<div><label for="confirm-password">Confirm password:</label><br>'+
                                    '<input type="password" id="password" name="password" value=""></div>'+
                                    '<input type="submit" value="Join the community">'+  
                                    '</form> ')

    $('.balls-initial-view').css('visibility','hidden')
    
    $('.indicator').css({'background-color':'black','opacity':'1'})
}

// function to change elements when in first screen
const homeScreen =function(){
    
    $('.wifi,.b1,.b2,.b3,.b4,.battery,battery-tail').css('background-color','white')
    
    $('.wifi').css('box-shadow','0px 0px 0px 10px #22389C,0px 0px 0px 30px white,0px 0px 0px 40px #22389C,0px 0px 0px 60px white')  
    
    $('.clock').css('color','white')
    
    $('.balls-initial-view').css('visibility','visible')
}

// when click join-community or sign-in button then all black
$('.join-community-button,.sign-in-container button').on('click',signInScreen)
