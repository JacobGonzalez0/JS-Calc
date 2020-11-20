class Calculator{
    
    screen = 0;
    output = 0;
    input = 0;
    opp = 0; // 0:Add 1:Subtract 2:Multiply 3:Divide
    domOutput = document.getElementById("output")
    flag = 0;

    constructor(){


        Array.from(document.getElementsByClassName("row-one")[0].children).forEach((div, i)=>{
            div.onclick = ()=>{
                switch(i){
                    case 0: this.clear()// clear
                        break;
                    case 1: this.invert()// Invert Value
                        break;
                    case 2: //???
                        break;
                    case 3: this.setOpp(3) // Divide
                        break;
                }
            }
        })

        Array.from(document.getElementsByClassName("row-two")[0].children).forEach((div, i)=>{
            div.onclick = ()=>{
                switch(i){
                    case 0: this.number(7)// 7
                        break;
                    case 1: this.number(8)// 8
                        break;
                    case 2: this.number(9)// 9
                        break;
                    case 3: this.setOpp(2)// Multiple
                        break;
                }
            }
        })

        Array.from(document.getElementsByClassName("row-three")[0].children).forEach((div, i)=>{
            div.onclick = ()=>{
                switch(i){
                    case 0: this.number(4)// 4
                        break;
                    case 1: this.number(5)// 5
                        break;
                    case 2: this.number(6)// 6
                        break;
                    case 3: this.setOpp(1)// Subtract
                        break;
                }
            }
        })

        Array.from(document.getElementsByClassName("row-four")[0].children).forEach((div, i)=>{
            div.onclick = ()=>{
                switch(i){
                    case 0: this.number(1) // 1
                        break;
                    case 1: this.number(2)// 2
                        break;
                    case 2: this.number(3)// 3
                        break;
                    case 3: this.setOpp(0)// Plus
                        break;
                }
            }
        })

        Array.from(document.getElementsByClassName("row-five")[0].children).forEach((div, i)=>{
            div.onclick = ()=>{
                switch(i){
                    case 0: this.number(0)// 0
                        break;
                    case 1: // .
                        break;
                    case 2: this.doCalc()// =
                        break;
                }
            }
        })

    }

    update(flag){
        //if the flag is enabled, output is written to screen, otherwise input is written
        flag ? this.screen = this.output : this.screen = this.input;
        this.domOutput.innerHTML = this.screen
    }

    number(num){
        //if the input is empty, remove the 0 do not add to it
        if(this.input == 0 || this.flag == true){
            this.input = num;
        }else{
            this.input = String(this.input) + num
        }       
        this.update(false);
    }

    setOpp(type){
        if(this.flag){ //check if previous input has happened or not, if not swap values
            this.output = this.input //set current number on screen to output  
        }
          
        this.opp = type; //change opptype
        this.flag = true;
        this.update(true)//
        console.log("input:" + this.input)
        console.log("output:" + this.output)
    }

    invert(){
        
        this.input = -this.input;
        this.update()
        console.log("input:" + this.input)
        console.log("output:" + this.output)
    }

    doCalc(){
        console.log("input:" + this.input)
        console.log("output:" + this.output)
        switch(this.opp){
            case 0: //add
                if(parseInt(this.input) == 0){
                    this.output = parseInt(this.output) + parseInt(this.output)
                } else{
                    this.output = parseInt(this.input) + parseInt(this.output)
                }
                this.update(true)
                break;
            case 1: //subtract
                if(parseInt(this.input) == 0){
                    this.output = parseInt(this.output) - parseInt(this.output)
                } else{
                    this.output = parseInt(this.output) - parseInt(this.input) 
                }
                this.update(true)
                break;
            case 2: //mulitiply
                if(parseInt(this.input) == 0){
                    this.output = parseInt(this.output) * parseInt(this.output)
                } else{
                    this.output = parseInt(this.output) * parseInt(this.input) 
                }
                this.update(true)
                break;
            case 3: //divide
                if(parseInt(this.input) == 0){
                    this.output = parseInt(this.output) / parseInt(this.output)
                } else{
                    this.output = parseInt(this.output) / parseInt(this.input) 
                }
                this.update(true)
                break;

        }
        this.flag = false;
    }

    clear(){
        this.output = 0;
        this.input = 0;
        this.flag = false;
        this.screen = 0;
        this.update()
    }

}

var main = new Calculator()