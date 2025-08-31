console.log("Connect Emergency Project") ;

//*************************** INNERTEXT FUNCTION ******************** */

function getInnertext(id){
    const getIDval = parseInt(document.getElementById(id).innerText) ;
    return getIDval ;
}


//*********************************** CALL BUTTON FUNCTION ******************* */

function remainsCoin(id){  //id = total coin 
    let getID = document.getElementById(id) ;
    const availableCoin = parseInt(getID.innerText) ;  //100
    console.log(availableCoin) ;

    if(availableCoin <=20 ){
        return ;
    }
    const recentCoin = availableCoin - 20 ;  //80 
    getID.innerText = recentCoin ;
    return recentCoin ;
    
}

                                    // **************** CALL *******************

document.getElementById('call_btn1').addEventListener('click', function(){
    // const availableCoin = getInnertext('total_coin') ;
    // const recentCoin = availableCoin - 20 ;
    // document.getElementById('total_coin').innerText = recentCoin ;
    // console.log(recentCoin) ;
    const tc = getInnertext('total_coin')
    
    if(tc > 20){
        alert("Calling to National Emergency Number  999")  ;
        remainsCoin('total_coin') ;
    }
    else{
        alert('Cnnot call insufficient coiin') ;
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