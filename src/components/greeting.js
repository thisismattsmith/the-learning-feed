import React from "react"

const Greeting = ({ data, location }) => {
  var welcome
  var date = new Date();  
  var hour = date.getHours();  
  
 
  if (hour < 1) {  

    return (
        <p>
          *yawn* it's getting late, or early, I can't quite tell... *yawn*

          <br />
          Feel free to go ahead and scroll through this latest hand picked learning content. Just turn the lights off when you leave please. *yawn* I'm going to sleep.
        </p>
     
    )
  }
  if (hour < 6) {  

    return (
      
       
        <p>
          Good morning, here are some freshly brewed items about learning and development to help you start your day.
        </p>
     
    )
  }
  if (hour < 10) {  

    return (
      
       
        <p>
          Good morning. 
          <br />
          I hope you enjoy these freshly baked thoughts about learning and development.
        </p>
     
    )
  }

  if (hour < 14) {  

    return (
      
       
        <p>
         Welcome to the Learning Feed, a regularly updated collection of interesting ideas all about learning and development.
        </p>
    )
  }


if (hour < 17) {  

  return (
    
     
      <p>
        Good afternoon. Here are some hand picked ideas, advice and musings all about learning.
      </p>
   
  )
}

  if (hour < 20) {  

    return (
      
       
        <p>
          Good evening. Feel free to peruse our latest collection of the finest learning-related offerings from around the web.
        </p>
     
    )
  }

  if (hour < 23) {  
   
    return (
      
        <p>
          Oh hello there.
          <br />
          There's nothing quite like some late night learning is there?. 
          <br />
          Scroll down for some new ideas about learning and development... but don't stay up too late! Sleep is very important for learning too.
        </p>
     
    )
  } 
  
  else {  
    
    return (
    
        <p>
          Hello! Welcome to the Learning Feed, a regularly updated collection of interesting ideas all about learning and development.
        </p>
      
    )
  }  
}

export default Greeting

