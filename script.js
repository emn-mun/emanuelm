document.addEventListener("DOMContentLoaded", () => {
  // --- Data ---
  const professionalExperience = [
    {
      title: "Senior Application Engineer iOS",
      company: "Vanguard",
      date: "January 2026 - Present",
      description:
        "Working at Vanguard, one of the world's largest investment management companies, on their consumer-facing iOS app serving millions of users. Driving feature delivery, mentoring engineers, and navigating complex enterprise dependencies across compliance, security, and vendor integrations.",
      tasks: [
        "establish a suite of reusable components used in the consumer-facing mobile iOS app",
        "lead end-to-end iOS feature development for an investment platform app serving millions of users, delivering high-impact features that increased mobile engagement",
        "facilitate decision-making on UI/UX vs. technical feasibility trade-offs, balancing customer experience, regulatory constraints, and release timelines to ship sprint commitments",
        "identified process bottlenecks in sprint planning and refinement ceremonies; introduced clearer acceptance criteria and technical discovery spikes, improving estimation accuracy",
        "navigate complex enterprise dependencies (compliance, security, external APIs, vendor SDKs) and proactively unblock delivery risks",
        "mentored mid-level engineers through architecture reviews and pair programming, strengthening team ownership and increasing independent feature delivery capacity",
      ],
      skills: ["Swift", "SwiftUI", "UIKit", "Component Library", "Investment Platform"],
      media: [
        { type: "image", src: "assets/vanguard 1.webp" },
        { type: "image", src: "assets/vanguard 2.webp" },
      ],
    },
    {
      title: "Senior iOS Engineer",
      company: "Aspora",
      date: "August 2025 - December 2025",
      description:
        "Worked at Aspora, a London-based fintech, improving app performance and modernising the iOS codebase. Delivered performance improvement, led architectural migrations, and mentored junior engineers through best practices in Swift and SwiftUI.",
      tasks: [
        "mentor and guide junior engineers and interns through code reviews, architectural decisions and design patterns, clearer processes and best practices in Swift and SwiftUI",
        "improve app performance through main-thread offloading, optimising framework loading and partner integration flows",
        "drive technical discussions and collaborate with backend and product teams to deliver secure features in a fintech application",
        "simplify complex app components, migrate to iOS 16 SwiftUI navigation and refactor overengineered and AI-generated implementations",
      ],
      skills: ["Swift", "SwiftUI", "Swift Concurrency", "iOS 16 Navigation", "Performance Optimisation"],
      media: [
        { type: "image", src: "assets/aspora 1.jpg" },
        { type: "image", src: "assets/aspora 2.jpg" },
      ],
    },
    {
      title: "Senior/ Lead iOS Engineer",
      company: "Indeed Flex",
      date: "October 2021 - May 2025",
      description:
        "Led app modernization with MVVM, DI, and CI/CD automation, boosting efficiency and cutting QA time. Improved code quality and developer confidence via SOLID principles and remote feature flags. Championed GraphQL, mentored SwiftUI adopters, and drove analytics and prototyping initiatives in a global, async team.",
      tasks: [
        "spearheading feature delivery, defining briefs, establishing requirements and ensuring compatibility with the latest iOS versions, server APIs, and other dependencies",
        "increase test coverage by 30% while transitioning to the MVVM architecture, using dependency injection, newer concurrency patterns and test-driven development",
        "save at least 1 hour per week for every iOS engineer and over 3 hours for every QA engineer by instituting a remote feature flag override system, effectively preventing incomplete features from reaching customers",
        "onboard and mentor junior engineers and new joiners, while new teams were formed",
        "introduce GraphQL in the iOS project, integrate Apollo SDK and coordinate with the backend team on the development of new features and reusable services for the other mobile teams",
        "technical mentorship for a fellow UI designer willing to learn SwiftUI and transition into engineering",
        "significantly reduce the time spent on each engineering task requiring QA by 1 to 2 hours",
        "streamline recurring tasks via CI/CD automation workflows and Fastlane, thus enhancing the productivity of a rapidly growing team",
        "lead an initiative to boost developer confidence in modifying the codebase by reducing technical debt, decreasing tight coupling with CoreData models and following the SOLID object-oriented principles to decouple business logic",
        "coordinate new feature development, project estimations, incidents and urgent tasks",
        "diminish support tickets by over 50% through collaboration with the backend to identify issues, improve logging and analytics, and develop better dashboards",
        "lead initiatives to enhance app analytics, ensuring a more data-driven approach, mitigating unexpected behaviours in production, and delivering superior metrics for product teams",
        "prototype with new technologies like NFC tags, live activities, WebView bridges",
        "async meetings and periodic out-of-hours work as the principal team was based in the USA",
      ],
      skills: ["SwiftUI", "UIKit", "MVVM", "Core Data", "Combine", "GraphQL", "DataDog", "Amplitude", "Google Analytics"],
      media: [
        { type: "video", src: "assets/flex 1.mp4" },
        { type: "video", src: "assets/flex 2.mp4" },
      ],
    },
    {
      title: "Senior iOS Engineer contractor",
      company: "Deliveroo",
      date: "November 2020 - September 2021 (extended)",
      description:
        "Contributed to the Deliveroo Rider application, implementing features to improve the rider experience, prevent fraud, optimize delivery logistics, and ensure application stability. Led initiatives to modernize the codebase with MVVM and dependency injection, introduced RxSwift/RxCocoa for reactive programming, and launched workshops to upskill the team.",
      tasks: [
        "lead an initiative to enhance the iOS team's proficiency in reactive programming (RxSwift/RxCocoa), significantly improving code quality in an event-driven environment",
        "launch workshops and demonstrations to showcase the practical integration of reactive extensions in the codebase, simplifying complex concepts for team members",
        "facilitate cross-platform feature development for the Rider app",
        "minimise crashes to a one-year low by modernising legacy frameworks or replacing outdated dependencies with robust, modern and local implementations",
        "advocate for adopting the MVVM architecture, increasing testing coverage through broader implementation of dependency injection",
        "implement updates to the iOS client to support backend database sharding",
      ],
      skills: ["Swift", "UIKit", "Core Location", "Core Animation", "Combine"],
      media: [
        { type: "image", src: "assets/deliveroo 1.jpg" },
        { type: "image", src: "assets/deliveroo 2.jpg" },
      ],
    },
    {
      title: "Senior iOS Engineer freelancer",
      company: "Durstexpress GmbH (now Flaschenpost)",
      date: "May 2020 - October 2020",
      description:
        "Pioneered the architecture and initial development of a new e-commerce app for Durstexpress, focusing on scalable design, modularisation, and robust development processes. Established CI/CD pipelines and team guidelines to ensure maintainability, efficiency, and high code quality from the ground up.",
      tasks: [
        "establish design patterns and develop the first features of a brand-new e-commerce app",
        "commit to a scalable architecture, constructing the foundation of an extendable, testable, and maintainable application",
        "initiate app modularisation to enhance separation of concerns, reusability, and compile-time optimisation",
        "facilitate the establishment of clear guidelines and development processes within the team to eliminate confusion due to varying knowledge levels",
        "introduced continuous integration and continuous delivery processes to enhance efficiency",
      ],
      skills: ["Swift", "UIKit", "Core Location", "Alamofire"],
      media: [
        { type: "image", src: "assets/durst 1.jpeg" },
        { type: "image", src: "assets/durst 2.jpeg" },
      ],
    },
    {
      title: "Senior iOS Engineer freelancer",
      company: "OLX Group",
      date: "November 2019 - May 2020",
      description:
        "Kickstarted the the rebrading and redesign process of all iOS apps owned by the OLX Group. As a leader in the e-commerce space, at the time OLX had 11 apps available in 6 markets centered around classifieds ads, auto and real estate",
      tasks: [
        "serve as the main facilitator of a comprehensive redesign across multiple global iOS applications",
        "institute a design system incorporating reusable components to streamline development",
        "manage the onboarding process for newly hired iOS developers regarding product decisions, chosen iOS architecture and established iOS guidelines",
        "provide consultation on iOS Design Guidelines and best practices for mobile UI/UX",
        "initiate refactorings with the scope of decreasing code complexity while enhancing overall app performance and responsiveness to user inputs",
        "support public releases across various European markets",
      ],
      skills: ["Swift", "UIKit", "Core Location", "Alamofire"],
      media: [{ type: "image", src: "assets/olx.webp" }],
    },
    {
      title: "Senior iOS Engineer",
      company: "eBay",
      date: "June 2018 - October 2019",
      description:
        "Worked on several high-profile marketplace apps under the eBay umbrella (now Adevinta), including Kijiji and eBay, focusing on feature development, UI modernization, and performance optimization.",
      tasks: [
        "contribute as a member of the core features team responsible for designing and implementing the search and filtering experience of multiple e-commerce apps",
        "make architectural decisions for reusable components utilised across various eBay markets",
        "contribute to the adoption of a VIPER architecture to have a testable and scalable code base",
        "deliver an 87% unit tests coverage and bring integration tests with Xcode UI tests",
        "simplify complex scenarios of data handling by applying reactive programming concepts",
        "achieve multiple conversion rate increases by up to 30% by collaborating with product owners, A/B testing and designing features based on insights from analytics tools",
        "build experiments that enabled Analytics and Product departments make business decisions",
        "facilitate the automation of various sync tasks between iOS development team and UX/UI changes",
      ],
      skills: ["Swift", "Objective-C", "UIKit", "Core Data", "MVVM-C", "Design Systems"],
      media: [
        { type: "image", src: "assets/ebay.webp" },
        { type: "image", src: "assets/kijiji.webp" },
      ],
    },
    {
      title: "iOS Engineer",
      company: "New Work SE (XING)",
      date: "July 2016 - May 2018",
      description:
        "Designed and implemented both premium and freemium features for the main XING iOS app, driving user growth and upgrades. Enhanced video content, performance, and in-app purchase flows, while supporting the team through onboarding, interviews, and code reviews. Championed modern iOS standards, improved code quality, and collaborated with cross-functional teams to deliver a seamless and secure user experience.",
      tasks: [
        "designed and implemented premium and freemium features in the main XING iOS app, which attracted new users as well as motivated them to upgrade",
        "implement video playback with AVFoundation for news articles containing video content",
        "onboarded junior developers, conducted interviews and managed code challenges",
        "improved user experience by increasing performance in data loading, collection view scroll and background fetching",
        "committed to new standards like Size Classes and Auto Layout for a better experience on different screen-sizes and as well as unified and reusable view components",
        "decrease the amount of code dedicated to in-app purchase handling by 42% and increase code readability and testability at the same time",
        "contributed to a safer and more flexible code base while adopting Swift",
        "reduce churn by closing loopholes and solving security issues in the payment handling of iOS subscriptions while collaborating with backend engineers",
        "supported UI/UX designers with knowledge of iOS visual design patterns and best practices",
        "collaborated with data science and digital analytics in order to provide reliable statistical data",
      ],
      skills: ["Swift", "UIKit", "Realm", "REST APIs"],
      media: [{ type: "image", src: "assets/xing.webp" }],
    },
    {
      title: "iOS Developer",
      company: "novomind AG",
      date: "May 2016 - June 2016",
      description:
        "Developed innovative prototype apps for e-commerce clients, leveraging beacon technology and augmented reality. Enhanced app quality and user satisfaction by introducing A/B testing, crash reporting, analytics, and remote configuration.",
      tasks: [
        "implemented Beacon based and augmented reality prototype apps targeting e-commerce",
        "improved app monitoring and user satisfaction by introduced A/B testing support, crash reporting, analytics and remote config",
      ],
      skills: ["Swift", "UIKit", "Realm", "REST APIs"],
      media: [{ type: "image", src: "assets/novomind.jpg" }],
    },
    {
      title: "Software Developer intern",
      company: "Absolute Software GmbH",
      date: "July 2014 - April 2016",
      description: "Where it all started, from an internship to an extended partnership developing mobile apps for Android and iOS",
      tasks: [
        "app architecture and development of social apps for Android and iOS",
        "integrated Facebook APIs, Google Places, Maps & Geolocation APIs, Flickr API, Amazon S3 and many other services",
        "developed node.js web applications used to synchronise data with the apps",
        "reviewed customer requirements and designed technically feasible and working solutions in an agile team, based on user stories, epics and tasks",
        "ensured scalability and organised user tests, prototyped with 3rd party libraries to improve performance",
        "engineered web services meant to leverage computation on mobile devices",
        "contributed to all layers of a mobile app: UI, Persistence Store, Business Logic, networking, etc",
        "being part of an agile workflow with frequent changes in customer requirements",
        "managing customers and their requirements, providing estimations and reports",
      ],
      skills: ["Swift", "UIKit", "Realm", "REST APIs"],
      media: [{ type: "image", src: "assets/xing.webp" }],
    },
  ];

  const sideProjects = [
    {
      title: "Keyboard Translator",
      description:
        "An innovative iOS Keyboard Extension that provides real-time translation, allowing users to type in one language and have it instantly appear in another. The app supports over 20 languages and works seamlessly across all applications.",
      tasks: [
        "Engineered a custom keyboard extension with real-time, as-you-type translation.",
        "Integrated multiple translation APIs for broad language support and accuracy.",
        "Designed a user-friendly interface for language selection and settings.",
        "Published and marketed the app on the App Store, achieving significant downloads.",
      ],
      skills: ["SwiftUI", "Combine", "Keyboard Extension", "StoreKit", "API Integration"],
      media: [
        { type: "image", src: "assets/translate 1.png" },
        { type: "image", src: "assets/translate 2.png" },
      ],
    },
    {
      title: "Snaps Search",
      description:
        "Snaps Search is a privacy-focused macOS app that lets you extract text from screenshots using Apple Vision OCR and organize them for easy search. You can ask questions about your images using a local BERT model, and all processing happens on your device—no data is sent to any server or third party.",
      tasks: [
        "Extract text from screenshots using Apple Vision OCR for fast, searchable organization.",
        "Drag and drop screenshots to automatically index their content.",
        "Ask natural language questions about your screenshots—powered by a local BERT model.",
        "Find relevant content even if you don't use the exact words from the image.",
        "All processing is done locally; your screenshots and extracted text never leave your device.",
        "Enjoy a minimalist, distraction-free interface designed for privacy and efficiency.",
      ],
      skills: ["Swift", "AppKit", "WebKit", "SafariServices"],
      media: [{ type: "image", src: "assets/snapssearch.png" }],
    },
    {
      title: "Block Ads",
      description:
        "A content blocker for Safari on iOS and macOS. It uses a curated and frequently updated list of blocking rules to remove ads, trackers, and other annoyances, leading to a faster and cleaner browsing experience.",
      tasks: [
        "Developed a Safari App Extension to block content using JSON-based rules.",
        "Created a companion app for users to manage settings and subscriptions.",
        "Implemented a system for remotely updating the blocking rules.",
        "Utilized StoreKit for managing in-app purchases and subscriptions.",
      ],
      skills: ["Swift", "Safari App Extension", "StoreKit", "JSON"],
      media: [{ type: "image", src: "assets/BlockAds.webp" }],
    },
  ];

  const skills = {
    Languages: ["Swift", "Objective-C", "Python", "JavaScript"],
    "Frameworks & Libraries": [
      "SwiftUI",
      "UIKit",
      "Combine",
      "Swift Concurrency",
      "Core Data",
      "Core Location",
      "Core Animation",
      "XCTest",
      "Composable Architecture (TCA)",
      "Alamofire",
      "Sendbird SDK",
    ],
    "Tools & Platforms": ["Xcode", "Git", "GitHub Actions", "Fastlane", "Jenkins", "Jira", "Segment", "Amplitude", "Firebase", "App Store Connect"],
    Methodologies: ["Agile", "Scrum", "TDD", "MVVM-C", "CI/CD"],
  };

  // --- Hero Section Interactivity ---
  const phone = document.querySelector(".phone-mockup");
  const appScrollContent = document.querySelector(".app-scroll-content");

  if (phone) {
    phone.addEventListener("mousemove", (e) => {
      const rect = phone.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20; // Reduce rotation
      const rotateY = (centerX - x) / 20;
      phone.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    phone.addEventListener("mouseleave", () => {
      phone.style.transform = "rotateX(0) rotateY(0)";
    });
  }

  if (appScrollContent) {
    window.addEventListener("scroll", () => {
      const scrollPosition = window.scrollY;
      const heroHeight = document.querySelector(".hero").offsetHeight;
      if (scrollPosition < heroHeight) {
        const scrollPercentage = scrollPosition / heroHeight;
        const contentHeight = appScrollContent.scrollHeight - appScrollContent.clientHeight;
        appScrollContent.scrollTop = contentHeight * scrollPercentage * 2; // Speed up scroll
      }
    });
  }

  // --- App Icon Click Handlers ---
  const appIconLinks = document.querySelectorAll(".app-icon-link");
  appIconLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const appName = link.querySelector(".app-icon-title").textContent;

      // Map app names to App Store URLs
      const appStoreLinks = {
        "Indeed Flex": "https://apps.apple.com/gb/app/indeed-flex-job-search/id1013812731",
        Deliveroo: "https://apps.apple.com/us/app/deliveroo-food-shopping/id1001501844",
        "Deliveroo Rider": "https://apps.apple.com/us/app/deliveroo-rider/id1438758758",
        eBay: "https://apps.apple.com/gb/app/ebay-marketplace-shopping-app/id282614216",
        Kijiji: "https://apps.apple.com/ca/app/kijiji-buy-sell-find-deals/id318979520",
        OLX: "https://apps.apple.com/ro/app/olx-ro-houses-work-jobs/id653399343",
        XING: "https://apps.apple.com/us/app/xing-the-right-job-for-you/id297625850",
        Flaschenpost: "https://apps.apple.com/gb/app/flaschenpost-online-einkaufen/id1473316324",
        "Keyboard Translator": "https://apps.apple.com/us/app/keyboard-translator-key-lingo/id6745560253",
        "Snap Search": "https://apps.apple.com/us/app/snaps-search/id6474906236?mt=12",
        "Block Ads": "https://apps.apple.com/us/app/block-ads/id1483397869?mt=12",
        Aspora: "https://apps.apple.com/gb/app/aspora-send-money-to-india/id6444683240",
        Vanguard: "https://apps.apple.com/gb/app/vanguard-uk/id6476108034",
        DataGlide: "https://apps.apple.com/us/app/data-glide-esim-for-travel/id6757163152",
        Alertful: "https://apps.apple.com/us/app/alertfull-meeting-reminder/id6753336807",
      };

      const appStoreUrl = appStoreLinks[appName];
      if (appStoreUrl) {
        window.open(appStoreUrl, "_blank");
      }
    });
  });

  // --- Navigation Interactivity ---
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    navLinks.forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }),
    );
  }

  function changeNavOnScroll() {
    let index = sections.length;
    while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  window.addEventListener("scroll", changeNavOnScroll);

  // --- Dynamic Content Population ---
  const experienceContainer = document.getElementById("experience-cards");
  const projectsContainer = document.getElementById("projects-cards");
  const skillsContainer = document.querySelector(".skills-container");

  function createCard(item, type) {
    const card = document.createElement("div");
    card.className = "card";
    const isExperience = type === "experience";

    const listItems = item.tasks;
    let listHtml = "";
    const limit = 5;
    const needsTruncation = isExperience && listItems.length > limit;

    if (needsTruncation) {
      listHtml = listItems
        .slice(0, limit)
        .map((task) => `<li>${task}</li>`)
        .join("");
    } else {
      listHtml = listItems.map((task) => `<li>${task}</li>`).join("");
    }

    card.innerHTML = `
            <h3>${item.title}</h3>
            ${isExperience ? `<span class="company">${item.company}</span>` : ""}
            ${isExperience ? `<span class="date">${item.date}</span>` : ""}
            <p class="description">${item.description}</p>
            <ul>${listHtml}</ul>
            <button class="details-btn">${needsTruncation ? "Show More..." : "View Details"}</button>
        `;

    card.querySelector(".details-btn").addEventListener("click", () => openModal(item, type));
    return card;
  }

  if (experienceContainer) {
    professionalExperience.forEach((item) => {
      experienceContainer.appendChild(createCard(item, "experience"));
    });
  }

  if (projectsContainer) {
    sideProjects.forEach((item) => {
      projectsContainer.appendChild(createCard(item, "project"));
    });
  }

  if (skillsContainer) {
    Object.keys(skills).forEach((category) => {
      skills[category].forEach((skill) => {
        const tag = document.createElement("div");
        tag.className = "skill-tag";
        tag.textContent = skill;
        skillsContainer.appendChild(tag);
      });
    });
  }

  // --- Modal Logic ---
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalBody = document.querySelector(".modal-body");
  const closeModalBtn = document.querySelector(".modal-close");

  function openModal(item, type) {
    modalTitle.textContent = item.title;

    let bodyContent = `
            ${type === "experience" ? `<div class="modal-section"><h3>${item.company} | ${item.date}</h3></div>` : ""}
            <div class="modal-section">
                <h3>Description</h3>
                <p>${item.description}</p>
            </div>
            <div class="modal-section">
                <h3>Key Contributions</h3>
                <ul>${item.tasks.map((task) => `<li>${task}</li>`).join("")}</ul>
            </div>
            <div class="modal-section">
                <h3>Skills & Technologies</h3>
                <div class="tech-tags">
                    ${item.skills.map((skill) => `<span class="tech-tag">${skill}</span>`).join("")}
                </div>
            </div>
        `;

    if (item.media && item.media.length > 0) {
      bodyContent += `
                <div class="modal-section">
                    <h3>Media</h3>
                    <div class="media-gallery">
                        ${item.media
                          .map((mediaItem) => {
                            if (mediaItem.type === "image") {
                              return `<img src="${mediaItem.src}" alt="${item.title}">`;
                            }
                            if (mediaItem.type === "video") {
                              return `<video src="${mediaItem.src}" controls style="max-width:100%;border-radius:10px;margin-bottom:10px;"></video>`;
                            }
                            return "";
                          })
                          .join("")}
                    </div>
                </div>
            `;
    }

    modalBody.innerHTML = bodyContent;
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
    modalBody.innerHTML = "";
  }

  if (modal) {
    closeModalBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (event) => {
      if (event.target == modal) {
        closeModal();
      }
    });
    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && modal.style.display === "block") {
        closeModal();
      }
    });
  }
});
