10+
Projects Built
3
Research Publications
3+
Years building project experience
2About Me
AI/ML Engineer and backend developer with hands-on experience designing scalable backend systems, API-driven architectures, and production-grade ML pipelines.

Proficient in Python, OOP, and clean code practices with a strong emphasis on writing test cases, debugging production issues, and maintaining reliable version control workflows.

Proven track record of shipping end-to-end systems—from architecture design through testing and deployment—with measurable impact on performance, reliability, and business outcomes.
Academic Background
Education
KLE Technological University 2022 – 2026
B.E. Computer Science (Artificial Intelligence) — Hubballi, Karnataka
• CGPA: 7.73 / 10
Expert PU College 2020 – 2022
PCMB — Mangaluru, Karnataka
• Score: 93.16%Certifications
NVIDIA: Getting Started with AI on Jetson Nano (2026)
Neo4j Certified Professional: Graph Data Science (2026)
Neo4j: Building Knowledge Graphs with LLMs (2026)
Honors & Awards
• Winner, Smart India Hackathon Internal College Selection Round
• Hackathon Finalist & Team Lead, HackKarnataka
• 1st Place, College Mechatronics Competition (130+ teams) Anish Bhat
AI Engineer | Generative AI | LLMs | RAG | Agentic AI
+91 6362253632 | bhata744@gmail.com | linkedin.com/in/anishbhat00
github.com/Cobot69 | anishbhat.in | Bengaluru, Karnataka, India
focus on these skills as well Technical Skills
• Languages: Python, JavaScript, SQL, HTML/CSS
• AI / Machine Learning: Machine Learning, Deep Learning, NLP, Computer Vision, Transformers, Fine-tuning, Model
Evaluation, Model Quantization
• Generative AI: Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), Prompt Engineering, Em￾beddings, Vector Search, AI Agents / Agentic AI, Multi-Agent Systems, Function Calling, Conversational AI, Voice AI
• Frameworks & Libraries: PyTorch, TensorFlow, Hugging Face Transformers, LangChain, OpenCV, NumPy, Pandas
• Backend Development: FastAPI, Flask, Next.js, REST APIs, JWT Authentication, Webhooks, Async Workflows
• Databases: PostgreSQL, MongoDB, Pinecone (Vector DB), Firebase, Supabase
• Cloud & DevOps: Google Cloud Platform (GCP), Docker, Kubernetes, Vercel, TensorFlow Lite, Edge AI Deployment,
Git, GitHub, CI/CD
• Automation & AI Platforms: n8n, Vapi, Twilio, ElevenLabs, WhatsApp Automation
• Engineering Fundamentals: System Design, OOP, DBMS, Debugging, Root Cause Analysis, Clean Code PrinciplesTechnical Arsenal
AI & Machine Learning
Deep Learning
Deep Learning
70%
Computer Vision
Computer Vision
68%
NLP
NLP
65%
Generative AI
Generative AI
67%
Transformers
Transformers
65%
RAG
RAG
69%
Agentic Systems
Agentic Systems
65%
Frameworks & Libraries
PyTorch
PyTorch
70%
TensorFlow
TensorFlow
68%
HuggingFace
HuggingFace
66%
OpenCV
OpenCV
70%
LangChain
LangChain
65%
n8n
n8n
67%
Pandas
Pandas
69%
NumPy
NumPy
70%
Backend & Web
Python
Python
70%
C++
C++
62%
HTML
HTML
70%
Next.js
Next.js
65%
FastAPI
FastAPI
68%
Flask
Flask
66%
React
React
65%
Databases & Cloud
PostgreSQL
PostgreSQL
68%
MongoDB
MongoDB
65%
Pinecone
Pinecone
65%
Firebase
Firebase
70%
Docker
Docker
68%
GCP
GCP
64%
Vercel
Vercel
68%
u dont need to include these percentages 
Research Publications
View All PapersICCIS
2025
LongDocAI: A Quantized Modular Pipeline for Multimodal PDF Summarization and QA
Abstract
"The rapid expansion of scientific literature has made it increasingly difficult for researchers to extract meaningful insights from dense academic documents. We introduce LongDocAI, a multimodal, multi-model framework designed to efficiently understand and interact with scholarly PDFs at scale. The system combines Donut, an OCR-free document parser, with a hybrid summarization module based on BARTlarge- CNN, trained respectively on over 200,000 paper-summary pairs and 30,000+ question-answer examples. To ensure faster and resourceefficient inference, we apply LLM.int8 post-training quantization across all transformer models, significantly reducing memory usage and latency without compromising output quality. LongDocAI is built as a unified pipeline that handles both layout-aware parsing and semantic-level understanding through summarization and interactive question answering. In our evaluations, the system achieved a 15% improvement in ROUGEL, a 28% boost in METEOR, and a QA accuracy of 85.3%, based on expert human assessments. Quantization further led to a 70% reduction in model size and a 40% decrease in inference time, making the system suitable for real-time or edge deployment. By integrating multimodal document understanding, summarization, question answering, and quantization into a single, modular pipeline, LongDocAI offers a scalable, lightweight solution for navigating and understanding long-form academic texts—benefiting researchers, reviewers, and knowledge platforms alike."

Objective
Develop a quantized multimodal framework for scientific document summarization.

Methodology
Combined OCR-free Donut parser with BARTlarge-CNN. Applied LLM.int8 post-training quantization.

Results & Conclusion
15% improvement in ROUGEL, 28% boost in METEOR, 85.3% QA accuracy. 70% reduction in model size and 40% decrease in latency.
Back to Research
CIS
2025
Embedded Intelligent ADAS Car Prototype Using Raspberry Pi and YOLOv12n
Abstract
"This paper presents the design, quantization, and deployment of an embedded Advanced Driver Assistance System (ADAS) prototype on a Raspberry Pi 3, utilizing a custom-trained YOLOv12n object detection model. The system achieves real-time multi-class object detection and autonomous control of a test vehicle within the resource constraints of low-power edge devices. To optimize performance, posttraining INT8 quantization was applied to YOLOv12n, resulting in over 65% reduction in model size and nearly 3× faster inference, with minimal accuracy loss. Object detection outputs are combined with ultrasonic sensor measurements to enable obstacle-aware vehicle control, including braking and navigation. Lightweight classical computer vision methods facilitate lane detection for lane-keeping functionality. Additionally, a Flask-based dashboard streams detection overlays and telemetry data for monitoring. The deployed system operates at approximately 6 frames per second on the Raspberry Pi 3 with a responsive control latency of around 210 ms, demonstrating the practical feasibility of deploying deep learning–based ADAS functions on low-cost, resource-constrained embedded platforms. This work highlights the effectiveness of quantization techniques in enabling real-time perception for embedded autonomous driving applications."

Objective
Deploy a low-latency ADAS system on resource-constrained embedded hardware.

Methodology
Post-training INT8 quantization applied to YOLOv12n on Raspberry Pi 3, fused with ultrasonic sensors.

Results & Conclusion
6 FPS on RPi 3, 210ms control latency, >65% reduction in model size.
SPIN
2025
YOLO-OptiMob: A Pipeline for Optimizing YOLO11 Models for Edge Deployment
Abstract
"This paper introduces YOLO-OptiMob , a comprehensive pipeline for optimizing YOLO11 models for deployment on edge devices. The process begins with creating and preprocessing a custom dataset featuring seven object classes: bike, car, cat, dog, person, handbag, and water bottle. The YOLO11 model is trained on this dataset and optimized using L1 unstructured pruning, with rates of 30%, 40%, and 50% evaluated. Based on the results, a 40% pruning rate was selected as it offered the best balance between model size reduction and accuracy retention. Post-training INT8 quantization further compresses the model, reducing its size from 11.4 MB to 2.5 MB. The optimized model is then converted into TensorFlow Lite (TFLite) format, ensuring compatibility with Android-based edge devices. This work presents a practical pipeline for efficiently adapting YOLO11 to resource-constrained environments, achieving significant size reduction while maintaining high detection accuracy."

Objective
Optimize YOLO11 models for mobile deployment via advanced compression techniques.

Methodology
Custom 7-class dataset, 40% L1 unstructured pruning, and post-training INT8 quantization to TFLite format.

Results & Conclusion
Reduced model size from 11.4 MB to 2.5 MB while retaining high detection accuracy.

and this is about the projects details "use client";
import { projectsData } from "@/lib/data";

import { Github, ExternalLink } from "lucide-react";

export default function ProjectsGallery({ activeGlobalIndex }: { activeGlobalIndex: number }) {

  return (
    <>
      {projectsData.map((project, idx) => {
        const globalIndex = 5 + idx; // Projects start at index 5 in HorizontalWrapper
        return (
          <div key={project.id} className={`project-panel horizontal-panel w-screen h-[100dvh] flex-shrink-0 relative hide-scrollbar bg-brand-black px-4 sm:px-6 lg:px-16 pt-20 pb-24 flex flex-col justify-center border-l border-white/5 transition-opacity duration-1000 ${activeGlobalIndex === globalIndex ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* Huge Background Project Number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/[0.02] font-outfit pointer-events-none z-0">
            0{idx + 1}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center project-content">
            
            {/* Left Col - Details */}
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-[#d5d5d5] font-outfit mb-4">
                {project.title}
              </h2>
              <p className="text-lg text-brand-muted font-inter mb-8">
                {project.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-[#323831] uppercase tracking-widest mb-2">Problem Solved</h4>
                  <p className="text-sm text-[#9a9a9a]">{project.problemSolved}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#323831] uppercase tracking-widest mb-2">Key Outcomes</h4>
                  <ul className="list-none text-sm text-[#9a9a9a] space-y-2">
                    {project.keyOutcomes.map((outcome, oIdx) => (
                      <li key={oIdx} className="flex gap-2">
                        <span className="text-[#323831]">▹</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.techStack.map((tech, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono px-3 py-1 bg-[#141414] border border-[#323831]/50 text-[#d5d5d5] rounded-full shadow-inner">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                {project.documentLink && (
                  <a href={project.documentLink} download target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#808000] hover:bg-[#6b6b00] text-white rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    Presentation
                  </a>
                )}
                {project.liveLink && project.liveLink !== "#" && project.liveLink !== "" && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
                {project.githubLink && project.githubLink !== "#" && project.githubLink !== "" && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-[#1a1a1a] border border-white/20 hover:bg-[#2a2a2a] text-white rounded-full font-semibold shadow-lg transition-colors inline-flex items-center gap-2 text-sm">
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                )}
              </div>
            </div>

            {/* Right Col - Visual/Stats */}
            <div className="flex flex-col gap-8">
              <div className="aspect-video w-full rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden relative flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                {/* 
                  To update images, just drop your files in the public/ folder (e.g., project1.png, svarra.png)
                  and update the "images" array in src/lib/data.ts
                */}
                <img src={`/${project.images[0]}`} alt={project.title} className="w-full h-full object-cover" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {project.statistics.map((stat, sIdx) => (
                  <div key={sIdx} className="p-5 bg-gradient-to-b from-[#141414] to-[#0a0a0a] rounded-xl border border-white/5 text-center shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#323831] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="text-3xl font-black text-[#d5d5d5] mb-2 font-outfit">{stat.value}</div>
                    <div className="text-xs font-bold text-[#323831] uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        );
      })}
    </>
  );
}

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

and this is abou research export const researchData: Research[] = [
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