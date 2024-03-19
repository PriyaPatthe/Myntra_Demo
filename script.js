let slide=document.querySelectorAll(".slideCard");
let count=0;

slide.forEach(function(slides,index){
slides.style.left=`${index*100}%`
});

function myfun()
{
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count*100}%)`
    })
}

setInterval(function()
{
    count++;
    if(count == slide.length)
    {
        count=0;
    }
    myfun();
    console.log("hello");
},2000)  //2000sec

