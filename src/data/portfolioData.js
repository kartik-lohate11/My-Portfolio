export const portfolioData = {
  personal: {
    name: "Kartik Lohate",
    title: "Java Developer",
    joinDate: "2025-02-01",
    photo: "/document/kartik_img.png",
    email: "kartiklohate2003@gmail.com",
    phone: "+91 7415950037",
    location: "Gurgaon, India",
    bio: "Passionate developer crafting elegant solutions with Spring Boot and React. Building scalable applications with modern tech stack."
  },

  resume: "/document/kartik_java_developer.pdf",

  social: [
    { icon: "github", label: "GitHub", url: "https://github.com/kartik-lohate11" },
    { icon: "linkedin", label: "LinkedIn", url: "https://www.linkedin.com/in/kartik-lohate-java-developer/" },
    { icon: "medium", label: "Medium", url: "https://medium.com/@kartiklohate8" },
    { icon: "stackoverflow", label: "Stack Overflow", url: "https://stackoverflow.com/users/27486399/kartik-lohate" }
  ],

  skills: {
    languages: ["Java (8/11/17/21)", "JavaScript", "SQL"],
    frontend: ["React JS", "Tailwind CSS", "HTML5", "CSS3"],
    backend: ["Spring Boot", "Hibernate", "REST APIs", "Spring Data JPA", "Spring Security", "JWT & OAuth2", "Apache Kafka"],
    databases: ["MySQL", "PostgreSQL"],
    tools: ["Docker", "Kubernetes", "Jenkins", "Git & CI/CD", "Maven", "Postman"]
  },

  projects: [
    {
      id: 1,
      name: "Enterprise Ticket Management System",
      description: "Developed a Ticket Management System to streamline task tracking, assignment workflows, and status monitoring across teams. Implemented secure role-based access, RESTful APIs, and real-time updates to improve transparency and operational efficiency. Designed a scalable backend architecture to handle concurrent users and ensure smooth ticket lifecycle management.",
      techStack: ["Spring Boot", "React", "PostgreSQL", "REST APIs", "Apache Kafka", "JWT"],
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db7d?w=500&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1460925895917-adf4e565db7d?w=500&h=300&fit=crop",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
      ],
      link: "https://github.com/kartik-lohate11",
      github: "https://github.com/kartik-lohate11"
    },
    {
      id: 2,
      name: "Pharmease - Location Based Search",
      description: "Developed a Pharmacy Locator Web Application that allows users to find nearby medical stores, view distance and estimated travel time, and search pharmacies by medicine name or shop name. Implemented OTP-based email verification for secure user authentication, and enabled pharmacy owners to register, manage accounts, and add available medicines. Designed a scalable backend to handle real-time location-based queries and secure data management.",
      techStack: ["Spring Boot", "MySQL", "Docker", "Mail & Map APIs"],
      image: "/document/pharmacy_project.png",
      screenshots: [
        "/document/pharmacy_project.png",
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop"
      ],
      link: "https://github.com/kartik-lohate11/Nearest-Pharmacist",
      github: "https://github.com/kartik-lohate11/Nearest-Pharmacist"
    },
    {
      id: 3,
      name: "Zip File Project",
      description: "Developed Zip, a desktop application for compressing and decompressing text files using the Huffman Coding algorithm. Implemented priority queues and binary tree data structures to efficiently generate optimal prefix codes and achieve effective file size reduction. Focused on algorithm optimization and performance-driven implementation.",
      techStack: ["Java", "Swing", "AWT", "Data Structures"],
      image: "https://images.unsplash.com/photo-1432405972618-c60b0b0f5e08?w=500&h=300&fit=crop",
      screenshots: [
        "https://images.unsplash.com/photo-1432405972618-c60b0b0f5e08?w=500&h=300&fit=crop"
      ],
      link: "https://github.com/kartik-lohate11/Zip-File-Project",
      github: "https://github.com/kartik-lohate11/Zip-File-Project"
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
