let string = "";
console.log("Script is running ")

let buttons = document.getElementsByTagName('button');
Array.from(buttons).forEach((button) =>{
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            document.getElementsByTagName('input')[0].value = string
        } 
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.getElementsByTagName('input')[0].value = string;
        } else {
           
            string = string + e.target.innerHTML;
            document.getElementsByTagName('input')[0].value = string;
        }
    })
})