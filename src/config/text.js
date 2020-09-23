const about_me = "Nice to meet you! My name is Taiyr. I am a third year Computer Science student at Jacobs University Bremen, Germany. I am a Full Stack Developer based in Bremen, Germany, specialising in software and web development. I have been working in IT industry since 2019 and got my first programmer job at the age of 17."

const experience = {
  pryzl_cto: {
    title: "CTO & Cofounder at Pryzl (Self-employed)",
    subtitle: "https://www.pryzl.com",
    date: "05/2020 - Present",
    description: [
      "Develop Flutter mobile applications for Android and iOS",
      "Develop cloud functions and custom REST APIs on Firebase and GCP using Typescript",
      "Build, lead, motivate, and mentor a small engineering and product team",
      "Design and implement a database design and infrastructure",
      "Define and implement development standards according to up-to-date coding methodologies and best practices",
      "Build an agile development culture",
    ],
  },
  medikura_working_student: {
    title: "Full Stack Developer (Working Student), remote job",
    subtitle: "https://www.medikura.com/en/",
    date: "12/2019 - 05/2020",
    description: [
      "Developed automatic end-to-end test suites / ecosystems for all platform services to proof the readiness for release",
      "Migrated Express.js codebases to Typescript",
    ]
  },
  teaching_assistant: {
    title: "Teaching Assistant, Jacobs University Bremen",
    subtitle: "Programming in C and C++",
    date: "09/2019 - 12/2019",
    description: [
      "Coordinated instructional efforts with professor",
      "Tutored 180 students and assist with assignments, imperative and object-oriented programming concepts",
      "Monitored students during class work and exams",
      "Provided assistance to professor in terms of preparing lesson outlines",
    ]
  },
  medikura: {
    title: "Frontend Web Developer Intern, Medikura",
    subtitle: "https://www.medikura.com/en/",
    date: "06/2019 – 08/2019",
    description: [
      "Medikura develops the digital infrastructure for modern drug safety by enabling real-time reporting of side-effects which connects patient, doctors, pharmacists, pharma companies and authorities on an easy-to-use real-time platform.",
      "Built React.JS/Redux app to add account management and enable pharma companies to exchange structured messages with patients",
      "Worked on Node.JS microservice to aggregate and filter information from an external API",
      "Turned Figma mockups into user interfaces using React.JS, Styled Components and Material-UI",
      "Standardized and improve code style and structure across several React.JS projects",
      "Worked on NodeJS app with handlebars templates to generate and download PDFs from HTML and CSS",
      "Learned and applied clean coding software engineering principles through code reviews and pair programming",
      "Reviewed code of other developers",
      "Learned Agile principles by working in fast-paced scrum team",
    ]
  },
  method: {
    title: "Summer Internship Program | MethodPro, Almaty, KZ",
    subtitle: "http://pro.method.kz/",
    date: "06/2018 – 07/2018",
    description: [
      "Studied HTML, CSS, JavaScript and Python over the course of 8 weeks",
      "Worked on business cases from several Kazakhstani companies",
    ]
  },
}

const education = [
  {
    university: "Jacobs University Bremen",
    location: "Bremen, Germany",
    date: "09/2018 – Present",
    major: "Computer Science",
    courses: {
      year_1: [
        "Introduction to Computer Science",
        "Algorithms and Data Structures",
        "Programming in C",
        "Objected Oriented programming in C++",
        "Advanced Programming in Python",
        "Calculus I",
        "Calculus II",
        "Linear Algebra I",
        "Linear Algebra II",
        "Introduction to Intelligent Mobile Systems",
        "Introduction to Intelligent Mobile Systems Lab",
        "Industrial Engineering",
        "Industrial Engineering Lab",
        "Introduction to Logistics",
        "Ethics in Science and Technology",
        "Fundamentals of International Business",
        "German A1.1",
        "German A1.2"
      ],
      year_2: [
        "Operating Systems",
        "Computer Networks",
        "Computer Architecture and Programming Languages",
        "Formal Languages and Logic",
        "Secure and Dependable Systems",
        "Computability and Complexity",
        "Machine Learning",
        "Data Bases and Web Services",
        "Software Engineering",
        "Computer Graphics",
        "Elements of Probability",
        "German A2.1",
        "German A2.2",
      ]
    },
  },
]

const skills = [
  {
    title: "Programming Languages",
    result: "JavaScript, TypeScript, C/C++, Dart, Python",
  },
  {
    title: "Techologies",
    result: "NodeJS(Express.js), ReactJS/Redux, Flutter, Firebase, Gatsby.js, HTML5/CSS3",
  },
  {
    title: "Databases",
    result: "SQL, MongoDB, Firebase Firestore",
  },
  {
    title: "Testing",
    result: "react-testing-library, Mocha, Chai, Jest",
  },
]

export {
  about_me, experience, education, skills,
}
