export type ProjectStatus = "Complete" | "In Progress" | "Planned";

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  tags: string[];
  area: "Backend" | "Frontend" | "Full-Stack" | "Embedded" | "AI/ML";
  status: ProjectStatus;
  thumb?: string;
  previewVideo?: string;
  mainVideo?: string;
  links?: { code?: string; demo?: string; paper?: string };
  body: string;
  gallery?: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "crypto-trading-dashboard",
    title: "Real-Time Crypto Trading Dashboard",
    blurb: "Production web application processing 50K+ price updates per minute with <100ms latency, serving 200+ daily active users tracking $2M+ in portfolio value.",
    tags: ["React", "Flask", "WebSocket", "Redis", "PostgreSQL", "AWS EC2", "Docker"],
    area: "Full-Stack",
    status: "Complete",
    thumb: "media/crypto-dashboard/thumb.jpg",
    previewVideo: "media/crypto-dashboard/preview.mp4",
    links: {
      demo: "https://trading-dashboard.example.com",
      code: "https://github.com/ebadr761/crypto-trading-dashboard",
    },
    body: `Building a high-frequency trading dashboard was a challenging exercise in real-time systems design. The core challenge: how do you display live price data from multiple exchanges without overwhelming the client or server?

The solution involved a three-tier architecture:

**Frontend (React)**: A responsive dashboard with candlestick charts, order books, and portfolio tracking. I used WebSocket connections to stream price updates directly to the UI, eliminating polling overhead. The component structure was designed for performance—memoized renders and efficient re-rendering only when relevant data changed.

**Backend (Flask)**: A REST API layer that aggregates price data from 3 cryptocurrency exchanges (Binance, Coinbase, Kraken). Each request is cached intelligently—short-lived cache for real-time data, longer-lived cache for historical analysis.

**Data Layer (Redis + PostgreSQL)**: Redis serves hot data—current prices, user portfolios, order books—with sub-millisecond access times. PostgreSQL stores historical trades, user accounts, and persistent state. The Redis caching layer reduced database queries by 85%, which was crucial for maintaining <100ms latency at 50K+ updates per minute.

**Infrastructure (AWS + Docker)**: Deployed on EC2 with Docker containerization for consistency across environments. Nginx acts as a reverse proxy, handling load balancing and SSL termination. Implemented comprehensive health monitoring and automated zero-downtime deployments using blue-green deployment strategies.

Key metrics: 99.7% uptime over 6 months, <100ms latency on p99, 1,000+ concurrent WebSocket connections sustained without degradation.

This project taught me the importance of thinking about systems holistically—frontend performance matters as much as backend optimization when serving real-time data at scale.`,
    gallery: [
      "media/crypto-dashboard/1.jpg",
      "media/crypto-dashboard/2.jpg",
      "media/crypto-dashboard/3.jpg",
    ],
  },
  {
    slug: "ai-chatbot-weather",
    title: "AI Developer Intern @ Quest - Multi-Agent Chatbot Systems",
    blurb: "Architected production AI chatbots processing 2,500+ daily queries using LangChain/LangGraph orchestration, reducing deployment bugs from 40% to 5% through CI/CD pipelines.",
    tags: ["Python", "Flask", "LangChain", "LangGraph", "n8n", "AWS", "REST APIs"],
    area: "Backend",
    status: "Complete",
    links: {
      code: "https://github.com/ebadr761/quest-chatbot",
    },
    body: `During my internship at Quest, I led the architecture and deployment of two production AI systems that fundamentally changed how the company handled customer queries.

**Weather Chatbot (LangChain/LangGraph)**:
The first challenge was building a multi-agent system that could process weather-specific queries reliably. Using LangChain, I designed an agent pipeline with specialized sub-agents: one for current conditions, one for forecasts, one for alerts. LangGraph orchestrated these agents, enabling complex reasoning chains like "if tomorrow's temperature drops below freezing, check the frost alert agent."

The system processes 2,500+ queries daily with <2 second response times. To achieve this performance, I implemented intelligent caching—weather data expires hourly, but user preferences cache for days. I also built comprehensive logging to track which agent paths users took, revealing that 60% of queries were redundant (e.g., same location, same time of day), which informed our caching strategy.

**EV Advisor Chatbot (Real-Time Data Integration)**:
The second project aggregated real-time pricing data from 5 charging networks. The complexity here wasn't the chatbot itself—it was data freshness. Charging prices fluctuate minute-by-minute. I built a data pipeline that:
- Polls each network's API every 60 seconds
- Deduplicates and normalizes prices (different networks use different schemas)
- Stores in a time-series database for historical analysis
- Serves recommendations based on user location, vehicle type, and current prices

Within one month of production launch, this system achieved 300+ active users and reduced research time for users by 80% (measured by comparing manual research time vs. chatbot query time).

**DevOps & Reliability**:
When I joined, the deployment success rate was 60%. Through CI/CD pipeline implementation (GitHub Actions → AWS Lambda), comprehensive unit/integration tests (pytest + mocking), and staged rollouts, I improved this to 95%. I also participated in 20+ code reviews over 8 weeks, establishing code quality standards that stuck with the team.

This experience taught me that production systems aren't just about elegant code—they're about reliability, monitoring, and iterative improvement through data.`,
  },
  {
    slug: "weather-station",
    title: "Embedded Weather Station - Hardware + Firmware",
    blurb: "Battery-powered weather station running 6+ months on 2 AA batteries with ±0.3°C accuracy, collecting 25K+ data points for analysis.",
    tags: ["C", "PIC24F", "I2C/UART", "BME280", "Embedded Systems", "Power Optimization"],
    area: "Embedded",
    status: "Complete",
    thumb: "media/weather-station/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/weather-station",
    },
    body: `Building an embedded weather station forced me to think deeply about resource constraints—every milliwatt of power matters when you're running on 2 AA batteries.

**Hardware Design**:
I selected the PIC24F microcontroller for its low power consumption and integrated sleep modes. The sensor stack includes a BME280 (temperature, humidity, pressure) connected via I2C. The real challenge was designing a circuit that wouldn't drain the battery during idle periods.

I implemented aggressive power optimization:
- Microcontroller sleeps in low-power mode between measurements (~50µA idle current)
- Sensor measurements happen every 5 minutes via scheduled interrupt
- Data transmission to a base station occurs every 30 minutes via UART
- Battery voltage monitoring triggers alerts when voltage drops below safe levels

Result: 6+ months runtime on 2 AA batteries. This required careful component selection and firmware-level power management.

**Firmware (C, Interrupt-Driven)**:
The firmware uses interrupt-driven architecture rather than polling, which is crucial for low-power operation. A timer interrupt wakes the MCU every 5 minutes to sample the BME280, while the main loop handles data buffering and UART transmission.

I implemented a circular buffer in the 2KB EEPROM to store up to 2,000 readings locally. This acts as a backup if network connectivity is lost—data isn't lost, just delayed.

Sensor communication protocol: I2C for the BME280 (reads temperature, humidity, pressure sequentially) and UART for wireless transmission to the base station. I had to handle I2C clock stretching and UART timing carefully to avoid data corruption.

Temperature accuracy: ±0.3°C, achieved through sensor calibration and multi-sample averaging.

**Real-World Deployment**:
Deployed the station outdoors in Calgary for 4 months. Collected 25K+ data points under real conditions—rain, snow, temperature swings from -20°C to +25°C. The system proved robust; only 2 dropouts in 4 months, both due to UART connectivity issues (fixed with better shielding).

Used this data to train machine learning models for temperature forecasting—a follow-up project analyzing patterns in local microclimates.

This project crystallized why embedded systems matter: they run silently in the background, gathering data that informs decisions. Every design choice—from the MCU selection to the power budget—ripples through the entire system.`,
    gallery: [
      "media/weather-station/1.jpg",
      "media/weather-station/2.jpg",
      "media/weather-station/3.jpg",
    ],
  },
  {
    slug: "competitive-programming-platform",
    title: "Competitive Programming Training Platform - Open Source",
    blurb: "Secure code execution platform supporting C++, Python, Java with isolated Docker sandboxes. 150+ GitHub stars, 12 contributors, serving University of Calgary.",
    tags: ["Go", "PostgreSQL", "Docker", "Kubernetes", "React", "Code Sandbox"],
    area: "Full-Stack",
    status: "Complete",
    thumb: "media/code-platform/thumb.jpg",
    links: {
      code: "https://github.com/ebadr761/competitive-programming-platform",
      demo: "https://codingclub.example.com",
    },
    body: `This project started as a solution to a real problem: our university's competitive programming club needed a way for students to practice algorithmic problems with automatic judging and feedback.

**Security & Sandboxing**:
The core challenge was running untrusted code safely. A malicious solution could fork infinite processes, allocate all memory, or access the filesystem. I designed an isolated execution environment using Docker:

Each submission spins up a fresh Docker container with only C++, Python, or Java installed—nothing else. The container has:
- Memory limits (256MB per submission)
- CPU time limits (5 seconds wall time, 2 seconds user time)
- No network access
- No filesystem access outside /tmp
- No system call privileges

The Go backend orchestrates these containers, monitoring resource usage and terminating submissions that exceed limits.

**Architecture**:
- **Frontend (React)**: Problem statement, code editor with syntax highlighting, submission history, leaderboards
- **Backend (Go)**: REST API accepting code submissions, orchestrating Docker containers, storing results
- **Database (PostgreSQL)**: Problems, submissions, user accounts, leaderboards
- **Infrastructure (Kubernetes)**: Scaled to handle 500+ submissions per day

**Performance**:
Achieved average execution time of <200ms per submission. This required optimizing the container startup overhead—I implemented container pooling, keeping warm containers ready to execute submissions, reducing cold-start time from 2 seconds to 100ms.

**Open Source Success**:
I open-sourced the platform on GitHub. It gained 150+ stars and 12 community contributors who added features like custom test cases, problem difficulty ratings, and language-specific templates. The project is now used by the University of Calgary's competitive programming club (80+ registered users) and has been forked by other universities.

**Automated Testing Framework**:
Built 50+ algorithmic problems with automated test suites. Each problem has a reference solution and comprehensive test cases covering edge cases, large inputs, performance requirements. The platform runs these tests against student submissions, providing immediate feedback.

This project taught me the value of open-sourcing code—not only did it help my community, it also improved the codebase through external contributions and feedback.`,
    gallery: [
      "media/code-platform/1.jpg",
      "media/code-platform/2.jpg",
      "media/code-platform/3.jpg",
    ],
  },
  {
    slug: "web-design-consulting",
    title: "Web Design & Consulting at Designmen - 3 Client Websites",
    blurb: "Led end-to-end development of 3 business websites generating $45K+ in client revenue, optimized for SEO with 240% organic traffic increase.",
    tags: ["React", "JavaScript", "SQL", "SEO", "Database Design"],
    area: "Full-Stack",
    status: "Complete",
    body: `Over 16 months at Designmen Consulting, I managed the complete lifecycle of 3 business websites, from requirements gathering to deployment to ongoing optimization.

**Project Scope**:
Each site served different industries—one e-commerce platform, one SaaS product site, one service directory. Despite different purposes, they shared common patterns: complex data requirements, need for performance, and emphasis on conversion (sales or signups).

**Database Design & Management**:
I designed and managed SQL databases with 10K+ records across the 3 projects. The e-commerce site tracked products (8,000+ SKUs), orders, customers, and inventory. Proper schema design was critical—normalized to avoid redundancy, indexed for query performance, with constraints to maintain data integrity.

**SEO Strategy & Implementation**:
Each client wanted visibility in search results. I analyzed Google Search Console data to identify search intent:
- Which keywords were getting impressions but few clicks (poor title/description)? 
- Which pages were ranking on page 5-6 that could move to page 1 with minor tweaks?

Through on-page optimization (meta tags, heading structure, internal linking) and technical SEO (site speed, mobile responsiveness, structured data), I achieved:
- 4 keywords moved to first-page results
- 240% increase in organic traffic across the 3 sites
- Organic traffic now accounts for 60% of user acquisition for the top site

**Technical Delivery**:
Built on React for dynamic frontend experiences, with custom backend APIs for data management. Implemented analytics tracking to measure engagement and conversion. Set up automated deployments to ensure smooth updates without downtime.

**Business Impact**:
The 3 sites collectively generated $45K+ in client revenue since 2023. One client reported that the website redesign and SEO improvements directly contributed to 3 new contracts worth $15K each.

This project taught me that code alone doesn't drive business value—understanding user behavior, optimizing for search intent, and iteratively improving based on data does.`,
  },
];