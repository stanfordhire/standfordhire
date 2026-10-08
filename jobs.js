/* ==========================================================
   YOUR JOBS LIVE HERE. This is the only file you edit to
   add, change or remove jobs.

   To ADD a job: copy one whole block from { to }, paste it
   after the last one (with a comma between blocks), and
   change the text. Each "id" must be unique, with no spaces.

   To REMOVE a job: delete its whole block { ... },
   Keep quotes " " around text and a comma at the end of
   each line.

   applyUrl = the employer's own page where people apply.
   visa = OPTIONAL. Add a line like  visa: "Visa sponsorship available",
   to show a highlighted badge. Delete the line if not needed.

   Long jobs: put each paragraph on ONE line inside quotes.
   Never press Enter in the middle of a quoted line.
   Extra headings go in "sections" (see the last job).
   ========================================================== */

const JOBS = [
  {
    id: "autism-support-care-worker-remote",
    title: "Autism Support Care Worker (Sponsorship)",
    company: "CederTree UK",
    location: "Hybrid/London",
    type: "Full time or flexible",
    visa: "Visa sponsorship available",
    salary: "£13.75 - £15.50 per hour",
    posted: "7 October 2026",
    summary: "Provide remote, person-centred support to autistic adults through regular video check-ins.",
    description: [
      "We are seeking compassionate, neurodiversity-affirming individuals to provide remote support to autistic adults. You will be a consistent, safe presence, monitoring well-being and offering respectful, person-centred care.",
      "This is not a compliance-based role. We believe behaviour is communication, autonomy is a right, and trust is the foundation of all care."
    ],
    requirements: [
      "Experience supporting autistic or neurodivergent individuals",
      "Strong communication and active listening skills",
      "Ability to work independently in a remote setting",
      "Reliable internet and a quiet, private workspace",
      "Commitment to neurodiversity-affirming principles (consent, autonomy, social model)",
      "Emotional resilience and strong ethical judgment"
    ],
    sections: [
      {
        heading: "What you will be doing",
        bullets: [
          "Provide scheduled check-ins with each patient at least once every hour via a video interaction platform",
          "Support 3 patients assigned by default (caseload may vary)",
          "Monitor mood, behaviour, and well-being, and document your observations",
          "Offer emotional support using active listening and validation",
          "Recognise and respond to distress using trauma-informed strategies",
          "Follow the communication guidelines provided during training",
          "Escalate concerns promptly to supervisors",
          "Maintain accurate records and participate in team meetings"
        ]
      },
      {
        heading: "Preferred (not essential)",
        bullets: [
          "Background in healthcare, social care, psychology, or education",
          "Training in trauma-informed practice"
        ]
      },
      {
        heading: "What we offer",
        bullets: [
          "Ongoing supervision and professional development",
          "A supportive, collaborative team environment",
          "Flexible scheduling",
          "Competitive compensation",
          "The opportunity to make a genuine difference"
        ]
      },
      {
        heading: "Our values",
        bullets: [
          "Behaviour is communication. We look for the need beneath the behaviour.",
          "Autonomy is a right. We support decision-making; we don't decide for people.",
          "Consent is ongoing. We ask before acting. We respect 'no' the first time.",
          "Trust is the foundation. We build it slowly, through consistency and respect.",
          "Different brains are not broken brains. We celebrate neurodiversity."
        ]
      },
      {
        heading: "Visa sponsorship",
        paragraphs: [
          "Visa sponsorship may be available for exceptional candidates who meet the following criteria:"
        ],
        bullets: [
          "Eligibility: candidates must meet minimum qualification requirements and demonstrate strong alignment with our values",
          "Role suitability: sponsorship is assessed on a case-by-case basis, dependent on role requirements and local regulations",
          "Certification: candidates must complete the NCP certificate prior to visa processing",
          "Commitment: candidates must commit to a minimum 16-month contract"
        ]
      },
      {
        heading: "How to apply",
        paragraphs: [
          "Submit your CV and a brief cover letter explaining why this role resonates with you, or click the Apply now button below.",
          "Apply to: latifa@stanfordhire.co.uk"
        ]
      },
      {
        heading: "Equal opportunities",
        paragraphs: [
          "We are an equal opportunity employer. We strongly encourage applications from neurodivergent individuals and those from underrepresented communities."
        ]
      }
    ],
    applyUrl: "mailto:latifa@stanfordhire.co.uk?subject=Application%20-%20Autism%20Support%20Care%20Worker"
  },
  {
    id: "healthcare-assistant-hmp-fosse-way",
    title: "Healthcare Assistant",
    company: "PPG Health In Justice",
    location: "HMP Fosse Way",
    type: "Full time, permanent",
    salary: "Up to £29,723 per year",
    posted: "7 October 2026",
    summary: "Support the healthcare team as a Healthcare Assistant at HMP Fosse Way, a modern, busy male prison.",
    description: [
      "HMP Fosse Way opened in May 2023. Its state of the art design and facilities offer a secure environment to provide skills and qualifications to the men, enabling them to secure meaningful employment on release with the aim of reducing reoffending rates.",
      "HMP Fosse Way is a busy male prison with a capacity for up to 1900 inmates. The site offers free parking and an on site gym. PPG Health In Justice is recruiting Healthcare Assistants to support the wider healthcare team."
    ],
    requirements: [
      "NVQ level 2/3 or equivalent in Health and Social Care",
      "Experience within a healthcare assistant role, ideally within a hospital, community or prison environment",
      "A non-judgmental and compassionate approach",
      "Excellent communication skills",
      "Good IT skills and IT literacy",
      "Ability to work within a busy environment",
      "Ability to work unsupervised whilst following policy and procedures",
      "Legal right to work in the UK",
      "Offers of employment are subject to additional vetting and security checks, due to the nature of the role"
    ],
    sections: [
      {
        heading: "Salary",
        paragraphs: [
          "This position is full time, with an annual salary of up to £29,723 per annum."
        ]
      },
      {
        heading: "Hours",
        bullets: [
          "Full time: 37.5 hours per week",
          "The service runs over a 24 hour period",
          "Working 3 shifts per week, however on the 8th week you will do 4 shifts to make 37.5 hours per week",
          "1 in 3 weekends",
          "0700 - 2000 / 1 in 3 weekends",
          "No routine night shifts, but you may need to cover at times when asked"
        ]
      },
      {
        heading: "What you will be doing",
        paragraphs: [
          "As a Healthcare Assistant, your responsibilities will vary. You will:"
        ],
        bullets: [
          "Support the registered nurse in implementing an agreed plan of care in association with the patient and in accordance with instructions and training received whilst promoting safe patient care",
          "Be willing to develop and apply new skills to maintain and enhance clinical service delivery"
        ]
      },
      {
        heading: "What the employer looks for in you",
        paragraphs: [
          "Practice Plus Group is looking for caring, compassionate but also driven professionals who can help drive its vision for fair and inclusive healthcare access to all.",
          "Practice Plus Group's purpose is to \"Unlock your best work life\", and its core values are:"
        ],
        bullets: [
          "Treat patients and each other as you would like to be treated",
          "Act with integrity",
          "Embrace diversity",
          "Strive to do things better together"
        ]
      },
      {
        heading: "How you will be supported",
        bullets: [
          "Bespoke induction, including the Introducing Health in Justice training course",
          "Competency framework",
          "Regional and national career development opportunities",
          "A bespoke Learning Management System to address your learning needs",
          "Support from the wider team"
        ],
        paragraphs: [
          "If you are interested in career development, there is a wide range of opportunities to develop your skills and experience, including both internal and external options for development and learning."
        ]
      },
      {
        heading: "What else is on offer",
        bullets: [
          "Discounts on shopping and leisure activities",
          "Colleagues working at HMP Fosse Way have the added benefits of free parking, free lunches and a free gym membership",
          "Support to grow in your role and continue your professional development",
          "24/7 employee assistance helpline and financial assistance when you need it"
        ]
      },
      {
        heading: "About Practice Plus Group",
        paragraphs: [
          "The Health in Justice team at Practice Plus Group makes a real difference across over 53 prisons, young offenders and immigration removal centres. Practice Plus Group is the UK's leading independent provider of NHS services to over 40,000 patients in secure environments, always putting their needs first, regardless of their background.",
          "Secure environments are one of the most challenging, yet rewarding places for healthcare professionals to work. If you're looking for a role where you can develop your existing healthcare skills and learn something new every day in an environment that never stands still, then this could be the opportunity for you."
        ]
      }
    ],
    applyUrl: "https://apply.practiceplushij.com/vacancies/14996/healthcare-assistant.html"
  },
  {
    id: "healthcare-assistant-edinburgh",
    title: "Healthcare Assistant",
    company: "MCS Healthcare",
    location: "Edinburgh",
    type: "Full time, part time or flexible (zero-hour)",
    salary: "£17.00 per hour",
    posted: "15 September 2026",
    summary: "Provide community care with dignity and compassion, paid for every minute you work, with flexible shifts.",
    description: [
      "Are you a compassionate, experienced healthcare assistant looking for a role where your work really matters and your time is truly valued?",
      "MCS Healthcare is a CQC-regulated provider supporting people in the community, from those with everyday needs to individuals requiring more complex care. Great care only happens when the team is looked after just as much as the clients."
    ],
    requirements: [
      "A Care Certificate or NVQ in Health & Social Care",
      "At least 1 year of care experience",
      "A full UK driving licence",
      "Safeguarding Level 2 or 3",
      "A DBS registered on the Update Service",
      "Valid Manual Handling & Basic Life Support training"
    ],
    sections: [
      {
        heading: "Pay and shifts",
        bullets: [
          "Pay: £17.00 per hour",
          "Job types: full time, part time or flexible zero-hour contracts",
          "Shifts: 09:00 - 21:00"
        ]
      },
      {
        heading: "What you will be doing",
        bullets: [
          "Administering medication",
          "Catheter care",
          "Monitoring health observations",
          "Managing epilepsy and other complex needs",
          "Providing reassurance, dignity, and emotional support every step of the way"
        ]
      },
      {
        heading: "Why join MCS Healthcare?",
        paragraphs: [
          "Care work can be demanding, but also deeply rewarding. MCS Healthcare has built a supportive, respectful environment where you're paid for every minute you work, trained to succeed, and recognised for your commitment.",
          "What is on offer:"
        ],
        bullets: [
          "Excellent pay: £17.00 per hour",
          "Paid induction and sign-offs, so your time is valued from the very beginning",
          "Ongoing training and development, whether you're brushing up or branching out",
          "Recognition that matters: from 'Employee of the Month' to Long Service Awards, your dedication won't go unnoticed",
          "Shifts that fit your life: days, nights, weekdays, weekends, you decide what works for you",
          "Refer a friend bonus scheme for both Nurses and Healthcare Assistant positions"
        ]
      }
    ],
    applyUrl: "https://www.mcshealthcare.co.uk/job/healthcare-assistant-6030110/apply"
  },
  {
    id: "support-worker-st-austell",
    title: "Support Worker",
    company: "Hft",
    location: "St Austell, Cornwall",
    type: "24 hours per week",
    salary: "£13.45 (24 hours per week)",
    posted: "7 October 2026",
    summary: "Support learning disabled adults to live life their way as a Support Worker at Trelowen in St Austell.",
    description: [
      "Hft is a leading social care provider that stands alongside learning disabled adults, empowering them to live life their way. As a Support Worker, you'll play a vital role in enabling people to achieve their goals, grow in confidence, and live fulfilling lives. Every day, you'll stand alongside people to keep them active, connected, and in control of their own life.",
      "You're passionate about standing alongside learning disabled adults and supporting them to live life their way."
    ],
    requirements: [
      "Patience, supportiveness, and respect for people's choices",
      "A positive, encouraging approach that celebrates achievement",
      "Strong communication skills to build trusting relationships",
      "Willingness to learn and work towards a Health and Social Care qualification",
      "Confidence providing personal support when it's needed",
      "Flexibility to work evenings, weekends, waking and sleep-in shifts",
      "Experience in social care is welcome but not essential; your attitude and values matter most",
      "A satisfactory DBS and background checks"
    ],
    sections: [
      {
        heading: "Role details",
        bullets: [
          "Location: St Austell, Cornwall",
          "Department: Trelowen",
          "Division: Care & Support - West",
          "Hours per week: 24"
        ]
      },
      {
        heading: "What you will be doing",
        paragraphs: [
          "Every day is different, but your role focuses on empowering independence, choice, and dignity:"
        ],
        bullets: [
          "Enable people to make their own choices and live life in a way that feels right for them",
          "Encourage participation in social, leisure, work, and community activities that bring connection and enjoyment",
          "Promote health, safety, and wellbeing while respecting people's decisions",
          "Support people to attend health appointments and manage medication confidently",
          "Build independence step by step, so people gain new skills and self-belief",
          "Stand alongside people to manage daily life with confidence, including personal care when needed",
          "Keep accurate records and follow safeguarding practices to ensure everyone is safe and supported"
        ]
      },
      {
        heading: "Life at Hft",
        paragraphs: [
          "Joining Hft means becoming part of a warm, inclusive team that values both your wellbeing and the impact you make. Hft believes every learning disabled adult should have the chance to live the best life possible, and that begins with supporting its colleagues.",
          "Its values guide everything it does: diverse and inclusive, kind and compassionate, positive and solution-focused, and visionary about what the best life possible can look like. Here, your work has real purpose. You'll be part of a welcoming team that values what you bring, supports your growth, and ensures you feel included and appreciated every step of the way."
        ]
      },
      {
        heading: "What is on offer",
        bullets: [
          "A role with real impact, where your work empowers others",
          "A warm, supportive, and inclusive team culture",
          "33 days' annual leave (including bank holidays)",
          "Access to award-winning training and career development",
          "Flexible pay options via Wagestream",
          "Wellbeing support including Digital GP, counselling, and mental health services",
          "Discounts on mobiles, life assurance, and referral rewards",
          "Family-friendly policies and return-to-work bonuses"
        ],
        paragraphs: [
          "If this sounds like the kind of role where you can thrive, Hft would love to hear from you. Apply today and play a vital role in empowering learning disabled adults to live the life they choose."
        ]
      },
      {
        heading: "Accessibility and background checks",
        paragraphs: [
          "Hft believes everyone should have the support they need to succeed. If you require any reasonable adjustments during the application process or in the role itself, Hft, proudly a Disability Confident Employer, is committed to ensuring disabled people can apply, succeed, and thrive.",
          "To keep the people it supports safe, this role requires a satisfactory DBS and background checks. Hft will guide you through the process."
        ]
      }
    ],
    applyUrl: "https://hft.jobtrain.co.uk/DecideInternalExternal/DecideInternalExternal?JobId=744"
  },
  {
    id: "health-wellbeing-support-worker-swansea",
    title: "Health and Wellbeing Support Worker",
    company: "Moorland Nursing Home",
    location: "Waunarlwydd, Swansea",
    type: "Full time or part time, permanent",
    salary: "£13.77 - £15.56 per hour",
    posted: "7 October 2026",
    summary: "Join the team at Moorland Nursing Home supporting people with mental health and complex needs.",
    description: [
      "Moorland Nursing Home is looking to recruit enthusiastic and dedicated Health and Wellbeing Support Workers to join the team at its home in Waunarlwydd, Swansea.",
      "Moorland Nursing Home provides exceptional standards of care for people with mental health and complex needs. There has been significant investment made to make changes to the building and layout, which positively impacts the environment to live and work in.",
      "Do you want to work as part of a team that provides quality service user-centred care? Do you thrive on supporting people on their recovery and to live a fulfilled life? Then the team at Moorland invites you to apply."
    ],
    requirements: [
      "Previous experience in a care home setting is preferred (1 year preferred)",
      "Ability to communicate effectively in English (essential)",
      "A compassionate and caring attitude towards service user care",
      "GCSE or equivalent (preferred)",
      "Weekend availability (essential)"
    ],
    sections: [
      {
        heading: "What you will be doing",
        bullets: [
          "Communicate effectively with service users, families, and healthcare professionals",
          "Assist with personal care tasks, including bathing, grooming, and assisting with nutritional needs",
          "Support service users with mobility and physical therapy exercises",
          "Maintain accurate records of service user care activities",
          "Collaborate with healthcare professionals to develop and implement care plans",
          "Provide companionship and emotional support to service users"
        ]
      },
      {
        heading: "Schedule",
        bullets: [
          "Day shift",
          "Night shift",
          "Overtime available",
          "Weekend availability essential"
        ]
      },
      {
        heading: "Pay and benefits",
        bullets: [
          "Pay: £13.77 - £15.56 per hour, depending on qualifications and experience",
          "Competitive pay rate: £24,242.40 - £36,541.44 per annum",
          "Company pension",
          "Onsite free parking",
          "Ongoing training and support",
          "Excellent progression opportunities",
          "Refer a friend scheme"
        ],
        paragraphs: [
          "Joining the team as a Health and Wellbeing Support Worker offers the opportunity to make a real difference to the lives of service users while gaining valuable experience in the healthcare field."
        ]
      }
    ],
    applyUrl: "https://uk.indeed.com/job/health-and-well-being-support-worker-02e86eda5000d2e2"
  },
  {
    id: "clinical-lead-nurse-workington",
    title: "Clinical Lead Nurse",
    company: "Elysium Healthcare",
    location: "Workington",
    type: "Full time",
    salary: "£44,183 per year",
    posted: "29 September 2026",
    summary: "Lead nursing and clinical strategy at Gregory House, a specialist secure mental health service in Workington.",
    description: [
      "Are you an experienced Registered Mental Health Nurse wanting to work in an environment where kindness and teamwork is integral? Where you'll be invested in, with opportunities to develop and grow your career to achieve your goals? Then join the team at Gregory House as a Clinical Lead Nurse and come and experience what delivering great healthcare should feel like.",
      "You will support senior clinical leadership to inform the development of a clear strategy to engage, and co-produce transformation plans with service users / carers / significant others in the design, delivery and optimisation of new pathways to support timely transition to community services as well as avoiding unnecessary admission to secure services.",
      "As the Senior Clinical Nurse, you will be innovative in your thinking with a passion for clinical excellence, both influencing and co-producing strategies that address identified areas for improvement. You will support the secure service whilst working with partners across other pathways and systems to create a vision for transformation across the 'whole pathway'; a pathway that reflects the life of the people using services, along with their families, carers and significant others.",
      "Your career at Elysium will be rewarding and fulfilled, where you can take pride in knowing that you've made a difference. While you're caring for service users, improving their lives and looking out for your colleagues, we'll be looking after you. With wellbeing support and activities to support your mental health, a range of benefits that can save you money and make a difference, and development to nurture your career."
    ],
    requirements: [
      "Registered Nurse RMN/RMNH",
      "3 years' post qualification experience",
      "2 years' operational experience",
      "Management at senior level"
    ],
    sections: [
      {
        heading: "What you will be doing",
        bullets: [
          "Provide support to the leadership initiatives in the delivery of highest quality care for people in secure care.",
          "Ensure systems are designed, implemented and monitored to ensure both efficient financial and clinical performance.",
          "Support the development of standards for nursing services, reflecting and positively promoting nursing practice.",
          "Support in areas of clinical governance from a nursing perspective."
        ]
      },
      {
        heading: "Where you will be working",
        paragraphs: [
          "Location: Furness Road, Workington, Cumbria, United Kingdom, CA14 3PD",
          "Gregory House provides a specialist provision with enhanced levels of support which allows people with continuing challenging behaviour and high support needs to be cared for in the least restrictive setting possible, but within a service which is robust and structured enough to meet their ongoing needs and risks.",
          "The service ensures people lead good and meaningful everyday lives, where they have choice and control, accessing mainstream services and facilities, engaging in work and training, in leisure opportunities, hobbies and areas of personal interest. Gregory House encourages people to be as independent as possible with the long-term aim of people moving onto a more independent living setting."
        ]
      },
      {
        heading: "What you will get",
        paragraphs: [
          "At Elysium Healthcare, we believe in taking care of the people who care for others. You'll enjoy a comprehensive benefits package designed to support your wellbeing, growth, and future:"
        ],
        bullets: [
          "Annual base salary of £44,183",
          "The equivalent of 33 days annual leave (including bank holidays), plus your birthday off and the option to buy additional annual leave in the annual selection window",
          "Career development and training to help you achieve your professional goals",
          "Access to the Rewards & Benefits platform Ely-Vate: everyday savings, exclusive benefits and a wellbeing hub",
          "Wellbeing support and activities to help you maintain a healthy work-life balance",
          "Access to the Blue Light Card, which provides a range of exclusive offers and discounts",
          "Life Assurance, for added peace of mind",
          "Stream: instant access to earned wages when you need it, plus the option to save directly from your wages, alongside financial wellbeing support",
          "24/7 GP service and second medical opinion",
          "Enhanced Maternity Package",
          "Pension contribution, to help secure your future",
          "Subsidised meals and onsite free parking"
        ]
      },
      {
        heading: "About your next employer",
        paragraphs: [
          "Elysium Healthcare has over 8,000 employees and a unique approach to the delivery of care. With a network of over 80 services across England and Wales covering Mental Health, Neurological, Learning Disabilities & Autism, Children & Education, there is opportunity for you to grow and move.",
          "Elysium Healthcare is part of Ramsay Health Care with a global network that extends across 10 countries and employs over 86,000 people globally.",
          "Elysium Healthcare follows safer recruitment of staff for all appointments and is a Disability Confident employer, committed to inclusive and accessible recruitment. It is a requirement that all staff understand it is each person's individual responsibility to promote and safeguard the welfare of service users. All candidates will be subject to a DBS disclosure."
        ]
      }
    ],
    applyUrl: "https://www.elysiumhealthcare.co.uk/careers/vacancies/16918/clinical-lead-nurse.html"
  }
];
