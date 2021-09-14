function f5() {
    var x = document.getElementById("show");
    if (x.style.display === "none") {
      x.style.display = "block";
      // x.innerHTML="hint1:sachin"
      x.classList.remove("hin")
      x.play();
    } else {
      x.style.display = "none";
    }
  }
  function f3() {
    var x = document.getElementById("show3");
    if (x.style.display === "none") {
        
      x.style.display = "block";
      x.classList.remove("hin")
      x.play();
      // var c=a.appendChild(document.createElement('img')).src = 'll.png';
    } else {
      x.style.display = "none";
      // var c=a.removeChild(document.createElement('img')).src = 'll.png';
  
    }
  }
   function f2(){
      var x = document.getElementById("show6");
      if (x.style.display === "none") {
          
        x.style.display = "block";
      //   x.classList.remove("hin")
      //   x.play();
        x.innerHTML="hint2:sachin"
        // var c=a.appendChild(document.createElement('img')).src = 'll.png';
      } else {
        x.style.display = "none";
        // var c=a.removeChild(document.createElement('img')).src = 'll.png';
    
      }
   }
   function f4(){
      var x = document.getElementById("show4");
      if (x.style.display === "none") {
        x.style.display = "block";
      //   x.innerHTML="hint1:sachin"
      x.classList.remove("hin")
      } else {
        x.style.display = "none";
      }
   }
      
      const a=document.getElementById("te");
      var b=document.getElementById("he").value;
      // if(b=='suraj'){
      //     a.innerHTML="fail"
      // }
      var a1=document.getElementById("hint11");
  var a2=document.getElementById("hint12");
  // a1.remove("hint11");
  // a2.remove("hint12");
      var b1=document.getElementById("hint21");
  var b2=document.getElementById("hint22");
  
  // a1.add("hint11")
      const h=()=>{
  
          setTimeout(()=>{
     
  var b=document.getElementById("hint11");
  
  
  
  b.classList.remove("hin")
  
  setTimeout(() => {
         
  var b=document.getElementById("hint12");
  
  
  b.classList.remove("hin")
  }, 10000);
          },5000)
      }
      h();
      function f1(){
      //  var f=document.getElementById("hint");
      //  f.remove("hint")
  
  var text=document.getElementById("he").value;
          if(text==='suraj'){
              var c=a.appendChild(document.createElement('img')).src = 'll.png';
  
              const s=()=>{
                     a1.remove("hint11");
   a2.remove("hint12");
  
  
          setTimeout(()=>{
  var d=document.getElementById("hint21");
  
  d.classList.remove("hin")
  setTimeout(()=>{
      var d=document.getElementById("hint22");
  
  d.classList.remove("hin")
  },10000)
          },5000)
      }
      s();
              var on=document.getElementById("but");
        
              on.addEventListener('click',()=>{
  
                  // b.classList.add("hin")
    var b=document.getElementById("he").value;
  
          if(b=='sachin'){
var next=document.getElementById("next");
next.classList.remove("hin")
              // f2()
 
                            
              const s=()=>{
                      var f=document.getElementById("hint")
                      f.remove("hint")
                      var f1=document.getElementById("hint1")
                      f1.remove("hint1")
          setTimeout(()=>{
  var d=document.getElementById("hint2");
  
  d.classList.remove("hin")
          },5000)
      }
      s();
             
              var on=document.getElementById("but");
             
              on.addEventListener('click',()=>{
           
                  var b=document.getElementById("he").value;
  //                 const s=()=>{
  //                     var f=document.getElementById("hint")
  //                     f.remove("hint")
  //         setTimeout(()=>{
  // var d=document.getElementById("hint3");
  
  // d.classList.remove("hin")
  //         },5000)
  //     }
  //     s();
          if(b=='etash'){
              // a.innerHTML=  " <img src="IETE LOGO WHITE.png" alt="" srcset="">"
              // f2()
              var b=document.getElementById("he").value;
          a.innerHTML=""
              var c=a.appendChild(document.createElement('img')).src = 'll.png';
  
             c.style.height="20"
          }
              })
          }
              })
          }
       
          }
      
      
  