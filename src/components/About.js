import LazyLoad from "react-lazyload";
import headshot from '../assets/headshot.jpg';

const About = () => {
    return (
        <section className="text-center col-9 col-md-7 col-lg-5 mx-auto my-4" style={{maxHeight:"770px"}}>
            <img className="col-10 col-md-7 rounded-circle" src={headshot} style={{maxWidth:"324px"}} alt="Janae smiling in business casual wear"/>
            <h1 className="text-primary mt-2">Janae Welsh</h1>
            <h3>Software Engineer</h3>
            <div className='text-center my-3 my-lg-4 d-flex justify-content-around justify-content-md-between mx-md-5 col-lg-8 mx-lg-auto'>
                <a className="col-2" href="https://github.com/gitJanaeW/" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#d1d5db" className="bi bi-github" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                </a>
                <a className="col-2" href='https://www.linkedin.com/in/janae-welsh-01a52a23a/' target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#d1d5db" className="bi bi-linkedin" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                </a>
                <a className="col-2" href="mailto: janae.wel@gmail.com">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#d1d5db" className="bi bi-google" viewBox="0 0 16 16">
                        <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
                    </svg>
                </a>
            </div>
            <p>
                Full-stack <span className="text-primary">JavaScript</span> software engineer with honed <span className="text-primary">research</span>, <span className="text-primary">problem-solving</span> and <span className="text-primary">communication</span> skills, developed during my English BA and work in the education sector.
            </p>
            
                <div style={{minHeight:"200px"}}>
                    <LazyLoad offset={0} once>
                    <h3>About Me</h3>
                    <p>
                        As a <span className="text-primary">creative</span>, I'm always eager to take on projects of any kind and breathe life and passion into them. Fueled by my avid interest in the mechanics of coding, I'm consistently aiming to broaden my <span className="text-primary">knowledge</span> and technical skillset. 
                    </p>
                    <p>
                        I would love to talk to you about how I can offer my <span className="text-primary">dedication</span> and <span className="text-primary">continuing growth</span> to your team. 
                    </p>
                    </LazyLoad>
                </div>
            
        </section>
    );
}

export default About;