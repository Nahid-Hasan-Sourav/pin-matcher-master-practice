function getPin(){
    const pin=generatePin();
    // console.log("pin: " + pin);
    const pinString=pin+'';

    if(pinString.length===4){
        return pin;
    }
   else{
    // console.log("this is not a valid pin four digit",pin);
    return getPin();
   }
}

function generatePin(){
    const random=Math.round(Math.random() * 10000);
    return random;
}

function setValue(elementId,SetNumber){
    const inputField=document.getElementById(elementId);
    // console.log(inputField);
    // console.log(SetNumber);
    inputField.value=SetNumber
    
   
    
}

document.getElementById("generate-pin").addEventListener("click", function(e){
    const pinString=getPin();
    // console.log("pinstring",pinString);
    setValue("generate-pin-field",pinString);
    
})



document.getElementById("calculator").addEventListener("click",function(e){
    
    const number=e.target.innerText;
    // console.log(number);

    const inputfield=document.getElementById("inputfield");

    if(isNaN(number)){
       
        if(number=="C")
        {
            inputfield.value='' ;
        }

        else if(number=="<"){
        
        let currentInputFieldValue=inputfield.value;
        // console.log(currentInputFieldValue);
        const lengthValue=currentInputFieldValue.length;
        inputfield.value=currentInputFieldValue.slice(0,lengthValue-1);

        
        }
    }
    else{
        const previousInputFieldValue=inputfield.value;       
        inputfield.value=previousInputFieldValue+number;

    }

})

let count=0;
let submitBtn=document.getElementById("submit-btn")
submitBtn.addEventListener("click", function(e){
    const pinField=document.getElementById("generate-pin-field");
    const calcuteField=document.getElementById("inputfield");

    const leftNumber=document.getElementById("try-left-number");

    const matching= document.getElementsByClassName("notify")[1];
    const notMatching= document.getElementsByClassName("notify")[0];
    count=count+1;
    console.log("Count = ",count);
    
   
    if(calcuteField.value.length==0){
        alert("Enter Number for matching");
    }
    else{
        if(pinField.value==calcuteField.value){
            // console.log("Yes!! matching");
            document.getElementById("action-left-text").innerText='';
           matching.style.display="block";
           notMatching.style.display="none";
           leftNumber.innerText='3'
        //    console.log(matching)
        }
    
        else{
            const remainingNumberString=leftNumber.innerText;
            const remainingNumber=parseInt(remainingNumberString);
            const countNumber=Number(count);
            
            leftNumber.innerText=remainingNumber-1
           
            notMatching.style.display="block";
            
            matching.style.display="none";
    
            if(  leftNumber.innerText==0){
                // console.log("got it")
                // submitBtn.removeAttribute("disabled");
                submitBtn.disabled = true;
                alert("Please wait 24 hours for active it");
                document.getElementById("action-left-text").innerText="You are trying 3 times";
            }
    
            
            
        }
    }
   
});