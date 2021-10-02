const dob =document.querySelector('#dob');
const luckyNumber =document.querySelector('#lucky-number');
const checkNumber =document.querySelector('#check-number');
const outputText =document.querySelector('#output-text');
 	 
    function sumOfDate(date,luckNumber){
        d=date.replaceAll("-","");
        let sum=0;

        for(let index=0; index<d.length; index++){
            sum=sum + Number(d.charAt(index));
        }

        if(sum%luckNumber === 0)
            outputText.innerText = "Hurray!!!Your Birthday is Lucky 🥳";
        else
            outputText.innerText="Sorry Your Birthday is Unlucky 😢";
    }
 	 
 	function checkIsYourBirthdayLucky(){
        const date=dob.value;
        const lucknumber=Number(luckyNumber.value);
        sumOfDate(date,lucknumber);	 
 	}
 	 
 	checkNumber.addEventListener('click',checkIsYourBirthdayLucky)