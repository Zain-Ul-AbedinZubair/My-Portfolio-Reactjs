// import tweetme from '../../assets/projects_images/tweetme.PNG';
import chatapp from '../../assets/projects_images/chatapp.JPG';
import hardware_store from '../../assets/projects_images/hardware_store.jpg';
import DevNation from '../../assets/projects_images/DevNation.png';
import quiz from '../../assets/projects_images/quiz-app.png';
import RandomQuote from '../../assets/projects_images/RandomQuoteMachine.png';
 import Portfolio from '../../assets/projects_images/Portfolio.png';
import Memory from '../../assets/projects_images/Memory.png';
 import Dev_talks from '../../assets/projects_images/Dev_talks.jpg';

const data_projects = [
    {
        name: 'MEMORY APP',
        image: Memory,
        // deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
        github_url: 'https://github.com/Zain-Ul-AbedinZubair/MEMORY-APP',
        category: ['react.js','node.js', 'mongoDB']
    },

    {
        name: 'Blog Theme using Reactjs',
        image: Dev_talks,
        github_url: 'https://github.com/Zain-Ul-AbedinZubair/Blog_Theme_Using_Reactjs',
        category: [ 'react.js']
    },
    {
        name: 'Portfolio website',
        image: Portfolio,
        deployed_url: 'https://zainfirstportfoliowebsiteusingbootstrap.netlify.app/',
        github_url: 'https://github.com/Zain-Ul-AbedinZubair/Portfolio-website/tree/Zain-Ul-AbedinZubair-patch-1',
        category: [ 'Html','css','bootstrap']
    },

     {
       name: 'looplam theme using Bootstrap',
        image: chatapp,
         deployed_url: 'https://upbeat-kare-bf0b06.netlify.app/',
        github_url: 'https://github.com/Zain-Ul-AbedinZubair/LoopLab-theme',
       category: ['Html', 'CSS', 'bootstrap']
  },

    {
        name: 'Shop Website',
        image: hardware_store,
        deployed_url: 'https://inspiring-goldberg-275c8e.netlify.app/',
        github_url:'https://codepen.io/Zain-ul-abedin-Zubair/full/OJgXBpe',
        category: ['html_css']
    },
    {
        name: 'Quiz app',
        image: quiz,
        github_url:'https://github.com/Zain-Ul-AbedinZubair/Quiz-app',
        category: ['vanilla']
    },
    {
        name: 'Random Quote Machine',
        image: RandomQuote,
        github_url: 'https://github.com/Zain-Ul-AbedinZubair/Random-qoute-machine',
        category: ['processing']
    },
    {
        name: 'DevNation landing Page',
        image: DevNation,
         deployed_url: 'https://devnationtech.netlify.app/',
        category: ['vanilla']
    },
   
]

export default data_projects;