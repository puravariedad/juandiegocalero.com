// Content that WordPress stored in menus and posts.
const SITE = 'https://juandiegocalero.com'

export const mainMenu = [
  { label: 'Portfolio', href: `${SITE}/`, current: true },
  { label: 'Design process', href: `${SITE}/design-process/` },
  { label: 'About', href: `${SITE}/about/` },
  { label: 'Contact', href: `${SITE}/contact-me/` },
]

export const socialMenu = [
  { label: 'Github', href: 'https://github.com/puravariedad' },
  { label: 'Linkedin', href: 'https://www.linkedin.com/in/juandiegocalero/' },
  { label: 'Pixelfed', href: 'https://picto.anartist.org/puravariedad' },
]

export const projects = [
  {
    title: 'Car Rental project onesite',
    description: 'Re-design and interfase redesign of car rental company',
    href: `${SITE}/car-rental-project-onesite/`,
    image: 'thumbnail-car-rental.png',
    width: 1418,
    height: 1000,
  },
  {
    title: 'Coeli management system redesign',
    description: 'Desktop software to manage collections',
    href: `${SITE}/user-interfase-redesign-coeli/`,
    image: 'thumbnail-coeli.png',
    width: 709,
    height: 500,
  },
  {
    title: 'ONE Insurance App',
    description: 'UX and UI for the ONE Insurance app: Web, Android and IOS',
    href: `${SITE}/one-insurance-app/`,
    image: 'thumbnail-one-insurance.png',
    width: 709,
    height: 500,
  },
  {
    title: 'Wefox broker portal',
    description: 'B2B Web app for insurance brokers: Responsive website',
    href: `${SITE}/wefox-broker-portal/`,
    image: 'thumbnail-wefox.png',
    width: 709,
    height: 500,
  },
  {
    title: 'PromoFarma E-commerce website',
    description: 'Marketplace for pharmacy e-commerce: Responsive website',
    href: `${SITE}/promofarma/`,
    image: 'thumbnail-promofarma.png',
    width: 709,
    height: 500,
  },
  {
    title: 'Menu App',
    description: 'Organize weekly menus with Artificial Intelligence',
    href: `${SITE}/menu-app/`,
    image: 'thumbnail-menuapp.png',
    width: 709,
    height: 500,
  },
]
