import LazyLoad from "react-lazyload";
import technologies from "../assets/technologies.jpg";
import resumePDF from '../assets/JanaeWelsh_Resume.pdf';
import experiences from "../data/experiences";
import {IoMdDownload} from 'react-icons/io';

const Resume = () => {
    return(
        <section id="resume" className="col-lg-8 mx-auto my-4 text-center">
            <h1 className="my-3">Resume</h1>
            <a href={resumePDF} download="JanaeWelsh_Resume"
                className="text-white bg-info bg-gradient py-1 px-2 rounded">
                Download <IoMdDownload/>
            </a>
            <div>
                <div>
                    <h2 className="my-4">TECHNICAL SKILLS</h2>  
                    <img src={technologies} className="mx-auto mb-5" alt="" style={{minWidth:"265px"}}/>
                </div>
                <div className="col-9 col-lg-8 mx-auto">
                    <h2 className="my-4">EDUCATION</h2>
                    <LazyLoad height={300} offset={0} once>
                        <div className="text-wrap">
                            <h5 className="mb-0">Carelton University Full-Stack Development Boot Camp</h5>
                            <p>(May 2022 - Nov 2022)</p>
                            <p className="mb-3 mt-2">
                                Cultivated comprehensive skill set in full-stack technologies through assigned and independent research. Avid participant and team player in the classroom and during projects. Invited back by faculty to inspire and provide advice to new bootcampers.
                            </p>
                            <h5 className="mb-0">Ryerson University</h5>
                            <p>(Sept 2019 - Apr 2022)</p>
                            <p className="mb-3 mt-2">
                                Consistent Dean's List honoree, achieving a BA in English with distinction.
                            </p>
                            <h5 className="mb-0">University of Waterloo</h5>
                            <p>(Sept 2017 - Dec 2018)</p>
                            <p className="mb-5 mt-2">
                                Consistent Dean's List honoree, specializing in Technical Writing.
                            </p>
                        </div>
                    </LazyLoad>
                    <h2 className="my-4 pt-3">EXPERIENCE</h2>
                    <LazyLoad height={300} offset={0} once>
                        <div className="text-wrap">
                            {experiences.map((experience) => (
                                <div key={experience.key}>
                                    <h5 className="mb-0">{experience.title}</h5>
                                    <span>{experience.company}</span>
                                    <span>{experience.duration}</span>
                                    <p className="mb-3 mt-2">{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </LazyLoad>
                </div>
            </div>
        </section>
    );
};

export default Resume;