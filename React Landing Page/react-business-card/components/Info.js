import React from "react"
import ReactDOM from "react-dom"

function Info(){
    
    return(
        <section>
        <div>
             <h2 className="info--name"> Mahamed Osman </h2>
              <p className="info--name info--position"> Full-stack Developer </p>
           <i className="fa fa-car"></i>
         </div>
         <button className="button button--email"  > Email </button>
          <span className="fa-solid fa-user"></span>
         <span className="fa-solid fa-user"></span>
         <button className="button button--email"> Linkedin </button>
          
        </section>
        
    )
    
    
}

export default Info