import { FaGithub, FaLinkedinIn, FaEnvelope, FaWhatsapp } from "react-icons/fa";

export const infos = [
    {
      label: "Adresse",
      info: "La Rochelle",
    },
    {
      label: "Téléphone",
      info: "06.58.80.02.24",
    },
    {
      label: "Mail",
      info: "morganeancelin@me.com",
    },
  ];


  export const languages = [
    {
      label: "Français",
      number: 100,
      class: ''
    },
    {
      label: "Anglais",
      number: 80,
      class: 'noFull'
    },
  ]

  export const social = [
    {
      label:'git',
      icon: <FaGithub/>,
      link:"https://github.com/Morganefrlr"
    },
    {
      label:'link',
      icon: <FaLinkedinIn/>,
      link:"https://www.linkedin.com/in/morganemartin-frlr/"
    },
    {
      label:'mail',
      icon: <FaEnvelope/>,
      link:"mailto:morganeancelin@me.com"
    },
    {
      label:'whats',
      icon: <FaWhatsapp/>,
      link:"https://wa.me/0658800224"
    },
  ]