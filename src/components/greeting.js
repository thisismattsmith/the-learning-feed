import React from "react"

const Greeting = ({ data, location }) => {
  var welcome
  var date = new Date();  
  var hour = date.getHours();  
  
 
  if (hour < 3) {  

    return (
        <p>
          Wow, thanks for visiting at such an early time of day.
        </p>
     
    )
  }
  if (hour < 6) {  

    return (
      
       
        <p>
          Good morning.
        </p>
     
    )
  }
  if (hour < 10) {  

    return (
      
       
        <p>
          Good morning.
        </p>
     
    )
  }

  if (hour < 12) {  

    return (
      
       
        <p>
          Good afternoon
        </p>
     
    )
  }


if (hour < 17) {  

  return (
    
     
      <p>
        Good afternoon.
      </p>
   
  )
}

  if (hour < 20) {  

    return (
      
       
        <p>
          Good evening and welcome to the learning feed.Good evening and welcome to the learning feed.Good evening and welcome to the learning feed.Good evening and welcome to the learning feed.Good evening and welcome to the learning feed.Good evening and welcome to the learning feed.
        </p>
     
    )
  }

  if (hour < 23) {  
   
    return (
      
        <p>
          Hello night owl.
        </p>
     
    )
  } 
  
  else {  
    
    return (
    
        <p>
          Hello!
        </p>
      
    )
  }  
}

export default Greeting

