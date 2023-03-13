window.onclick = e => {
    let element =e.target.lastChild.textContent[0] ;
    // console.log(element);
    if(element!=null){
        document.getElementById("result").textContent+=element;
        if(element=="="){
            let calc=document.getElementById("result").textContent;
            let result=eval(calc.substring(0,calc.length-1));
            if(calc[calc.length-2]=="="){
                document.getElementById("result").textContent="Error";
            }
            else{
                document.getElementById("result").textContent=result;
            }

        }
        if(element=="C"){
            document.getElementById("result").textContent="";
        }
    }
}

// function strToCalc(calc){
//     let 
// }