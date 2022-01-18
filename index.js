

const button = document.querySelector(".btn")

const color =["red", "green", "pink", "purple","orange",'white']
const firstDiv = document.querySelector(".btn-div")
const stopNow = document.querySelector(".stop-now")
const countryAsk =  document.querySelector("#country")
const cote = document.querySelector(".civ")
let currentColor =  Math.floor(Math.random()*color.length)



let startIntervalID 


button.addEventListener('click', function(){
       function colorFlip(){
        document.body.style.backgroundColor = color[currentColor]
        currentColor++
        if( color[currentColor] === color[4] ){
        currentColor = 0
        }
    }
    startIntervalID = setInterval(colorFlip, 1000)

})

//addeventlistner  
stopNow.addEventListener('click',function(){ 
        clearInterval(startIntervalID)
        document.body.style.backgroundColor = "white"
    
})

cote.addEventListener('click',function(){
    document.body.style.backgroundColor = color[4,5]
})


