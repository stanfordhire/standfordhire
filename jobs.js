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
    id: "junior-developer-london",
    title: "Junior Web Developer",
    company: "Example Digital Studio",
    location: "London (hybrid)",
    type: "Full time",
    salary: "£30,000 - £36,000 per year",
    posted: "2 October 2026",
    summary: "Join a friendly team building websites for local businesses and learn on the job.",
    description: [
      "Example Digital Studio is hiring a Junior Web Developer to help build and maintain client websites.",
      "You will work with senior developers, take on real projects from week one, and get regular training."
    ],
    requirements: [
      "Knowledge of HTML, CSS and JavaScript",
      "A portfolio or personal projects you can show us",
      "Willingness to learn and take feedback",
      "Able to work in London two days a week"
    ],
    applyUrl: "https://example.com/apply/junior-developer"
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
