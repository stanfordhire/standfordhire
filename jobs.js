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
    id: "Clinical-Lead-Nurse-Workington",
    title: "Clinical Lead Nurse",
    company: "Elysium Healthcare",
    location: "Workington",
    type: "Full time",
    salary: "£44,183 per Annual Salary",
    posted: "29 September 2026",
    summary: "Pick, pack and load orders in a modern warehouse with early and late shifts.",
    description: [
      "Are you an experienced Registered Mental Health Nurse wanting to work in an environment where kindness and teamwork is integral? Where you'll be invested in, with opportunities to develop and grow your career to achieve your goals? Then join the team at Gregory House as a Clinical Lead Nurse and come and experience what delivering great healthcare should feel like. 

You will support senior clinical leadership to inform the development of a clear strategy to engage, and co-produce transformation plans with service users/ carers / significant others in the design, delivery and optimisation of new pathways to support timely transition to community services as well as avoiding unnecessary admission to secure services.
As the Senior Clinical Nurse, you will be innovative in your thinking with a passion for clinical excellence, both influencing and co-producing strategies that address identified areas for improvement.  You will support the secure service whilst working with partners across other pathways and systems to create a vision for transformation across the ‘whole pathway’; a pathway that reflects the life of the people using services, along with their families, carers and significant others.
Your career at Elysium will be rewarding and fulfilled, where you can take pride in knowing that you've made a difference. While you're caring for service users, improving their lives and looking out for your colleagues, we'll be looking after you. With Wellbeing support and activities to support your mental health, a range of benefits that can save you money and make a difference, and development to nurture your career. ",
      
   "What you will be doing:
Provide support to the leadership initiatives in the delivery of highest quality care for people in secure care.
To ensure systems are designed, implemented and monitored to ensure both efficient financial and clinical performance.
To support the development of standards for nursing services, reflecting and positively promoting nursing practice.
To support in areas of clinical governance from a nursing perspective."
    ],
    requirements: [
      "Able to lift and move items safely",
      "Reliable timekeeping",
      "Forklift licence is an advantage but not required",
      "Right to work in the UK"
    ],
    applyUrl: "https://www.elysiumhealthcare.co.uk/careers/vacancies/16918/clinical-lead-nurse.html"
  }
];
