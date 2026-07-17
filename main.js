/* ═══════════════════════════════════════════════════════════════════
   ANISH BHAT — AI ENGINEER PORTFOLIO
   Premium Interactions v2
   ═══════════════════════════════════════════════════════════════════ */
import { inject } from '@vercel/analytics';
inject();

// ─── DOM REFERENCES ───
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('nav-hamburger');
const navLinks = document.getElementById('nav-links');
const heroSection = document.getElementById('hero');
const heroTitle = document.getElementById('hero-title');
const contactForm = document.getElementById('contact-form');

// ─── PROJECTS DATA ───
const projectsData = [
  {
    id: "svarra",
    title: "Svarra",
    description: "Multi-Agent AI Voice Automation Platform handling autonomous inbound/outbound voice calls at scale.",
    problemSolved: "Automating complex conversational workflows like lead qualification, appointment booking, and follow-ups securely.",
    architecture: "Built a scalable backend system using Python/FastAPI with clean OOP architecture. Integrated Vapi and Twilio for telephony, n8n for event-driven webhook handling, and Supabase for shared centralized state across 4 specialized agents.",
    techStack: ["Python", "Next.js", "FastAPI", "PostgreSQL", "Supabase", "Vapi", "Twilio", "n8n", "GitHub", "Vercel"],
    keyOutcomes: [
      "Exposed modular REST APIs for 4 specialized agents.",
      "Implemented idempotent webhook handling for CRM updates and calendar bookings.",
      "Delivered a real-time analytics dashboard tracking call duration, cost, and conversion rates.",
      "Enabled multi-lingual voice interactions for the Indian market."
    ],
    githubLink: "",
    liveLink: "https://svaraa-the-autonomous-ai-voice-infr.vercel.app/dashboard",
    documentLink: "",
    images: ["svarra.png"]
  },
  {
    id: "offline-p2p-blockchain",
    title: "Offline P2P Blockchain Wallet",
    description: "A decentralized offline peer-to-peer blockchain payment system that enables secure financial transactions without internet connectivity.",
    problemSolved: "Financial inclusion in India remains a challenge where internet connectivity is unreliable. Traditional digital payments exclude millions. This solution prevents double-spending offline and ensures trustless transactions without continuous internet access.",
    architecture: "Uses React and Firebase for the UI/UX, along with ethers.js for Ethereum blockchain interactions. Transactions are signed locally, managed via SQLite, exchanged through device-to-device protocols (QR code, NFC, Bluetooth), and optimistically synced to the blockchain upon regaining connectivity.",
    techStack: ["React", "Firebase", "ethers.js", "SQLite", "Blockchain", "Cryptography"],
    keyOutcomes: [
      "Built a secure, truly offline-first decentralized payment system",
      "Eliminated reliance on continuous internet connectivity for rural users",
      "Solved offline double-spending via local nonce tracking and on-chain validation"
    ],
    githubLink: "https://github.com/anish-bhat",
    liveLink: "https://p2p-app-bay.vercel.app/",
    documentLink: "/sih_presentation.pdf",
    images: ["project4.png"]
  },
  {
    id: "embedded-adas",
    title: "Embedded ADAS Prototype",
    description: "Designed an end-to-end embedded Advanced Driver Assistance System integrating realtime object detection, lane detection, ultrasonic sensing, and motor control.",
    problemSolved: "Building an affordable and deployable ADAS prototype on low-power edge hardware.",
    architecture: "Deployed a custom-trained YOLOv12n model optimized using INT8 quantization, achieving ~6 FPS during isolated inference. Integrated perception, sensing, and actuation into a complete perception-control pipeline operating at ~1 FPS under resource constraints.",
    techStack: ["Raspberry Pi", "YOLOv12n", "INT8 Quantization", "Flask"],
    keyOutcomes: [
      "Achieved ~6 FPS real-time object detection inference on a Raspberry Pi.",
      "Integrated ultrasonic sensors and motor control for real-world interaction.",
      "Developed a Flask-based web interface for real-time visualization, telemetry, and experimental evaluation."
    ],
    githubLink: "https://github.com/Cobot69/embedded-adas-yolo",
    liveLink: "",
    documentLink: "",
    images: ["project1.png"]
  },
  {
    id: "yolo-optimob",
    title: "YOLO-OptiMob",
    description: "Built a complete optimization pipeline for deploying YOLO11 object detection models on resource-constrained edge devices.",
    problemSolved: "Massive memory footprints and slow inference times of default object detection models on mobile devices.",
    architecture: "Created a custom dataset with 7 object classes. Applied L1 unstructured pruning (optimal at 40%) and post-training INT8 quantization. Converted the optimized models to TFLite.",
    techStack: ["YOLO11", "TFLite", "L1 Pruning", "INT8 Quantization"],
    keyOutcomes: [
      "Selected 40% L1 unstructured pruning as optimal trade-off.",
      "Reduced model size from 11.4 MB to 2.5 MB.",
      "Successfully converted to TFLite for deployment on Android-based edge platforms."
    ],
    githubLink: "https://github.com/Cobot69/yolo-optimob-edge-optimization",
    liveLink: "",
    documentLink: "",
    images: ["project2.png"]
  },
  {
    id: "vision-language-scene",
    title: "Vision-Language Scene Understanding (BLIP)",
    description: "Developed a real-time vision-language system using BLIP to generate natural language scene descriptions from live visual input.",
    problemSolved: "Enabling semantic, natural language reasoning over complex visual scenes rather than just bounding boxes.",
    architecture: "Trained and fine-tuned BLIP on a custom dataset to understand real-world contextual object relationships. Integrated object detection, tracking, and counting to dynamically condition scene descriptions.",
    techStack: ["BLIP", "PyTorch", "Vision-Language Models"],
    keyOutcomes: [
      "Generated structured textual representations of scenes to enable downstream reasoning by large language models.",
      "Achieved 82% accuracy through dataset curation, fine-tuning, and inference optimization."
    ],
    githubLink: "",
    liveLink: "https://blind-user.vercel.app/",
    documentLink: "",
    images: ["project3.png"]
  },
  {
    id: "agentic-rag-medical",
    title: "Agentic RAG Medical Data Extractor",
    description: "Designed a medical document RAG pipeline using Gemini embeddings, Pinecone, Firebase, and GCP APIs.",
    problemSolved: "Extracting highly specific, structured summaries from massive, unstructured medical PDFs securely.",
    architecture: "Automated the complete workflow using Docker and n8n, passing unstructured PDFs into chunking and embedding pipelines.",
    techStack: ["Gemini Embeddings", "Pinecone", "Firebase", "GCP API", "Docker", "n8n"],
    keyOutcomes: [
      "Extracted structured summaries from unstructured medical PDFs for research use.",
      "Automated the workflow reliably via Docker and n8n."
    ],
    githubLink: "https://github.com/Cobot69/RAG_For_Medical",
    liveLink: "",
    documentLink: "",
    images: ["project5.png"]
  },
  {
    id: "elderly-care",
    title: "Elderly Care Full-Stack Platform",
    description: "Developed a full-stack platform enabling ambulance booking, medicine ordering, and elderly care services.",
    problemSolved: "Providing an accessible, all-in-one care hub for elderly patients to manage their critical services.",
    architecture: "Built using React, Node.js, MongoDB, and Firebase authentication with real-time workflows for service booking.",
    techStack: ["MERN", "Firebase", "MongoDB", "React", "Node.js"],
    keyOutcomes: [
      "Delivered a robust, real-time application for medicine and ambulance orchestration.",
      "Secured platform with Firebase Auth."
    ],
    githubLink: "https://github.com/Cobot69/htmlElderne",
    liveLink: "",
    documentLink: "",
    images: ["project6.png"]
  }
];

// ─── HERO: Letter-by-letter scroll-out animation ───
function initHeroLetterAnimation() {
  const letters = heroTitle.querySelectorAll('.hero__letter');
  const totalLetters = letters.length;

  function onScroll() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const progress = Math.min(scrollY / (heroHeight * 0.65), 1);

    letters.forEach((letter, i) => {
      const startThreshold = (i / totalLetters) * 0.4;
      const endThreshold = startThreshold + 0.4;
      
      let letterProgress = 0;
      if (progress > startThreshold) {
        letterProgress = Math.min((progress - startThreshold) / (endThreshold - startThreshold), 1);
      }

      const opacity = 1 - letterProgress;
      const translateY = -Math.pow(letterProgress, 2) * 50;

      letter.style.opacity = opacity;
      letter.style.transform = `translateY(${translateY}px)`;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
}

// ─── SCROLL REVEAL (Intersection Observer) ───
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
  );
  revealElements.forEach((el) => observer.observe(el));
}

// ─── NAVIGATION ───
function initNavScroll() {
  const observer = new IntersectionObserver(
    ([entry]) => {
      nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  observer.observe(heroSection);
}

function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[data-section]');
  const links = document.querySelectorAll('.nav__links a');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          links.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
          });
        }
      });
    },
    { threshold: 0.25, rootMargin: '-80px 0px -35% 0px' }
  );
  sections.forEach((section) => observer.observe(section));
}

function initMobileMenu() {
  hamburger.addEventListener('click', () => {
    const isOpen = hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });
}

// ─── PROJECTS: Draggable Scroll & Modal ───
function initProjectsInteractions() {
  const slider = document.getElementById('projects-drag-container');
  let isDown = false;
  let startX;
  let scrollLeft;

  if (slider) {
    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });

    // Handle touch events
    slider.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('touchend', () => {
      isDown = false;
    });
    slider.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    });

    // Auto-scroll logic
    let isHovering = false;
    slider.addEventListener('mouseenter', () => isHovering = true);
    slider.addEventListener('mouseleave', () => isHovering = false);

    let animationFrameId;
    function autoScroll() {
      if (!isDown && !isHovering) {
        slider.scrollLeft += 1;
        // Reset to start if we've reached the end
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 1)) {
           // Optionally loop back or reverse. Looping back abruptly looks bad without duplicate elements.
           // For a portfolio, just let it reach the end, or slowly reverse.
           // Let's just make it bounce back and forth smoothly.
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    }
    
    // Better auto-scroll: ping-pong bounce
    let scrollDirection = 1;
    function pingPongScroll() {
      if (!isDown && !isHovering) {
        slider.scrollLeft += scrollDirection * 0.8;
        if (slider.scrollLeft >= (slider.scrollWidth - slider.clientWidth - 1)) {
          scrollDirection = -1;
        } else if (slider.scrollLeft <= 0) {
          scrollDirection = 1;
        }
      }
      animationFrameId = requestAnimationFrame(pingPongScroll);
    }
    pingPongScroll();
  }

  // Modal logic
  const modal = document.getElementById('project-modal');
  const modalCloseBtn = document.getElementById('project-modal-close-btn');
  const modalOverlay = document.getElementById('project-modal-close');
  
  const mImage = document.getElementById('modal-image');
  const mTitle = document.getElementById('modal-title');
  const mDesc = document.getElementById('modal-desc');
  const mProblem = document.getElementById('modal-problem');
  const mArch = document.getElementById('modal-architecture');
  const mOutcomes = document.getElementById('modal-outcomes');
  const mTech = document.getElementById('modal-tech');
  const mLinks = document.getElementById('modal-links');

  function openModal(projectId) {
    const project = projectsData.find(p => p.id === projectId);
    if(!project) return;

    mImage.style.backgroundImage = `url('/images/${project.images[0]}')`;
    mTitle.textContent = project.title;
    mDesc.textContent = project.description;
    mProblem.textContent = project.problemSolved;
    mArch.textContent = project.architecture;
    
    mOutcomes.innerHTML = '';
    project.keyOutcomes.forEach(out => {
      const li = document.createElement('li');
      li.textContent = out;
      mOutcomes.appendChild(li);
    });

    mTech.innerHTML = '';
    project.techStack.forEach(t => {
      const s = document.createElement('span');
      s.textContent = t;
      mTech.appendChild(s);
    });

    mLinks.innerHTML = '';
    if(project.documentLink) {
      const a = document.createElement('a');
      a.href = project.documentLink;
      a.textContent = 'Presentation ↗';
      a.className = 'primary-link';
      a.target = '_blank';
      mLinks.appendChild(a);
    }
    if(project.liveLink && project.liveLink !== '#') {
      const a = document.createElement('a');
      a.href = project.liveLink;
      a.textContent = 'Live Demo ↗';
      a.className = 'primary-link';
      a.target = '_blank';
      mLinks.appendChild(a);
    }
    if(project.githubLink && project.githubLink !== '#') {
      const a = document.createElement('a');
      a.href = project.githubLink;
      a.textContent = 'Source Code ↗';
      a.className = 'secondary-link';
      a.target = '_blank';
      mLinks.appendChild(a);
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Click card to open (handling drag vs click)
  const cards = document.querySelectorAll('.project-drag-card');
  cards.forEach(card => {
    let cardStartX, cardStartY;
    card.addEventListener('mousedown', (e) => {
      cardStartX = e.clientX;
      cardStartY = e.clientY;
    });
    card.addEventListener('mouseup', (e) => {
      const diffX = Math.abs(e.clientX - cardStartX);
      const diffY = Math.abs(e.clientY - cardStartY);
      if(diffX < 5 && diffY < 5) {
        // It was a click, not a drag
        const pid = card.getAttribute('data-project-id');
        openModal(pid);
      }
    });

    // Touch click
    card.addEventListener('touchstart', (e) => {
      cardStartX = e.touches[0].clientX;
      cardStartY = e.touches[0].clientY;
    });
    card.addEventListener('touchend', (e) => {
      const diffX = Math.abs(e.changedTouches[0].clientX - cardStartX);
      const diffY = Math.abs(e.changedTouches[0].clientY - cardStartY);
      if(diffX < 5 && diffY < 5) {
        const pid = card.getAttribute('data-project-id');
        openModal(pid);
      }
    });
  });

  if(modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if(modalOverlay) modalOverlay.addEventListener('click', closeModal);
}

// ─── JOURNEY: Vertical Curved Timeline Animations ───
function initJourneySVG() {
  const journeySection = document.querySelector('.journey');
  const pathFill = document.getElementById('journey-path-fill');
  const nodes = document.querySelectorAll('.journey__node--animated');

  // Trigger individual nodes as they come into view
  const nodeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          nodeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5, rootMargin: '0px 0px -10% 0px' }
  );
  
  nodes.forEach(node => {
    nodeObserver.observe(node);
  });

  // Animate the SVG curved path drawing on scroll
  if (journeySection && pathFill) {
    const pathLength = pathFill.getTotalLength();
    pathFill.style.strokeDasharray = pathLength;
    pathFill.style.strokeDashoffset = pathLength;

    window.addEventListener('scroll', () => {
      const rect = journeySection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // We want to start drawing when the section enters the screen
      // and finish when it's almost fully scrolled past.
      const startTrigger = viewportHeight * 0.7;
      
      if (rect.top < startTrigger) {
        // total distance to scroll = section height + some padding
        const totalDistance = rect.height;
        let progress = (startTrigger - rect.top) / totalDistance;
        
        progress = Math.max(0, Math.min(1, progress));
        
        // As progress goes 0 -> 1, offset goes pathLength -> 0
        pathFill.style.strokeDashoffset = pathLength - (progress * pathLength);
      } else {
        pathFill.style.strokeDashoffset = pathLength;
      }
    }, { passive: true });
  }
}

// ─── MYSELF: Autonomous slideshow ───
function initMyselfSlideshow() {
  const slideshow = document.getElementById('myself-slideshow');
  if (!slideshow) return;

  const slides = slideshow.querySelectorAll('.myself__slide');
  let currentIndex = 0;
  const INTERVAL = 2000;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  setInterval(nextSlide, INTERVAL);
}

// ─── RESEARCH: Expandable cards ───
function initResearchCards() {
  const cards = document.querySelectorAll('.research__card[data-expandable]');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const wasExpanded = card.classList.contains('expanded');
      cards.forEach((c) => c.classList.remove('expanded'));
      if (!wasExpanded) card.classList.add('expanded');
    });
  });
}

// ─── CONTACT FORM ───
function initContactForm() {
  if (!contactForm) return;
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = document.getElementById('contact-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'SENT ✓';
    submitBtn.style.background = '#2d6a4f';
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      contactForm.reset();
    }, 2800);
  });
}

// ─── SMOOTH SCROLL ───
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      const navHeight = nav.offsetHeight;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - navHeight,
        behavior: 'smooth',
      });
    });
  });
}

// ─── STAGGERED SKILL TAG ANIMATION ───
function initSkillTagAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const tags = entry.target.querySelectorAll('.skills__tag');
          tags.forEach((tag, i) => {
            tag.style.transitionDelay = `${i * 0.04}s`;
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.skills__category').forEach((cat) => {
    cat.querySelectorAll('.skills__tag').forEach((tag) => {
      tag.style.opacity = '0';
      tag.style.transform = 'translateY(14px)';
      tag.style.transition = 'opacity 0.55s cubic-bezier(0.22, 1, 0.36, 1), transform 0.55s cubic-bezier(0.22, 1, 0.36, 1)';
    });
    observer.observe(cat);
  });
}

// ─── BLOG CARD STAGGER ───
function initBlogAnimations() {
  const cards = document.querySelectorAll('.blog__card');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(32px)';
    card.style.transition = `opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1) ${i * 0.15}s`;
    observer.observe(card);
  });
}

// ─── INITIALIZE ───
document.addEventListener('DOMContentLoaded', () => {
  initHeroLetterAnimation();
  initScrollReveal();
  initNavScroll();
  initActiveNavLinks();
  initMobileMenu();
  initMyselfSlideshow();
  initResearchCards();
  initContactForm();
  initSmoothScroll();
  initSkillTagAnimations();
  initBlogAnimations();
  initProjectsInteractions();
  initJourneySVG();
});

// %%% WEB3FORMS CONTACT LOGIC %%%
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const contactResult = document.getElementById('contact-result');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = document.getElementById('contact-submit');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            const formData = new FormData(contactForm);
            const object = Object.fromEntries(formData);
            if (object.access_key === 'YOUR_ACCESS_KEY_HERE') {
                contactResult.style.display = 'block';
                contactResult.style.color = '#ff6b6b';
                contactResult.innerText = 'Error: Please add your Web3Forms Access Key in index.html';
                submitBtn.innerHTML = originalBtnText;
                return;
            }
            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(object)
            }).then(async (response) => {
                let json = await response.json();
                if (response.status === 200) {
                    contactResult.style.display = 'block';
                    contactResult.style.color = 'var(--accent-gold)';
                    contactResult.innerText = 'Message sent successfully! I will get back to you soon.';
                    contactForm.reset();
                } else {
                    contactResult.style.display = 'block';
                    contactResult.style.color = '#ff6b6b';
                    contactResult.innerText = json.message;
                }
            }).catch(error => {
                contactResult.style.display = 'block';
                contactResult.style.color = '#ff6b6b';
                contactResult.innerText = 'Something went wrong! Please try again later.';
            }).finally(() => {
                submitBtn.innerHTML = originalBtnText;
                setTimeout(() => { contactResult.style.display = 'none'; }, 6000);
            });
        });
    }
});
