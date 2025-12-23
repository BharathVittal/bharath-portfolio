import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Linkedin, Mail, Github, ExternalLink, 
  ChevronRight, Mic, MicOff, Send, MessageSquare, 
  User, Briefcase, Code, Download, FileText, Sparkles,
  Cpu, TrendingUp, HelpCircle, GraduationCap, Wrench,
  MapPin, Calendar, ArrowLeft, Target, Lightbulb, 
  Users, BarChart3, PieChart, Layers, File, Sun, Moon,
  Award, BookOpen, Link as LinkIcon, Printer, Eye
} from 'lucide-react';

// --- DATA ---
const PORTFOLIO_DATA = {
  name: "Bharath Vittal",
  title: "Product Manager | Product Marketer | Data Analyst",
  tagline: "I chase stories — through data, design, and film.",
  about: "Graduate student in Engineering Management with experience across product management, product marketing, analytics, and strategy. Strong in user research, MRD/PRD creation, GTM strategy, pricing, dashboards, and cross-functional execution across SaaS, hardware, and academic product environments.",
  location: "Boston, MA",
  highlights: [
    { label: "Revenue Impact", value: "25% AUM Growth", context: "at Adqvest Capital via ML & Automation" },
    { label: "Marketing Lead", value: "30% MQL Increase", context: "at PipeCandy via CMS Migration" },
    { label: "Strategic Planning", value: "$18.9M Budget", context: "GTM Plan for Hershey's CandyQ-ty" },
    { label: "Community", value: "40% Engagement", context: "Growth at Northeastern APMC" }
  ],
  skills: {
    product: "Product Vision & Roadmapping, MRD / PRD Documentation, Platform Strategy, GTM Strategy, Pricing & Market Sizing, Stakeholder Alignment, Agile & Cross-Functional Execution",
    research: "Customer Interviews, Surveys, Personas, Journey Mapping, Wireframing, Usability Testing, Figma",
    analytics: "SQL, Python, Excel, Tableau, Power BI, Funnel Analysis, A/B Testing, Dashboarding, RPA Bots",
    tools: "HubSpot, Salesforce, AWS GoHighLevel, Webflow, WordPress, Jira, Trello, Asana, Notion, Slack, Google Analytics"
  },
  education: [
    {
      school: "Northeastern University, Boston, MA (NEU)",
      degree: "Master of Science, Engineering Management",
      year: "December 2025",
      location: "Boston, MA",
      details: "Relevant Coursework: Digital Product Design and Management, Project Management | GPA 3.5/4.0",
      courses: [
        {
          name: "Customer-Driven Technical Innovation",
          learnings: ["Jobs-to-be-Done", "Outcome-Driven Innovation", "Market Segmentation"],
          relatedProject: "ThreadWise"
        },
        {
          name: "Digital Product Design & Management",
          learnings: ["PRD/MRD Writing", "Agile/Scrum", "User Journey Mapping"],
          relatedProject: "ElderTend"
        },
        {
          name: "Creating & Sustaining Customer Markets",
          learnings: ["GTM Strategy", "Pricing Models", "Brand Positioning"],
          relatedProject: "CandyQ-ty (Hershey Partnered)"
        },
        {
          name: "Innovation-Driven Strategy",
          learnings: ["Competitive Advantage", "Disruptive Innovation", "Strategic Frameworks"],
          relatedProject: "Fliteboard Platform"
        },
        {
          name: "Strategic Decision Making",
          learnings: ["Platform Economics", "Network Effects", "Game Theory"],
          relatedProject: "Zoho Global Strategy"
        },
        {
          name: "Engineering Project Management",
          learnings: ["Waterfall/Agile", "Risk Management", "Budgeting"],
          relatedProject: "Automotive Factory Automation"
        },
        {
          name: "Economic Decision Making",
          learnings: ["Cost-Benefit Analysis", "Financial Modeling", "Decision Trees"],
          relatedProject: null
        }
      ]
    },
    {
      school: "Anna University, Chennai, India (AU)",
      degree: "Bachelor of Engineering – Mechanical Engineering",
      year: "May 2018",
      location: "Chennai, India",
      details: ""
    }
  ],
  work: [
    {
      company: "Mirajo AI",
      location: "Florida",
      role: "Product Intern",
      date: "Summer 2025",
      bullets: [
        "Supported early product discovery and PMF validation for a voice AI receptionist serving SMBs across healthcare, wellness, restaurants, and retail",
        "Conducted prompt engineering by structuring business data to enable consistent, privacy-aware voice interactions",
        "Wireframed, prototyped, and built the marketing website, owning UX flows, information architecture, and product copy",
        "Mapped end-to-end user journeys and built CRM workflows in GoHighLevel to automate lead capture and onboarding",
        "Developed sales playbooks and objection-handling scripts tailored to non-technical SMB owners"
      ]
    },
    {
      company: "PipeCandy Technologies (acquired by Assembly, now PacVue)",
      location: "India",
      role: "Product Manager / Product Marketer",
      date: "June 2021 – Sept 2023",
      bullets: [
        "Owned content-led product strategy aligned with GTM goals; executed campaigns that drove 5x increase in sign-ups",
        "Migrated CMS from WordPress to Webflow to improve SEO and user experience, increasing MQLs by ~30%",
        "Built SQL/Python dashboards for leadership to track KPI performance and customer engagement metrics",
        "Ran outbound campaigns and optimized lead funnels, contributing to sustained pipeline growth"
      ]
    },
    {
      company: "Adqvest Capital (now Thurro)",
      location: "India",
      role: "Data Analyst",
      date: "Aug 2019 – May 2021",
      bullets: [
        "Built 200+ Python RPA bots to automate data ingestion; reduced manual effort by 40% and improved data accuracy",
        "Supported ML-driven analysis contributing to ~25% AUM growth by identifying high-potential equity sectors",
        "Created Tableau & Power BI dashboards for portfolio tracking, enabling real-time decision-making for fund managers"
      ]
    },
    {
      company: "Greenpod Labs",
      location: "India",
      role: "Market Research Intern",
      date: "Summer 2020",
      bullets: [
        "Validated market fit for biotech innovation in food supply chain; created pilot plans for cold-chain logistics",
        "Pitched directly to retailers and distributors, gathering feedback to refine value proposition and GTM approach"
      ]
    },
    {
      company: "The Canine Bowl",
      location: "India",
      role: "Co-Founder / Operations & Product Lead",
      date: "2018 – 2019",
      bullets: [
        "Co-founded a fresh pet food startup; designed product offerings, pricing logic, and menu cycles",
        "Managed end-to-end operations including sourcing, packaging, and last-mile delivery",
        "Handled branding and early customer acquisition, building a loyal local customer base"
      ]
    }
  ],
  leadership: [
    {
      role: "VP Marketing & Communications",
      org: "Aspiring Product Managers Club (APMC)",
      date: "Sept 2023 – Apr 2024",
      bullets: [
        "Drove marketing and engagement for 3 flagship events; increased student participation by 35% across 500+ attendees.",
        "Managed Instagram strategy during Protothon; executed content campaigns that improved digital reach by 40%.",
        "Co-led Spring Product Conference planning with 6 industry speakers (Walmart, Cengage, CarGurus), managing end-to-end event logistics and promotions."
      ]
    }
  ],
  projects: [
    {
      title: "CandyQ-ty (Hershey Partnered)",
      tags: ["IoT", "Voice AI", "GTM Strategy"],
      description: "Designed a voice-activated smart candy dispenser to solve portion control for parents. Developed full IMC + GTM plan ($18.9M budget) and pricing models for Hershey's first consumer tech product.",
      businessInsight: "Clear GTM + pricing model for a new consumer device; ties fun + portion control to a realistic $18.9M launch plan and unit economics.",
      techInsight: "Voice-activated IoT concept with privacy-first design (no data storage), plus motion detection + parent app controls for limits and safety.",
      resumeBullets: [
        "Led customer segmentation, pricing, and GTM strategy for a voice-activated IoT product",
        "Built COGS, margin, and breakeven models (~294K units)",
        "Contributed to ARG-based launch strategy and influencer-led awareness campaigns"
      ],
      link: "#",
      caseStudy: {
        overview: {
          duration: "Sep – Dec 2025",
          type: "Academic Product & GTM Strategy Project",
          role: "Product Strategy, Market Research & Financial Modeling",
          team: "Team 5 – Mia Bernstein, Paxton Downs, Krisha Jain, Bharath Vittal",
          partner: "The Hershey Company"
        },
        problem: "Parents struggle to manage candy consumption during events like Halloween. Hygiene concerns around shared candy bowls are high, and existing dispensers lack smart controls. Parents want moderation; kids want fun.",
        solution: "A voice-activated smart candy dispenser that releases candy only when a child speaks a preset 'magic phrase'. Features include voice activation, motion detection, companion app for parents, portion limits, and privacy-first design (no data storage).",
        market: {
          target: "Suburban, dual-income households, parents aged 30–45, tech-comfortable families.",
          opportunity: "~14.3M U.S. households fit the target profile. Innovator segment alone ≈ 357K households."
        },
        financials: {
          msrp: "$149.99",
          cogs: "~$35–40 per unit",
          margin: "~$65 per unit",
          breakeven: "~294,000 units",
          marketingBudget: "$18.9M (ARG-based Halloween campaign, Influencer marketing)"
        },
        myRole: [
          "Led customer segmentation and market sizing",
          "Built pricing, COGS, margin, and breakeven models",
          "Helped define positioning and GTM strategy",
          "Contributed to ARG-based launch concept",
          "Translated IoT capabilities into parent-friendly value propositions"
        ],
        documents: [
          { name: "Final Presentation", type: "PDF", link: "/assets/projects/candyqty/candyqty-final-presentation.pdf" },
          { name: "Final Report", type: "PDF", link: "/assets/projects/candyqty/candyqty-final-report.pdf" }
        ],
        reflection: "CandyQ-ty reinforced that great consumer products don’t choose between fun and control — they reconcile both. The challenge wasn’t technology; it was designing trust, safety, and delight into a physical product while keeping economics realistic at scale."
      }
    },
    {
      title: "Fliteboard Platform",
      tags: ["Platform Strategy", "Network Effects", "Hardware+Software"],
      description: "Designed a platform strategy spanning riders, instructors, and developers to drive recurring revenue and defensibility for a premium hardware brand.",
      businessInsight: "Turns one-time hardware sales into recurring revenue via subscriptions, instructor tools, and partner ecosystem monetization.",
      techInsight: "Platform design mapping direct/indirect/data network effects with the app as the system of record for rides, community, and partner integrations.",
      
      resumeBullets: [
        "Designed platform strategy connecting riders, instructors, partners, and developers",
        "Mapped direct, indirect, and data network effects",
        "Developed acquisition loops and monetization logic for recurring revenue"
      ],
      link: "#",
      caseStudy: {
        overview: {
          duration: "Oct – Dec 2025",
          type: "Platform Strategy & Ecosystem Design",
          course: "Strategic Decision Making",
          role: "Platform Strategy & Network Effects",
          team: "Imani Clachar, Liam Mahoney, Bharath Vittal, Christopher Wilson"
        },
        problem: "Hardware-only growth limits recurring revenue. High upfront costs restrict adoption, and long-term engagement depends on an ecosystem (community, instructors), not just the board itself.",
        solution: "Transform Fliteboard into a multi-sided platform connecting riders, instructors, Fliteschools, and developers with the Flite App as the digital core. Leverage direct (community), indirect (partners), and data network effects.",
        market: {
            target: "Premium watersports enthusiasts and operators.",
            opportunity: "Create lock-in via community and data, moving beyond one-off hardware sales."
        },
        financials: {
            model: "App subscriptions, instructor tools, fleet management fees.",
            projection: "Recurring revenue stream + increased hardware LTV."
        },
        myRole: [
          "Defined platform sides and value exchange",
          "Mapped direct, indirect, and data network effects",
          "Contributed to acquisition loops and monetization logic",
          "Anchored strategy in real platform theory"
        ],
        documents: [
          { name: "Platform Strategy Deck", type: "PDF", link: "/assets/projects/fliteboard/fliteboard-platform-strategy.pdf" }
        ],
        reflection: "This project highlighted how great products become platforms when communities and data are treated as first-class citizens. The real value wasn’t in adding features — it was in orchestrating relationships."
      }
    },
    {
      title: "Zoho Global Strategy",
      tags: ["Corporate Strategy", "SaaS", "AI"],
      description: "Developed a comprehensive strategy case for Zoho to scale globally and expand AI capabilities while remaining bootstrapped and privacy-first.",
      businessInsight: "Strategy case balancing global growth with bootstrapped discipline—vertical plays and domain copilots without sacrificing privacy-first positioning.",
      techInsight: "AI expansion framed as domain-specific copilots on an integrated suite, avoiding dependency-heavy partnerships and preserving cost advantages.",
      
      resumeBullets: [
        "Conducted PESTEL, Porter’s, SWOT, and VRIN-O analyses",
        "Evaluated AI expansion and platform strategy while preserving cost leadership and privacy ethos"
      ],
      link: "#",
      caseStudy: {
        overview: {
          duration: "Oct – Dec 2025",
          type: "Corporate & Innovation Strategy Case Study",
          course: "Innovation-Driven Strategy",
          role: "Strategy Analysis & Competitive Positioning",
          team: "Team 3 – Neel Chokshi, Anuja Harne, Krisha Jain, Manav Shah, Bharath Vittal"
        },
        problem: "How can Zoho continue scaling globally and expanding AI capabilities without compromising its core principles of bootstrapping, privacy-first design, and cost leadership in a hyper-competitive SaaS market?",
        solution: "Leverage Zoho's integrated suite and rural talent engine as a sustainable competitive advantage. Expand 'Zia' AI into domain-specific copilots and build vertical-specific CRM offerings while avoiding dependency-creating partnerships.",
        market: {
            target: "Global SMB and Mid-market enterprises.",
            opportunity: "Rising demand for affordable, integrated SaaS suites vs. fragmented enterprise tools."
        },
        financials: {
            model: "Bootstrapped, low-CAC model via rural development centers.",
            projection: "Focus on long-term sustainability over short-term growth."
        },
        myRole: [
          "Conducted competitive and strategic analysis (PESTEL, Porter's, SWOT, VRIN-O)",
          "Analyzed sustainability of advantage",
          "Helped frame AI and platform expansion recommendations",
          "Co-authored final strategy narrative and presentation"
        ],
        documents: [
          { name: "Strategic Analysis Deck", type: "PDF", link: "/assets/projects/zoho/zoho-global-strategy-deck.pdf" }
        ],
        reflection: "Zoho demonstrated that strategy is often about what you refuse to do. This case reshaped my understanding of sustainable advantage, showing how discipline, culture, and cost structure can outperform speed and capital."
      }
    },
    {
      title: "ThreadWise",
      tags: ["Sustainable Fashion", "Product Discovery", "Figma"],
      description: "A discovery platform helping users find affordable, well-fitting, sustainable clothing using material filters. Top-3 project at NEU showcase.",
      businessInsight: "Makes sustainable shopping easier with transparency and fit guidance; affiliate commission model tested with clear adoption assumptions.",
      techInsight: "Discovery/MVP work focused on filters (materials), fit recommendations, and UX clarity; prototyped and validated through user research.",
      
      resumeBullets: [
        "Led user research and MVP definition; project ranked Top 1 of 15+ teams"
      ],
      link: "#",
      caseStudy: {
        overview: {
          duration: "Jan – Apr 2025",
          type: "College Capstone Project - Customer Driven Technical Innovation",
          role: "Product Strategy & Research Lead",
          team: "Julia, Shyam, Angeli, Li, Bharath Vittal",
          tools: "Figma, Canva, Google Forms, Excel"
        },
        problem: "Consumers today care about sustainability but feel overwhelmed and misled. Over 60% of clothing is plastic-based, greenwashing is rampant, and finding items that are both ethical and well-fitting is a frustrating experience.",
        solution: "A platform helping conscious shoppers find well-fitting, high-quality, and affordable clothing from truly sustainable brands. Features filter by material composition, smart fit recommendations, and brand transparency scores.",
        market: {
            target: "Conscious shoppers who want simplicity.",
            opportunity: "Users care about sustainability but won't act unless it's easy and transparent."
        },
        financials: {
            model: "Affiliate marketing with 15-20% commission on redirected purchases.",
            projection: "Projected 2026: 198.9K visits, 13.3K orders."
        },
        myRole: [
            "Conducted interviews and user segmentation",
            "Led financial projections and cost studies modeling",
            "Delivered MVP features and usability",
            "Created investor pitch and business roadmap"
        ],
        documents: [
          { name: "Business Model Canvas", type: "PDF", link: "/assets/projects/threadwise/threadwise-business-model-canvas.pdf" },
          { name: "Project Deck", type: "PDF", link: "/assets/projects/threadwise/threadwise-project-deck.pdf" },
          { name: "User Feedback", type: "PDF", link: "/assets/projects/threadwise/threadwise-userfeedback.pdf" }
        ],
        reflection: "Even when users care deeply about a cause, they won't act unless it's easy, transparent, and emotionally aligned. This project deepened my appreciation for usability, storytelling, and designing trust into digital experiences."
      }
    },
    {
      title: "ElderTend",
      tags: ["HealthTech", "Caregiver Platform", "Journey Mapping"],
      description: "Unified platform for elderly users, caregivers, and families. Defined roadmap, GTM, and metrics for an end-to-end product proposal.",
      businessInsight: "Caregiver + family coordination platform with a freemium path; success measured via engagement and reliability in critical moments.",
      techInsight: "Journey-mapped health workflows and designed an end-to-end app concept (alerts, vitals, appointments) with accessibility-first UX.",
      
      resumeBullets: [
        "Conducted caregiver interviews and co-developed PRD, wireframes, and GTM recommendations"
      ],
      link: "#",
      caseStudy: {
        overview: {
          duration: "Jan – Apr 2024",
          type: "Capstone Project - Digital Product Design",
          role: "Market Research & GTM Strategy",
          team: "Team ProPulse - Aishwariya, Aparna, Bharath, Sanyam"
        },
        problem: "Families worry about elderly loved ones living alone. Caregivers struggle with communication gaps and managing multiple ailments simultaneously. There is no single solution bridging daily care and digital updates.",
        solution: "A holistic health-tech app designed to assist in care and foster well-being. Bridges the gap between daily care and digital updates with features like vitals monitoring, doctor appointment management, and emergency alerts.",
        market: {
            target: "Elderly individuals, caregivers, and special needs dependents.",
            opportunity: "Growing aging population requires accessible, integrated care solutions."
        },
        financials: {
             model: "Freemium with premium monitoring features.",
             projection: "Focus on MAU and Emergency Response Rate as key metrics."
        },
        myRole: [
            "Crafted value proposition and GTM strategy",
            "Conducted competitor analysis",
            "Co-developed investor deck and roadmap"
        ],
        documents: [
          { name: "Final Presentation", type: "PDF", link: "/assets/projects/eldertend/eldertend-final-presentation.pdf" },
          { name: "Market Research (MRD)", type: "PDF", link: "/assets/projects/eldertend/eldertend-market-research-document.pdf" },
          { name: "Product Requirements (PRD)", type: "PDF", link: "/assets/projects/eldertend/eldertend-product-requirements-document.pdf" }
        ],
        prototype: {
          title: "Mobile App Prototype (Figma)",
          // Paste your Figma embed URL below (must be the https://www.figma.com/embed?... link)
          embedUrl: "https://embed.figma.com/proto/vBRVtCB6Ql1p5zzp5Ggchw/ElderTend-V1.0?page-id=0%3A1&node-id=121-2&starting-point-node-id=121%3A2&embed-host=share"
        },
        reflection: "Designing for a vulnerable population taught us that accessibility and empathy aren't secondary features—they are the product. ElderTend was an opportunity to build something meaningful with social impact."
      }
    },
    {
      title: "Automotive Factory Automation",
      tags: ["Industrial Automation", "Project Management", "Process Optimization"],
      description: "Proposed automation of an automotive factory's welding, painting, and assembly stations to eliminate inefficiencies, improve quality, and optimize safety.",
      businessInsight: "Automation proposal with ~$20M budget targeting efficiency gains, quality consistency, and safety improvements with a defined break-even path.",
      techInsight: "Robotics-based process redesign (MIG welding, painting, assembly alignment) integrated into existing conveyor constraints with risk planning.",
      
      resumeBullets: [],
      link: "#",
      caseStudy: {
        overview: {
          duration: "Jan - Apr 2024",
          course: "Engineering Project Management",
          role: "Planning, Strategy, Budgeting, Execution & Risk Management",
          team: "A-Team"
        },
        problem: "Manual MIG welding caused inconsistencies and waste. Paint jobs lacked uniformity and posed health risks. Windshield assembly was prone to misalignment. Industry-wide labor shortages strained operations.",
        solution: "Installed Yaskawa robots for precision MIG welding and FANUC robots for consistent paint coverage. Integrated robotic arms for assembly alignment. Engineered to align with existing conveyor systems to minimize civil modifications.",
        market: {
            target: "Automotive Manufacturing Sector.",
            opportunity: "Significant potential for cost reduction and efficiency gains through automation."
        },
        financials: {
            budget: "~$20 Million",
            projection: "Expected 30% gain in efficiency. Projected 22% reduction in incidents. Break-even expected by FY2025."
        },
        myRole: [
            "Constituted budget planning and stakeholder reporting",
            "Participated in risk identification and mitigation strategies",
            "Co-crafted final report and audit framework"
        ],
        documents: [
          { name: "Presentation", type: "PDF", link: "/assets/projects/automative-automation/automotive-factory-automation-presentation.pdf" },
          { name: "Project Handout", type: "PDF", link: "/assets/projects/automative-automation/automotive-factory-automation-project-handout.pdf" },
          { name: "Final Report", type: "PDF", link: "/assets/projects/automative-automation/automotive-factory-automation-report.pdf" },
          { name: "Work Breakdown Schedule", type: "PDF", link: "/assets/projects/automative-automation/automotive-factory-automation-work-breakdown-schedule.pdf" }
        ],
        reflection: "This capstone experience involved simulating a complex factory setup and applying real-world project management tools. It pushed us to collaborate, evaluate risk, and build processes that reflect actual industry standards."
      }
    }
  ],
  contact: {
    email: "hello@bharathvittal.com", // UPDATED EMAIL
    linkedin: "https://www.linkedin.com/in/bharath-v-737456b5/",
    phone: "+1 (857) 930-8934",
    resumeUrl: "/assets/BHARATH_VITTAL_RESUME_PM.docx"
  }
};


// --- COMPONENTS ---

const Navigation = ({ activeTab, setActiveTab }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'work', label: 'Work', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Code },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">BV.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeTab === item.id 
                    ? 'text-blue-600 dark:text-blue-400' 
                    : 'text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <item.icon className="w-4 h-4 mr-2" />
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800 animate-in slide-in-from-top-5">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
                  activeTab === item.id 
                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                    : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const ResumeModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="min-h-screen px-4 py-8 flex items-center justify-center">
        <div className="bg-white text-slate-900 w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden relative">
          
          {/* Controls Header */}
          <div className="bg-slate-100 p-4 border-b border-slate-200 flex justify-between items-center sticky top-0 z-10">
            <h2 className="font-bold text-slate-700 flex items-center gap-2">
              <FileText className="w-5 h-5" /> Digital Resume
            </h2>
            <div className="flex gap-2">
              <a 
                href={PORTFOLIO_DATA.contact.resumeUrl} 
                download
                className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download .docx
              </a>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-200 rounded-lg text-slate-500 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Content (Paper View) */}
          <div className="p-8 md:p-12 overflow-y-auto max-h-[80vh] font-sans selection:bg-blue-100">
            
            {/* Header */}
            <div className="border-b-2 border-slate-900 pb-6 mb-6">
              <h1 className="text-4xl font-extrabold tracking-tight uppercase mb-2">{PORTFOLIO_DATA.name}</h1>
              <div className="flex flex-wrap gap-4 text-sm text-slate-600 font-medium">
                <span>{PORTFOLIO_DATA.location}</span>
                <span>•</span>
                <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="hover:text-blue-600 hover:underline">{PORTFOLIO_DATA.contact.email}</a>
                <span>•</span>
                <a href={PORTFOLIO_DATA.contact.linkedin} className="hover:text-blue-600 hover:underline">LinkedIn</a>
                <span>•</span>
                <span>{PORTFOLIO_DATA.contact.phone}</span>
              </div>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-4 pb-1">Education</h3>
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{edu.school}</span>
                    <span>{edu.year}</span>
                  </div>
                  <div className="flex justify-between text-slate-600 text-sm">
                    <span className="italic">{edu.degree}</span>
                    <span>{edu.location}</span>
                  </div>
                  {edu.details && <div className="text-xs text-slate-500 mt-1">{edu.details}</div>}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-4 pb-1">Skills and Tools</h3>
              <div className="text-sm text-slate-700 leading-relaxed space-y-2">
                <div><span className="font-bold">Product & Strategy:</span> {PORTFOLIO_DATA.skills.product}</div>
                <div><span className="font-bold">User Research & Design:</span> {PORTFOLIO_DATA.skills.research}</div>
                <div><span className="font-bold">Analytics & Data:</span> {PORTFOLIO_DATA.skills.analytics}</div>
                <div><span className="font-bold">Tools:</span> {PORTFOLIO_DATA.skills.tools}</div>
              </div>
            </div>

            {/* Experience */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-4 pb-1">Experience</h3>
              {PORTFOLIO_DATA.work.map((job, idx) => (
                <div key={idx} className="mb-5">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{job.role}, {job.company}</span>
                    <span className="text-sm font-normal text-slate-600">{job.date}</span>
                  </div>
                  <div className="text-sm text-slate-600 italic mb-2">{job.location}</div>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                    {job.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Projects Highlights (Resume Version) */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-4 pb-1">Academic Projects</h3>
              {PORTFOLIO_DATA.projects.filter(p => p.resumeBullets && p.resumeBullets.length > 0).map((proj, idx) => (
                <div key={idx} className="mb-3">
                  <div className="font-bold text-slate-800 text-sm">
                    {proj.title.split(" (")[0]} — {proj.tags[1] || proj.tags[0]}
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1">
                    {proj.resumeBullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Leadership */}
            <div className="mb-8">
              <h3 className="text-lg font-bold uppercase tracking-wider border-b border-slate-300 mb-4 pb-1">Leadership & Volunteering</h3>
              {PORTFOLIO_DATA.leadership.map((role, idx) => (
                <div key={idx} className="mb-3">
                  <div className="flex justify-between font-bold text-slate-800">
                    <span>{role.role}, {role.org}</span>
                    <span className="text-sm font-normal text-slate-600">{role.date}</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-sm text-slate-700 space-y-1 mt-2">
                    {role.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ onOpenResume }) => (
  <div className="pt-32 pb-16 md:pt-48 md:pb-32 px-4 max-w-6xl mx-auto">
    <div className="max-w-4xl mx-auto text-center animate-in slide-in-from-bottom-5 duration-700 fade-in">
      <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight">
        Building stories with <span className="text-blue-600 dark:text-blue-400">Data</span> & <span className="text-blue-600 dark:text-blue-400">Design</span>.
      </h1>
      <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
        {PORTFOLIO_DATA.title}
      </p>
      <div className="flex items-center justify-center text-slate-500 dark:text-slate-500 mb-10">
        <MapPin className="w-5 h-5 mr-2" /> {PORTFOLIO_DATA.location}
      </div>
      
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        <button 
          onClick={onOpenResume}
          className="bg-slate-900 dark:bg-blue-600 text-white px-8 py-4 rounded-full font-medium hover:bg-slate-800 dark:hover:bg-blue-500 transition-transform hover:-translate-y-1 shadow-lg flex items-center"
        >
          <Eye className="w-5 h-5 mr-2" />
          View Resume
        </button>
        <a 
          href={PORTFOLIO_DATA.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {PORTFOLIO_DATA.highlights.map((stat, idx) => (
          <div key={idx} className="bg-slate-50 dark:bg-slate-900 p-4 rounded-2xl border border-slate-100 dark:border-slate-800">
            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 mb-1">{stat.label}</div>
            <div className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400 leading-tight">{stat.context}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AboutPreview = () => (
  <div className="bg-slate-50 dark:bg-slate-900/50 py-24 px-4 transition-colors duration-300">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
      <div className="space-y-8">
        <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            {PORTFOLIO_DATA.about}
            </p>
        </div>
        
        {/* Education Snapshot (ADDED) */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"/> Education
            </h3>
            <div className="space-y-4">
                {PORTFOLIO_DATA.education.map((edu, idx) => (
                    <div key={idx} className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="font-bold text-slate-900 dark:text-white">{edu.school}</div>
                        <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">{edu.degree}</div>
                        <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">{edu.year} • {edu.location}</div>
                    </div>
                ))}
            </div>
        </div>

        {/* Skills Section */}
        <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <Wrench className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400"/> Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
                {Object.values(PORTFOLIO_DATA.skills).join(', ').split(', ').map(skill => (
                    <span key={skill} className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm">
                        {skill}
                    </span>
                ))}
            </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="relative h-80 bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-xl group">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 opacity-90 flex flex-col items-center justify-center text-white p-6 text-center">
               <span className="text-2xl font-bold mb-2">Bharath Vittal</span>
               <span className="text-sm opacity-80">{PORTFOLIO_DATA.tagline}</span>
            </div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
          <p className="italic text-slate-600 dark:text-slate-300">
            "Bharath is an enthusiastic doer and a natural organizer. The end-result was a well-appreciated video that captured our company’s culture and values."
          </p>
          <div className="mt-4 font-semibold text-slate-900 dark:text-white">— Ashwin Ramasamy, Founder & CEO @ PipeCandy</div>
        </div>
      </div>
    </div>
  </div>
);

const EducationView = ({ onOpenProject }) => (
  <div className="py-24 px-4 max-w-5xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Academic Journey</h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
        Connecting theory to practice. Here is a breakdown of my Master's coursework and how I applied these concepts to real-world projects.
      </p>
    </div>

    <div className="space-y-8">
      {PORTFOLIO_DATA.education[0].courses.map((course, idx) => {
        // Safe check for related project
        const relatedProject = course.relatedProject 
          ? PORTFOLIO_DATA.projects.find(p => p.title.includes(course.relatedProject) || p.title === course.relatedProject)
          : null;

        return (
          <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-8 transition-colors duration-300">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{course.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {course.learnings.map((l, i) => (
                  <span key={i} className="text-xs font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
                    {l}
                  </span>
                ))}
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Focused on applying advanced frameworks to solve complex business problems. 
                Gained proficiency in {course.learnings.join(', ')} through rigorous case studies and practical applications.
              </p>
            </div>

            {/* Related Project Card (Mini) */}
            {relatedProject && (
              <div className="md:w-72 flex-shrink-0">
                <div className="h-full bg-slate-50 dark:bg-slate-800 rounded-xl p-4 border border-slate-100 dark:border-slate-700 flex flex-col">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-2 flex items-center">
                    <LinkIcon className="w-3 h-3 mr-1" /> Applied In Project
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white mb-2">{relatedProject.title}</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-3 mb-4 flex-grow">
                    {relatedProject.description}
                  </p>
                  <button 
                    onClick={() => onOpenProject(relatedProject)}
                    className="w-full py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-600 transition-colors flex items-center justify-center"
                  >
                    View Case Study <ArrowLeft className="w-3 h-3 ml-1 rotate-180" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  </div>
);

const WorkTimeline = () => (
  <div className="py-24 px-4 max-w-4xl mx-auto">
    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Work Experience</h2>
    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
      {PORTFOLIO_DATA.work.map((job, idx) => (
        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-slate-200 dark:bg-slate-700 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 text-slate-500 dark:text-slate-300">
            <Briefcase className="w-5 h-5" />
          </div>
          
          {/* Card */}
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">{job.role}</h3>
              <time className="font-mono text-xs text-slate-500 dark:text-slate-400">{job.date}</time>
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{job.company}</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {job.bullets[0]}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const CaseStudyModal = ({ project, onClose }) => {
  if (!project.caseStudy) return null;
  const { caseStudy } = project;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-white dark:bg-slate-950 animate-in slide-in-from-bottom-10 duration-300">
      <div className="max-w-4xl mx-auto px-4 py-8 md:py-16">
        
        {/* Header */}
        <div className="mb-8">
           <button 
             onClick={onClose}
             className="flex items-center text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors mb-6 group"
           >
             <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
             Back to Projects
           </button>
           <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
             {project.title}
           </h1>
           <div className="flex flex-wrap gap-2 mb-6">
             {project.tags && project.tags.map(tag => (
               <span key={tag} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full uppercase tracking-wider">
                 {tag}
               </span>
             ))}
           </div>
        </div>

        {/* Overview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl mb-12 border border-slate-100 dark:border-slate-800">
            <div>
               <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Duration</div>
               <div className="font-medium text-slate-900 dark:text-white">{caseStudy.overview.duration}</div>
            </div>
            <div>
               <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Role</div>
               <div className="font-medium text-slate-900 dark:text-white">{caseStudy.overview.role}</div>
            </div>
            <div>
               <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Team</div>
               <div className="font-medium text-slate-900 dark:text-white text-sm">{caseStudy.overview.team}</div>
            </div>
             <div>
               <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Context</div>
               <div className="font-medium text-slate-900 dark:text-white text-sm">{caseStudy.overview.type}</div>
            </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16 text-slate-700 dark:text-slate-300">
           
           {/* Problem & Solution */}
           <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center gap-2 mb-4 text-red-600 dark:text-red-400 font-bold text-lg">
                   <Target className="w-5 h-5" /> The Problem
                </div>
                <p className="leading-relaxed text-lg">
                   {caseStudy.problem}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-4 text-emerald-600 dark:text-emerald-400 font-bold text-lg">
                   <Lightbulb className="w-5 h-5" /> The Solution
                </div>
                <p className="leading-relaxed text-lg">
                   {caseStudy.solution}
                </p>
              </div>
           </div>

           {/* Market & Strategy */}
           <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <BarChart3 className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Market & Business Logic
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                 <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Target Market</h4>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{caseStudy.market.target}</p>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Opportunity</h4>
                    <p className="text-slate-600 dark:text-slate-400">{caseStudy.market.opportunity}</p>
                 </div>
                 <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-3 flex items-center">
                       <PieChart className="w-4 h-4 mr-2" /> Financials & Projections
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                       {Object.entries(caseStudy.financials).map(([key, value]) => (
                          <li key={key} className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2 last:border-0 last:pb-0">
                             <span className="capitalize text-slate-500 dark:text-slate-400">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                             <span className="font-medium text-slate-900 dark:text-white text-right">{value}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>

           {/* My Contribution */}
           <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                 <Layers className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" /> My Role & Contributions
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                 {caseStudy.myRole.map((role, idx) => (
                    <div key={idx} className="flex items-start p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl border border-purple-100 dark:border-purple-900/30">
                       <div className="bg-white dark:bg-purple-900 p-1 rounded-full text-purple-600 dark:text-purple-300 mr-3 mt-0.5 shadow-sm">
                          <User className="w-3 h-3" />
                       </div>
                       <span className="text-slate-800 dark:text-slate-200 font-medium">{role}</span>
                    </div>
                 ))}
              </div>
           </div>

           {/* Documents Section */}
           {caseStudy.documents && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                   <FileText className="w-6 h-6 mr-3 text-orange-600 dark:text-orange-400" /> Documents & Artifacts
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {caseStudy.documents.map((doc, idx) => (
                    <a 
                      key={idx} 
                      href={doc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-md transition-all group"
                    >
                      <div className="bg-orange-50 dark:bg-orange-900/30 p-2 rounded-lg text-orange-600 dark:text-orange-400 mr-4 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/50 transition-colors">
                        <File className="w-5 h-5" />
                      </div>
                      <div className="flex-grow">
                        <div className="font-medium text-slate-900 dark:text-white">{doc.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{doc.type}</div>
                      </div>
                      <Download className="w-4 h-4 text-slate-400 dark:text-slate-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
           )}

           {/* Prototype Embed Section (Optional) */}
           {caseStudy.prototype?.embedUrl && (
              <div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                   <Code className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-400" /> {caseStudy.prototype.title || "Prototype"}
                </h3>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm">
                  <div className="aspect-[16/9] w-full">
                    <iframe
                      title={caseStudy.prototype.title || "Figma Prototype"}
                      src={caseStudy.prototype.embedUrl}
                      className="w-full h-full"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4 text-xs text-slate-500 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800">
                    Tip: If you see a blank embed, make sure your Figma share link is set to “Anyone with the link can view”.
                  </div>
                </div>
              </div>
           )}

           {/* Reflection */}
           <div className="bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-2xl relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 text-slate-800 dark:text-slate-700 opacity-20">
                 <Sparkles className="w-32 h-32" />
              </div>
              <h3 className="text-xl font-bold mb-4 relative z-10">💭 Reflection</h3>
              <p className="text-slate-300 text-lg leading-relaxed relative z-10 italic">
                 "{caseStudy.reflection}"
              </p>
           </div>
        </div>

      </div>
    </div>
  );
};

const ProjectCard = ({ project, onOpenCaseStudy }) => {
  const [insight, setInsight] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState(null); // 'recruiter' or 'tech'



  return (
    <div className="group bg-white dark:bg-slate-900 rounded-2xl overflow-visible shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col h-full">
      <div className="h-48 bg-slate-100 dark:bg-slate-800 relative overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute bottom-4 left-4">
          <div className="flex flex-wrap gap-2">
            {project.tags && project.tags.map(tag => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold bg-white/90 dark:bg-slate-900/90 dark:text-slate-200 px-2 py-1 rounded-md shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {project.title}
          <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Insight Lens (fixed, hover, no AI calls) */}
<div className="mt-auto mb-4">
  <p className="text-xs font-semibold text-slate-400 w-full mb-2">✨ Insight Lens:</p>

  <div className="flex gap-2">
    {/* Business Insight */}
    <div className="relative group/insight flex-1">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg text-xs font-medium bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-900/50 border border-purple-200 dark:border-purple-800 transition-colors"
        aria-label="Business insight"
      >
        <TrendingUp className="w-3 h-3" /> Business
      </button>

      <div className="pointer-events-none opacity-0 group-hover/insight:opacity-100 group-focus-within/insight:opacity-100 transition-opacity absolute left-0 right-0 mt-2 z-20">
        <div className="rounded-lg border border-purple-100 dark:border-purple-800 bg-white dark:bg-slate-900 shadow-lg p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
          {project.businessInsight || "Business insight coming soon."}
        </div>
      </div>
    </div>

    {/* Tech Insight */}
    <div className="relative group/insight flex-1">
      <button
        type="button"
        className="w-full flex items-center justify-center gap-1 py-1.5 px-3 rounded-lg text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-800 transition-colors"
        aria-label="Technical insight"
      >
        <Cpu className="w-3 h-3" /> Tech
      </button>

      <div className="pointer-events-none opacity-0 group-hover/insight:opacity-100 group-focus-within/insight:opacity-100 transition-opacity absolute left-0 right-0 mt-2 z-20">
        <div className="rounded-lg border border-emerald-100 dark:border-emerald-800 bg-white dark:bg-slate-900 shadow-lg p-3 text-xs leading-relaxed text-slate-700 dark:text-slate-200">
          {project.techInsight || "Technical insight coming soon."}
        </div>
      </div>
    </div>
  </div>
</div>

        
        
        {project.caseStudy ? (
           <button 
            onClick={() => onOpenCaseStudy(project)}
            className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border-t border-slate-100 dark:border-slate-800 pt-4 mt-2 w-full text-left"
           >
            View Case Study <ExternalLink className="w-4 h-4 ml-2" />
           </button>
        ) : (
            <a href={project.link} className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border-t border-slate-100 dark:border-slate-800 pt-4 mt-2">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
            </a>
        )}
      </div>
    </div>
  );
};

const ProjectsGrid = ({ onOpenCaseStudy }) => (
  <div className="py-24 px-4 max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
      <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-yellow-500" /> 
        Try the Insight Lens on any project below
      </p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {PORTFOLIO_DATA.projects.map((project, idx) => (
        <ProjectCard key={idx} project={project} onOpenCaseStudy={onOpenCaseStudy} />
      ))}
    </div>
  </div>
);

const ContactSection = ({ onOpenResume }) => (
  <div className="bg-slate-900 dark:bg-black text-white py-24 px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something together.</h2>
      <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
        I love thoughtful conversations about products, people, or the weird in-between. If you’re hiring, collaborating, or just curious, feel free to say hi!
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
        <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex flex-col items-center p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors">
          <Mail className="w-8 h-8 mb-4 text-blue-400" />
          <span className="text-sm font-medium">Email Me</span>
          <span className="text-xs text-slate-400 mt-1">{PORTFOLIO_DATA.contact.email}</span>
        </a>
        <a href={PORTFOLIO_DATA.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors">
          <Linkedin className="w-8 h-8 mb-4 text-blue-400" />
          <span className="text-sm font-medium">LinkedIn</span>
          <span className="text-xs text-slate-400 mt-1">Connect professionally</span>
        </a>
        <button onClick={onOpenResume} className="flex flex-col items-center p-6 bg-slate-800 dark:bg-slate-900 rounded-xl hover:bg-slate-700 dark:hover:bg-slate-800 transition-colors">
          <FileText className="w-8 h-8 mb-4 text-blue-400" />
          <span className="text-sm font-medium">Resume</span>
          <span className="text-xs text-slate-400 mt-1">View & Download</span>
        </button>
      </div>

      <div className="mt-16 text-slate-500 text-sm">
        © {new Date().getFullYear()} Bharath Vittal. All rights reserved.
      </div>
    </div>
  </div>
);


const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <div className="min-h-screen w-full bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
        
        {/* Modal for Case Studies */}
        {selectedProject && (
          <CaseStudyModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}

        {/* Modal for Resume */}
        {showResume && (
          <ResumeModal onClose={() => setShowResume(false)} />
        )}

        {/* Main Navigation (Hidden when modal is open) */}
        {!selectedProject && !showResume && (
           <Navigation 
             activeTab={activeTab} 
             setActiveTab={setActiveTab} 
           />
        )}
        
        <main className={`min-h-screen w-full pt-16 ${selectedProject || showResume ? 'hidden' : 'block'}`}>
          {activeTab === 'home' && (
            <div className="animate-in fade-in duration-500">
              <Hero onOpenResume={() => setShowResume(true)} />
              <AboutPreview />
              <ContactSection onOpenResume={() => setShowResume(true)} />
            </div>
          )}

          {activeTab === 'work' && (
            <div className="animate-in fade-in duration-500">
              <WorkTimeline />
            </div>
          )}

          {activeTab === 'education' && (
            <div className="animate-in fade-in duration-500">
              <EducationView onOpenProject={(project) => {
                setSelectedProject(project);
              }} />
            </div>
          )}

          {activeTab === 'projects' && (
            <div className="animate-in fade-in duration-500">
              <ProjectsGrid onOpenCaseStudy={setSelectedProject} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;