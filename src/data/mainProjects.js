import poachd from "../assets/poachd.jpg";
import rescueChow from "../assets/rescue-chow.jpg";
import upgrad from "../assets/upgrad.jpg";
import showgo from "../assets/showgo.jpg";

const mainProjects = [
    {
        key: "poachd",
        name: "Poachd",
        description: "An individual project that will allow me to work on performance by managing ample amounts of data. I'm also excited to independently build Stripe functionality from the ground up. With Poachd, you can share your own recipes or modify (AKA poach) the recipes of other users. Unlock unlimited poaches with a monthly membership to the site.",
        link: "https://github.com/gitJanaeW/poachd",
        img: poachd,
        imgAlt: "The recipe page of Poachd",
        technologies: "MERN | Webpack | Redis | Stripe",
        status: "In Development"
    },
    {
        key: "rescue-chow",
        name: "Rescue Chow",
        description: "A MERN stack application with Stripe functionality. Made in 2 weeks with 3 peers. Rescue Chow allows you to purchase animal treats while sending 25% of the proceeds to charity.",
        link: "https://github.com/gitJanaeW/rescue-chow-v2",
        img: rescueChow,
        imgAlt: "The landing page of Rescue Chow",
        technologies: "Mongoose | Express | React",
        status: "Finished"
    },
    {
        key: "upgrad",
        name: "upGrad",
        description: "A full-stack application with Handlebars.js. Made in a week with 2 peers. upGrad is the social media app for graduate student where projects are shared for the sake of research, collaboration and critiques.",
        link: "https://github.com/gitJanaeW/upGrad-v3",
        img: upgrad,
        imgAlt: "The landing page of upGrad",
        technologies: "Express | Sequelize | Handlebars",
        status: "Finished"
    },
    {
        key: "showgo",
        name: "ShowGo",
        description: "A front-end JavaScript application, built around the Spotify API. Made in a week with 2 peers. Give ShowGo your Spotify ID to receive a list of concerts near you based on your Spotify playlist genres.",
        link: "https://gitjanaew.github.io/show-go/index.html",
        img: showgo,
        imgAlt: "The landing page of ShowGo",
        technologies: "HTML | CSS | JavaScript",
        status: "Deployed"
    },
];
export default mainProjects;