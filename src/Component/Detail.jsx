export const Detail = [
{
  id: 1,
  image: "/images/askit.png",
  shortDetail:
    "An AI-powered chat application designed to provide interactive conversations with support for text, voice, and document-based interactions.",

  overview:
    "AskIt is an AI-powered conversational web application that allows users to interact with an AI assistant through natural conversations. The application supports text conversations, voice recording and transcription, and document uploads, making it possible for users to provide information in different formats. It also includes chat management features that allow conversations to be organized and preserved for a seamless user experience.",

  challenges:
    "Building a smooth conversational experience while managing different types of user input, including text, audio, and documents. Handling asynchronous AI responses, voice recording, transcription, file processing, and persistent chat data while maintaining a responsive interface was also a key challenge.",

  solution:
    "Implemented a structured chat system with state management for conversations and user interactions. Integrated AI responses through an API, added voice recording and transcription functionality, and supported document processing for contextual conversations. Chat data was structured and persisted to provide users with a continuous conversational experience.",

  techStack: [
    "TypeScript",
    "Next.js",
    "Google Gemini API"
  ],

  features: [
    "AI-powered conversations",
    "Text-based chat",
    "Voice recording and transcription",
    "Document upload and processing",
    "Persistent chat history",
    "Multiple conversation management",
    "Streaming AI responses",
    "Responsive user interface"
  ],

  title: "AskIt",
  live: "https://ask-it-raveroses-projects.vercel.app/"
},
{
  id: 2,
  image: "/images/synergy.png",
  shortDetail:
    "A responsive fintech dashboard for managing savings, loans, investments, fund transfers, bill payments, and financial transactions.",

  overview:
    "Synergy is a financial management web application designed to give users a centralized platform for managing their finances. The dashboard provides users with an overview of their account balance, savings, loans, investments, fund transfers, bill payments, beneficiaries, and transaction history. It also includes financial insights to help users monitor their activities and understand their financial patterns.",

  challenges:
    "Building a structured financial dashboard with multiple financial services while keeping the interface simple and easy to navigate. Managing user data, authentication, account information, and transaction-related data securely while maintaining synchronization between the frontend and backend was also a key challenge.",

  solution:
    "Built the application with Vue.js using a component-based structure for reusable and maintainable UI components. Supabase was integrated to handle authentication, database operations, and user-related data. The dashboard was organized into dedicated sections for savings, loans, investments, transfers, bill payments, beneficiaries, and transaction history, providing users with a centralized financial management experience.",

  techStack: [
    "Vue.js",
    "Supabase",
    "JavaScript",
    "Pinia"
  ],

  features: [
    "User account management",
    "Savings management",
    "Loan management",
    "Investment management",
    "Fund transfers",
    "Bill payments",
    "Saved beneficiaries",
    "Transaction history",
    "Financial insights dashboard",
    "Account balance overview",
    "Responsive dashboard interface"
  ],

  title: "Synergy",
  live: "https://synergy-fintech.vercel.app/"
},
{
  id: 3,
  image: "/images/luminary.png",
  shortDetail:
    "A cybersecurity education dashboard for tracking learning progress, course enrollment, study consistency, and skill development.",

  overview:
    "Luminary is a cybersecurity education and progress-tracking web application designed to help users manage their learning journey from a centralized dashboard. Users can explore cybersecurity education paths, enroll in courses, track their learning consistency, monitor study hours, and visualize their career skill progression through interactive charts and progress indicators.",

  challenges:
    "Building a comprehensive cybersecurity education dashboard with multiple learning paths while keeping the interface organized and easy to navigate. Another key challenge was managing course enrollment, learning progress, consistency tracking, and skill data while keeping the dashboard dynamically synchronized across different sections of the application.",

  solution:
    "Built the application with Next.js and TypeScript using a component-based architecture for reusable and maintainable UI components. Zustand was used for efficient client-side state management, while Tailwind CSS and Shadcn UI provided a responsive and consistent interface. The dashboard was structured around course enrollment, consistency tracking, study hours, skill development, and career progression, with Chart.js used to transform learning data into interactive visualizations.",

  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Zustand",
    "Tailwind CSS",
    "Shadcn UI",
    "Chart.js",
    "Supabase"
  ],

  features: [
    "Cybersecurity education dashboard",
    "Course enrollment and management",
    "Cybersecurity learning paths",
    "Education type selection",
    "Consistency chain tracking",
    "Weekly learning goal management",
    "Course progress monitoring",
    "Study hours visualization",
    "Career skill progression chart",
    "Skill matrix visualization",
    "Responsive dashboard interface",
    "Interactive learning progress indicators"
  ],

  title: "Luminary: Cyber Command Dashboard",
  live: "https://test-luminary-cyber-command-dashboard-clone-whsve5elj.vercel.app/"
},
  {
    id: 4,
    image: "/images/axionis.png",
    subImages: [],
    shortDetail:
      "A responsive movie platform with authentication, search functionality, and media playback features.",
    overview:
      "Axionis Movies is a web application that allows users to stream movie trailers and search for content. It features a complete authentication system, enabling users to sign up, log in, update their profiles, upload images, and manage passwords. The application is fully responsive across devices.",
    challenges:
      "Implementing secure authentication and managing user sessions while ensuring smooth navigation. Handling media playback and search performance efficiently.",
    solution:
      "Integrated authentication workflows with proper state management and protected routes. Optimized search functionality and ensured smooth media playback using efficient component structure and lazy loading where necessary.",
    techStack: ["React", "Tailwind"],
    features: [
      "User authentication and profile management",
      "Movie details display",
      "Integrated movie player",
      "Search functionality",
    ],
    title: "Axionis Movies",
    live: "https://form-validation-six-gold.vercel.app/",
  },

  {
    id: 5,
    image: "/images/audiophile.png",
    subImages: [],
    shortDetail:
      "An audio-focused eCommerce platform with real-time data handling and advanced product interactions.",
    overview:
      "Audiophile is an eCommerce platform focused on headphones and audio products. It allows users to browse, search, and filter products, as well as manage carts and wishlists. It also includes profile image uploads and Paystack integration for payment testing, with product data managed using Convex.",
    challenges:
      "Managing real-time product data and ensuring consistent updates across the application. Handling complex user interactions like filtering and cart updates.",
    solution:
      "Leveraged Convex for real-time data handling and ensured efficient state synchronization across components. Built reusable UI components and optimized filtering logic for better performance.",
    techStack: ["NextJS", "Typescript", "Tailwind", "API", "Convex"],
    features: [
      "Product checkout system",
      "Payment integration (testing)",
      "Detailed product view",
      "Product data management with Convex",
    ],
    title: "Audiophile",
    live: "https://ecommerce-hng-seven.vercel.app/",
  },
];
