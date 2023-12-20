
let runbtn = document.getElementById('runbtn')
let texterea = document.getElementById('text01')
let htmlinput
let corehtml = []
let cut1
let cut2
let pop = true
let preview = document.getElementById('preview')
runbtn.addEventListener("click", takeinput)
function takeinput() {
    htmlinput = texterea.value
    console.log(htmlinput)
    console.log('Html input : true ')
    splithtml()
    extract()
    extract2()
    htmltopreview()
}
function extract() {
    for (let index = 0; index < htmlinput.length; index++) {
        if (htmlinput[index] === "<body>") {
            cut1 = index 
            console.log("cut No1 :"+ index)
        }else if (htmlinput[index] === "</body>") {
            cut2 = index
            console.log("cut No2 :" + cut2)
        }     
    }
    let corecount = 0
    let indo = htmlinput.length- 1 
    let lengg = htmlinput.length
    console.log(indo , lengg)
    for (let index = 0; index < lengg; index++) {
        if (indo === cut2 && pop === true){
            htmlinput.pop()
            pop = false
            console.log("pop false | cut2 poped " + index)
            indo = indo - 1
        }else if (indo === cut1 && pop === false) {
            htmlinput.pop()
            pop = true
            console.log("pop true | cut1 poped" + index)
            indo = indo - 1
        }else if (pop === true) {
            htmlinput.pop()
            console.log("pop true | poped"+ indo + index.toString())
            indo = indo - 1
        }else{
            corehtml[corecount] = htmlinput[indo]
            console.log("pop false | didnt pop" + indo + index.toString())
            indo = indo - 1
            corecount ++ 
        }

    }
    console.log(htmlinput) 
    console.log(corehtml)
}
function extract2(){
    let corecount = corehtml.length -1
    let dummy = []
    for (let index = 0; index < corehtml.length; index++) {  
        dummy[index] = corehtml[corecount]
        corecount = corecount - 1
    }
    corehtml = dummy
    console.log(corehtml)
    
}

function splithtml() {
    htmlinput = htmlinput.split("\n")
    console.log(htmlinput)
}

function htmltopreview() {
    preview.innerHTML = ""
    for (let index = 0; index < corehtml.length; index++) {
        preview.innerHTML += corehtml[index] + "<br>"
        
    }
}







