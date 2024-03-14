import { createStore } from "vuex";

export default createStore({
  state: {
    navLinks: [
      { name: "Home", url: "/", activeLink: false },
      { name: "Story", url: "/about", activeLink: false },
      { name: "Products", url: "/products", activeLink: false },
      { name: "FAQs", url: "/faq", activeLink: false },
      { name: "Contact", url: "/contacts", activeLink: false },
    ],
    mainSlides: [
      {
        srcImg: "medium-shot-business-women-high-five.jpeg",
        title: "Cool Fashion",
        description:
          "Little fashion template comes with total 8 HTML pages provided by Tooplate website.",
        button: {
          text: "Learn more about us",
          url: "/about",
        },
        showSlide: false,
      },
      {
        srcImg: "team-meeting-renewable-energy-project.jpeg",
        title: "New Design",
        description:
          "Please share this Little Fashion template to your friends. Thank you for supporting us.",
        button: {
          text: "Explore products",
          url: "/products",
        },
        showSlide: false,
      },
      {
        srcImg:
          "two-business-partners-working-together-office-computer.jpeg",
        title: "Talk to us",
        description:
          "Tooplate is one of the best HTML CSS template websites for everyone.",
        button: {
          text: "Work with us",
          url: "/contacts",
        },
        showSlide: false,
      },
    ],
    aboutNav: [
      {
        text: 'Introduction'
      },
      {
        text: 'How we work?'
      },
      {
        text: 'Capabilites'
      }
    ],
    aboutSlides: [
      {
        srcImg: "pim-chu-z6NZ76_UTDI-unsplash.jpeg",
        title: 'Good Design Ideas for your fashion',
        description: 'Little Fashion templates comes with sign in / sign up pages, product listing / product detail, about, FAQs, and contact page.',
        description2: 'Since this HTML template is based on Boostrap 5 CSS library, you can feel free to add more components as you need.',
        button: {
          text: 'Learn more about us',
          url: '/about'
        },
        showSlide: true,
      },
      {
        srcImg: "img.jpg",
        title: 'Life at Studio',
        description: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies',
        description2: 'Custom work is branding, web design, UI/UX design',
        button: {
          text: 'Work with us',
          url: '/contacts'
        },
        showSlide: false,
      },
      {
        srcImg: "cody-lannom-G95AReIh_Ko-unsplash.jpeg",
        title: 'What can help you?',
        description: 'Over three years in business, We’ve had the chance on projects',
        description2: '',
        button: {
          text: 'Explore products',
          url: '/products'
        },
        description3: [
          {
            title: 'Branding',
            success: '90%'
          },
          {
            title: 'Design & Stragety',
            success: '70%'
          },
          {
            title: 'Online Platform',
            success: '80%'
          }
        ],
        showSlide: false,
      },
    ]
  },
});
