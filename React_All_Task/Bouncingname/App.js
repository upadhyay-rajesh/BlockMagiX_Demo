import { AnimatedOnScroll } from "react-animated-css-onscroll";
 
function App() {
    return (
        <div className="App">
            <h1 align="center">Hey!BlockMagiX Welcome</h1>
            <h2 align="center">Let's see some Good effects</h2>
            <div id="start">
                <AnimatedOnScroll animationIn="fadeInDownBig">
                <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="bounceInLeft">
                <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="wobble">
                <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="tada">
                <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="jello">
                <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
                <AnimatedOnScroll animationIn="bounceInRight" style={{
                    marginTop: "80px",
                    color: "green",
                }}>
                <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
                <AnimatedOnScroll
                    animationIn="bounce"
                    duration="1000"
                >
                    <h2>Welcome to BlockMagiX</h2>
                </AnimatedOnScroll>
            </div>
        </div>
    );
}
 
export default App;