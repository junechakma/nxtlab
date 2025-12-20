import { ShieldCheck, Cpu, Database, BookOpen, Code, Trophy, FileText, Users, Building, Activity, Lock, Smartphone, Calendar, GraduationCap, Layers } from 'lucide-react';
import { Project, Publication, Mentor, Event, Stat, Slide } from './types';

export const LAB_NAME = "Nxtlab";
export const UNIVERSITY_NAME = "University of Frontier Technology Bangladesh";

export const CAROUSEL_SLIDES: Slide[] = [
  {
    id: 1,
    image: "https://uftb.ac.bd/uploads/topics/17648358986492.jpg",
    title: "Award Winning Innovation",
    subtitle: "IoT & Robotics Engineering Team secures 1st Runner-Up at IOTRIX 2025 Hackathon."
  },
  {
    id: 2,
    image: "https://uftb.ac.bd/uploads/topics/17638698508303.jpeg",
    title: "Excellence in Coding",
    subtitle: "UFTB's 'The Flying Dutchman' wins big at MU CSE Fest 2025 Ideathon."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1581093458791-9f302e6d8359?q=80&w=2070&auto=format&fit=crop",
    title: "Pioneering Research",
    subtitle: "Advancing Deep Learning, Bioinformatics, and Smart Systems at Nxtlab."
  }
];

export const FOCUS_AREAS = [
  {
    title: "Cyber Security Engineering",
    description: "Faculty of Security and Communication Engineering focusing on cryptographic algorithms and network defense.",
    icon: Lock
  },
  {
    title: "IoT and Robotics",
    description: "Dept. of Internet of Things and Robotics Engineering developing autonomous systems and smart sensors.",
    icon: Cpu
  },
  {
    title: "Software Engineering",
    description: "Faculty of Software and Machine Intelligence Engineering driving next-gen software solutions.",
    icon: Code
  },
  {
    title: "Data Science & Engineering",
    description: "Advanced analytics, machine learning models, and big data processing.",
    icon: Database
  },
  {
    title: "Educational Technology",
    description: "Faculty of Digital Transformation Engineering revolutionizing learning through tech.",
    icon: BookOpen
  },
  {
    title: "Communication Systems",
    description: "Advanced research in secure and efficient communication protocols.",
    icon: Smartphone
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: "IoT-driven Weather Forecasting",
    category: "IoT & ML",
    image: "https://uftb.ac.bd/uploads/topics/17629386892987.jpg",
    description: "Real-time weather measurement and forecasting mobile application with machine learning integration for accurate local climate data."
  },
  {
    id: 'p2',
    title: "Bangla Text Normalization",
    category: "Deep Learning",
    image: "https://uftb.ac.bd/uploads/topics/17629340723439.jpg",
    description: "Deep learning-based Bangla text normalization with emotion classification for expressive text-to-speech synthesizers."
  },
  {
    id: 'p3',
    title: "Breast Cancer Staging",
    category: "Bioinformatics",
    image: "https://uftb.ac.bd/uploads/topics/17629338826903.jpeg",
    description: "Comprehensive bioinformatics and machine learning analyses for breast cancer staging using TCGA dataset to improve diagnostic accuracy."
  },
  {
    id: 'p4',
    title: "Words of War Sentiment Analysis",
    category: "NLP",
    image: "https://uftb.ac.bd/uploads/topics/17629336048528.jpg",
    description: "A hybrid BERT-CNN approach for topic-wise sentiment analysis on the Russia-Ukraine War using social media data."
  },
  {
    id: 'p5',
    title: "Retinal Disease Classification",
    category: "Medical AI",
    image: "https://uftb.ac.bd/uploads/topics/17629301343431.jpg",
    description: "Explainable deep learning-based meta-classifier approach for multi-label classification of retinal diseases to prevent vision loss."
  },
  {
    id: 'p6',
    title: "Securing Transactions",
    category: "FinTech Security",
    image: "https://uftb.ac.bd/uploads/topics/17629327482899.webp",
    description: "A hybrid dependable ensemble machine learning model using IHT-LR and grid search for detecting fraudulent financial transactions."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'pub1',
    title: "Design and performance analysis of alcohols sensing using photonic crystal fiber",
    authors: "Research Team",
    journal: "Physics Open, Volume 17",
    year: 2023,
    link: "https://uftb.ac.bd/research-activities-1/publications/design-and-performance-analysis-of-alcohols-sensing-using-photonic-crystal-fiber-in-terahertz-spectrum-in-physics-open-,volume-17"
  },
  {
    id: 'pub2',
    title: "Design of Quasi-Shaped Spectroscopy based Optical Sensor",
    authors: "Research Team",
    journal: "Sensing and Bio-Sensing Research, Vol 41",
    year: 2023,
    link: "https://uftb.ac.bd/research-activities-1/publications/design-of-quasi-shaped-spectroscopy-based-optical-sensor-for-the-detection-of-alcohol-in-sensing-and-bio-sensing-research-,volume-41-,2023"
  },
  {
    id: 'pub3',
    title: "BUVOTS: A Blockchain Based Unmanipulated Voting Scheme",
    authors: "Research Team",
    journal: "Blockchain Security",
    year: 2023,
    link: "https://uftb.ac.bd/research-activities-1/publications/buvots:-a-blockchain-based-unmanipulated-voting-scheme"
  },
  {
    id: 'pub4',
    title: "Object Detection on Dental X-ray Images Using Region-Based CNN",
    authors: "Research Team",
    journal: "Medical Imaging",
    year: 2023,
    link: "https://uftb.ac.bd/research-activities-1/publications/object-detection-on-dental-x-ray-images-using-region-based-convolutional-neural-networks"
  },
  {
    id: 'pub5',
    title: "Controlling Home Appliances adopting Chatbot using ML",
    authors: "Research Team",
    journal: "Smart Home Automation",
    year: 2023,
    link: "https://uftb.ac.bd/research-activities-1/publications/controlling-home-appliances-adopting-chatbot-using-machine-learning-approach."
  }
];

export const MENTORS: Mentor[] = [
  {
    id: 'm1',
    name: "Prof Dr. Mohammad Abu Yousuf",
    role: "Vice Chancellor & Dean",
    department: "Faculty of Cyber Physical System Engineering | Faculty of Software and Machine Intelligence Engineering",
    image: "https://ui-avatars.com/api/?name=Mohammad+Abu+Yousuf&background=0ea5e9&color=fff&size=400&font-size=0.33"
  },
  {
    id: 'm2',
    name: "Prof Dr. Md. Anwar Hussain",
    role: "Treasurer & Dean",
    department: "Faculty of Security and Communication Engineering | Faculty of Digital Transformation Engineering",
    image: "https://ui-avatars.com/api/?name=Anwar+Hussain&background=0284c7&color=fff&size=400&font-size=0.33"
  }
];

export const EVENTS: Event[] = [
  {
    id: 'e1',
    title: "Funded Research Project Training",
    date: "08 Dec, 2025",
    location: "UFTB Campus",
    description: "Training on Inception, Planning, Budget & Implementation Strategies for Funded Research Projects."
  },
  {
    id: 'e2',
    title: "Explainable AI in Healthcare",
    date: "06 Dec, 2025",
    location: "Seminar Hall",
    description: "Seminar on 'Explainable AI in Healthcare: Building Trust in Clinical Decisions'."
  },
  {
    id: 'e3',
    title: "Rubric Based Evaluation Workshop",
    date: "15 Nov, 2025",
    location: "UFTB Campus",
    description: "Hands-on Training Session on Rubric Based Evaluation and Outcome Analysis."
  }
];

export const STATS: Stat[] = [
  { label: "Journals", value: "193", icon: FileText },
  { label: "Conferences", value: "141", icon: Users },
  { label: "Funded Research", value: "20", icon: Building },
  { label: "Awards Won", value: "06", icon: Trophy },
];

export const EXTRA_STATS = [
  { label: "Founded", value: "2018", icon: Calendar },
  { label: "Faculty Members", value: "43+", icon: GraduationCap },
  { label: "Regular Students", value: "732+", icon: Users },
  { label: "Departments", value: "6+", icon: Layers }
];

export const COLLABORATORS = [
  { name: "Korea University", image: "https://uftb.ac.bd/uploads/topics/17371823455930.jpg" },
  { name: "JICA", image: "https://uftb.ac.bd/uploads/topics/17371829861873.jpg" },
  { name: "Walton", image: "https://uftb.ac.bd/uploads/topics/17371831819555.jpg" },
  { name: "Wadhwani Foundation", image: "https://uftb.ac.bd/uploads/topics/17371829223705.jpg" },
  { name: "KPJ Specialized Hospital", image: "https://uftb.ac.bd/uploads/topics/17640449605997.jpg" },
  { name: "Felicity", image: "https://uftb.ac.bd/uploads/topics/17371834623177.jpg" },
  { name: "DEA", image: "https://uftb.ac.bd/uploads/topics/17371836184539.jpg" },
  { name: "Mojaru", image: "https://uftb.ac.bd/uploads/topics/17371833137415.jpg" }
];