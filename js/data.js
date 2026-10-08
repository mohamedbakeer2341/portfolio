/**
 * Mohamed Bakeer — Portfolio Data Store
 * All data strictly adheres to verified professional history and engineering work.
 */

export const personalInfo = {
  name: "Mohamed Bakeer",
  title: "Backend Developer",
  location: "Cairo, Egypt",
  email: "mohamedbakeer2341@gmail.com",
  phone: "+201093263533",
  github: "https://github.com/mohamedbakeer2341",
  linkedin: "https://linkedin.com",
  status: "Available for Backend Roles",
  tagline: "Backend engineering focused on scalable architecture, reliable APIs, and maintainable systems.",
  summary: "Backend developer skilled in designing and delivering scalable, secure, and maintainable systems. Experienced in building RESTful APIs, integrating databases, and optimizing performance for large-scale applications. Passionate about clean architecture, automation, and backend reliability."
};

export const workExperience = [
  {
    id: "areeb",
    role: "Backend Developer",
    company: "Areeb Technology",
    period: "July 2025 – August 2026",
    badge: "Recent / Core Role",
    featured: true,
    summary: "Architected and maintained multi-tenant backend services, financial data integrity systems, and dynamic workflow engines.",
    highlights: [
      {
        title: "Database-per-Tenant Architecture",
        desc: "Engineered backend services utilizing a database-per-tenant architecture to physically isolate customer data, ensuring complete organizational data privacy and zero cross-tenant contamination."
      },
      {
        title: "Hierarchical Budget Trees & Event Observers",
        desc: "Maintained hierarchical budget structures using event observers to preserve financial data integrity, ensuring that ledger adjustments at lower nodes reliably reconcile parent aggregates."
      },
      {
        title: "Dual-Layer Access Control (RBAC + Bitmasks)",
        desc: "Extended and optimized a dual-layer permission system combining conventional role-based access control (RBAC) with custom bitmask permissions for high-performance, fine-grained privilege evaluation."
      },
      {
        title: "Dynamic Workflow Engine",
        desc: "Developed and maintained a custom backend workflow engine integrated with a dynamic form builder, powering multi-step approval lifecycles across diverse enterprise schemas."
      },
      {
        title: "Multi-Step Approval Workflows",
        desc: "Engineered support for custom dynamic fields, calculated values, conditional field visibility, step rewinds, and strict SLA tracking within workflow transitions."
      }
    ],
    technologies: [
      "Multi-Tenant Architecture",
      "Database-per-Tenant",
      "Event Observers",
      "RBAC & Bitmasks",
      "Dynamic Workflow Engines",
      "Relational Databases",
      "RESTful APIs"
    ]
  },
  {
    id: "pschola",
    role: "Backend Developer",
    company: "Pschola",
    period: "January 2025 – June 2025",
    badge: "Asynchronous Systems & Cloud",
    featured: true,
    summary: "Built high-throughput backend APIs, asynchronous background job pipelines, and cloud-integrated infrastructure.",
    highlights: [
      {
        title: "Core API Architecture",
        desc: "Built scalable backend RESTful APIs powering user authentication, real-time chat, session scheduling, and activity tracking."
      },
      {
        title: "Asynchronous Background Processing",
        desc: "Implemented background task execution and scheduled recurring cron jobs using Celery and Redis to offload time-consuming tasks from the main request thread."
      },
      {
        title: "Non-Blocking API Performance",
        desc: "Designed processing pipelines ensuring heavy operations (e.g. notifications, media encoding) execute asynchronously without blocking critical user API responses."
      },
      {
        title: "AWS Cloud & Storage Integration",
        desc: "Integrated AWS S3 for secure media storage and provisioned application services on AWS EC2 compute instances."
      },
      {
        title: "Dockerized Environments",
        desc: "Utilized Docker containers to ensure consistent local development environments and dependable production deployments."
      }
    ],
    technologies: [
      "Python",
      "Celery",
      "Redis",
      "AWS EC2",
      "AWS S3",
      "Docker",
      "WebSockets",
      "RESTful APIs"
    ]
  },
  {
    id: "zad",
    role: "Odoo Developer Intern",
    company: "Zad Solutions",
    period: "May 2025 – June 2025",
    badge: "Internship",
    featured: false,
    summary: "Extended Odoo business modules, customized relational data models, and implemented custom backend logic.",
    highlights: [
      {
        title: "Data Models & ORM Customization",
        desc: "Customized Odoo business modules and data models, extending default behavior to match domain workflows."
      },
      {
        title: "PostgreSQL & Python Integration",
        desc: "Wrote and optimized relational PostgreSQL queries utilizing Python and Odoo's ORM layer."
      },
      {
        title: "Online Courses Module (Odoo 17)",
        desc: "Developed a custom Odoo 17 Online Courses module, extending base models and implementing business logic, permissions, and administrative workflows."
      }
    ],
    technologies: [
      "Python",
      "Odoo 17",
      "PostgreSQL",
      "ORM",
      "Business Logic"
    ]
  }
];

export const education = {
  degree: "Bachelor’s in Computer Science",
  faculty: "Faculty of Computers and Information",
  institution: "Higher Technological Institute",
  year: "2024",
  badge: "Graduated"
};

export const skillsCategories = [
  {
    category: "Languages",
    description: "Core programming and query languages used for backend services and data manipulation.",
    skills: [
      { name: "JavaScript", tag: "Runtime/Web" },
      { name: "TypeScript", tag: "Static Typing" },
      { name: "C#", tag: "Enterprise/OOP" },
      { name: "Python", tag: "Async/Services" },
      { name: "PHP", tag: "Web/Backends" },
      { name: "SQL", tag: "Relational Queries" }
    ]
  },
  {
    category: "Frameworks & Libraries",
    description: "Server-side web frameworks and runtime environments powering backend services.",
    skills: [
      { name: "Node.js", tag: "Event Loop / Runtime" },
      { name: "Express.js", tag: "REST APIs" },
      { name: "NestJS", tag: "TypeScript / Architecture" },
      { name: "Django", tag: "Python Framework" },
      { name: ".NET Core", tag: "High-Performance APIs" },
      { name: "Laravel", tag: "PHP Framework" }
    ]
  },
  {
    category: "Databases & ORMs",
    description: "Relational, document, and key-value persistence engines with ORM abstractions.",
    skills: [
      { name: "PostgreSQL", tag: "Relational / ACID" },
      { name: "MySQL", tag: "Relational Engine" },
      { name: "MongoDB", tag: "Document Store" },
      { name: "SQL Server", tag: "Enterprise RDBMS" },
      { name: "Redis", tag: "In-Memory Caching & Queues" },
      { name: "Prisma", tag: "Type-Safe ORM" },
      { name: "Mongoose", tag: "MongoDB Modeling" },
      { name: "Eloquent", tag: "PHP ORM" },
      { name: "Entity Framework Core", tag: ".NET ORM" },
      { name: "Django ORM", tag: "Python ORM" }
    ]
  },
  {
    category: "Architecture & Concepts",
    description: "Structural patterns, system design fundamentals, and security protocols.",
    skills: [
      { name: "Multi-Tenant Architecture", tag: "SaaS Isolation" },
      { name: "Database-per-Tenant", tag: "Data Security" },
      { name: "Event-Driven Architecture", tag: "Decoupling" },
      { name: "RESTful APIs", tag: "Contract Design" },
      { name: "Object-Oriented Programming", tag: "SOLID" },
      { name: "Caching", tag: "Redis / In-Memory" },
      { name: "Queues", tag: "Job Pipelines" },
      { name: "JWT", tag: "Stateless Auth" },
      { name: "OAuth 2.0", tag: "Federated Auth" },
      { name: "RBAC", tag: "Role Permissions" },
      { name: "Background Jobs", tag: "Workers" },
      { name: "Task Scheduling", tag: "Cron / Delayed" },
      { name: "Rate Limiting", tag: "Traffic Control" },
      { name: "WebSockets", tag: "Real-Time Comms" },
      { name: "Agile", tag: "Sprint Delivery" }
    ]
  },
  {
    category: "Cloud & DevOps",
    description: "Cloud infrastructure providers, containerization, and deployment pipelines.",
    skills: [
      { name: "AWS EC2", tag: "Compute Instances" },
      { name: "AWS S3", tag: "Object Storage" },
      { name: "AWS RDS", tag: "Managed Databases" },
      { name: "AWS Route 53", tag: "DNS & Routing" },
      { name: "Azure", tag: "Cloud Services" },
      { name: "Docker", tag: "Containerization" },
      { name: "Git", tag: "Version Control" },
      { name: "CI/CD", tag: "Automated Pipelines" }
    ]
  },
  {
    category: "Testing",
    description: "Validation suites ensuring system reliability and regression prevention.",
    skills: [
      { name: "Unit Testing", tag: "Component Level" },
      { name: "Integration Testing", tag: "API & DB Verification" }
    ]
  }
];

export const projects = [
  {
    id: "booking-app",
    title: "EventBooker — Booking App",
    badge: "Full-Stack & Containerized",
    featured: true,
    tagline: "Event discovery, booking, and administrative management platform with containerized backend services.",
    shortDesc: "A full-stack web application for discovering, booking, and managing events. Features JWT authentication, role management, full administrative CRUD operations, Swagger API documentation, and Docker Compose orchestration.",
    github: "https://github.com/mohamedbakeer2341/Booking-App",
    liveDemo: "https://event-booker-frontend.vercel.app/",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Swagger/OpenAPI",
      "Docker",
      "Docker Compose",
      "React",
      "Redux",
      "Ant Design",
      "Axios",
      "React Router"
    ],
    architectureHighlights: [
      "Separation between stateless REST API endpoints and stateful persistence",
      "JWT token generation, signature validation, and payload authorization guards",
      "Containerized service definitions via Docker and multi-container Docker Compose",
      "Auto-generated OpenAPI / Swagger documentation for endpoints"
    ],
    verifiedFeatures: [
      "JWT-based user authentication (secure sign-up and sign-in flows)",
      "Public event catalog with search, filtering, and detail inspection",
      "Booking lifecycle management with user reservation records",
      "User profile dashboard and password update workflows",
      "Dedicated admin panel with complete Event CRUD controls",
      "Admin user management and centralized booking administration",
      "Responsive user interface supporting light and dark themes",
      "Docker Compose setup for unified service containerization"
    ],
    engineeringFocus: "Demonstrates complete API lifecycle implementation: schema validation, secured endpoints, database modeling in MongoDB, containerization with Docker, and end-to-end integration with a decoupled client application."
  },
  {
    id: "company-manager",
    title: "CompanyManager MVC",
    badge: "Layered Architecture (.NET)",
    featured: true,
    tagline: "Enterprise management system implementing strict layered architecture and separation of concerns.",
    shortDesc: "A backend-oriented business management application built with .NET and C#, demonstrating clean architecture by isolating business logic, data access, and presentation into separate architectural projects.",
    github: "https://github.com/mohamedbakeer2341/CompanyManager-MVC",
    liveDemo: null,
    technologies: [
      "C#",
      ".NET Core",
      "ASP.NET MVC",
      "Entity Framework Core",
      "SQL Server",
      "Layered Architecture"
    ],
    architectureHighlights: [
      "Company.Demo.BLL (Business Logic Layer): Encapsulates domain logic, service contracts, and validation rules",
      "Company.Demo.DAL (Data Access Layer): Handles EF Core contexts, entity schemas, and database persistence",
      "Company.Demo.PL (Presentation Layer): Manages MVC controllers, view models, and user presentation",
      "Strict dependency direction preventing presentation layers from bypassing business invariants"
    ],
    verifiedFeatures: [
      "Decoupled multi-project .NET solution structure",
      "Entity Framework Core data modeling with relational constraints",
      "Separation of concerns between business validation and database queries",
      "MVC controllers mapping domain models to presentation view models"
    ],
    engineeringFocus: "Exemplifies clean software design in an enterprise framework. By isolating the BLL from DAL and PL, the codebase enforces strict boundaries that make data modifications predictable and testable."
  },
  {
    id: "carify",
    title: "Carify",
    badge: "Deployed Project",
    featured: false,
    tagline: "Automotive platform showcasing dynamic catalog workflows and production cloud deployment.",
    shortDesc: "A deployed automotive web application built for vehicle catalog browsing and client-server interactions, hosted live on Vercel with structured repository versioning.",
    github: "https://github.com/mohamedbakeer2341/carify",
    liveDemo: "https://carify-lilac.vercel.app/",
    technologies: [
      "JavaScript",
      "React",
      "REST APIs",
      "Vercel Deployment",
      "Git"
    ],
    architectureHighlights: [
      "Client-side state management integrated with external API services",
      "Production deployment pipeline configured with Vercel edge infrastructure",
      "Clean component hierarchy and modular styling"
    ],
    verifiedFeatures: [
      "Live production deployment accessible on Vercel",
      "Interactive automotive inventory browsing and view filtering",
      "Dynamic data binding and responsive mobile-first layout",
      "Public GitHub repository with version control history"
    ],
    engineeringFocus: "Validates practical delivery of a deployed, accessible web application, ensuring clean frontend-backend communication and production availability."
  },
  {
    id: "amazon-clone",
    title: "Amazon / E-commerce Clone",
    badge: "E-Commerce System",
    featured: false,
    tagline: "Educational e-commerce backend inspired by Amazon/Noon shopping workflows.",
    shortDesc: "An educational e-commerce application inspired by Amazon/Noon-style shopping experiences. Demonstrates structured backend routing, product data handling, and relational shopping cart logic.",
    github: "https://github.com/mohamedbakeer2341/Amazon-clone",
    liveDemo: null,
    technologies: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Database Integration",
      "Modular Backend Architecture"
    ],
    architectureHighlights: [
      "Modular routing separating products, users, and checkout pipelines",
      "Data modeling for catalog items, categories, and shopping carts",
      "Clean error handling middleware for RESTful API responses"
    ],
    verifiedFeatures: [
      "Product catalog browsing and data querying",
      "Shopping cart data manipulation and state handling",
      "Structured Node.js project layout with modular route controllers",
      "Package management and script configurations"
    ],
    engineeringFocus: "Explores the fundamental operational domains of e-commerce backend engineering, emphasizing product indexing, cart state maintenance, and modular API controllers."
  }
];

export const engineeringPrinciples = [
  {
    number: "01",
    title: "Design for Change",
    summary: "Build systems that can evolve without becoming difficult to maintain.",
    detail: "Decouple presentation, business logic, and data access layers. By establishing clear contract boundaries, domain logic can grow and requirements can shift without causing regressions across unrelated services."
  },
  {
    number: "02",
    title: "Protect Data Integrity",
    summary: "Treat consistency and correctness as first-class backend concerns.",
    detail: "Whether managing relational tables or distributed records, consistency is non-negotiable. Leverage database constraints, atomic transactions, and event observers to ensure financial and state data remains pristine."
  },
  {
    number: "03",
    title: "Keep Systems Reliable",
    summary: "Use appropriate validation, error handling, background processing, and testing.",
    detail: "A reliable backend never lets long-running workloads degrade API responsiveness. Offload intensive jobs to queues, implement strict input validation at the edge, and fail predictably with structured errors."
  },
  {
    number: "04",
    title: "Think Beyond the Endpoint",
    summary: "Consider databases, queues, caching, authorization, infrastructure, and failure scenarios.",
    detail: "An API route is simply an entry point to a wider ecosystem. Robust engineering analyzes query execution plans, cache invalidation, connection pool exhaustion, bitmask permissions, and worker recovery."
  },
  {
    number: "05",
    title: "Build for Scale",
    summary: "Use architecture patterns that allow systems to grow without unnecessary complexity.",
    detail: "Scale is achieved through deliberate choices—such as database-per-tenant isolation and smart caching—rather than premature over-engineering. Maintain simplicity first, scaling components as real demand requires."
  }
];

export const architectureFlows = [
  {
    id: "multi-tenant",
    title: "Database-per-Tenant Isolation",
    context: "Pattern utilized at Areeb Technology",
    description: "Physical data isolation across customer organizations using dynamic connection routing.",
    steps: [
      {
        step: 1,
        actor: "Client Request",
        badge: "HTTP / TLS",
        text: "Incoming request contains tenant identification via subdomain or encrypted header."
      },
      {
        step: 2,
        actor: "Tenant Resolution Middleware",
        badge: "Routing Layer",
        text: "Middleware validates the tenant token, checks operational status, and resolves tenant configuration."
      },
      {
        step: 3,
        actor: "Connection Pool Manager",
        badge: "DB Router",
        text: "Dynamic connection router selects or initializes the dedicated database connection for that specific tenant."
      },
      {
        step: 4,
        actor: "Isolated Tenant Database",
        badge: "Physical Isolation",
        text: "Query executes exclusively within tenant's private database. Zero possibility of cross-tenant data leakage."
      }
    ],
    codeSnippet: `// Dynamic Tenant Connection Resolver (Conceptual)
async function getTenantConnection(tenantId) {
  if (poolCache.has(tenantId)) {
    return poolCache.get(tenantId);
  }
  const tenantConfig = await lookupTenantDbCredentials(tenantId);
  const tenantPool = await createConnectionPool(tenantConfig);
  poolCache.set(tenantId, tenantPool);
  return tenantPool;
}`
  },
  {
    id: "rbac-bitmask",
    title: "Dual-Layer Authorization (RBAC + Bitmasks)",
    context: "Pattern utilized at Areeb Technology",
    description: "Combining high-level roles with high-performance O(1) bitwise permission evaluation.",
    steps: [
      {
        step: 1,
        actor: "Authenticated Request",
        badge: "JWT Bearer",
        text: "Request passes through authentication guard; claims and user identity are unpacked."
      },
      {
        step: 2,
        actor: "Layer 1: Role Verification (RBAC)",
        badge: "Broad Role",
        text: "Verifies high-level role assignment (e.g. Finance Officer, Department Head) to permit access to module."
      },
      {
        step: 3,
        actor: "Layer 2: Bitmask Permission Engine",
        badge: "O(1) Evaluation",
        text: "Evaluates exact granular actions (e.g. APPROVE_REWIND | EDIT_CALCULATED) using bitwise AND operations."
      },
      {
        step: 4,
        actor: "Authorized Execution",
        badge: "Protected Route",
        text: "Action permitted only if both role and bitmask flags satisfy required security thresholds."
      }
    ],
    codeSnippet: `// Bitmask Evaluation (O(1) execution)
const PERMS = {
  READ:             1 << 0, // 00000001
  WRITE:            1 << 1, // 00000010
  APPROVE_STEP:     1 << 2, // 00000100
  REWIND_WORKFLOW:  1 << 3  // 00001000
};

function hasPermission(userBitmask, requiredBit) {
  return (userBitmask & requiredBit) === requiredBit;
}`
  },
  {
    id: "async-pipeline",
    title: "Asynchronous Worker Pipeline (Celery + Redis)",
    context: "Pattern utilized at Pschola",
    description: "Decoupling compute-heavy and I/O tasks to maintain instantaneous API responsiveness.",
    steps: [
      {
        step: 1,
        actor: "API Request Ingest",
        badge: "Fast 202 Accepted",
        text: "User initiates an intensive task (e.g. media upload, report generation, scheduled notification)."
      },
      {
        step: 2,
        actor: "Redis Message Queue",
        badge: "In-Memory Broker",
        text: "API serializes task metadata into a Redis queue job and immediately returns HTTP 202 Accepted to the client."
      },
      {
        step: 3,
        actor: "Celery Worker Pool",
        badge: "Background Execution",
        text: "Autonomous Celery workers poll Redis, acquire job payload, and perform media encoding and AWS S3 upload."
      },
      {
        step: 4,
        actor: "Completion & Persistence",
        badge: "State Sync",
        text: "Worker stores result artifact in AWS S3, records completion status in PostgreSQL, and logs execution telemetry."
      }
    ],
    codeSnippet: `# Celery Asynchronous Task Dispatch
@app.route('/api/media/upload', methods=['POST'])
def handle_media_upload():
    file_metadata = parse_payload(request)
    # Offload heavy work to Celery broker
    task = process_media_task.delay(file_metadata)
    # Non-blocking immediate response
    return jsonify({"status": "queued", "task_id": task.id}), 202`
  },
  {
    id: "event-observers",
    title: "Event Observers & Hierarchical Tree Integrity",
    context: "Pattern utilized at Areeb Technology",
    description: "Preserving financial data integrity across hierarchical budget trees via observer events.",
    steps: [
      {
        step: 1,
        actor: "Line-Item Mutation",
        badge: "Leaf Node Update",
        text: "A line-item expense or budget allocation is modified at the leaf of a hierarchical organizational tree."
      },
      {
        step: 2,
        actor: "Event Observer Dispatch",
        badge: "Observer Hook",
        text: "Domain model emits a BudgetItemUpdated event carrying delta amounts and parent references."
      },
      {
        step: 3,
        actor: "Recursive Tree Recalculation",
        badge: "Integrity Handler",
        text: "Tree integrity handler traverses upwards through parent and department nodes, recalculating aggregates."
      },
      {
        step: 4,
        actor: "Atomic Transaction Commit",
        badge: "ACID Guarantee",
        text: "All parent ledger values commit inside a single atomic database transaction, preventing state desynchronization."
      }
    ],
    codeSnippet: `// Observer Pattern for Hierarchical Rollups
class BudgetItemObserver {
  async onUpdated(event) {
    const { nodeId, deltaAmount, transaction } = event;
    let currentNode = await Node.findById(nodeId, { transaction });
    while (currentNode.parentId) {
      currentNode = await Node.findById(currentNode.parentId, { transaction });
      currentNode.allocatedTotal += deltaAmount;
      await currentNode.save({ transaction });
    }
  }
}`
  }
];

export const careerTimeline = [
  {
    year: "2024",
    title: "Bachelor’s in Computer Science",
    subtitle: "Faculty of Computers and Information — Higher Technological Institute",
    type: "education",
    details: "Built deep theoretical and practical foundations in Data Structures, Relational Database Systems, Operating Systems, Computer Networks, and Object-Oriented Software Design."
  },
  {
    year: "May 2025 – June 2025",
    title: "Odoo Developer Intern",
    subtitle: "Zad Solutions",
    type: "work",
    details: "Extended Odoo business modules, built custom PostgreSQL queries in Python, and developed a complete Online Courses module for Odoo 17."
  },
  {
    year: "Jan 2025 – June 2025",
    title: "Backend Developer",
    subtitle: "Pschola",
    type: "work",
    details: "Built core backend APIs for authentication and real-time chat, engineered Celery & Redis background task pipelines, and integrated AWS S3 and EC2 infrastructure."
  },
  {
    year: "July 2025 – August 2026",
    title: "Backend Developer",
    subtitle: "Areeb Technology",
    type: "work",
    details: "Engineered database-per-tenant services, hierarchical financial budget trees with event observers, dual-layer RBAC + bitmask permissions, and dynamic form-driven workflow engines."
  }
];
