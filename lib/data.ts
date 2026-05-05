import { ShieldCheck, Cpu, Database, BookOpen, Code, Trophy, FileText, Users, Building, Activity, Lock, Smartphone, Calendar, GraduationCap, Layers } from 'lucide-react';
import { Project, Publication, Mentor, MentorCategory, Event, Stat, Slide } from '../types';

export const LAB_NAME = "Nxtlab";
export const UNIVERSITY_NAME = "University of Frontier Technology Bangladesh";

export const CAROUSEL_SLIDES: Slide[] = [
    {
        id: 1,
        image: "/assets/iot.jpg",
        title: "IoT & Robotics",
        subtitle: "Dept. of Internet of Things and Robotics Engineering developing autonomous systems and smart sensors."
    },
    {
        id: 2,
        image: "/assets/datascience.jpg",
        title: "Data Science & Engineering",
        subtitle: "Advanced analytics, machine learning models, and big data processing."
    }
];

export const FOCUS_AREAS = [
    {
        title: "IoT and Robotics",
        description: "Dept. of Internet of Things and Robotics Engineering developing autonomous systems and smart sensors.",
        icon: Cpu
    },
    {
        title: "Educational Technology",
        description: "Faculty of Digital Transformation Engineering revolutionizing learning through tech.",
        icon: BookOpen
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
        title: "NOIRBETTIK: A reading comprehension based multiple choice question answering dataset in Bangla language",
        authors: "T. T. Aurpa, M. S. H. Apu, F. Akter, R. K. Rifat, and M. A. Habib",
        journal: "Data in Brief, vol. 59",
        year: 2025,
        link: "https://doi.org/10.1016/j.dib.2025.111395"
    },
    {
        id: 'pub2',
        title: "Sentiment Analysis of public perception toward mob justice",
        authors: "F. Akter, T. T. Aurpa, F. Islam, M. S. Islam, N. Hossneara, and Md. Ashrafuzzaman",
        journal: "IEEE Conference",
        year: 2025,
        link: "https://doi.org/10.1109/qpain66474.2025.11171704"
    },
    {
        id: 'pub3',
        title: "An Agro Automation System for Endurable Sunflower Disease Recognition: A CNN-Based Transfer Learning Approach",
        authors: "F. Akter, M. A. Lata, R. Shakil, P. Halder, and K. R. Rashid",
        journal: "IEEE Conference",
        year: 2025,
        link: "https://doi.org/10.1109/qpain66474.2025.11172149"
    },
    {
        id: 'pub4',
        title: "Bangla MEDER: Multi-BERT Ensemble Approach for the Recognition of Bangla Medical Entity",
        authors: "T. T. Aurpa, F. Akter, Md. M. Hasan, S. Ahmed, S. A. Rafiq, F. Khan, and R. Sheikh",
        journal: "arXiv",
        year: 2025,
        link: "https://doi.org/10.48550/arxiv.2512.17769"
    },
    {
        id: 'pub5',
        title: "PROSHNO BINNASH: Contextual multi-label question answering dataset for low-resource NLP",
        authors: "R. Khan, T. T. Aurpa, M. S. Rahman, and Md. Ashrafuzzaman",
        journal: "Data in Brief, vol. 63",
        year: 2025,
        link: "https://doi.org/10.1016/j.dib.2025.112261"
    }
];

export const MENTORS: Mentor[] = [
    {
        id: 'm3',
        name: "Md. Ashrafuzzaman",
        role: "Assistant Professor",
        category: "Advisor",
        department: "Department of Educational Technology and Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Md. Ashrafuzzaman is an Assistant Professor in the Department of Educational Technology and Engineering at the University of Frontier Technology Bangladesh. He is passionate about transforming education through technology, with a focus on curriculum design, assessment strategies, and the integration of AI in learning environments. He actively contributes to national and international research in higher education and language pedagogy.",
        researchInterest: "Educational Technology, Higher Education, Teacher Education, Curriculum, Assessment and Feedback, Language Education and AI in Education",
        image: "/assets/7.png",
        orcid: "https://orcid.org/0000-0003-2100-9998",
        googleScholar: "https://scholar.google.com/citations?user=MdAshrafuzzaman",
        researchGate: "https://www.researchgate.net/profile/Md_Uzzaman4",
        linkedIn: "https://www.linkedin.com/in/md-ashrafuzzaman-27464a96"
    },
    {
        id: 'm2',
        name: "Farzana Akter",
        role: "Assistant Professor",
        category: "Advisor",
        department: "IoT and Robotics Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Farzana Akter is an Assistant Professor in the Department of IoT and Robotics Engineering at UFTB. Her research spans medical imaging, natural language processing, and federated learning. She is dedicated to developing intelligent systems that can assist in clinical decision-making and contribute to advancements in healthcare AI.",
        researchInterest: "Medical Imaging, NLP, Data Analysis, Federated Learning",
        image: "/assets/6.png",
        orcid: "https://orcid.org/0000-0003-3017-8742",
        googleScholar: "https://scholar.google.com/citations?user=6fzSuRQAAAAJ&hl=en"
    },
    {
        id: 'm1',
        name: "Tanjim Taharat Aurpa",
        role: "Lecturer",
        category: "Mentor",
        department: "Department of Data Science and Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Tanjim Taharat Aurpa is a Lecturer in the Department of Data Science and Engineering at UFTB. She specializes in Natural Language Processing and Explainable AI, with a particular interest in low-resource Bangla NLP. Her work includes developing datasets and models for question answering, sentiment analysis, and medical entity recognition in the Bangla language.",
        researchInterest: "NLP, XAI",
        image: "/assets/1.png",
        orcid: "https://orcid.org/0000-0003-1471-1316",
        googleScholar: "https://scholar.google.com/citations?user=L2OPFJgAAAAJ&hl=en",
        researchGate: "https://www.researchgate.net/profile/Tanjim-Taharat-Aurpa-2",
        linkedIn: "https://www.linkedin.com/in/tanjim-taharat-aurpa/"
    },
    {
        id: 'm4',
        name: "Farhana Islam",
        role: "Assistant Professor",
        category: "Mentor",
        department: "Department of Educational Technology and Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Farhana Islam is an Assistant Professor in the Department of Educational Technology and Engineering at UFTB. Her research focuses on machine learning and image processing, exploring how intelligent systems can be applied to solve real-world educational and engineering challenges.",
        researchInterest: "Machine Learning, Image Processing",
        image: "/assets/2.png"
    },
    {
        id: 'm6',
        name: "Md. Moshiur Rahman",
        role: "Lecturer",
        category: "Mentor",
        department: "Department of Software Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Md. Moshiur Rahman is a Lecturer in the Department of Software Engineering at UFTB. He is interested in machine learning and artificial intelligence, working on projects that bridge theoretical AI research and practical software applications.",
        researchInterest: "Machine Learning, Artificial Intelligence",
        image: "/assets/3.png",
        linkedIn: "https://www.linkedin.com/in/md-moshiur-b35974194"
    },
    {
        id: 'm7',
        name: "Rubel Sheikh",
        role: "Lecturer",
        category: "Mentor",
        department: "Educational Technology and Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Rubel Sheikh is a Lecturer in the Department of Educational Technology and Engineering at UFTB. His research spans machine learning, deep learning, NLP, and image processing. He is committed to advancing AI-driven solutions for education and healthcare, and has contributed to several peer-reviewed publications in these domains.",
        researchInterest: "Machine Learning, Deep Learning, NLP, Image Processing",
        image: "/assets/4.png",
        orcid: "https://orcid.org/0000-0002-6824-340X",
        researchGate: "https://www.researchgate.net/profile/Rubel-Sheikh",
        linkedIn: "https://www.linkedin.com/in/rubel-sheikh-0bb572154/"
    },
    {
        id: 'm5',
        name: "Sharad Hasan",
        role: "Lecturer",
        category: "Mentor",
        department: "Department of Data Science and Engineering",
        email: "nxtlab8@gmail.com",
        bio: "Sharad Hasan is a Lecturer in the Department of Data Science and Engineering at UFTB. His research interests include machine learning, deep learning, computer vision, and natural language processing. He is passionate about applying data-driven approaches to tackle complex problems across various domains.",
        researchInterest: "Machine Learning, Deep Learning, Computer Vision, Natural Language Processing, Data Science",
        image: "/assets/5.png",
        googleScholar: "https://scholar.google.com/citations?user=iLVghnEAAAAJ&hl=en",
        linkedIn: "https://www.linkedin.com/in/sharad-hasan/"
    },
    {
        id: 'r4',
        name: "Sabbir Ahmed",
        role: "Research Associate",
        category: "Researcher",
        department: "Institute of Technical and Vocational Education and Training (ITVET), BOU | MSc Student, Dept. of EDTE, University of Frontier Technology, Bangladesh",
        email: "1902001@icte.uftb.ac.bd",
        image: "/assets/researchers/sabbir.jpg"
    },
    {
        id: 'r2',
        name: "Md. Taslim Arif",
        role: "Lecturer",
        category: "Researcher",
        department: "Dept. of CSE, DIU | BSc (Eng.) in IRE, Dept. of IRE, University of Frontier Technology, Bangladesh",
        email: "1801030@iot.uftb.ac.bd",
        image: "/NXTLAB.png"
    },
    {
        id: 'r5',
        name: "Swapnil Tarafdar",
        role: "Lecturer",
        category: "Researcher",
        department: "Department of CSE, Daffodil International University | MSc Student, Dept. of Educational Technology and Engineering, University of Frontier Technology, Bangladesh",
        email: "1902042@icte.uftb.ac.bd",
        image: "/assets/researchers/swpnil.jpg"
    },
    {
        id: 'r6',
        name: "Sumona Afroz",
        role: "Lecturer",
        category: "Researcher",
        department: "Dept. of CSE, Daffodil International University | MSc Student, Dept. of Educational Technology and Engineering, University of Frontier Technology, Bangladesh",
        email: "1902025@icte.uftb.ac.bd",
        image: "/assets/researchers/chadnee.jpg"
    },
    {
        id: 'r1',
        name: "Md. Shahriar Hossain Apu",
        role: "Lecturer",
        category: "Researcher",
        department: "Dept. of CSE, Leading University, Sylhet | MSc Student, Dept. of IRE, University of Frontier Technology, Bangladesh",
        email: "1901036@iot.uftb.ac.bd",
        image: "/NXTLAB.png"
    },
    {
        id: 'r3',
        name: "Bakhtiar Muiz",
        role: "Lecturer",
        category: "Researcher",
        department: "Dept. of CSE, DIU | BSc (Eng.) in IRE, Dept. of IRE, University of Frontier Technology, Bangladesh",
        email: "1801045@iot.uftb.ac.bd",
        image: "/NXTLAB.png"
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
    { label: "Journal Publications", value: "05", icon: FileText },
    { label: "Funded Research", value: "2025", icon: Building },
    { label: "Total Members", value: "25+", icon: Users }
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

// Data Fetching Simulators (Simulation of Database usage)
export async function getProjects() {
    return PROJECTS;
}

export async function getPublications() {
    return PUBLICATIONS;
}

export async function getMentors() {
    return MENTORS;
}

export async function getEvents() {
    return EVENTS;
}

export async function getHeroSlides() {
    return CAROUSEL_SLIDES;
}
