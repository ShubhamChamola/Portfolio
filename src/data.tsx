interface DetailedData {
  sequence: number;
  name: string;
  url: string;
  git: string;
  images: string[];
  imageIds: string[];
  prev: null | string;
  next: null | string;
  introPara: string;
  features: { [key: string]: string };
}

interface BriefData {
  name: string;
  stack: string[];
  images: string[];
  imageIds: string[];
  url: string;
}

export const projectData: BriefData[] = [
  {
    name: "OTS BLOG",
    stack: ["Fullstack", "React", "Typescript", "Firebase", "Sass"],
    images: [
      "/assets/project-images/blog/blog-1.png",
      "/assets/project-images/blog/blog-2.png",
      "/assets/project-images/blog/blog-3.png",
      "/assets/project-images/blog/blog-4.png",
    ],
    imageIds: ["ost-1", "ots-2", "ots-3", "ots-4"],
    url: "ots-blog",
  },
  {
    name: "Chat App",
    stack: ["Fullstack", "React", "Javascript", "Firebase", "Sass"],
    images: [
      "/assets/project-images/chat-app/chat-1.png",
      "/assets/project-images/chat-app/chat-2.png",
      "/assets/project-images/chat-app/chat-3.png",
      "/assets/project-images/chat-app/chat-4.png",
    ],
    imageIds: ["chat-1", "chat-2", "chat-3", "chat-4"],
    url: "chat-app",
  },
  {
    name: "#Blogger",
    stack: ["Fullstack", "React", "Javascript", "Firebase", "Sass"],
    images: [
      "/assets/project-images/personal-blog/personal-blog-1.png",
      "/assets/project-images/personal-blog/personal-blog-2.png",
      "/assets/project-images/personal-blog/personal-blog-3.png",
      "/assets/project-images/personal-blog/personal-blog-4.png",
    ],
    imageIds: ["blogger-1", "blogger-2", "blogger-3", "blogger-4"],
    url: "blogger",
  },
  {
    name: "Quiz App",
    stack: ["Frontend", "React", "Javascript", "Sass"],
    images: [
      "/assets/project-images/quiz/quiz-1.png",
      "/assets/project-images/quiz/quiz-2.png",
      "/assets/project-images/quiz/quiz-3.png",
      "/assets/project-images/quiz/quiz-4.png",
    ],
    imageIds: ["quiz-1", "quiz-2", "quiz-3", "quiz-4"],
    url: "quiz-app",
  },
  {
    name: "Sassy Calci",
    stack: ["Frontend", "Html", "Javascript", "Sass"],
    images: [
      "/assets/project-images/calculator/calci-1.png",
      "/assets/project-images/calculator/calci-2.png",
      "/assets/project-images/calculator/calci-3.png",
    ],
    imageIds: ["calci-1", "calci-2", "calci-3", "calci-4"],
    url: "sassy-calci",
  },
];

const otsBlogData: DetailedData = {
  sequence: 1,
  name: "OTS BLOG",
  url: "https://ots-blog-uptr.vercel.app/",
  git: "https://github.com/ShinOO7/OTS-BLOG",
  images: [
    "/assets/project-images/blog/blog-1.png",
    "/assets/project-images/blog/blog-2.png",
    "/assets/project-images/blog/blog-3.png",
    "/assets/project-images/blog/blog-4.png",
  ],
  imageIds: ["ost-1", "ots-2", "ots-3", "ots-4"],
  prev: null,
  next: "chat-app",
  introPara:
    "Its a blogging site for motorbikes. A user can surf through various blogs and can even create their account to get more personalized experience. A logged in user can like as well as bookmark a blog. A user can upload their profile pic and can be more connected to the site. They can comment on a blog and can share their views. Check out the site to know more.",
  features: {
    Authentication: "Support for Google Auth.",
    "Firebase Storage":
      "For storing user profile image as well as blog images.",
    "Firebase Realtime Database": "To store all the comments for the blog.",
    "Firebase Firestore":
      "Storing all the blog as well as user's data in the form of documents.",
    "Blog Form": "A form for creating blogs, can only be accessed by admin.",
    "Delete Account":
      "If a user wants to opt out from the site they can delete their account.",
    Interactivity:
      "A user can like a blog or bookmark it, according to the likes a blog can be seen at the most liked section in the site.",
  },
};

const chatAppData: DetailedData = {
  sequence: 2,
  name: "CHAT APP",
  url: "https://web-chatting-application.netlify.app/",
  git: "https://github.com/ShinOO7/Chat-App",
  images: [
    "/assets/project-images/chat-app/chat-1.png",
    "/assets/project-images/chat-app/chat-2.png",
    "/assets/project-images/chat-app/chat-3.png",
    "/assets/project-images/chat-app/chat-4.png",
  ],
  imageIds: ["chat-1", "chat-2", "chat-3", "chat-4"],
  prev: "ots-blog",
  next: "blogger",
  introPara:
    "Its a social app. A user is first asked to either login or create an account to interact with the site. A user can upload their profile pic and can be more connected to the site. They can send friend request to other users and if the request get accepted they both can chat. Its still under development. Check out the site to know more.",
  features: {
    Authentication: "Support for Email Auth.",
    "Firebase Storage": "For storing user profile image.",
    "Firebase Firestore":
      "To store all the data related to the webapp like messages, requests and user info.",
    "Search bar": "For searching other people in the app.",
    "Notificatin Pannel": "A user can check the status of their request.",
    "Realtime Chat":
      "All messages are send within small time frame and with info like timestamp of the message.",
  },
};

const bloggerData: DetailedData = {
  sequence: 3,
  name: "#Blogger",
  url: "https://your-personal-blogs.netlify.app/",
  git: "https://github.com/ShinOO7/Blog",
  images: [
    "/assets/project-images/personal-blog/personal-blog-1.png",
    "/assets/project-images/personal-blog/personal-blog-2.png",
    "/assets/project-images/personal-blog/personal-blog-3.png",
    "/assets/project-images/personal-blog/personal-blog-4.png",
  ],
  imageIds: ["blogger-1", "blogger-2", "blogger-3", "blogger-4"],
  prev: "chat-app",
  next: "quiz-app",
  introPara:
    "Its a blogging site. A user can surf through various blogs or create their own blog. Create an account to get more personalized experience. A logged in user can like as well as bookmark a blog and can upload their profile pic and can be more connected to the site. User can even search a blog. Check out the site to know more.",
  features: {
    Authentication: "Support for Google Auth & Email Auth",
    "Firebase Storage":
      "For storing user profile image as well as blog images.",
    "Firebase Firestore":
      "Storing all the blog as well as user's data in the form of documents.",
    "Blog Form":
      "A form for creating blogs, can be accessed by a logged in user.",
    "Category or Custom Search":
      "User can search through blogs according to their search query or according to the specified keywords.",
    "Edit Blog & Profile":
      "User can edit already created blog and their profile info like username, bio or profile pic.",
    Interactivity:
      "A user can like a blog or bookmark it, according to the likes a blog get dispalyed in the trending section.",
  },
};

const quizAppData: DetailedData = {
  sequence: 4,
  name: "Quiz App",
  url: "https://javascript-quiz-webapp.netlify.app/",
  git: "https://github.com/ShinOO7/quiz-app",
  images: [
    "/assets/project-images/quiz/quiz-1.png",
    "/assets/project-images/quiz/quiz-2.png",
    "/assets/project-images/quiz/quiz-3.png",
    "/assets/project-images/quiz/quiz-4.png",
  ],
  imageIds: ["quiz-1", "quiz-2", "quiz-3", "quiz-4"],
  prev: "blogger",
  next: "sassy-calci",
  introPara:
    "Its a webapp where you will be asked some questions related to javascript. Each question is unique and their is only one write answer out of four. If you answered correctly you will move on to the next question but if the answer is incorrect you will get a penalty of 10 secs. Their is a timmer which initiate as soon as you start the quiz. you have 180s if you run out of time quiz will end. Check out the site to know more.",
  features: {
    Interactive:
      "The webapp is interactive for instance if you click on the wrong answer, app will display the option is incorrect.",
    Engaging:
      "Their is a timer which create a fun and learning environment for the user and gets the user engaged with the app.",
    Leaderboard:
      "At the end of each quiz you will be asked to enter you initials and it will be stored in your localstorage. So multiple users can play and can compare their scores.",
  },
};

const sassyCalciData: DetailedData = {
  sequence: 5,
  name: "Sassy Calci",
  url: "https://miniature-calci.netlify.app/",
  git: "https://github.com/ShinOO7/Sass-calci",
  images: [
    "/assets/project-images/calculator/calci-1.png",
    "/assets/project-images/calculator/calci-2.png",
    "/assets/project-images/calculator/calci-3.png",
  ],
  imageIds: ["calci-1", "calci-2", "calci-3", "calci-4"],
  prev: "quiz-app",
  next: null,
  introPara:
    "Its a basic frontend site which can do primitive calculations for you. It has three different themes which you can toggle through. Its mobile responsive and has visaul effects which make a basic calculator appealing.Check out the site to know more.",
  features: {
    Themes: "The site has three different colorful themes.",
    Visuals: "All the buttons has visual and interactive effects.",
    Responsive:
      "The site is responsive in all screen sizes from a large monitor to a small mobile phone.",
  },
};

export const detailedProjectData: { [key: string]: DetailedData } = {
  "ots-blog": otsBlogData,
  "chat-app": chatAppData,
  blogger: bloggerData,
  "quiz-app": quizAppData,
  "sassy-calci": sassyCalciData,
};
