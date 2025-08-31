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
        alert('📞 Calling National Emergency 999...')  ;
        remainsCoin('total_coin') ;


        
        /**Call History--Object create and pushed in array portion */
        // call history's object - name, number, date lagbe  
        const hisObj = {
            serviceName : 'National Emergency Number',
            serviceNumber : '999' ,
            time : new Date().toLocaleTimeString() 
        }
        callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo
        
        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }

    }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }

    
    // // call history's object - name, number, date lagbe  
    // const hisObj = {
    //     serviceName : 'National Emergency Number',
    //     serviceNumber : '999' ,
    //     time : new Date().toLocaleTimeString() 
    // }
    // callHistoryArr.push(hisObj) ; 

   
})



document.getElementById('call_btn2').addEventListener('click', function(){
    const tc = getInnertext('total_coin') ; 


    if(tc >= 20){
        alert('📞 Calling Police 999...')  ;
        remainsCoin('total_coin') ;



        /**Call History--Object create and pushed in array portion */
        // call history's object - name, number, date lagbe  
        const hisObj = {
            serviceName : 'Police Helpline Number',
            serviceNumber : '999' ,
            time : new Date().toLocaleTimeString() 
        }
        callHistoryArr.push(hisObj) ;

    /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }

    }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }


    
})


document.getElementById('call_btn3').addEventListener('click', function(){
    const tc = getInnertext('total_coin') ;

    
    if(tc >= 20){
        alert('📞 Calling Fire Service 999...')  ;
        remainsCoin('total_coin') ;

        
    /**Call History--Object create and pushed in array portion */
    // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Fire Service Number',
        serviceNumber : '999' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ;

        /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }
    }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }
})



document.getElementById('call_btn4').addEventListener('click', function(){
     const tc = getInnertext('total_coin') ;


    if(tc >= 20){
        alert('📞 Calling Ambulance 1994-999999...')   ;
        remainsCoin('total_coin') ;



        
     /**Call History--Object create and pushed in array portion */
     // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Ambulance Service',
        serviceNumber : '1994-999999' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }

    }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }
})


document.getElementById('call_btn5').addEventListener('click', function(){
    const tc = getInnertext('total_coin') ;


    if(tc >= 20){
        alert('📞 Calling Women & Child Helpline 109...')  ;
        remainsCoin('total_coin') ;


        

     /**Call History--Object create and pushed in array portion */
    // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Women & Child Helpline',
        serviceNumber : '109' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }
     }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }


})



document.getElementById('call_btn6').addEventListener('click', function(){
     const tc = getInnertext('total_coin') ;


    if(tc >= 20){
        alert('📞 Calling Anti-Corruption 106...')  ;
        remainsCoin('total_coin') ;



        

     /**Call History--Object create and pushed in array portion */
    // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Anti-Corruption Helpline',
        serviceNumber : '106' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }

     }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }

})



document.getElementById('call_btn7').addEventListener('click', function(){
     const tc = getInnertext('total_coin') ;


     if(tc >= 20){
       alert('📞 Calling Electricity Outage 16216...')  ;
        remainsCoin('total_coin') ;



        

     /**Call History--Object create and pushed in array portion */
    // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Electricity Helpline',
        serviceNumber : '16216' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
        const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }
     }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }
})



document.getElementById('call_btn8').addEventListener('click', function(){
    const tc = getInnertext('total_coin') ;



    if(tc >= 20){
        alert('📞 Calling Brac 16445...')  ;
        remainsCoin('total_coin') ;



        
     /**Call History--Object create and pushed in array portion */
    // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Brac Helpline',
        serviceNumber : '16445' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
         const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }
    
    }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }
})



document.getElementById('call_btn9').addEventListener('click', function(){
    const tc = getInnertext('total_coin') ;


    if(tc >= 20){
       alert('📞 Calling Bangladesh Railway 163...') ;
        remainsCoin('total_coin') ;


        

     /**Call History--Object create and pushed in array portion */
    // call history's object - name, number, date lagbe  
    const hisObj = {
        serviceName : 'Bangladesh Railway Helpline',
        serviceNumber : '163' ,
        time : new Date().toLocaleTimeString() 
    }
    callHistoryArr.push(hisObj) ; 

        /******* Call History Coin wise portion */
         const historyID = document.getElementById('call_history') ;  //parent --> new div ta etate rakhbo

        historyID.innerHTML = ""

        for(const i of callHistoryArr){
            const createDivNew = document.createElement('div') ;
            console.log(createDivNew) ;
            createDivNew.innerHTML = `  <div class="w-[255px] h-[100px]  mt-[16px] bg-[#FAFAFA] shadow-md rounded-[10px] p-[2px]">
                        <div class="flex gap-x-14.5">
                            <div class="pt-[15px] ">
                                <h1 class="font-bold text-[13px]">${i.serviceName}</h1>
                                <p class="text-[#5c5c5c]">${i.serviceNumber}</p>
                            </div>
                                <p class="pt-[25px]">${i.time}</p>
                        </div>
                    </div> `

            historyID.appendChild(createDivNew) ;
        }
     }
    else{
        alert('❌ You do not have sufficient coins! You need at least 20 coins to make a call.') ;
        return ;
    }
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







/******************************* COPY COUNT Function**********  */

function copyCount (id){
    const getId = document.getElementById(id) ;  //total_copy id boshbe
    const availableCopy = parseInt(getId.innerText) ;
    const recentCopy = availableCopy + 1 ;
    getId.innerText = recentCopy ;
    return recentCopy ;
}

/************************** Number Copy FUNCTION *********************/

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
    



/**************************** Number_COPY and Copy_Count call *********************/

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





                                    //**************************** CALL HISTORY *************************** */

const callHistoryArr = [] ;       //9 ta item er object input hishebe ashbe
 // now have to declare object in each card which i will push to this array 


 /*******Clear Buttn */

 document.getElementById('clr_btn').addEventListener('click', function(){
    let removeHistory = callHistoryArr;
    removeHistory = [] ;
    console.log(removeHistory) ;

    const rem_his = document.getElementById('call_history') ;
    rem_his.innerHTML = "" ;


 })


