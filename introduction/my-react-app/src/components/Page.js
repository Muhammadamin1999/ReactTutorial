import React from "react";

function Header(){
    return <header>This is the Header</header>;
}
function MainContent(){
    return <main>This is Main Content</main>;
}
function Footer(){
    return <footer>This is footer</footer>;
}
function Page(){
    return(
        <div>
            <Header/>
            <MainContent/>
            <Footer/>

        </div>
    );
}

export default Page;