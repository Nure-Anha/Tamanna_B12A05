console.log("Connect Emergency Project") ;

//*************************** INNERTEXT FUNCTION ******************** */

function getInnertext(id){
    const getIDval = parseInt(document.getElementById(id).innerText) ;
    return getIDval ;
}


//*********************************** CALL BUTTON FUNCTION ******************* */

function remainsCoin(id){  // total coin id bshbe
    let getID = document.getElementById(id) ;
    const availableCoin = parseInt(getID.innerText) ;  //100
    console.log(availableCoin) ;

    if(availableCoin < 20 ){
        return ;
    }
    const recentCoin = availableCoin - 20 ;  //80 
    getID.innerText = recentCoin ;
    return recentCoin ;
    
}

                                    // **************** Call Button CALL *******************

document.getElementById('call_btn1').addEventListener('click', function(){
    // const availableCoin = getInnertext('total_coin') ;
    // const recentCoin = availableCoin - 20 ;
    // document.getElementById('total_coin').innerText = recentCoin ;
    // console.log(recentCoin) ;
    const tc = getInnertext('total_coin')
    
    if(tc >= 20){
        alert("Calling to National Emergency Number  999")  ;
        remainsCoin('total_coin') ;
    }
    else{
        alert('Cannot call insufficient coin') ;
        return ;
    }
   
})
document.getElementById('call_btn2').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn3').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn4').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn5').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn6').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn7').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn8').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})
document.getElementById('call_btn9').addEventListener('click', function(){
    remainsCoin('total_coin')
    alert("Calling to National Emergency Number  999")  ;
})





//*********************************** HEART Function ********************* */

function heart_count (id) {
    const heartID = document.getElementById(id) ;  //total_heart id bshbe
    const availableHeart = parseInt(heartID.innerText);
    const recentHeart = availableHeart + 1 ;
    heartID.innerText = recentHeart ;
    console.log(recentHeart) ;
    return recentHeart ;

}


/******************** Heart CALL ************************** */

document.getElementById('heart_1').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_2').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_3').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_4').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_5').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_6').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_7').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_8').addEventListener('click', function(){
    heart_count('total_heart') ;
})
document.getElementById('heart_9').addEventListener('click', function(){
    heart_count('total_heart') ;
})







/******************************* COPY Function**********  */

function copyCount (id){
    const getId = document.getElementById(id) ;  //total_copy id boshbe
    const availableCopy = parseInt(getId.innerText) ;
    const recentCopy = availableCopy + 1 ;
    getId.innerText = recentCopy ;
    return recentCopy ;
}

/************************** Number Copy *********************/

function numCopy (id){
    const numToCpy = document.getElementById(id).innerText ;  // 999 ashse

    const makeInp = document.createElement('input') ;
    // console.log(makeInp) ;
    makeInp.value = numToCpy ;   
    document.body.appendChild(makeInp) ;
    // console.log(makeInp.value) ;

    makeInp.select() ;
    document.execCommand('copy') ;
    document.body.removeChild(makeInp) ;
}
    



/**************************** COPY_Number and Copy_Count call *********************/

document.getElementById('cpy_btn1').addEventListener('click', function(){
    alert('National Emergency Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num1') ;
    
})
document.getElementById('cpy_btn2').addEventListener('click', function(){
    alert('Police Helpline Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num1') ;
    
})
document.getElementById('cpy_btn3').addEventListener('click', function(){
    alert('Fire Service Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num1') ;
    
})
document.getElementById('cpy_btn4').addEventListener('click', function(){
    alert('Ambulance Service Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num4') ;
    
})
document.getElementById('cpy_btn5').addEventListener('click', function(){
    alert('Women & Child Helpline Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num5') ;
    
})
document.getElementById('cpy_btn6').addEventListener('click', function(){
    alert('Anti-Corruption Helpline Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num6') ;
    
})
document.getElementById('cpy_btn7').addEventListener('click', function(){
    alert('Electricity Helpline Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num7') ;
    
})
document.getElementById('cpy_btn8').addEventListener('click', function(){
    alert('Brac Helpline Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num8') ;
    
})
document.getElementById('cpy_btn9').addEventListener('click', function(){
    alert('Bangladesh Railway Helpline Number is Copied') ;
    copyCount('total_copy') ;
    numCopy('cpy_num9') ;
    
})
