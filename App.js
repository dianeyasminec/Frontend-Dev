import React from 'react';
import About from './About'
import Work from './Work'
import NavBar from './NavBar'
import Skills from './Skills'
import user from '../data.js/user';
import Image from './Images';

function App(){
    return(
        <div>
{/* <h1>Welcome to Diane's portfolio</h1> */}
<About username={user.name}/>
<Work/>
<Skills/>
<NavBar/>
<Image/>
        </div>
    )
}

export default App