export const portfolioData = {
  personal: {
    name: "Kartik Lohate",
    title: "Java Developer",
    joinDate: "2025-02-01",
    photo: "/document/kartik_img.png",
    email: "kartiklohate2003@gmail.com",
    phone: "+91 7415950037",
    location: "Gurgaon, India",
    bio: "Passionate developer crafting elegant solutions with Spring Boot, Microservices, and React. Building scalable, resilient applications with modern cloud architecture."
  },

  resume: "/document/kartikResume_Java.pdf",

  social: [
    { icon: "github", label: "GitHub", url: "https://github.com/kartik-lohate11" },
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/kartik-lohate-java-developer/" },
    { icon: "medium", label: "Medium", url: "https://medium.com/@kartiklohate8" },
    { icon: "stackoverflow", label: "Stack Overflow", url: "https://stackoverflow.com/users/27486399/kartik-lohate" }
  ],

  skills: {
    languages: ["Java (17/21)", "Python", "JavaScript", "SQL"],
    backend: ["Spring Boot", "Spring Data JPA", "Hibernate ORM", "Spring Security", "JWT & OAuth2", "RESTful APIs"],
    microservices: ["Microservices Architecture", "Resilience4j (Circuit Breakers)", "Apache Kafka (Event-Driven)", "Spring Cloud Gateway", "Redis", "Eureka Service Registry"],
    testing_observability: ["Grafana & Dashboards", "Prometheus Metrics", "JUnit 5 & Mockito", "SonarQube (Code Quality)", "Micrometer & Tracing", "Postman API Automation"],
    databases: ["MySQL", "PostgreSQL", "Database Optimization"],
    frontend: ["React.js (18)", "Tailwind CSS", "HTML5 & CSS3", "Vite & Context API"],
    tools: ["Docker & Containers", "Kubernetes", "Jenkins & CI/CD", "Maven", "Git & GitHub"]
  },

  projects: [
    {
      id: 1,
      name: "CloudNest – Cloud File Storage Platform",
      category: "Cloud Storage & Personal Workspace",
      tagline: "A modern cloud file storage and personal workspace platform inspired by Google Drive",
      description: "CloudNest is a full-stack cloud file storage platform that allows users to securely upload, manage, search, download, share, archive, and organize their files through a modern personal workspace.",
      overview: "Designed and developed a full-featured cloud storage platform with secure authentication, file lifecycle management, cloud object storage integration, search capabilities, and public file sharing. The application provides users with a centralized workspace for managing documents, images, PDFs, CSV files, ZIP files, and other digital assets.",
      bulletPoints: [
        "Secure Authentication: Implemented user registration, login, JWT-based authentication, password recovery using OTP, and Google/GitHub OAuth2 login.",
        "Cloud File Management: Built complete file lifecycle functionality including upload, download, delete, archive, trash, restore, and file organization.",
        "Object Storage Integration: Integrated MinIO for scalable object storage while maintaining file metadata such as file name, type, size, bucket, owner, and timestamps in MySQL.",
        "Advanced Search: Implemented dynamic file searching and filtering using Spring Data JPA Specifications.",
        "Secure File Sharing: Designed a token-based public file sharing mechanism allowing users to securely access shared files through generated links.",
        "Personal Workspace Dashboard: Built an interactive React dashboard displaying file categories including Excel, CSV, PDF, ZIP, and overall storage information.",
        "Security & Authorization: Protected application APIs using Spring Security, JWT authentication, and OAuth2-based social login.",
        "Modern Full-Stack Architecture: Developed a React frontend with a Spring Boot REST API backend and cloud-based object storage integration."
      ],
      techStack: [
        "Java",
        "Spring Boot",
        "React",
        "MySQL",
        "MinIO",
        "Spring Security",
        "JWT",
        "OAuth2",
        "REST APIs",
        "Docker"
      ],
      techCategorized: {
        backend: [
          "Java 17",
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "JWT",
          "OAuth2",
          "REST APIs"
        ],
        frontend: [
          "React 18",
          "Vite",
          "React Router",
          "Context API"
        ],
        database: [
          "MySQL",
          "JPA / Hibernate"
        ],
        cloud: [
          "MinIO Object Storage",
          "Cloud Deployment"
        ],
        devops: [
          "Docker",
          "Maven",
          "Git",
          "Postman"
        ]
      },
      metrics: [
        { label: "Authentication", value: "JWT + OAuth2" },
        { label: "Storage", value: "MinIO Object Storage" },
        { label: "File Limit", value: "Up to 100 MB" },
        { label: "Architecture", value: "Full-Stack REST APIs" }
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=700&fit=crop",
      screenshots: [
        "/document/cloud_1.png",
        "/document/cloud_2.png",
        "/document/cloud_3.png",
        "/document/cloud_4.png"
      ],
      link: "https://cloudnest-cloud-file-storage-platform.kartiklohate8.workers.dev/login",
      github: "https://github.com/kartik-lohate11/CloudNest-Cloud-File-Storage-Platform",
      featured: true
    },
    {
      id: 2,
      name: "TinyRoute – URL Shortener & Link Management Platform",
      category: "URL Shortening & Link Management",
      tagline: "A modern URL shortening platform for creating, managing, and tracking short links",
      description:
        "TinyRoute is a full-stack URL shortening platform that allows users to create, manage, update, delete, and track shortened URLs through a secure and responsive web application.",

      overview:
        "Designed and developed a full-stack URL shortening platform using Spring Boot and React, with a focus on clean REST API design, secure user management, efficient URL generation, caching, and link analytics. TinyRoute uses a Base62-based short-code generation strategy to create compact seven-character URLs while maintaining URL ownership and click tracking.",

      bulletPoints: [
        "URL Shortening: Implemented a Base62-based URL generation mechanism that converts database IDs into compact seven-character short URLs.",
        "URL Management: Built complete URL lifecycle functionality including URL creation, retrieval, update, deletion, duplicate URL validation, and click tracking.",
        "User-Based URL Management: Designed a one-to-many relationship between users and URLs, allowing each user to securely manage their own shortened links.",
        "Fast URL Redirects: Implemented a dedicated redirect flow that resolves short URLs to their original destinations and tracks click activity.",
        "Redis Caching: Integrated Redis to cache frequently accessed user data and URL information, reducing repeated database queries and improving application performance.",
        "Secure Backend APIs: Designed REST APIs using Spring Boot with a structure ready for Spring Security, JWT authentication, and OAuth2-based login.",
        "Database Optimization: Used JPA/Hibernate with DTO projections to retrieve only required URL information and avoid unnecessary entity loading.",
        "URL Analytics: Added click-count tracking and analytics-ready data structures to help users monitor the performance of their shortened URLs.",
        "Responsive Web Application: Developed a React-based frontend with dedicated dashboard, URL management, analytics, profile, login, and registration experiences.",
        "Clean Backend Architecture: Structured the application using controllers, services, repositories, DTOs, entities, and utility layers for maintainable and testable code."
      ],

      techStack: [
        "Java",
        "Spring Boot",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "Redis",
        "React",
        "JWT",
        "OAuth2",
        "REST APIs",
        "Docker"
      ],

      techCategorized: {
        backend: [
          "Java",
          "Spring Boot",
          "Spring Security",
          "Spring Data JPA",
          "Hibernate",
          "REST APIs"
        ],

        frontend: [
          "React 18",
          "Vite",
          "React Router",
          "Context API",
          "Axios"
        ],

        database: [
          "MySQL",
          "JPA / Hibernate"
        ],

        caching: [
          "Redis",
          "Spring Data Redis"
        ],

        security: [
          "JWT",
          "OAuth2",
          "Spring Security"
        ],

        devops: [
          "Docker",
          "Maven",
          "Git",
          "Postman"
        ]
      },

      metrics: [
        {
          label: "Short Code",
          value: "7-Character Base62"
        },
        {
          label: "Caching",
          value: "Redis"
        },
        {
          label: "Backend",
          value: "Spring Boot REST APIs"
        },
        {
          label: "Database",
          value: "MySQL"
        }
      ],

      image:
        "/document/Url_1.png",

      screenshots: [
        "/document/Url_1.png","/document/Url_2.png"
      ],

      link: "https://github.com/kartik-lohate11/TinyRoute---A-Scalable-URL-Shortening-Service",

      github: "https://github.com/kartik-lohate11/TinyRoute---A-Scalable-URL-Shortening-Service",

      featured: true
    },

    {
      id: 3,
      name: "Pharmease - Location Based Search",
      category: "Full Stack & Cloud",
      tagline: "Real-Time Proximity Pharmacy Locator & Medicine Availability Engine",
      description: "A smart geospatial web application enabling users to locate nearby pharmacies, verify medicine stocks in real-time, and calculate travel times.",
      overview: "Developed to bridge the gap between patients and local medical stores through intelligent distance calculation, automated OTP onboarding, and real-time inventory management.",
      bulletPoints: [
        "Geospatial Distance Calculation: Integrated Map and Geocoding APIs to dynamically compute proximity, route directions, and estimated arrival times to neighboring medical shops.",
        "Multi-Parametric Medicine Search: Built instant search capabilities allowing customers to query by brand name, generic salt, or specific pharmacy inventory.",
        "Secure OTP Email Verification: Implemented automated two-factor email OTP validation using Java Mail Sender for authenticated user signups and store owner onboarding.",
        "Store Owner Inventory Portal: Created dedicated merchant dashboards enabling pharmacists to update stock statuses, price tags, and business hours in real time.",
        "Containerized Architecture: Containerized the entire Spring Boot service and MySQL database instances with Docker for predictable production staging."
      ],
      techStack: ["Spring Boot", "MySQL", "Docker", "Map APIs", "Java Mail", "REST APIs"],
      techCategorized: {
        backend: ["Java 17", "Spring Boot", "Spring Data JPA", "Java Mail API"],
        frontend: ["HTML5", "CSS3 / Tailwind", "JavaScript"],
        database: ["MySQL"],
        devops: ["Docker", "Google Maps API", "Postman", "Maven"]
      },
      metrics: [
        { label: "Geolocation", value: "Real-time Map APIs" },
        { label: "Auth", value: "Email OTP 2FA" },
        { label: "Deployment", value: "Dockerized" }
      ],
      image: "/document/pharmacy_project.png",
      screenshots: [
        "/document/pharmacy_project.png",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop"
      ],
      link: "https://cloudnest-cloud-file-storage-platform.kartiklohate8.workers.dev/login",
      github: "https://github.com/kartik-lohate11/CloudNest-Cloud-File-Storage-Platform",
      featured: true
    },
    {
      id: 4,
      name: "Zip File Project (Huffman Compression)",
      category: "Core Java & DSA",
      tagline: "High-Performance File Compression & Decompression Desktop Application",
      description: "A desktop tool that compresses and decompresses text files efficiently using lossless Huffman Coding algorithms and priority queue tree traversal.",
      overview: "Designed for deep algorithm optimization, achieving substantial storage savings on large text files through custom data structures and bit-level file streaming.",
      bulletPoints: [
        "Huffman Coding Implementation: Developed lossless prefix-code compression based on character frequency histograms to minimize file storage footprint.",
        "Data Structure Optimization: Leveraged Min-Heap Priority Queues and Binary Trees to construct canonical Huffman prefix trees with O(N log N) time complexity.",
        "High Compression Ratio: Successfully achieved 40% to 50% storage size reduction on standard ASCII text files with 100% data integrity on decompression.",
        "Desktop GUI Experience: Crafted a user-friendly desktop GUI utilizing Java Swing and AWT with real-time compression progress meters and file size statistics.",
        "Bit-Level Stream Handling: Implemented robust binary file I/O streams for bit packing and byte alignment, ensuring optimal performance on large files."
      ],
      techStack: ["Core Java", "Huffman Coding", "Data Structures", "Java Swing", "AWT", "File I/O"],
      techCategorized: {
        backend: ["Core Java (JDK 17/21)", "Huffman Algorithm", "Min-Heap", "Binary Trees"],
        frontend: ["Java Swing", "Java AWT", "Custom UI Layouts"],
        database: ["Binary File Streams", "Serialization"],
        devops: ["Git", "Maven", "JUnit Testing"]
      },
      metrics: [
        { label: "Compression", value: "40-50% Reduction" },
        { label: "Algorithm", value: "Huffman Coding" },
        { label: "Complexity", value: "O(N log N)" }
      ],
      image: "document/zip.png",
      screenshots: [
        "document/zip.png"
      ],
      link: "https://github.com/kartik-lohate11/Zip-File-Project",
      github: "https://github.com/kartik-lohate11/Zip-File-Project",
      featured: true
    }
  ],

  experience: [
    {
      id: 1,
      company: "Avendum Technology Private Limited",
      position: "Software Developer",
      period: "Feb 2025 - Present",
      description: "Architected and optimized an enterprise-grade backend using Java and Spring Boot, automating network asset tracking and improving operational efficiency. Implemented real-time Kafka pipelines, secured APIs with Spring Security (RBAC & JWT), and enhanced database performance, increasing throughput and ensuring high data consistency.",
      highlights: ["Spring Boot", "Hibernate", "Spring Security", "JWT", "Spring Data JPA", "REST API Development", "React Component Design", "Database Optimization"]
    },
    {
      id: 2,
      company: "Netlink Software Private Limited",
      position: "Java Developer Intern",
      period: "Sep 2024 – Dec 2024",
      description: "Built scalable backend modules and RESTful APIs, developed a custom Java-based ETL tool for financial data migration, and ensured high accuracy in data processing. Processed 500K+ daily records using Apache Spark, optimizing performance and reducing data integration latency in high-concurrency environments.",
      highlights: ["REST API Development", "Scala", "Apache Spark", "Apache Kafka", "SQL", "Play framework"]
    }
  ]
};
