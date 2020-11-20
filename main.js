(()=>{

    class Calculator{
    
        screen = 0;
        output = 0;
        input = 0;
        opp = 0; // 0:Add 1:Subtract 2:Multiply 3:Divide 4:Modulus
        domOutput = document.getElementById("output")
        flag = 0;
    
        constructor(){
            
            Array.from(document.getElementsByClassName("buttons")[0].children).forEach((div, i)=>{
                div.onclick = ()=>{
                    switch(i){
                        case 0: alert("You cant close this silly!")// close
                            break;
                        case 1: // minimize
                            break;
                        case 2:  //maximize
                            break;
                    }
                }
            })
    
            Array.from(document.getElementsByClassName("row-one")[0].children).forEach((div, i)=>{
                div.onclick = ()=>{
                    switch(i){
                        case 0: this.clear()// clear
                            break;
                        case 1: this.invert()// Invert Value
                            break;
                        case 2: this.setOpp(4) //modulus
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
                        case 1: this.number(".")// . please dont count on this to be accurate, its JS
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
            //if flag is true, the new value is ready to be over written
            if(this.flag == true && this.input == 0){
                //flag is true, we are writing the first new value
                this.input = num;
                this.update(false);
            }else if(this.flag == true && this.input != 0){
                //flag is true, we are concat new values on first value
                this.input =  num;
                this.flag = false;
                this.update(false);
            }else if(this.flag == false && this.input == 0){
                this.input = num;
                this.update(false);
            }
            else if(this.flag == false && this.input != 0){
                //flag is not true, we are concat new values to screen
                this.input = String(this.input) + num;
                this.update(false);
            }
        }
    
        setOpp(type){
            if(this.flag == false && this.output == 0){ //check if previous input has happened or not, if not swap values
                this.output = this.input //set current number on screen to output  
            }
              
            this.opp = type; //change opptype
            this.flag = true;
            this.update(true)//
           
        }
    
        invert(){
            
            this.input = -this.input;
            this.update()
        
        }
    
        doCalc(){

            switch(this.opp){
                case 0: //add
                    if(parseInt(this.input) == 0){
                        this.output = parseFloat(this.output) + parseFloat(this.output)
                    } else{
                        this.output = parseFloat(this.input) + parseFloat(this.output)
                    }
                    this.update(true)
                    break;
                case 1: //subtract
                    if(parseInt(this.input) == 0){
                        this.output = parseFloat(this.output) - parseFloat(this.output)
                    } else{
                        this.output = parseFloat(this.output) - parseFloat(this.input) 
                    }
                    this.update(true)
                    break;
                case 2: //mulitiply
                    if(parseInt(this.input) == 0){
                        this.output = parseFloat(this.output) * parseFloat(this.output)
                    } else{
                        this.output = parseFloat(this.output) * parseFloat(this.input) 
                    }
                    this.update(true)
                    break;
                case 3: //divide
                    if(parseInt(this.input) == 0){
                        this.output = parseFloat(this.output) / parseFloat(this.output)
                    } else{
                        this.output = parseFloat(this.output) / parseFloat(this.input) 
                    }
                    this.update(true)
                    break;
                case 4: //modulus
                if(parseInt(this.input) == 0){
                    this.output = parseFloat(this.output) % parseFloat(this.output)
                } else{
                    this.output = parseFloat(this.output) % parseFloat(this.input) 
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

    //the following is from https://www.w3schools.com/howto/howto_js_draggable.asp
    //TODO make it part of the es6 class

    // Make the DIV element draggable:
    dragElement(document.getElementsByClassName("container")[0]);

    function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
    }
})()

