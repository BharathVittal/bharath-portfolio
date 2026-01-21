import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, NavLink, useNavigate, useParams, useLocation } from "react-router-dom";
import { 
  Menu, X, Linkedin, Mail, Github, ExternalLink, 
  ChevronRight, Mic, MicOff, Send, MessageSquare, 
  User, Briefcase, Code, Download, FileText, Sparkles,
  Cpu, TrendingUp, HelpCircle, GraduationCap, Wrench,
  MapPin, Calendar, ArrowLeft, Target, Lightbulb, 
  Users, BarChart3, PieChart, Layers, File, Sun, Moon,
  Award, BookOpen, Link as LinkIcon, Printer, Eye, Film
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
      ],
      caseStudy: {
        overview: {
          duration: "Summer 2025",
          role: "Product Intern",
          location: "Florida",
          type: "Early-stage voice assistant SaaS for SMBs"
        },
        jtbd: "When a small business misses calls during busy hours or after-hours, they want someone to instantly answer FAQs and book appointments, so they don’t lose revenue or have to hire extra staff.",
        projects: [
          {
            title: "Discovery + PMF validation",
            bullets: [
              "Mapped core caller intents (hours, services, pricing, appointments, policies) across target verticals",
              "Identified adoption frictions (owner skepticism, dislike for IVR, clarity on privacy) and translated them into product messaging and flow decisions"
            ]
          },
          {
            title: "Prompt engineering + voice agent testing",
            bullets: [
              "Structured business data (services, hours, policies) into consistent knowledge inputs for the agent",
              "Tested edge cases (ambiguous requests, cancellations, reschedules, sensitive info) to improve reliability and privacy-aware behavior"
            ]
          },
          {
            title: "Marketing website (UX + copy)",
            bullets: [
              "Wireframed, prototyped, and built the marketing site; owned information architecture, UX flow, and conversion-focused copy",
              "Simplified language for non-technical owners and clarified “what happens when someone calls” end-to-end"
            ]
          },
          {
            title: "GoHighLevel CRM workflows",
            bullets: [
              "Built workflows for demo capture, follow-ups, pricing, and onboarding to support a scalable funnel",
              "Defined lifecycle stages and handoffs so the process stays repeatable as volume grows"
            ]
          }
        ],
        myRole: [
          "Supported early product discovery and PMF validation",
          "Designed and tested voice agent conversational flows and guardrails",
          "Owned website UX, information architecture, and messaging",
          "Automated lead-to-onboarding workflows in GoHighLevel"
        ],
        tools: [
          "GoHighLevel (CRM + workflow automation)",
          "Prompt design for voice assistants (knowledge structuring, edge-case testing)",
          "Web/UX: wireframing, information architecture, conversion copy"
        ],
        learnings: [
          "For SMBs, outcomes win: ‘calls answered’ and ‘time saved’ matter more than ‘AI’.",
          "Voice experiences are won on edge cases and failure handling, not the happy path.",
          "A clean funnel is mostly clarity + less friction—not more features."
        ]
      }
    },
    {
      company: "PipeCandy Technologies (acquired by Assembly, now PacVue)",
      location: "India",
      role: "Product Marketing Manager",
      date: "June 2021 – Sept 2023",
      bullets: [
        "Owned content-led product strategy aligned with GTM goals; executed campaigns that drove 5x increase in sign-ups",
        "Migrated CMS from WordPress to Webflow to improve SEO and user experience, increasing MQLs by ~30%",
        "Built SQL/Python dashboards for leadership to track KPI performance and customer engagement metrics",
        "Ran outbound campaigns and optimized lead funnels, contributing to sustained pipeline growth"
      ],
      caseStudy: {
        overview: {
          duration: "June 2021 – Sept 2023",
          role: "Product Marketing Manager",
          location: "India",
          type: "B2B SaaS (content-led growth + GTM execution)"
        },
        jtbd: "When eCommerce teams evaluate tools and candidates evaluate employers, they want credibility and clarity beyond feature lists, so they can trust the product and the people behind it.",
        projects: [
          {
            title: "Content-led product growth (GTM-aligned)",
            bullets: [
              "Owned content strategy tied to GTM priorities; built repeatable content loops that drove high-intent sign-ups",
              "Executed campaigns that contributed to a 5x increase in sign-ups"
            ]
          },
          {
            title: "CMS migration (WordPress → Webflow)",
            bullets: [
              "Led migration to improve SEO, site performance, and publishing velocity",
              "Redesigned information architecture and content hierarchy; increased MQLs by ~30%"
            ]
          },
          {
            title: "Analytics dashboards (SQL/Python)",
            bullets: [
              "Built leadership dashboards to track funnel KPIs and content/customer engagement metrics",
              "Improved visibility into what was working vs noise to guide prioritization"
            ]
          },
          {
            title: "Employer branding: culture + hiring video",
            bullets: [
              "Worked with leadership on narrative framing and execution for a company culture / hiring video",
              "Translated internal values into an external story to improve candidate fit and clarity"
            ]
          }
        ],
        media: {
          title: "Company Culture / Hiring Video",
          type: "youtube",
          embedUrl: "https://www.youtube.com/embed/b2Ao1mwDGQ4?si=WEy5jliLhFQE7a_K"
        },
        myRole: [
          "Owned content strategy and GTM-aligned messaging",
          "Led CMS migration execution (requirements, IA, QA, rollout)",
          "Built analytics dashboards for leadership decision-making",
          "Shaped employer branding narrative through culture/hiring storytelling"
        ],
        tools: [
          "Webflow, WordPress (CMS migration)",
          "SQL, Python (dashboards + reporting)",
          "Content strategy, information architecture, narrative framing"
        ],
        learnings: [
          "Content wins by intent-matching and clarity—not volume.",
          "Migrations are product work: taxonomy, UX, and QA matter.",
          "Employer branding is a funnel: strong storytelling reduces friction in hiring and sales."
        ]
      }
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
      ],
      caseStudy: {
        overview: {
          duration: "Aug 2019 – May 2021",
          role: "Data Analyst",
          location: "India",
          type: "Analytics + automation for investment workflows"
        },
        jtbd: "When analysts rely on messy, time-sensitive market data, they want automated pipelines and clear dashboards so they can make decisions faster with fewer errors.",
        projects: [
          {
            title: "Automation at scale (Python RPA)",
            bullets: [
              "Built 200+ Python RPA bots to automate data ingestion and processing",
              "Reduced manual effort by 40% and improved data accuracy"
            ]
          },
          {
            title: "Portfolio dashboards (Tableau / Power BI)",
            bullets: [
              "Created dashboards for portfolio tracking and real-time decision support",
              "Enabled faster ‘what changed and why’ visibility for fund managers"
            ]
          },
          {
            title: "ML-supported analysis",
            bullets: [
              "Supported ML-driven analysis to identify high-potential equity sectors",
              "Contributed to outcomes including ~25% AUM growth"
            ]
          }
        ],
        myRole: [
          "Built and maintained automation pipelines",
          "Designed dashboards for decision-makers",
          "Supported analytical workstreams tied to measurable investment outcomes"
        ],
        tools: [
          "Python (automation / scripting)",
          "Tableau, Power BI (dashboards)",
          "Data cleaning, transformation, repeatable pipelines"
        ],
        learnings: [
          "Automation compounds: the operating model changes after enough repetitive work is removed.",
          "Dashboards are about decision velocity, not aesthetics.",
          "Repeatability and correctness beat one-off analysis."
        ]
      }
    },
    {
      company: "Greenpod Labs",
      location: "India",
      role: "Market Research Intern",
      date: "Summer 2020",
      bullets: [
        "Validated market fit for biotech innovation in food supply chain; created pilot plans for cold-chain logistics",
        "Pitched directly to retailers and distributors, gathering feedback to refine value proposition and GTM approach"
      ],
      caseStudy: {
        overview: {
          duration: "Summer 2020",
          role: "Market Research Intern",
          location: "India",
          type: "Biotech innovation in food supply chain / cold chain"
        },
        jtbd: "When retailers and distributors face spoilage and inconsistent freshness, they want a way to extend shelf-life without major operational changes so they can reduce waste and protect margins.",
        projects: [
          {
            title: "Market validation + pilot planning",
            bullets: [
              "Validated market fit for biotech innovation in the food supply chain",
              "Created pilot plans and gathered field feedback from target stakeholders"
            ]
          },
          {
            title: "Customer conversations",
            bullets: [
              "Pitched to retailers and distributors and synthesized objections into positioning input",
              "Refined value proposition and GTM approach based on real constraints"
            ]
          }
        ],
        myRole: [
          "Field research and feedback synthesis",
          "Translated customer objections into positioning recommendations"
        ],
        tools: [
          "Interviewing and synthesis",
          "Competitor scanning",
          "Pilot planning and GTM narrative shaping"
        ],
        learnings: [
          "Adoption risk is often operational, not technical.",
          "GTM gets easier when objections and constraints are treated as inputs—not inconveniences."
        ]
      }
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
      ],
      caseStudy: {
        overview: {
          duration: "2018 – 2019",
          role: "Co-Founder / Operations & Product Lead",
          location: "India",
          type: "Fresh pet food startup (product + ops + early growth)"
        },
        jtbd: "When pet owners want healthier meals but don’t have time to cook, they want fresh, reliable food delivered consistently so they can feel confident about their pet’s health without extra effort.",
        projects: [
          {
            title: "Product definition (menus + cycles)",
            bullets: [
              "Designed product offerings, menu cycles, and packaging considerations",
              "Built pricing logic with a practical unit-economics mindset"
            ]
          },
          {
            title: "Operations + delivery execution",
            bullets: [
              "Managed sourcing, packaging, and last-mile delivery",
              "Set up lightweight systems to maintain consistency and reliability"
            ]
          },
          {
            title: "Branding + early acquisition",
            bullets: [
              "Owned brand and early customer acquisition efforts",
              "Built repeat customers through consistency and service reliability"
            ]
          }
        ],
        myRole: [
          "End-to-end ownership across product, operations, and customer experience",
          "Set up repeatable fulfillment and feedback loops"
        ],
        tools: [
          "Pricing logic and operational planning",
          "Customer feedback loops",
          "Lightweight systems for recurring delivery"
        ],
        learnings: [
          "In subscription-like businesses, consistency is the product.",
          "Trust is built through operations more than marketing.",
          "The first 50 customers teach more than any framework."
        ]
      }
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
  films: [
  {
    title: "Seven Minutes in Heaven",
    logline: "A game of seven minutes in heaven gets awkward when the wrong person volunteers.",
    watchUrl: "https://youtu.be/9tV9JYZMvZE?si=Ni8eNejR_7fDrYdi",
    embedUrl: "https://www.youtube.com/embed/9tV9JYZMvZE?si=5EIVdiQ_sfHeVvID",
    type: "Short film",
    notes: "NUTV"
  },
  {
    title: "Mr. Bones",
    logline: "Jess is already having a bad day when she runs into MR. BONES! A skeleton that just wants his skin back so he can be hot again.",
    watchUrl: "https://youtu.be/KvDk-x_IrhA?si=mOWa3HJPhe7-eIw8",
    embedUrl: "https://www.youtube.com/embed/KvDk-x_IrhA?si=kx_7d8km-ClfQ_KU",
    type: "Short film",
    notes: "NUTV"
  },
  {
    title: "A Date, Some Crypto, Many Masks",
    logline: "A date, some crypto, many masks.",
    watchUrl: "https://youtu.be/W8b9Nxg0v9U?si=9xBGIyYlvqxvMauu",
    embedUrl: "https://www.youtube.com/embed/W8b9Nxg0v9U?si=_3K4etG6smSNgkUD",
    type: "Short film",
    notes: "NUTV"
  },
  {
    title: "First Week Videos — Boston Lore (Group 2: The Boston Strangler)",
    logline: "First Week Videos are a one-week filmmaking sprint. Theme: Boston Lore. Group 2 prompt: The Boston Strangler.",
    watchUrl: "https://youtu.be/otAYGORfBkI?si=jxw6UUEpkWBSwzh",
    embedUrl: "https://www.youtube.com/embed/otAYGORfBkI?si=SoCRpB9TKsPkWPbp",
    type: "First Week Video",
    notes: "NUTV"
  },
  {
    title: "Your Favorite Club Just Got Cinematic",
    logline: "Your favorite club just got *CINEMATIC* (freshly premiered at this year’s Yearly Show)!",
    watchUrl: "https://youtu.be/5qEM9cYia2U?si=rd0l5XyE7mVS8RBK",
    embedUrl: "https://www.youtube.com/embed/5qEM9cYia2U?si=4rTxtLJgLM8Oh5Jr",
    type: "Club promo",
    notes: "NUTV"
  },
  {
    title: "A Day",
    logline: "The journey of a thousand miles begins with a single step.",
    watchUrl: "https://youtu.be/VAVqYTyyXvA?si=K6veUchkQLp-lScr",
    embedUrl: "https://www.youtube.com/embed/VAVqYTyyXvA?si=6sYWHTZhs5q8JMcl",
    type: "Short film",
    notes: "NUTV"
  },
  {
    title: "Heist — Trust Gone Wrong",
    logline: "A team of con artists learns the value of trust during a heist where everything goes wrong.",
    watchUrl: "https://vimeo.com/1130756333/1301549832?fl=pl&fe=sh",
    embedUrl: "https://player.vimeo.com/video/1130756333?h=1301549832",
    type: "Short film",
    notes: "Vimeo"
  }
],
  contact: {
    email: "hello@bharathvittal.com", // UPDATED EMAIL
    linkedin: "https://www.linkedin.com/in/bharath-v-737456b5/",
    phone: "+1 (857) 930-8934",
    resumeUrl: "/assets/resume/bharathvittal_resume.docx"
  }
};


// --- COMPONENTS ---

const slugify = (str = "") =>
  str
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const useScrollToTopOnRouteChange = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);
};
const findWorkBySlug = (slug) =>
  PORTFOLIO_DATA.work.find((job) => slugify(job.company) === slug);

const findProjectBySlug = (slug) =>
  PORTFOLIO_DATA.projects.find((p) => slugify(p.title) === slug);

const HomePage = ({ onOpenResume }) => (
  <div className="animate-in fade-in duration-500">
    <Hero onOpenResume={onOpenResume} />
    <AboutPreview />
    <ContactSection onOpenResume={onOpenResume} />
  </div>
);

const WorkIndexPage = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-500">
      <WorkTimeline onOpenWork={(job) => navigate(`/work/${slugify(job.company)}`)} />
    </div>
  );
};

const WorkDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const job = findWorkBySlug(slug);

  if (!job) {
    return (
      <div className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Work page not found</h2>
        <button
          onClick={() => navigate('/work')}
          className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
        </button>
      </div>
    );
  }

  return <WorkCaseStudyModal job={job} onClose={() => navigate('/work')} />;
};

const EducationPage = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-500">
      <EducationView onOpenProject={(project) => navigate(`/projects/${slugify(project.title)}`)} />
    </div>
  );
};

const ProjectsIndexPage = () => {
  const navigate = useNavigate();
  return (
    <div className="animate-in fade-in duration-500">
      <ProjectsGrid onOpenCaseStudy={(project) => navigate(`/projects/${slugify(project.title)}`)} />
    </div>
  );
};

const ProjectDetailPage = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const project = findProjectBySlug(slug);

  if (!project) {
    return (
      <div className="py-24 px-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Project page not found</h2>
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
        </button>
      </div>
    );
  }

  return <CaseStudyModal project={project} onClose={() => navigate('/projects')} />;
};
const FilmsPage = () => (
  <div className="py-24 px-4 max-w-6xl mx-auto">
    <div className="mb-12 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
        Films
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
        I chase stories beyond product — filmmaking is where I practice observation, pacing, and emotion.
        Here are a few projects I’ve been part of through Northeastern Television (NUTV).
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {PORTFOLIO_DATA.films.map((film, idx) => (
        <div
          key={idx}
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm"
        >
          <div className="aspect-[16/9] w-full bg-slate-100 dark:bg-slate-800">
            <iframe
              title={film.title}
              src={film.embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
            />
          </div>

          <div className="p-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full">
                {film.type}
              </span>
              <span className="text-[10px] uppercase tracking-wider font-semibold bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                {film.notes}
              </span>
            </div>

            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-2">
              {film.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
              {film.logline}
            </p>

            <a
              href={film.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              Watch on YouTube <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      ))}
    </div>

    <div className="mt-16 bg-slate-900 dark:bg-slate-800 text-white p-8 rounded-2xl relative overflow-hidden shadow-lg">
      <div className="absolute top-0 right-0 -mt-6 -mr-6 opacity-20">
        <Sparkles className="w-32 h-32" />
      </div>
      <h3 className="text-2xl font-bold mb-2 relative z-10">Want to talk story?</h3>
      <p className="text-slate-200 max-w-3xl relative z-10">
        If you’re curious about what I did on any of these (or you’re building something creative),
        hit me up — always down to talk films.
      </p>
      <div className="mt-5 relative z-10">
        <a
          href={`mailto:${PORTFOLIO_DATA.contact.email}`}
          className="inline-flex items-center bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-full text-sm font-semibold"
        >
          Email me <Mail className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  </div>
);
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
  { to: '/', label: 'Home', icon: User },
  { to: '/work', label: 'Work', icon: Briefcase },
  { to: '/education', label: 'Education', icon: GraduationCap },
  { to: '/projects', label: 'Projects', icon: Code },
  { to: '/films', label: 'Films', icon: Film },
];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <NavLink to="/" className="flex-shrink-0 flex items-center cursor-pointer">
            <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">BV.</span>
          </NavLink>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item) => (
  <NavLink
    key={item.to}
    to={item.to}
    className={({ isActive }) =>
      `flex items-center px-3 py-2 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? 'text-blue-600 dark:text-blue-400'
          : 'text-gray-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
      }`
    }
  >
    <item.icon className="w-4 h-4 mr-2" />
    {item.label}
  </NavLink>
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
              <NavLink
  key={item.to}
  to={item.to}
  onClick={() => setIsOpen(false)}
  className={({ isActive }) =>
    `block w-full text-left px-3 py-4 rounded-md text-base font-medium ${
      isActive
        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
        : 'text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-900'
    }`
  }
>
  <div className="flex items-center">
    <item.icon className="w-5 h-5 mr-3" />
    {item.label}
  </div>
</NavLink>
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

const AboutPreview = () => {
  const images = [
    "/assets/images/1.jpg",
    "/assets/images/2.jpg",
    "/assets/images/3.jpg",
    "/assets/images/4.jpg",
  ];

  const [loadedImages, setLoadedImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(0);
  const [isCrossfading, setIsCrossfading] = useState(false);

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

  // Preload images once, and only rotate through the ones that actually load.
  useEffect(() => {
    let isMounted = true;

    const preload = async () => {
      const results = await Promise.all(
        images.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.onload = () => resolve({ src, ok: true });
              img.onerror = () => resolve({ src, ok: false });
              img.src = src;
            })
        )
      );

      const ok = results.filter((r) => r.ok).map((r) => r.src);
      if (isMounted) {
        setLoadedImages(ok.length > 0 ? ok : [images[0]]);
        setCurrentIndex(0);
        setNextIndex(0);
      }

      // Helpful debug (won’t break prod):
      if (ok.length !== images.length) {
        // eslint-disable-next-line no-console
        console.warn(
          "Some AboutPreview images failed to load:",
          results.filter((r) => !r.ok).map((r) => r.src)
        );
      }
    };

    preload();
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Rotate images strictly in order: show each for 3s, then crossfade to next.
  useEffect(() => {
    if (!loadedImages || loadedImages.length <= 1) return;

    // Ensure indices are in range whenever loadedImages changes
    setCurrentIndex((i) => i % loadedImages.length);
    setNextIndex((i) => i % loadedImages.length);

    // Clear any existing timers
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    intervalRef.current = setInterval(() => {
      // compute next deterministically from currentIndex
      setNextIndex((_) => {
        const next = (currentIndex + 1) % loadedImages.length;
        return next;
      });

      // start crossfade
      setIsCrossfading(true);

      // after fade duration, commit the next as current
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((_) => (currentIndex + 1) % loadedImages.length);
        setIsCrossfading(false);
      }, 700);
    }, 3000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // We intentionally depend on `loadedImages` and `currentIndex` so the next index is computed in order.
  }, [loadedImages, currentIndex]);

  const currentSrc = (loadedImages && loadedImages[currentIndex]) || images[0];
  const upcomingSrc = (loadedImages && loadedImages[nextIndex]) || images[0];

  return (
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
              <GraduationCap className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" /> Education
            </h3>
            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
                >
                  <div className="font-bold text-slate-900 dark:text-white">{edu.school}</div>
                  <div className="text-blue-600 dark:text-blue-400 text-sm font-medium">{edu.degree}</div>
                  <div className="text-slate-500 dark:text-slate-400 text-xs mt-1">
                    {edu.year} • {edu.location}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
              <Wrench className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" /> Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {Object.values(PORTFOLIO_DATA.skills)
                .join(", ")
                .split(", ")
                .map((skill) => (
                  <span
                    key={skill}
                    className="bg-white dark:bg-slate-800 px-3 py-1 rounded-full text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
            {/* Current image (base layer) */}
            <img
              src={currentSrc}
              alt="Bharath Vittal visual"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />

            {/* Next image (top layer) */}
            <img
              src={upcomingSrc}
              alt="Bharath Vittal visual"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                isCrossfading ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />

            {/* Lighter overlay to let images show through */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-transparent to-slate-950/10" />

            {/* Bottom caption so image stays visible */}
            <div className="absolute left-0 right-0 bottom-0 p-5 text-white text-left">
              <div className="inline-block rounded-xl px-4 py-3 bg-slate-950/45 backdrop-blur-sm border border-white/10">
                <div className="text-xl font-bold leading-tight drop-shadow">Bharath Vittal</div>
                <div className="text-sm opacity-95 drop-shadow">{PORTFOLIO_DATA.tagline}</div>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700">
            <p className="italic text-slate-600 dark:text-slate-300">
              "Bharath is an enthusiastic doer and a natural organizer. The end-result was a well-appreciated video that captured our company’s culture and values."
            </p>
            <div className="mt-4 font-semibold text-slate-900 dark:text-white">
              — Ashwin Ramasamy, Founder & CEO @ PipeCandy
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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

const WorkTimeline = ({ onOpenWork }) => (
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
          <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all flex flex-col">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg">{job.role}</h3>
              <time className="font-mono text-xs text-slate-500 dark:text-slate-400">{job.date}</time>
            </div>
            <div className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">{job.company}</div>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {job.bullets[0]}
            </p>
            <button
              onClick={() => onOpenWork(job)}
              className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 border-t border-slate-100 dark:border-slate-800 pt-4 mt-4 w-full text-left"
            >
              View Work Details <ExternalLink className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
// --- WorkCaseStudyModal ---
const WorkCaseStudyModal = ({ job, onClose }) => {
  if (!job?.caseStudy) return null;
  const { caseStudy } = job;
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
            Back to Work
          </button>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
            {job.role} — {job.company}
          </h1>
          <div className="text-slate-500 dark:text-slate-400 text-base mb-4">
            {job.location} • {job.date}
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
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Location</div>
            <div className="font-medium text-slate-900 dark:text-white">{caseStudy.overview.location}</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-1">Context</div>
            <div className="font-medium text-slate-900 dark:text-white">{caseStudy.overview.type}</div>
          </div>
        </div>
        {/* Main Content */}
        <div className="space-y-16 text-slate-700 dark:text-slate-300">
          {/* JTBD */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-blue-600 dark:text-blue-400 font-bold text-lg">
              <Target className="w-5 h-5" /> JTBD
            </div>
            <p className="leading-relaxed text-2xl md:text-2xl font-semibold text-slate-900 dark:text-white">
              {caseStudy.jtbd}
            </p>
          </div>
          {/* Projects & Initiatives */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Layers className="w-6 h-6 mr-3 text-purple-600 dark:text-purple-400" /> Projects & Initiatives
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.projects.map((proj, idx) => (
                <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                  <div className="font-bold text-slate-900 dark:text-white mb-2">{proj.title}</div>
                  <ul className="list-disc list-inside text-slate-600 dark:text-slate-400 text-sm space-y-1">
                    {proj.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          {/* My Role */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <User className="w-6 h-6 mr-3 text-emerald-600 dark:text-emerald-400" /> My Role
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {caseStudy.myRole.map((role, idx) => (
                <div key={idx} className="flex items-center px-4 py-2 bg-emerald-50 dark:bg-emerald-900/20 rounded-full border border-emerald-100 dark:border-emerald-900/30 text-slate-900 dark:text-white font-medium text-sm">
                  {role}
                </div>
              ))}
            </div>
          </div>
          {/* Tools & Technologies */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Wrench className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400" /> Tools & Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {caseStudy.tools.map((tool, idx) => (
                <span key={idx} className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          {/* Key Learnings */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
              <Lightbulb className="w-6 h-6 mr-3 text-yellow-500 dark:text-yellow-300" /> Key Learnings
            </h3>
            <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
              {caseStudy.learnings.map((l, idx) => (
                <li key={idx}>{l}</li>
              ))}
            </ul>
          </div>
          {/* Media Section */}
          {caseStudy.media?.embedUrl && (
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center">
                <ExternalLink className="w-6 h-6 mr-3 text-red-500 dark:text-red-400" /> {caseStudy.media.title}
              </h3>
              <div className="aspect-[16/9] w-full rounded-xl overflow-hidden mb-2 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                <iframe
                  title={caseStudy.media.title}
                  src={caseStudy.media.embedUrl}
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
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
              {caseStudy.reflection
                ? `"${caseStudy.reflection}"`
                : "If you're curious about details or want artifacts, feel free to reach out — happy to walk through the work."
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- CaseStudyModal (Projects) ---
// Dark, polished case-study layout (matches screenshot aesthetic)
const CaseStudyModal = ({ project, onClose }) => {
  if (!project?.caseStudy) return null;
  const cs = project.caseStudy;

  const hasDocuments = Array.isArray(cs.documents) && cs.documents.length > 0;

  // Safe helpers
  const overview = cs.overview || {};
  const market = cs.market || {};
  const financials = cs.financials || {};

  const formatLabel = (k) =>
    k
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (c) => c.toUpperCase());

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-slate-950 text-slate-100">
      {/* Subtle background glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute -bottom-60 right-1/3 w-[800px] h-[800px] rounded-full bg-purple-600/10 blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <div className="mb-10">
          <button
            onClick={onClose}
            className="inline-flex items-center text-slate-400 hover:text-white transition-colors mb-6 group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-3 leading-tight text-center">
            {project.title}
          </h1>

          {Array.isArray(project.tags) && project.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-wider font-semibold bg-slate-900/60 border border-slate-800 text-slate-200 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-center">
            {project.description}
          </p>
        </div>

        {/* Overview (dark pill bar) */}
        <div className="mb-12">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Duration</div>
                <div className="font-semibold text-slate-100">{overview.duration || "—"}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Role</div>
                <div className="font-semibold text-slate-100">{overview.role || "—"}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Team</div>
                <div className="font-semibold text-slate-100">{overview.team || "—"}</div>
              </div>
              <div>
                <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mb-1">Context</div>
                <div className="font-semibold text-slate-100">{overview.type || "—"}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Problem + Solution (two-column like screenshot) */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {cs.problem && (
            <div>
              <div className="flex items-center gap-2 text-rose-300 font-semibold mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>The Problem</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {cs.problem}
              </p>
            </div>
          )}

          {cs.solution && (
            <div>
              <div className="flex items-center gap-2 text-emerald-300 font-semibold mb-3">
                <Lightbulb className="w-4 h-4" />
                <span>The Solution</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {cs.solution}
              </p>
            </div>
          )}
        </div>

        {/* Market & Business Logic + Financials (combined card row) */}
        {(cs.market || cs.financials) && (
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6 mb-14">
            <div className="flex items-center gap-2 text-slate-200 font-bold mb-6">
              <BarChart3 className="w-5 h-5 text-slate-300" />
              <span>Market & Business Logic</span>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Market */}
              <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Target Market
                </div>
                <div className="text-slate-200 font-medium mb-4">
                  {market.target || "—"}
                </div>

                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Opportunity
                </div>
                <div className="text-slate-300">
                  {market.opportunity || "—"}
                </div>
              </div>

              {/* Financials */}
              <div className="bg-slate-950/40 border border-slate-800 rounded-xl p-5">
                <div className="flex items-center gap-2 mb-3 text-slate-200 font-bold">
                  <PieChart className="w-4 h-4 text-slate-300" />
                  <span className="text-sm">Financials & Projections</span>
                </div>

                <div className="space-y-2 text-sm">
                  {Object.keys(financials).length === 0 ? (
                    <div className="text-slate-400">—</div>
                  ) : (
                    Object.entries(financials).map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4">
                        <div className="text-slate-500">{formatLabel(k)}</div>
                        <div className="text-slate-200 font-semibold text-right">{String(v)}</div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* My Role & Contributions (purple chips) */}
        {Array.isArray(cs.myRole) && cs.myRole.length > 0 && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-slate-200 font-bold mb-6">
              <Layers className="w-5 h-5 text-purple-300" />
              <span>My Role & Contributions</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {cs.myRole.map((r, idx) => (
                <div
                  key={idx}
                  className="bg-purple-900/20 border border-purple-800/40 rounded-xl px-5 py-4 text-slate-100 font-semibold text-sm"
                >
                  {r}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Documents & Artifacts */}
        {hasDocuments && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-slate-200 font-bold mb-6">
              <FileText className="w-5 h-5 text-orange-300" />
              <span>Documents & Artifacts</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {cs.documents.map((doc, idx) => (
                <a
                  key={idx}
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-slate-900/40 border border-slate-800 rounded-xl p-5 hover:bg-slate-900/60 hover:border-slate-700 transition-all flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-950/40 border border-slate-800 flex items-center justify-center">
                      <File className="w-5 h-5 text-orange-300" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-100">{doc.name}</div>
                      <div className="text-xs text-slate-500">{doc.type}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Prototype */}
        {cs.prototype?.embedUrl && (
          <div className="mb-14">
            <div className="flex items-center gap-2 text-slate-200 font-bold mb-6">
              <LinkIcon className="w-5 h-5 text-emerald-300" />
              <span>Prototype</span>
            </div>

            <div className="bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden">
              <div className="p-4 border-b border-slate-800 flex items-center justify-between">
                <div className="font-semibold text-slate-100">
                  {cs.prototype?.title || "Prototype"}
                </div>
                <a
                  href={cs.prototype.embedUrl.replace("embed.figma.com", "www.figma.com")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-emerald-300 hover:text-emerald-200 hover:underline inline-flex items-center"
                >
                  Open in Figma <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
              <div className="aspect-[16/10] w-full bg-slate-950">
                <iframe
                  title={cs.prototype?.title || "Prototype"}
                  src={cs.prototype.embedUrl}
                  loading="lazy"
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}

        {/* Reflection */}
        <div className="mb-4">
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-center gap-2 text-slate-200 font-bold mb-4">
              <MessageSquare className="w-5 h-5 text-slate-300" />
              <span>Reflection</span>
            </div>
            <p className="text-slate-300 leading-relaxed italic">
              {cs.reflection
                ? `"${cs.reflection}"`
                : "If you're curious about details or want artifacts, feel free to reach out — happy to walk through the work."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProjectCard = ({ project, onOpenCaseStudy }) => {



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
        Hover on the Insight Lens buttons for a quick business + tech takeaway.
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
  useScrollToTopOnRouteChange();
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen w-full transition-colors duration-300">
      <div className="min-h-screen w-full bg-white dark:bg-slate-950 font-sans text-slate-900 dark:text-slate-100 selection:bg-blue-100 selection:text-blue-900 transition-colors duration-300">
        {showResume && <ResumeModal onClose={() => setShowResume(false)} />}

        {!showResume && <Navigation />}

        <main className={`min-h-screen w-full pt-16 ${showResume ? 'hidden' : 'block'}`}>
          <Routes>
            <Route path="/" element={<HomePage onOpenResume={() => setShowResume(true)} />} />

            <Route path="/work" element={<WorkIndexPage />} />
            <Route path="/work/:slug" element={<WorkDetailPage />} />

            <Route path="/education" element={<EducationPage />} />

            <Route path="/projects" element={<ProjectsIndexPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/films" element={<FilmsPage />} />

            <Route
              path="*"
              element={
                <div className="py-24 px-4 max-w-4xl mx-auto">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Page not found</h2>
                  <NavLink to="/" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    Go back home
                  </NavLink>
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;