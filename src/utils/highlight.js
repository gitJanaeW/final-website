const highlight = () => {
    const [clickedAbout, setAbout] = useState(true);
    const [clickedPortfolio, setPortfolio] = useState(false);
    const [clickedContact, setContact] = useState(false);
    const [clickedResume, setResume] = useState(false);
    const highlight = () => {
        const path = window.location.pathname;
        setAbout(path === "/");
        setPortfolio(path === "/portfolio");
        setContact(path === "/contact");
        setResume(path ==="/resume");
        console.log("I checked for pathname!!")
    };
}

export default highlight;