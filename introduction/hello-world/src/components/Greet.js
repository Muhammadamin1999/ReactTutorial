// eslint-disable-next-line no-unused-vars
import React from 'react';

// function Greet(){
//     return <h1>Hello World</h1>
// }
const Greet = props => {
  const {name, heroName} = props;
    return(
        <div>
<h1> Hello {name} a.k.a {heroName}</h1>

        </div>

    ) 

}
export default Greet;
// export const Greet = () => <h1> Hello Amin</h1>  
// tepadagi holatda App.js da Greetni nomini o'zgartira olmaysan
