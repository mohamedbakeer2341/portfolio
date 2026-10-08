# ⚡ Mohamed Bakeer — Backend Developer Portfolio

An interactive, high-performance web portfolio showcasing **Backend Architecture**, **Scalable API Design**, **Multi-Tenant Systems**, and **Asynchronous Data Processing Pipelines**. Designed with a modern dark terminal aesthetic, dynamic micro-interactions, and visual architecture flowcharts.

---

## 🌟 Key Features

* **🛠️ Interactive Architecture Explorer**: Step-by-step visual walk-throughs for backend systems:
  * **Database-per-Tenant Isolation**: Multi-tenant data segregation with dynamic connection switching.
  * **Dynamic Workflow Engine**: Dynamic forms, multi-step approval lifecycles, and RBAC bitmask validation.
  * **Async Task Pipelines**: Non-blocking request lifecycles powered by Celery worker queues and Redis.
* **⚡ Live System Telemetry Bar**: Dynamic backend status monitor displaying connection state, latency metrics, and database engine parameters.
* **📂 Deep-Dive Project Showcase**: Interactive modal cards with detailed system architectures, challenges, solutions, and key metrics.
* **💼 Work Experience & Career Timeline**: Structured technical logs highlighting contributions at **Areeb Technology** and **Pschola**.
* **🎯 Engineering Philosophy**: Core backend engineering principles focused on data integrity, explicit API contracts, and defensive system design.
* **🎨 Modern Terminal Aesthetics**: Built with `JetBrains Mono` and `Plus Jakarta Sans`, sleek glassmorphic UI elements, and custom CSS variables.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 18](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Build Tool & Dev Server** | [Vite 5](https://vitejs.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling** | Custom CSS3 (CSS Variables, Flexbox/Grid, Glassmorphism, Responsive UI) |

---

## 📁 Project Structure

```text
Portfolio/
├── index.html              # HTML5 template with SEO metadata & JSON-LD schema
├── package.json            # Dependencies & scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite build configuration
├── css/                    # Static CSS assets
├── src/
│   ├── main.tsx            # Application entrypoint
│   ├── App.tsx             # Root component with modal management
│   ├── index.css           # Global design system & theme tokens
│   ├── components/         # Modular React UI components
│   │   ├── Navbar.tsx               # Navigation header & live status badge
│   │   ├── Hero.tsx                 # Hero banner & terminal action buttons
│   │   ├── TelemetryBar.tsx         # Real-time telemetry status monitor
│   │   ├── ArchitectureExplorer.tsx # Visual backend flow explorer
│   │   ├── Projects.tsx             # Featured projects grid
│   │   ├── ProjectModal.tsx         # Detailed project view modal
│   │   ├── Experience.tsx           # Work history & technical highlights
│   │   ├── Skills.tsx               # Skills matrix & tech breakdown
│   │   ├── Philosophy.tsx           # Core engineering principles
│   │   ├── Timeline.tsx             # Milestone & career timeline
│   │   ├── Contact.tsx              # Contact section & direct links
│   │   └── Footer.tsx               # Footer with links & copyright
│   ├── data/
│   │   └── portfolioData.ts # Data source for profile, projects & experience
│   └── types/
│       └── index.ts         # TypeScript interfaces & types
└── dist/                   # Production build artifact output
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.0 or higher) and `npm` installed.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mohamedbakeer2341/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## ⚙️ Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Compiles TypeScript and builds production assets into `dist/`. |
| `npm run preview` | Serves the production build locally for previewing. |

---

## 🎨 Customization

To update personal details, work history, projects, or skills, edit [src/data/portfolioData.ts](file:///c:/Users/Lenovo/Desktop/Portfolio/src/data/portfolioData.ts):

* **Personal Info**: Update `personalInfo` object (name, title, contact info, bio).
* **Work Experience**: Add or edit items in `workExperience`.
* **Projects**: Update `projects` array with new architecture breakdowns.
* **Skills**: Modify categories in `skillsData`.

---

## 📫 Contact & Links

* **Developer**: Mohamed Bakeer
* **Role**: Backend Developer
* **Location**: Cairo, Egypt
* **Email**: [mohamedbakeer2341@gmail.com](mailto:mohamedbakeer2341@gmail.com)
* **GitHub**: [github.com/mohamedbakeer2341](https://github.com/mohamedbakeer2341)
* **LinkedIn**: [linkedin.com](https://linkedin.com)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).