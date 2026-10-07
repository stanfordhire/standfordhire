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

   Long jobs: put each paragraph on ONE line inside quotes.
   Never press Enter in the middle of a quoted line.
   Extra headings go in "sections" (see the last job).
   ========================================================== */

const JOBS = [
  {
    id: "site-supervisor-manchester",
    title: "Site Supervisor",
    company: "Example Construction Ltd",
    location: "Manchester",
    type: "Full time",
    salary: "£35,000 - £42,000 per year",
    posted: "2 October 2026",
    summary: "Lead a small team on residential building sites and keep projects on schedule and safe.",
    description: [
      "Example Construction Ltd is looking for an experienced Site Supervisor to manage day-to-day work on residential projects across Greater Manchester.",
      "You will coordinate trades, check the quality of work, and make sure health and safety standards are followed on every site."
    ],
    requirements: [
      "Previous experience supervising on a construction site",
      "SSSTS or SMSTS certificate (or willingness to obtain one)",
      "Good communication and organisation skills",
      "Full UK driving licence"
    ],
    applyUrl: "https://example.com/apply/site-supervisor"
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
    id: "care-assistant-leeds",
    title: "Care Assistant",
    company: "Example Care Group",
    location: "Leeds",
    type: "Part time",
    salary: "£12.50 per hour",
    posted: "1 October 2026",
    summary: "Support residents with daily living in a warm, well-run care home.",
    description: [
      "Example Care Group is recruiting Care Assistants for its home in Leeds. Shifts are flexible and include weekends.",
      "You will help residents with personal care, meals and activities, and treat everyone with dignity and respect."
    ],
    requirements: [
      "Caring, patient and reliable",
      "Previous care experience is helpful but not essential",
      "Enhanced DBS check (arranged by the employer)",
      "Right to work in the UK"
    ],
    applyUrl: "https://example.com/apply/care-assistant"
  },
  {
    id: "customer-service-birmingham",
    title: "Customer Service Advisor",
    company: "Example Retail Co",
    location: "Birmingham",
    type: "Full time",
    salary: "£24,000 - £27,000 per year",
    posted: "30 September 2026",
    summary: "Help customers by phone and email and make sure every query is resolved.",
    description: [
      "Example Retail Co needs a Customer Service Advisor to join its busy support team in Birmingham.",
      "You will answer customer questions, resolve orders and returns, and keep clear records of every conversation."
    ],
    requirements: [
      "Clear, friendly communication",
      "Comfortable using computers and email",
      "Previous customer service experience preferred",
      "Available Monday to Friday"
    ],
    applyUrl: "https://example.com/apply/customer-service"
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
