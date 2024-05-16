import {
  meta,
  shopify,
  starbucks,
  tesla,
  amazon,
  disney,
  Leetcode,
  freeCodeCamp,
  cert1,
  cert2,
  download,
  Leetcode2,
} from "../assets/images";
import {
  githubfinder,
  hotstar,
  sushi,
  amazonvid,
  resweb,
  romcon,
  weatherApp,
  phone,
  palin,
  userman,
} from "../assets/videos";

import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  twitter,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",

    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
export const projects = [
  {
    video: hotstar,
    Link: "https://disney-hotstar-e6e94.web.app/",
    Github: "https://github.com/FullStackAbhi/Disney-Hotstar",
    title: "Disney+ Hotstar",
    tech_used:
      "- React || Firebase || Redux || Styled-Component || JavaScript  || Html || Css  ",
    icon: disney,
    iconBg: "#000",
    points: [
      "User authentication and authorization using Firebase Auth",
      "Dynamic content rendering based on user preferences",
      "Responsive design using Styled Components for a great user experience across devices.",
      "Seamless streaming experience with Firebase Cloud Functions for backend logic",
      "Redux for state management, ensuring a smooth and efficient data flow",
    ],
  },
  {
    video: githubfinder,
    Link: "https://fullstackabhi.github.io/Github-finder-React/",
    Github: "https://github.com/FullStackAbhi/Github-finder-React",
    title: "Github-Finder",
    tech_used: "- React || JavaScript || Github Api || Html || Css",
    icon: github,
    iconBg: "#fff",
    points: [
      "Enhanced User Interface: Say goodbye to static layouts! The GitHub Finder now boasts dynamic React components that enhance usability and navigation.",

      "Stylish Design with Bootstrap: The integration of Bootstrap ensures a sleek and modern aesthetic, making every interaction with the GitHub Finder a delight.",

      "Efficient State Management: With React's state management capabilities, data handling is more efficient, resulting in faster rendering and improved performance",

      "Seamless API Integration: The project continues to leverage GitHub's API seamlessly, allowing users to search for GitHub profiles and explore repositories effortlessly",
    ],
  },
  {
    video: amazonvid,
    Link: "https://clone-67d70.web.app/",
    Github: "https://github.com/FullStackAbhi/amazon-clone",
    title: "Amazon-clone",
    tech_used: "- React || JavaScript || Firebase-Auth || Html || Css",
    icon: amazon,
    iconBg: "#000",
    points: [
      "React-Powered Shopping Experience: Experience seamless and interactive shopping with a user-friendly interface built using React. Browse through products, add items to your cart, and enjoy a smooth checkout process.",

      "Firebase Authentication: Securely authenticate and manage user sessions with Firebase Authentication. Enjoy hassle-free login and registration processes, ensuring a safe and personalized shopping experience for each user.",

      "Real-time Database with Firestore: Experience real-time updates and data synchronization with Firebase Firestore. Your Amazon clone app leverages Firestore's NoSQL database for efficient data storage, retrieval, and synchronization across devices.",
    ],
  },
  {
    video: weatherApp,
    Link: "https://github.com/FullStackAbhi/weather-app",
    Github: "https://github.com/FullStackAbhi/weather-app",
    title: "Weather App",
    tech_used:
      " - Weather-Api || Open Api || React || Dynamic-icon  || Html-css-javascript",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      "Dynamic Backgrounds: Reflects current weather conditions",
      "Automatic Location Detection: Instant weather updates for your location",
      "Search Functionality: Explore weather in any city",
      "Dynamic Icons: Visual representation of weather conditions",
      "Hourly & Daily Forecasts: Plan ahead with detailed forecasts",
    ],
  },
  {
    video: resweb,
    Link: "https://fullstackabhi.github.io/Responsive-Company-Website/",
    Github: "https://github.com/FullStackAbhi/Responsive-Company-Website",
    title: "Responsive-Company-Website",
    tech_used: "Bootstrap || JavaScript|| Html || Css",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      "Mobile-friendly Design: Utilizing Bootstrap ensures that the website is responsive, meaning it adapts seamlessly to various screen sizes and devices, offering a consistent and user-friendly experience across desktops, tablets, and smartphones",

      "Sleek and Modern Appearance: The combination of HTML, CSS, and JavaScript allows for a visually appealing and professional-looking website.",

      "Fast Loading Times: Bootstrap's optimization features, coupled with efficient coding practices in HTML, CSS, and JavaScript. This helps improve user retention and satisfaction by reducing waiting periods and ensuring a smooth browsing experience.",

      "Enhanced Functionality: JavaScript adds dynamic functionalities to the website, such as interactive forms, animations, sliders, and more.",
    ],
  },
  {
    video: sushi,
    Link: "https://fullstackabhi.github.io/Responsive-Restaurant/",
    Github: "https://github.com/FullStackAbhi/Responsive-Restaurant",
    title: "Sushi Retaurant",
    tech_used: " - Sass || scss-mixins || Html-css-javascript",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      "Responsive Design: Utilizing SCSS mixins creates flexible layouts for a responsive sushi restaurant website that looks great on all devices.",

      "Interactive Features: HTML, CSS, and JavaScript combine to add interactive elements like menu sliders and reservation forms, enhancing user engagement.",

      "Customized Styling: SCSS enables custom styling tailored to the sushi theme, optimizing performance with quick loading times and smooth animations.",
    ],
  },
  {
    video: romcon,
    Link: "https://fullstackabhi.github.io/Roman-number-converter/",
    Github: "https://github.com/FullStackAbhi/Roman-number-converter",
    title: "Roman Number Converter",
    tech_used: "- Dsa || JavaScript || Html || Css || Regular-Exp ",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      " HTML Structure: The website's HTML structure includes input fields for entering decimal numbers and a submit button. JavaScript converts the decimal number to its Roman numeral equivalent and displays the result.",
      "Educational Support: The Roman number converter website serves as an educational tool, aiding younger siblings in understanding Roman numerals and completing their summer vacation tasks independently.",
      "CSS Styling: CSS styles the input fields, button, and result display area, enhancing the visual presentation and making the website more user-friendly.",

      "JavaScript Conversion Algorithm: DSA fundamentals are utilized in JavaScript to implement the algorithm for converting decimal numbers to Roman numerals, ensuring accuracy and efficiency in the conversion process.",
    ],
  },
  {
    video: userman,
    Link: "https://github.com/FullStackAbhi/User-management-App",
    Github: "https://github.com/FullStackAbhi/User-management-App",
    title: "User Management App",
    tech_used: "- React || JavaScript || Material UI || Css || Html ",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      "Create a user: Implement a form with Material-UI TextField components for user input.",
      "Read users: Display a list of users using Material-UI's Table component.",
      "Update user: Allow editing of user details using Material-UI forms and buttons.",
      "Delete user: Provide a delete button or action to remove users from the list.",
    ],
  },
  {
    video: phone,
    Link: "https://fullstackabhi.github.io/Phone-Number-Validator/",
    Github: "https://github.com/FullStackAbhi/Roman-number-converter",
    title: "Phone-Number-Validator",
    tech_used: "- Dsa || JavaScript || Html || Css || RegExp ",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      " HTML Structure: The website's HTML structure includes input fields for entering phone numbers and a submit button. JavaScript is used to validate the input and display the result.",

      "CSS Styling: CSS styles the input fields, button, and result display area, enhancing the visual appeal and user experience of the website.",

      "JavaScript Validation: DSA fundamentals are applied in JavaScript to validate the entered phone number format, ensuring it meets the specified criteria (e.g., country code, number of digits).",
    ],
  },
  {
    video: palin,
    Link: "https://fullstackabhi.github.io/palindrome-Checker/",
    Github: "https://github.com/FullStackAbhi/palindrome-Checker",
    title: "Palindrome-Checker",
    tech_used: "- Dsa || JavaScript || Html || Css || palindrome-algo  ",
    icon: meta,
    iconBg: "#a2d2ff",
    points: [
      "Efficient Algorithm Implementation: Utilizing data structures and algorithms (DSA) skills, the palindrom checker website efficiently checks whether a given input string is a palindrome or not. This involves using techniques such as reversing the string and comparing characters, optimizing the checking process for quick and accurate results.",

      "Error Handling and Edge Cases: DSA expertise is showcased in handling various edge cases and error scenarios, ensuring robust functionality of the palindrom checker website. This includes handling special characters, spaces, and capitalization differences appropriately to accurately determine palindrome strings.",
    ],
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/FullStackAbhi",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/abhishek-tiwari-1884522a1/",
  },
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://twitter.com/Abhishek4749979",
  },
  {
    name: "Leetcode",
    iconUrl: "https://assets.leetcode.com/users/leetcode/avatar_1568224780.png",
    link: "https://leetcode.com/u/FullStackAbhi/",
  },
];
export const achievements = [
  {
    Link: "https://www.freecodecamp.org/certification/fccb6f05690-7a29-46d3-80af-4d3b2f8808c1/javascript-algorithms-and-data-structures-v8",
    title: "JavaScript Algorithms and Data Structures",
    tech_used: "#DSA #JavaScript #html #Css",
    icon: download,
    iconBg: "#000",
    date: "May 7 2024",
    img: cert2,
    des: "As part of this certification, Abhishek tiwari built the following projects and got all automated test suites to pass",
    points: [
      "Build a Palindrome Checker",
      "Build a Roman Numeral Converter",
      "Build a Telephone Number Validator	",
      "Build a Cash Register",
      "Build a Pokémon Search App",
    ],
  },
  {
    Link: "https://www.freecodecamp.org/certification/fccb6f05690-7a29-46d3-80af-4d3b2f8808c1/responsive-web-design",
    title: "Responsive Web Design",
    tech_used: "#Html #Css #JavaScript",
    icon: download,
    iconBg: "#000",
    date: "August 7 2023",
    img: cert1,
    points: [
      "Build a Survey Form",
      "Build a Tribute Page",
      "Build a Technical Documentation Page",
      "Build a Product Landing Page",
      "Build A Personal Portfolio Webpage",
    ],
  },
  {
    Link: "https://www.freecodecamp.org/fccb6f05690-7a29-46d3-80af-4d3b2f8808c1",
    title: "FreeCodeCamp",
    tech_used: "#Dsa #Styled-Component #JavaScript #html #Css  ",
    icon: download,
    iconBg: "#000",
    date: "joined july 2023",
    img: freeCodeCamp,
    points: [
      "Achieved 927 points on FreeCodeCamp",
      "By completing various coding challenges and projects.",
      "Consistently scored high marks in algorithmic problem-solving and web development tasks.",
      "Demonstrated proficiency in HTML, CSS, JavaScript, and DSA related technologies through FreeCodeCamp's interactive curriculum",
    ],
  },
  {
    Link: "https://leetcode.com/u/FullStackAbhi/",
    title: "LeetCode",
    tech_used: "#Dsa  #JavaScript",
    icon: Leetcode2,
    iconBg: "#000",
    date: Date.now(),
    img: Leetcode,
    points: [
      "Successfully solved over 40 LeetCode coding problems across various difficulty levels.",
      "Consistently engage in daily problem-solving sessions on LeetCode to enhance algorithmic skills and coding proficiency.",
      "Achieved proficiency in data structures and algorithms through LeetCode's challenging problems and coding competitions.",
      "Proficient in data structures such as arrays, strings, and linked lists.",
      "Experienced in searching algorithms (e.g., binary search) and sorting algorithms (e.g., quicksort, mergesort).",
      "Actively learning and expanding knowledge in additional algorithms and data structures.",
    ],
  },
];
