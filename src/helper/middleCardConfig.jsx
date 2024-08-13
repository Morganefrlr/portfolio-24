//////////////////////////////////// About Component ////////////////////////////////////

export const aboutInfos = [
    {
        img:"/deux.png",
        label:"Années d'expérience"
    },
    {
        img:"/huit.png",
        label:"Projets Formation"
    },
    {
        img:"/quinze.png",
        label:"Projets Personel"
    },
]



//////////////////////////////////// Skill Component ////////////////////////////////////


export const skillLang = [
    {
        label: 'HTML',
        icon: '/logos/html.png',
        couleur:'#fc490b',
        number: 90,
    },
    {
        label: 'Javascript',
        icon: '/logos/js.png',
        couleur:'#f0db4f',
        number: 70,
    },
    {
        label: 'ReactJs',
        icon: '/logos/react.png',
        couleur:'#01d8ff',
        number: 80,
    },
    {
        label: 'NextJs',
        icon: '/logos/next.jpg',
        couleur:'#000000',
        number: 60,
    },
    {
        label: 'Angular',
        icon: '/logos/angu.png',
        couleur:'#c2002f',
        number: 50,
    },
    {
        label: 'Typescript',
        icon: '/logos/ts.png',
        couleur:'#3178c6',
        number: 60,
    },
    {
        label: 'NodeJs',
        icon: '/logos/nodejs.png',
        couleur:'#539e43',
        number: 70,
    },

]
export const skillStyle = [
    {
        label: 'Css',
        icon: '/logos/css.png',
        couleur:'#2196f3',
        number: 100,
    },
    {
        label: 'Sass',
        icon: '/logos/sass.png',
        couleur:'#cc6699',
        number: 100,
    },
    {
        label: 'TailwindCss',
        icon: '/logos/tail.png',
        couleur:'#06b6d4',
        number: 100,
    },
    {
        label: 'Styled Components',
        icon: '/logos/styled.png',
        couleur:'#e1a478',
        number: 60,
    },

]

export const skillBd = [
    {
        label: 'MongoDb',
        icon: '/logos/mongodb.png',
        couleur:'#419732',
        number: 70,
    },
    {
        label: 'MySQL',
        icon: '/logos/mysql.png',
        couleur:'#4479a1',
        number: 70,
    }
]

export const skillOther = [
    {
        label: 'Git',
        icon: '/logos/git.png',
        couleur:'#f05033',
        number: 70,
    },
    {
        label: 'VsCode',
        icon: '/logos/vs.jpg',
        couleur:'#2e81b9',
        number: 100,
    },
    {
        label: 'Photoshop',
        icon: '/logos/ps.png',
        couleur:'#31a8ff',
        number: 80,
    },
    {
        label: 'Indesign',
        icon: '/logos/id.png',
        couleur:'#ff0050',
        number: 100,
    },
    {
        label: 'Figma',
        icon: '/logos/figma.png',
        couleur:'#03011C',
        number: 80,
    },

]

export const skillsArray = [
    skillLang, skillStyle,  skillBd, skillOther
]






//////////////////////////////////// Experience Component ////////////////////////////////////

export const formationConfig = [
    {
        label: "React en Entreprise",
        year:"2023 - 2024",
        details:"Lead Développeur ViDev - Paris"
    },
    {
        label: "Développeur Web (BAC + 2)",
        year:"2022 - 2023",
        details:"Diplome RNCP niveau 5 - OpenClassrooms"
    },
    {
        label: "CAP Photographie",
        year:"2018 - 2019",
        details:"CAP - Ligne et Formations"
    },
    {
        label: "Capacité en droit - BAC",
        year:"2014 - 2016",
        details:"Diplome de niveau 4 - Mention 'Bien' - Faculté Saint Serge - Angers"
    },
]

export const experienceConfig = [
    {
        index: 1,
        year: "2022 - 2024",
        label:" Développeuse Web",
        details:"Formations - Projets Personnels",
    },
    {
        index: 2,
        year: "2015 - 2020",
        label:"Graphiste & Photographe - Freelance",
        details:"Retouches Photos - Création de logos, flyers, affiches... - Photographie de paysages",
    },
    {
        index: 3,
        year: "2010 - 2015",
        label:"Gérante Restaurant",
        details:"Responsable de salle - Gestion d’équipes - Gestion des Stocks",
    },
]


//////////////////////////////////// Portfolio Component ////////////////////////////////////

export const projectsPortfolio = [
    {
     label:"MugStyle",
     details:"Eshop, Front-end",
     className:"one",
     img:"/projects/mugstyle.png",
     desc:"Projet personel développé avec NextJs, Typescript, et SASS pour la partie Front-End. Projet Full-Stack à terme. Maquettes créées sur FIGMA",
     link:"https://eshop-mugstyle2024.vercel.app/",
     video: "/videos/mugStyle.mp4",
    }, 
    {
     label:"CrazeeBurger",
     details:"Restaurant, Front-end",
     className:"two",
     img:"/projects/crazee.png",
     desc:"Projet de Formation 'React en Entrepise': Application web développée avec ViteJs, Styled-Component et Firebase pour la base de donnée. Maquettes Figma",
     link:"https://crazee-burger-git-main-morganes-projects.vercel.app/",
     video: "/videos/crazee.mp4",
    }, 
    {
     label:"Dashboard",
     details:"Dashboard, Front-end",
     className:"three",
     img:"/projects/dash.png",
     desc:"Projet personel React et SASS Front-end. Dashboard multi-projets. Présenté sous la forme d'un tableau de bord, vous trouverez présenté ici plusieurs petit projets classique: Calculatrice, Météo, Calendrier et Heure, Musique player, Quiz, To do list, Tik Tak Toe, Memory.",
     link:"https://morgane-dashboard23.netlify.app/",
     video: "/videos/dashboard.mp4",
    }, 
    {
     label:"Share Your Life",
     details:"Reseau Social - Full-Stack",
     className:"four",
     img:"/projects/share.png",
     desc:"Projet personel React et SASS pour le Front, NodeJs pour le Back et MySQL pour la Base de données. Pour acceder aux fonctionalités qu'offre 'Share Your Life', il est impératif de s'inscrire. Vous pourrez ensuite créer votre profil, mettre en ligne des posts, avec ou sans images, les modifier, les supprimer, les liker ou encore les commenter. Il vous sera également possible de suivre d'autres utilisateurs et d'accéder a leurs propres profils. Afin de permettre une fluidité de navigation j'ai utilisé React Query sur la partie Front, l'API est quant à elle sécurisée grâce a JSONwebtoken.",
     link:"https://shareyourlife-23.netlify.app/",
     video: "/videos/share.mp4",
    }, 
    {
     label:"Just Write",
     details:"Blog Personnel - Full-Stack",
     className:"five",
     img:"/projects/blog.png",
     desc:"Projet personel React et SASS pour le Front, NodeJs pour le Back et MongoDB pour la Base de données. Just Write est un blog personnel qui permet d'écrire et de lire des articles.",
     link:"https://blog2023-justwrite.netlify.app/",
     video: "/videos/just.mp4",
    }, 
    {
     label:"Recipes App",
     details:"Site de recherche de recettes - Front-End",
     className:"six",
     img:"/projects/recipes.png",
     desc:"rojet personel React et SASS, Recipes App pour la recherche de recettes, en bonus, la possibilité de mettre des recettes dans les favoris.",
     link:"https://morgane-recipesapp2022.netlify.app/",
     video: "/videos/recipes.mp4",
    }, 
    {
     label:"Kasa, Location Immobilière",
     details:"React App partie Front-End",
     className:"seven",
     img:"/projects/kasa.png",
     desc:"Projet OpenClassrooms développé en ReactJs et SASS, Kasa est un site de location immobilière.",
     link:"https://kasa2022-app.netlify.app/",
     video: "/videos/kasa.mp4",
    }, 
    {
     label:"ohMyFood",
     details:"Page HTML et CSS",
     className:"eight",
     img:"/projects/ohmyfood.png",
     desc:"Premier projet d'OpenClassrooms, 'Booki' est un site qui permet de trouver un logement et une activité dans la ville de son choix. Le but du projet était de développer une page en HTML et en CSS, selon une maquette.",
     link:"https://morganefrlr.github.io/ProjetP3-Morgane-Martin/",
     video: "/videos/ohMyFood.mp4",
    }, 
 ]




//////////////////////////////////// Contact Component ////////////////////////////////////

export const inputContactConfig = [
    {
        label:'Nam Complet',
        html:"input",
        type:'text',
        placeholder:"Votre nom",
        name:'user_name',
        required:false,
    },
    {
        label:'Adresse mail',
        html:"input",
        type:'email',
        placeholder:"Votre email",
        name:'user_email',
        required:true,
    },
    {
        label:'Sujet du Message',
        html:"input",
        type:'text',
        placeholder:"Sujet",
        name:'user_subject',
        required:false,
    },
    {
        label:'Message',
        html:"textarea",
        type:'',
        placeholder:"Message",
        name:'message',
        required:true,
    },
]