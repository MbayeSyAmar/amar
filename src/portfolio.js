/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amar Mbaye sy",
  title: "Hi all, I'm AMAR Serigne Mbaye sy",
  subTitle: emoji(
    "A passionate about project management and full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / Laravel / Flutter and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/MbayeSyAmar",
  linkedin:
    "https://www.linkedin.com/in/serigne-mbaye-sy-amar-%E2%98%91%EF%B8%8F-0a128723a/",
  gmail: "babacaramar02@gmail.com",
  gitlab: "https://gitlab.com/babacaramar02",
  facebook: "https://www.facebook.com/anna.diop.50951/",
  medium: "https://medium.com/@babacaramar02",
  stackoverflow: "https://stackoverflow.com/users/27638395/babacar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "PROJECT MANAGER AND FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fab fa-flutter"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centrale Marseille (Méditerranée)",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Engineering degree in IT development and organization",
      duration: "September 2024 - September 2025",
      desc: "One of the best engineering schools in France, i'm working on many projects including:",
      descBullets: [
        "Project manager for a team to create an online certification platform.",
        "Creation of an instant message mobile application",
        "Mobile application for booking home services, with user management and automatic notifications"
      ]
    },
    {
      schoolName: "Centrale Casablanca",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2022 - September 2024",
      desc: "Centrale supélec campus in africa, among the 5 best engineering schools in Morocco, i have worked on many projects including:",
      descBullets: [
        "Project manager and bankend developer of a 1-year 'Learning by Doing' project focused on the 'Smart City'. Our objective was to predict and provide information on traffic jams to improve urban mobility."
      ]
    },
    {
      schoolName: "Institut Polytechnique Saint-Louis",
      logo: require("./assets/images/IPSLLogo.png"),
      subHeader: "Preparatory class",
      duration: "September 2020 - September 2022",
      desc: "Among the 3 best schools in Senegal, i'm working on many projects including:",
      descBullets: ["Mathematics", "algorithm and coding", "physics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "99%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Skills & Smart",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "April 2024 – September 2024",
      desc: "Improved the e-m3ellem platform and implemented a club management platform named Maroc Sport Management.",
      descBullets: [
        "Contributed to the enhancement of a digital platform to better serve users.",
        "Developed a robust club management solution for sports organizations."
      ]
    },
    {
      role: "Web Development Intern",
      company: "Simplon Senegal",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "August 2022 – October 2022",
      desc: "Gained experience in programming and website creation using HTML, CSS, JavaScript, and Python Flask.",
      descBullets: [
        "Worked on creating websites and applications using modern web technologies.",
        "Collaborated on various projects focused on delivering user-friendly digital solutions."
      ]
    },
    {
      role: "Intern",
      company: "IDUS Capital",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "July 2023 – August 2023",
      desc: "Contributed to data analysis and enhanced research skills in a financial context.",
      descBullets: [
        "Performed extensive data analysis for improved financial decision-making.",
        "Refined research techniques to better support the company's financial strategies."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Best Certifications",
  subtitle: "6 months, 10 hours per week",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Google Project Management",
      projectDesc:
        " Project Planning: Putting It All Together , Foundations of Project Management, Agile Project Management, Capstone: Applying Project Management in the Real World, Project Initiation: Starting a Successful Project, Project Execution: Running the Project",
      footerLink: [
        {
          name: "View certificate",
          url: "https://coursera.org/share/d601834219d4d1c41e99a79e51b01211"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Scrum Master Certification",
      projectDesc:
        "Scrum Master Certification: Scrum Methodologies, Scrum Master Certification: Scaling Agile and the Team-of-Teams, Combining Scrum with Other Agile Methodologies",
      footerLink: [
        {
          name: "View certificate",
          url: "https://coursera.org/share/f92d6b66d20b0e2ea82d2bdd00dbd874"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements and Certifications that I have done !",

  achievementsCards: [
    {
      title: "Software Engineering: Modeling Software Systems using UML",
      subtitle: "The Hong Kong University of Science and Technology",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/a2384beaaf66731ace8af264399b1672"
        }
      ]
    },
    {
      title:
        "Google Apps Script: Access Google Sheets, Maps & Gmail in 4 Lines of Code",
      subtitle: "Google Cloud",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View certificate",
          url: "https://coursera.org/share/bdcf64b2606981c0b5a91411597a0119"
        }
      ]
    },

    {
      title: "Creative Design, Prototyping, and Testing",
      subtitle: "University of Maryland, College Park",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View certificate",
          url: "https://coursera.org/share/0206326f683d9d351f71700b6a24ff4a"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@babacaramar02/python-vs-java-une-comparaison-approfondie-bc2b6391f23e",
      title: "Python vs Java: An In-Depth Comparison",
      description:
        "Do you want to know in detail the big differences between java and python?"
    },
    {
      url: "https://medium.com/@babacaramar02/pourquoi-combiner-flutter-et-laravel-lalliance-gagnante-pour-le-développement-b219e29a8173",
      title:
        "Why Combine Flutter and Laravel: The Winning Alliance for Development",
      description:
        "This is why you should use Laravel as a backend when you develop a mobile application with flutter"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "IT guide and orientation",
      subtitle: "help to be comfortable with computers",
      slides_url:
        "https://centralecasablanca-my.sharepoint.com/:p:/g/personal/mbaye_amar_centrale-casablanca_ma/Ecv6ANehMCFDqUI9EYmOugkBWjw7z1ZJluvosYF-b5QkAw?e=w9wrg5",
      event_url: "https://www.facebook.com/share/4Lsg54W4RSbTM34q/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://podcasters.spotify.com/pod/show/babacar9/embed/episodes/Mon-parcours-My-journey-e2p8s90/a-abiibhc"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss or just want to say hi? My Inbox is open for all.",
  number: "+33 77333 98 35",
  email_address: "babacaramar02@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "babacaramar02", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
