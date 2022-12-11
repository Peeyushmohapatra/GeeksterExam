const one    = document.getElementsByClassName("one")[0];
    const two    = document.getElementsByClassName("two")[0];
    const three  = document.getElementsByClassName("three")[0];
    const four   = document.getElementsByClassName("four")[0];
    const button = document.getElementsByClassName("button")[0];

    button.addEventListener("click",() => {
        
        let valOne = one.value;
        validName(valOne);

        let valTwo = two.value;
        validEmail(valTwo)

        let valThree = three.value;
        let valFour = four.value;
        validPassword(valThree,valFour)
    })



    function validName(valOne){
        if(valOne === ""){
            alert("Entered Name is invalid")
            return
        }
        for(let i=0; i<valOne.length; i++){
            let ch = valOne.charAt(i);
            if((ch>="a" && ch<="z") || (ch>="A" && ch<="Z")){
                continue
            }else{
                alert(ch+" Not allowed in Name");
                return
            }
        }
    }


    function validEmail(valTwo){
        if(valTwo === ""){
            alert("Entered details are invalid")
            return
        }
        let count = 0;
        let count1 = 0;
        for(let i=0; i<valTwo.length; i++){
            let ch = valTwo.charAt(i);
            if((ch>="a" && ch<="z") || (ch>="A" && ch<="Z") || ch==="@" || ch==="." || (ch>="0" && ch<="9") ){
                if(ch==="@"){
                    count++;
                }
                else if(ch === "."){
                    count1++;
                }
                continue
            }else{
                alert("Entered details are invalid");
                break
            }
        }
        if(count===0 || count > 1){
            alert("@ used only once");
        }
        if(count1===0 || count1 > 1){
            alert(". used only once");
        }
    }

    function validPassword(valThree,valFour){
        if(valFour.length === 0 || valThree.length === 0){
            alert("Password not be empty");
            return
        }
        if(valThree.length !== valFour.length){
            alert("Password must be same")
            return
        }

        let i = 0;
        let j = 0;

        while(i<valThree.length && j<valFour.length){
            let chi = valThree.charAt(i);
            let chj = valFour.charAt(j);
            if(chi !== chj){
                alert("Password Must Be Same");
                break
            }else{
                i++;
                j++;
            }
        }
    }