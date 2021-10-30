
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

    $('.input-container').prepend(' <form onsubmit="return handleSubmit(event)" >' + 
                                    // '<div><label for="email">Email:</label>'+ 
                                    '<input type="email" id="email" name="email" placeholder="Email" value=""></div>'+
                                    // '<div><label for="password">Password:</label><br>'+
                                    '<input type="password" id="password" placeholder="Password" name="password" value=""></div>'+
                                    // '<div><label for="confirm-password">Confirm password:</label><br>'+
                                    '<input type="password" id="password-confirmation" placeholder="Confirm password" name="password" value=""></div>'+
                                    '<input type="submit" id="join-community-submit" value="Join the community">'+  
                                    '</form> ')

    $('.sign-in-container').css('visibility','hidden')  
    $('.balls-initial-view').css('display','none')  
    $('.balls-sign-view').css({'visibility':'visible','bottom': '440px','position':'relative'})  
    
    $('.indicator').css({'background-color':'black','opacity':'1','bottom':'566px'})

    $('.join-community-container,.input-container,.or-container,.back-container').css('display','flex')

    $('.reminder-sign-in').css({'display':'flex','bottom': '388px','position':'relative','text-align': 'center','justify-content': 'center','font-weight':'600','font-size':'14px','line-height':'18px','font-family':'Barlow by Thunderpanda ver 02','color':' #1B245C'})


}

// function to change elements when in first screen
const homeScreen =function(){    
    location.reload();
    return false;
}

// when click join-community or sign-in button then all black
$('.sign-in-container').on('click',signInScreen)

// when click back-container button back to home screen
$('.back-container').on('click',homeScreen)

// handleSubmit preventing submit from form
function handleSubmit(e) {
    e.preventDefault()
    let emailValue=$('#email').val()
    let password=$('#password').val()
    let passwordConfirmation=$('#password-confirmation').val()

    
    const pleaseCheckMessage = $('<p class="please-check-message">Please check your email address or your password</p>')
    $('.please-check-message').remove()
    $('.input-container').append(pleaseCheckMessage).css({'color':'#FF0000','flex-direction':'column','font-weight':'200','font-size':'13px','line-height':'17px','font-family': 'Barlow Semi Condensed','text-align':'center'})
    
    if(emailValue==='' ){        
        $('#email').css({'border-bottom':'1px solid red','background-color':'#FFF5F5'})        
    }
    if(password===''){
        $('#password').css({'border-bottom':'1px solid red','background-color':'#FFF5F5'})
    }
    if(passwordConfirmation===''){
        $('#password-confirmation').css({'border-bottom':'1px solid red','border-bottom-left-radius':'unset','border-bottom-right-radius':'unset','padding-bottom':'4px','background-color':'#FFF5F5'})        
    }
    if(emailValue && password && passwordConfirmation!==''){
        $('.please-check-message').css('visibility','hidden')
    }
    return false;
  }

