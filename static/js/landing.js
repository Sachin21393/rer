$(".parallax").ready(function(){
    $(".parallax").scroll(function(){
    var positiontop=$(".parallax").scrollTop()
    console.log(positiontop);
    if(positiontop>305 ){
     const a=document.getElementById("hidden");
     a.classList.remove("hid")
    }else if(positiontop<305){
      const a=document.getElementById("hidden");
     a.classList.add("hid")
    
    }
    });
    });