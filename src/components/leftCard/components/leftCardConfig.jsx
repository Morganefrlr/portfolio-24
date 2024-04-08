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
    },
    {
      label:'link',
      icon: <FaLinkedinIn/>,
    },
    {
      label:'mail',
      icon: <FaEnvelope/>,
    },
    {
      label:'whats',
      icon: <FaWhatsapp/>,
    },
  ]