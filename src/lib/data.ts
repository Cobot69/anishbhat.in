import { Experience, Project, SkillCategory, Research, Education } from "@/types";

export const aboutData = {
  name: "Anish Bhat",
  role: "AI/ML Engineer & Developer",
  tagline: "Building intelligent systems with Generative AI, Agents, Automation, and Product Development.",
  description: "AI/ML Engineer and backend developer with hands-on experience designing scalable backend systems, API-driven architectures, and production-grade ML pipelines for computer vision, NLP, and agentic AI applications. Proficient in Python, OOP, and clean code practices with a strong emphasis on writing test cases, debugging production issues, and maintaining reliable version control workflows via GitHub. Proven track record of shipping end-to-end systems—from architecture design through testing and deployment—with measurable impact on performance, reliability, and business outcomes.",
  stats: [
    { label: "Projects Built", value: "10+" },
    { label: "Research Publications", value: "3" },
    { label: "Years building project experience", value: "3+" },
    { label: "Hackathons Won", value: "2" },
  ]
};

const getIcon = (slug: string) => `https://cdn.simpleicons.org/${slug}/white`;
const getFallback = () => getIcon("youtube"); // Toggle tube fallback

export const skillsData: SkillCategory[] = [
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "Deep Learning", logo: getFallback(), level: 70 },
      { name: "Computer Vision", logo: getIcon("opencv"), level: 68 },
      { name: "NLP", logo: getFallback(), level: 65 },
      { name: "Generative AI", logo: getIcon("openai"), level: 67 },
      { name: "Transformers", logo: getIcon("huggingface"), level: 65 },
      { name: "RAG", logo: getFallback(), level: 69 },
      { name: "Agentic Systems", logo: getFallback(), level: 65 }
    ]
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "PyTorch", logo: getIcon("pytorch"), level: 70 },
      { name: "TensorFlow", logo: getIcon("tensorflow"), level: 68 },
      { name: "HuggingFace", logo: getIcon("huggingface"), level: 66 },
      { name: "OpenCV", logo: getIcon("opencv"), level: 70 },
      { name: "LangChain", logo: getIcon("langchain"), level: 65 },
      { name: "n8n", logo: getIcon("n8n"), level: 67 },
      { name: "Pandas", logo: getIcon("pandas"), level: 69 },
      { name: "NumPy", logo: getIcon("numpy"), level: 70 }
    ]
  },
  {
    name: "Backend & Web",
    skills: [
      { name: "Python", logo: getIcon("python"), level: 70 },
      { name: "C++", logo: getIcon("cplusplus"), level: 62 },
      { name: "HTML", logo: getIcon("html5"), level: 70 },
      { name: "Next.js", logo: getIcon("nextdotjs"), level: 65 },
      { name: "FastAPI", logo: getIcon("fastapi"), level: 68 },
      { name: "Flask", logo: getIcon("flask"), level: 66 },
      { name: "React", logo: getIcon("react"), level: 65 }
    ]
  },
  {
    name: "Databases & Cloud",
    skills: [
      { name: "PostgreSQL", logo: getIcon("postgresql"), level: 68 },
      { name: "MongoDB", logo: getIcon("mongodb"), level: 65 },
      { name: "Pinecone", logo: getFallback(), level: 65 },
      { name: "Firebase", logo: getIcon("firebase"), level: 70 },
      { name: "Docker", logo: getIcon("docker"), level: 68 },
      { name: "GCP", logo: getIcon("googlecloud"), level: 64 },
      { name: "Vercel", logo: getIcon("vercel"), level: 68 }
    ]
  }
];

export const experienceData: Experience[] = [
  {
    id: "freelance-ai",
    title: "Freelance AI Engineer (Lead Developer)",
    company: "Freelance",
    location: "Hubballi, India",
    period: "Apr 2025 – Apr 2026",
    technologies: ["OpenCV", "Deep Learning", "Firebase", "Docker", "CI/CD", "Raspberry Pi", "INT8"],
    highlights: [
      "Led development of a real-time vision-based assistive system using object detection and scene understanding for visually impaired users.",
      "Designed optimized computer vision inference pipelines using OpenCV and deep learning models, achieving 2.5× faster inference on Raspberry Pi through INT8 quantization.",
      "Integrated camera-based perception with Firebase APIs and Android applications for real-world deployment.",
      "Containerized complete vision pipelines using Docker and implemented CI/CD workflows, reducing deployment time by 35%.",
      "Led and coordinated a 3-member engineering team, ensuring on-time delivery of embedded AI milestones."
    ]
  },
  {
    id: "decibels-lab",
    title: "Embedded AI Intern",
    company: "Decibels Lab",
    location: "Bengaluru, India",
    period: "Feb 2025 – Apr 2025",
    technologies: ["YOLOv11", "INT8 Quantization", "Raspberry Pi", "Jetson Nano", "REST API", "GitHub"],
    highlights: [
      "Trained and evaluated YOLOv11 object detection models on KITTI dataset using statistical metrics and validation techniques, achieving over 65% model size reduction through structured pruning and INT8 quantization.",
      "Performed data preprocessing and feature engineering on autonomous driving datasets to improve detection accuracy across Raspberry Pi and Jetson Nano edge devices.",
      "Built a scalable backend ML pipeline integrating real-time object detection, lane detection, and sensor fusion with end-to-end latency of approximately 210ms; debugged latency bottlenecks and sensor sync failures to meet production performance targets.",
      "Deployed optimized deep learning models on embedded hardware, implementing REST APIs for telemetry and system monitoring; managed codebase on GitHub with clean branching and documented commit history."
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "svarra",
    title: "Svarra",
    description: "Multi-Agent AI Voice Automation Platform handling autonomous inbound/outbound voice calls at scale.",
    problemSolved: "Automating complex conversational workflows like lead qualification, appointment booking, and follow-ups securely.",
    architecture: "Built a scalable backend system using Python/FastAPI with clean OOP architecture. Integrated Vapi and Twilio for telephony, n8n for event-driven webhook handling, and Supabase for shared centralized state across 4 specialized agents.",
    techStack: ["Python", "Next.js", "FastAPI", "PostgreSQL", "Supabase", "Vapi", "Twilio", "n8n", "GitHub", "Vercel"],
    skillsLearned: ["Multi-Agent Systems", "Voice Automation", "Event-Driven Workflows", "API Design"],
    toolsUsed: ["FastAPI", "Vapi", "Supabase", "n8n"],
    keyOutcomes: [
      "Exposed modular REST APIs for 4 specialized agents.",
      "Implemented idempotent webhook handling for CRM updates and calendar bookings.",
      "Delivered a real-time analytics dashboard tracking call duration, cost, and conversion rates.",
      "Enabled multi-lingual voice interactions for the Indian market."
    ],
    githubLink: "",
    liveLink: "https://svaraa-the-autonomous-ai-voice-infr.vercel.app/dashboard",
    timeline: "Feb 2026–Apr 2026",
    statistics: [
      { label: "Agents", value: "4" },
      { label: "Stack", value: "Python" }
    ],
    images: ["svarra.png"]
  },
  {
    id: "offline-p2p-blockchain",
    title: "Offline P2P Blockchain Wallet",
    description: "A decentralized offline peer-to-peer blockchain payment system that enables secure financial transactions without internet connectivity, bridging the gap for rural and underserved communities.",
    problemSolved: "Financial inclusion in India remains a challenge where internet connectivity is unreliable. Traditional digital payments exclude millions. This solution prevents double-spending offline and ensures trustless transactions without continuous internet access.",
    architecture: "Uses React and Firebase for the UI/UX, along with ethers.js for Ethereum blockchain interactions. Transactions are signed locally, managed via SQLite, exchanged through device-to-device protocols (QR code, NFC, Bluetooth), and optimistically synced to the blockchain upon regaining connectivity.",
    techStack: ["React", "Firebase", "ethers.js", "SQLite", "Blockchain", "Cryptography"],
    skillsLearned: ["Decentralized Architecture", "Offline-First Sync Logic", "Cryptographic Signing", "Nonce Management"],
    toolsUsed: ["React", "Firebase", "SQLite", "ethers.js", "QR Code Libraries"],
    keyOutcomes: [
      "Built a secure, truly offline-first decentralized payment system",
      "Eliminated reliance on continuous internet connectivity for rural users",
      "Solved offline double-spending via local nonce tracking and on-chain validation"
    ],
    githubLink: "https://github.com/anish-bhat",
    liveLink: "https://p2p-app-bay.vercel.app/",
    documentLink: "/sih_presentation.pdf",
    timeline: "September 2025 (SIH 2025)",
    statistics: [
      { label: "Target Audience", value: "Rural/Offline" },
      { label: "Security", value: "Cryptographic" }
    ],
    images: ["project4.png"]
  },
  {
    id: "embedded-adas",
    title: "Embedded ADAS Prototype",
    description: "Designed an end-to-end embedded Advanced Driver Assistance System integrating realtime object detection, lane detection, ultrasonic sensing, and motor control.",
    problemSolved: "Building an affordable and deployable ADAS prototype on low-power edge hardware.",
    architecture: "Deployed a custom-trained YOLOv12n model optimized using INT8 quantization, achieving ~6 FPS during isolated inference. Integrated perception, sensing, and actuation into a complete perception-control pipeline operating at ~1 FPS under resource constraints.",
    techStack: ["Raspberry Pi", "YOLOv12n", "INT8 Quantization", "Flask"],
    skillsLearned: ["Hardware Integration", "Sensor Fusion", "Edge Optimization"],
    toolsUsed: ["Raspberry Pi", "Flask"],
    keyOutcomes: [
      "Achieved ~6 FPS real-time object detection inference on a Raspberry Pi.",
      "Integrated ultrasonic sensors and motor control for real-world interaction.",
      "Developed a Flask-based web interface for real-time visualization, telemetry, and experimental evaluation."
    ],
    githubLink: "https://github.com/Cobot69/embedded-adas-yolo",
    liveLink: "",
    timeline: "2025",
    statistics: [
      { label: "Inference", value: "6 FPS" }
    ],
    images: ["project1.png"]
  },
  {
    id: "yolo-optimob",
    title: "YOLO-OptiMob",
    description: "Built a complete optimization pipeline for deploying YOLO11 object detection models on resource-constrained edge devices.",
    problemSolved: "Massive memory footprints and slow inference times of default object detection models on mobile devices.",
    architecture: "Created a custom dataset with 7 object classes. Applied L1 unstructured pruning (optimal at 40%) and post-training INT8 quantization. Converted the optimized models to TFLite.",
    techStack: ["YOLO11", "TFLite", "L1 Pruning", "INT8 Quantization"],
    skillsLearned: ["Model Pruning", "Quantization", "TFLite Conversion"],
    toolsUsed: ["YOLO", "TensorFlow Lite"],
    keyOutcomes: [
      "Selected 40% L1 unstructured pruning as optimal trade-off.",
      "Reduced model size from 11.4 MB to 2.5 MB.",
      "Successfully converted to TFLite for deployment on Android-based edge platforms."
    ],
    githubLink: "https://github.com/Cobot69/yolo-optimob-edge-optimization",
    liveLink: "",
    timeline: "2025",
    statistics: [
      { label: "Size Reduction", value: "78%" },
      { label: "Final Size", value: "2.5MB" }
    ],
    images: ["project2.png"]
  },
  {
    id: "vision-language-scene",
    title: "Vision-Language Scene Understanding (BLIP)",
    description: "Developed a real-time vision-language system using BLIP to generate natural language scene descriptions from live visual input.",
    problemSolved: "Enabling semantic, natural language reasoning over complex visual scenes rather than just bounding boxes.",
    architecture: "Trained and fine-tuned BLIP on a custom dataset to understand real-world contextual object relationships. Integrated object detection, tracking, and counting to dynamically condition scene descriptions.",
    techStack: ["BLIP", "PyTorch", "Vision-Language Models"],
    skillsLearned: ["VLM Fine-tuning", "Dynamic Scene Conditioning", "Dataset Curation"],
    toolsUsed: ["BLIP", "Transformers"],
    keyOutcomes: [
      "Generated structured textual representations of scenes to enable downstream reasoning by large language models.",
      "Achieved 82% accuracy through dataset curation, fine-tuning, and inference optimization."
    ],
    githubLink: "",
    liveLink: "https://blind-user.vercel.app/",
    timeline: "2024",
    statistics: [
      { label: "Accuracy", value: "82%" }
    ],
    images: ["project3.png"]
  },

  {
    id: "agentic-rag-medical",
    title: "Agentic RAG Medical Data Extractor",
    description: "Designed a medical document RAG pipeline using Gemini embeddings, Pinecone, Firebase, and GCP APIs.",
    problemSolved: "Extracting highly specific, structured summaries from massive, unstructured medical PDFs securely.",
    architecture: "Automated the complete workflow using Docker and n8n, passing unstructured PDFs into chunking and embedding pipelines.",
    techStack: ["Gemini Embeddings", "Pinecone", "Firebase", "GCP API", "Docker", "n8n"],
    skillsLearned: ["Medical Document Processing", "Workflow Automation"],
    toolsUsed: ["Pinecone", "Firebase", "n8n"],
    keyOutcomes: [
      "Extracted structured summaries from unstructured medical PDFs for research use.",
      "Automated the workflow reliably via Docker and n8n."
    ],
    githubLink: "https://github.com/Cobot69/RAG_For_Medical",
    liveLink: "",
    timeline: "2025",
    statistics: [
      { label: "Domain", value: "Medical" }
    ],
    images: ["project5.png"]
  },
  {
    id: "elderly-care",
    title: "Elderly Care Full-Stack Platform",
    description: "Developed a full-stack platform enabling ambulance booking, medicine ordering, and elderly care services.",
    problemSolved: "Providing an accessible, all-in-one care hub for elderly patients to manage their critical services.",
    architecture: "Built using React, Node.js, MongoDB, and Firebase authentication with real-time workflows for service booking.",
    techStack: ["MERN", "Firebase", "MongoDB", "React", "Node.js"],
    skillsLearned: ["Full-stack Development", "Real-time Workflows", "Authentication"],
    toolsUsed: ["React", "MongoDB", "Firebase"],
    keyOutcomes: [
      "Delivered a robust, real-time application for medicine and ambulance orchestration.",
      "Secured platform with Firebase Auth."
    ],
    githubLink: "https://github.com/Cobot69/htmlElderne",
    liveLink: "",
    timeline: "2024",
    statistics: [
      { label: "Stack", value: "MERN" }
    ],
    images: ["project6.png"]
  }
];

export const educationData: Education[] = [
  {
    id: "kle-tech",
    institution: "KLE Technological University",
    location: "Hubballi, Karnataka",
    degree: "Bachelor of Engineering in Computer Science (Artificial Intelligence)",
    period: "2022–2026",
    score: "GPA: 7.63/10"
  },
  {
    id: "expert-pu",
    institution: "Expert PU College",
    location: "Mangaluru, Karnataka",
    degree: "Pre-University (PCMB)",
    period: "2020–2022",
    score: "Score: 93.16%"
  }
];

export const researchData: Research[] = [
  {
    id: "longdocai",
    title: "LongDocAI: A Quantized Modular Pipeline for Multimodal PDF Summarization and QA",
    abstract: "The rapid expansion of scientific literature has made it increasingly difficult for researchers to extract meaningful insights from dense academic documents. We introduce LongDocAI, a multimodal, multi-model framework designed to efficiently understand and interact with scholarly PDFs at scale. The system combines Donut, an OCR-free document parser, with a hybrid summarization module based on BARTlarge- CNN, trained respectively on over 200,000 paper-summary pairs and 30,000+ question-answer examples. To ensure faster and resourceefficient inference, we apply LLM.int8 post-training quantization across all transformer models, significantly reducing memory usage and latency without compromising output quality. LongDocAI is built as a unified pipeline that handles both layout-aware parsing and semantic-level understanding through summarization and interactive question answering. In our evaluations, the system achieved a 15% improvement in ROUGEL, a 28% boost in METEOR, and a QA accuracy of 85.3%, based on expert human assessments. Quantization further led to a 70% reduction in model size and a 40% decrease in inference time, making the system suitable for real-time or edge deployment. By integrating multimodal document understanding, summarization, question answering, and quantization into a single, modular pipeline, LongDocAI offers a scalable, lightweight solution for navigating and understanding long-form academic texts—benefiting researchers, reviewers, and knowledge platforms alike.",
    objective: "Develop a quantized multimodal framework for scientific document summarization.",
    methodology: "Combined OCR-free Donut parser with BARTlarge-CNN. Applied LLM.int8 post-training quantization.",
    results: "15% improvement in ROUGEL, 28% boost in METEOR, 85.3% QA accuracy. 70% reduction in model size and 40% decrease in latency.",
    conference: "ICCIS",
    year: "2025"
  },
  {
    id: "embedded-adas",
    title: "Embedded Intelligent ADAS Car Prototype Using Raspberry Pi and YOLOv12n",
    abstract: "This paper presents the design, quantization, and deployment of an embedded Advanced Driver Assistance System (ADAS) prototype on a Raspberry Pi 3, utilizing a custom-trained YOLOv12n object detection model. The system achieves real-time multi-class object detection and autonomous control of a test vehicle within the resource constraints of low-power edge devices. To optimize performance, posttraining INT8 quantization was applied to YOLOv12n, resulting in over 65% reduction in model size and nearly 3× faster inference, with minimal accuracy loss. Object detection outputs are combined with ultrasonic sensor measurements to enable obstacle-aware vehicle control, including braking and navigation. Lightweight classical computer vision methods facilitate lane detection for lane-keeping functionality. Additionally, a Flask-based dashboard streams detection overlays and telemetry data for monitoring. The deployed system operates at approximately 6 frames per second on the Raspberry Pi 3 with a responsive control latency of around 210 ms, demonstrating the practical feasibility of deploying deep learning–based ADAS functions on low-cost, resource-constrained embedded platforms. This work highlights the effectiveness of quantization techniques in enabling real-time perception for embedded autonomous driving applications.",
    objective: "Deploy a low-latency ADAS system on resource-constrained embedded hardware.",
    methodology: "Post-training INT8 quantization applied to YOLOv12n on Raspberry Pi 3, fused with ultrasonic sensors.",
    results: "6 FPS on RPi 3, 210ms control latency, >65% reduction in model size.",
    conference: "CIS",
    year: "2025"
  },
  {
    id: "yolo-optimob",
    title: "YOLO-OptiMob: A Pipeline for Optimizing YOLO11 Models for Edge Deployment",
    abstract: "This paper introduces YOLO-OptiMob , a comprehensive pipeline for optimizing YOLO11 models for deployment on edge devices. The process begins with creating and preprocessing a custom dataset featuring seven object classes: bike, car, cat, dog, person, handbag, and water bottle. The YOLO11 model is trained on this dataset and optimized using L1 unstructured pruning, with rates of 30%, 40%, and 50% evaluated. Based on the results, a 40% pruning rate was selected as it offered the best balance between model size reduction and accuracy retention. Post-training INT8 quantization further compresses the model, reducing its size from 11.4 MB to 2.5 MB. The optimized model is then converted into TensorFlow Lite (TFLite) format, ensuring compatibility with Android-based edge devices. This work presents a practical pipeline for efficiently adapting YOLO11 to resource-constrained environments, achieving significant size reduction while maintaining high detection accuracy.",
    objective: "Optimize YOLO11 models for mobile deployment via advanced compression techniques.",
    methodology: "Custom 7-class dataset, 40% L1 unstructured pruning, and post-training INT8 quantization to TFLite format.",
    results: "Reduced model size from 11.4 MB to 2.5 MB while retaining high detection accuracy.",
    conference: "SPIN",
    year: "2025"
  }
];

export const contactData = {
  email: "bhata744@gmail.com",
  phone: "+91 6362253632",
  linkedin: "https://linkedin.com/in/anishbhat00",
  github: "https://github.com/Cobot69",
  instagram: "#",
  whatsapp: "https://wa.me/916362253632"
};

export const certificationsData: import("@/types").Certification[] = [
  {
    id: "nvidia",
    title: "Getting Started with AI on Jetson Nano",
    year: "2026"
  },
  {
    id: "neo4j-graph",
    title: "Neo4j Certified Professional: Graph Data Science",
    year: "2026"
  },
  {
    id: "neo4j-llms",
    title: "Building Knowledge Graphs with LLMs",
    year: "2026"
  }
];

export const awardsData: import("@/types").Award[] = [
  {
    id: "mechatronics",
    title: "1st Place, College Mechatronics Competition (130+ teams)"
  },
  {
    id: "sih",
    title: "Hackathon Finalist & Team Lead, Smart India Hackathon and HackKarnataka"
  }
];
