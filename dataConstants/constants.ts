export const NavLinks = [
    {
        id:0,
        url:"#about",
        label: "About Andy"
    },
    {
        id:1,
        url:"#projects",
        label: "Projects"
    },
    {
        id:2,
        url:"#skills",
        label: "Skills"
    },
    
    {
        id:3,
        url:"#contact",
        label: "Contact Me"
    }
]

export const Me = [
    {
        name: "Andy",
        desription: "Long Walks on the beach have prevented me from doing more projects. More are in the making",
        profilePic: "/Headshot.jpg"
    }
]

export const RadarSkills = [
    {
      id: 1,
      title: "Languages",
      axes: [
        { label: "Python", score: 4 },
        { label: "CSS", score: 3 },
        { label: "SQL", score: 3 },
        { label: "TypeScript", score: 3 },
        { label: "HTML", score: 3 },
        { label: "C", score: 4 },
      ],
      max: 5
    },
    {
      id: 2,
      title: "SWE",
      axes: [
        { label: "GitHub", score: 3 },
        { label: "React", score: 3 },
        { label: "Next.js", score: 3 },
        { label: "Flask", score: 4 },
        { label: "Tailwind CSS", score: 3 },
        { label: "Streamlit", score: 3 },
        { label: "Firebase", score: 2 },
        { label: "Docker", score: 2 },
      ],
      max: 5
    },
    {
        id: 3,
        title: "AI/ML",
        axes: [
                { label: "Google Colab", score: 5 },
                { label: "Pandas", score: 4 },
                { label: "NumPy", score: 4 },
                { label: "Matplotlib", score: 3 },
                { label: "Seaborn", score: 3 },
                { label: "sklearn", score: 4 },
            ],
        max: 5 
    },

];

export const Project = [
    {
        id:1,
        name: "Clash Royale Emotion Recognition",
        url: "https://github.com/Andy-MG2/CRFaceRecognition",
        image: "/projects/jynxzi.jpg",
        description: "Real-time facial emotion recognition system using ResNet18, OpenCV, and PyTorch with live webcam inference and Clash Royale emote reactions."
    },
    {
        id:2,
        name: "Clementine",
        url: "https://github.com/Prateek-Wali/Clementine",
        image: "/projects/Clementine.jpeg",
        description: "AI-powered relapse prevention system built with Fitbit heart rate monitoring, Google Places API trigger detection, Claude reasoning, and Vonage alert automation."
    },

]

export const Contact = [
    {
        id: 1,
        name: "GMail",
        url: "mailto:garciaa262005@gmail.com",
        image: "/contact/gmail.webp"
    },
    {
        id: 2,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/andymg2/",
        image: "/contact/linkedin.webp"
    },
    {
        id: 3,
        name: "GitHub",
        url: "https://github.com/Andy-MG2",
        image: "/contact/github.png"
    }
    
];