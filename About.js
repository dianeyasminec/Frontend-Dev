import React from 'react'


function About(props){
    return(
        <div id="about">
            {/* <a style={{backgroundColor:}}></a> */}
            
           <h2>My name is {props.username}</h2>
        </div>
    )
}

export default About
