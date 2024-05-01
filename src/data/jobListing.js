const jobListings = [
    {
        id: 1,
        title: "Software Engineer",
        company: "Acme Inc.",
        location: "San Francisco, CA",
        description:
            "We are looking for a skilled Software Engineer to join our team and work on developing innovative web applications. You will be responsible for designing, implementing, and maintaining high-quality code for our products. Collaboration with cross-functional teams, including designers and product managers, is essential.",
        experience: 3,
        remote: false,
        techStack: ["React", "Node.js", "JavaScript", "HTML", "CSS"],
        role: "Front-end",
        minBasePay: 80000,
    },
    {
        id: 2,
        title: "Data Scientist",
        company: "TechCorp",
        location: "New York, NY",
        description:
            "Join our data science team and help us analyze complex data sets to derive insights and drive business decisions. You will be responsible for developing and implementing machine learning models, conducting statistical analysis, and communicating findings to stakeholders. Strong programming skills and a solid understanding of data mining techniques are required.",
        experience: 5,
        remote: true,
        techStack: ["Python", "Pandas", "Scikit-learn", "SQL", "Tableau"],
        role: "Data Science",
        minBasePay: 100000,
    },
    {
        id: 3,
        title: "Product Manager",
        company: "InnovaTech",
        location: "Seattle, WA",
        description:
            "We are seeking an experienced Product Manager to lead the development of our cutting-edge software products. You will be responsible for defining product strategy, gathering and prioritizing requirements, collaborating with cross-functional teams, and ensuring the successful delivery of high-quality products. Strong communication and analytical skills are essential.",
        experience: 4,
        remote: false,
        techStack: ["Agile", "Scrum", "Jira", "Data Analysis"],
        role: "Product Management",
        minBasePay: 90000,
    },
    {
        id: 4,
        title: "DevOps Engineer",
        company: "CloudTech",
        location: "Remote",
        description:
            "We need a DevOps Engineer to help us automate our infrastructure and streamline our deployment processes. You will be responsible for designing, implementing, and maintaining our cloud infrastructure, implementing continuous integration and continuous delivery (CI/CD) pipelines, and ensuring the reliability and scalability of our systems.",
        experience: 4,
        remote: true,
        techStack: ["AWS", "Terraform", "Kubernetes", "Docker", "Jenkins"],
        role: "DevOps",
        minBasePay: 90000,
    },
    {
        id: 5,
        title: "UX Designer",
        company: "DesignCo",
        location: "Los Angeles, CA",
        description:
            "We are seeking a talented UX Designer to join our creative team and design user-centric experiences for our digital products. You will be responsible for conducting user research, creating wireframes and prototypes, and collaborating with developers and product managers to bring your designs to life. Strong design skills and a deep understanding of user experience principles are essential.",
        experience: 3,
        remote: false,
        techStack: ["Figma", "Adobe XD", "Sketch", "User Research"],
        role: "User Experience",
        minBasePay: 70000,
    },
    {
        id: 6,
        title: "Cybersecurity Analyst",
        company: "SecureTech",
        location: "Chicago, IL",
        description:
            "Join our cybersecurity team and help us protect our clients from cyber threats. You will be responsible for monitoring and analyzing security logs, implementing security controls, conducting vulnerability assessments, and responding to security incidents. Strong knowledge of security principles, policies, and frameworks is required.",
        experience: 4,
        remote: false,
        techStack: ["SIEM", "Firewalls", "IDS/IPS", "Penetration Testing"],
        role: "Cybersecurity",
        minBasePay: 80000,
    },
    {
        id: 7,
        title: "Mobile Developer",
        company: "AppTech",
        location: "Austin, TX",
        description:
            "We are looking for a skilled Mobile Developer to join our team and build cutting-edge mobile applications. You will be responsible for designing, developing, and maintaining native mobile apps for both iOS and Android platforms. Strong proficiency in programming languages and frameworks like Swift, Kotlin, and React Native is required.",
        experience: 3,
        remote: false,
        techStack: [
            "Swift",
            "Kotlin",
            "React Native",
            "Xcode",
            "Android Studio",
        ],
        role: "Mobile Development",
        minBasePay: 75000,
    },
    {
        id: 8,
        title: "QA Engineer",
        company: "TestCorp",
        location: "Boston, MA",
        description:
            "We are seeking a QA Engineer to join our team and ensure the quality of our software products. You will be responsible for designing and executing test plans, automating tests, and collaborating with developers to identify and resolve defects. Strong knowledge of testing methodologies, tools, and frameworks is required.",
        experience: 4,
        remote: false,
        techStack: ["Selenium", "Appium", "Cucumber", "Jira", "TestRail"],
        role: "Quality Assurance",
        minBasePay: 70000,
    },
    {
        id: 9,
        title: "Technical Writer",
        company: "DocuTech",
        location: "Remote",
        description:
            "Join our documentation team and help us create clear and concise technical content for our products. You will be responsible for writing user guides, API documentation, and other technical materials. Strong writing and communication skills, as well as a technical background or the ability to quickly grasp complex concepts, are required.",
        experience: 3,
        remote: true,
        techStack: ["Markdown", "XML", "Confluence", "Swagger"],
        role: "Technical Writing",
        minBasePay: 60000,
    },
    {
        id: 10,
        title: "Cloud Architect",
        company: "CloudSolutions",
        location: "San Diego, CA",
        description:
            "We are seeking a Cloud Architect to design and implement robust and scalable cloud solutions for our clients. You will be responsible for analyzing business requirements, designing cloud architectures, and overseeing the implementation and deployment of cloud-based systems. Strong knowledge of cloud providers like AWS, Azure, and GCP, as well as expertise in cloud security and DevOps practices, is required.",
        experience: 5,
        remote: false,
        techStack: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes"],
        role: "Cloud Architecture",
        minBasePay: 120000,
    },
    {
        id: 11,
        title: "Full Stack Developer",
        company: "TechSolutions",
        location: "Denver, CO",
        description:
            "We are looking for a talented Full Stack Developer to join our team and work on building cutting-edge web applications. You will be responsible for developing and maintaining both the front-end and back-end components of our products. Strong proficiency in React, Node.js, and databases like MongoDB is required.",
        experience: 4,
        remote: false,
        techStack: [
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "JavaScript",
            "HTML",
            "CSS",
        ],
        role: "Full Stack",
        minBasePay: 90000,
    },
    {
        id: 12,
        title: "Machine Learning Engineer",
        company: "AiTech",
        location: "San Jose, CA",
        description:
            "Join our team of machine learning experts and help us develop advanced AI solutions. You will be responsible for designing and implementing machine learning models, conducting research, and deploying models into production systems. Strong knowledge of deep learning frameworks like TensorFlow and PyTorch is required.",
        experience: 5,
        remote: false,
        techStack: [
            "Python",
            "TensorFlow",
            "PyTorch",
            "Scikit-learn",
            "Pandas",
        ],
        role: "Machine Learning",
        minBasePay: 110000,
    },
    {
        id: 13,
        title: "Blockchain Developer",
        company: "CryptoTech",
        location: "Remote",
        description:
            "We are seeking a talented Blockchain Developer to join our team and work on developing decentralized applications (DApps) and smart contracts. You will be responsible for designing and implementing secure and scalable blockchain solutions, conducting research, and staying up-to-date with the latest developments in the blockchain space.",
        experience: 3,
        remote: true,
        techStack: ["Solidity", "Ethereum", "Web3.js", "Truffle", "Ganache"],
        role: "Blockchain",
        minBasePay: 80000,
    },
    {
        id: 14,
        title: "Game Developer",
        company: "GameStudio",
        location: "Montreal, QC, Canada",
        description:
            "Join our team of passionate game developers and help us create immersive and engaging gaming experiences. You will be responsible for designing and implementing game mechanics, developing game engines, and optimizing performance. Strong knowledge of game development frameworks like Unity or Unreal Engine is required.",
        experience: 4,
        remote: false,
        techStack: ["Unity", "Unreal Engine", "C++", "C#", "3D Modeling"],
        role: "Game Development",
        minBasePay: 75000,
    },
    {
        id: 15,
        title: "Network Engineer",
        company: "NetworkSolutions",
        location: "Houston, TX",
        description:
            "We are seeking a skilled Network Engineer to join our team and manage our network infrastructure. You will be responsible for designing, implementing, and maintaining secure and efficient networks, configuring routers and switches, and troubleshooting network issues. Strong knowledge of network protocols, security best practices, and monitoring tools is required.",
        experience: 5,
        remote: false,
        techStack: [
            "Cisco",
            "Juniper",
            "Network Security",
            "Wireshark",
            "SNMP",
        ],
        role: "Network Engineering",
        minBasePay: 85000,
    },
    {
        id: 16,
        title: "Business Analyst",
        company: "DataInsights",
        location: "Chicago, IL",
        description:
            "We are seeking a Business Analyst to join our team and help us analyze business processes and requirements. You will be responsible for gathering and documenting requirements, conducting data analysis, and communicating findings to stakeholders. Strong analytical and problem-solving skills, as well as proficiency in data visualization tools like Tableau or Power BI, are required.",
        experience: 3,
        remote: false,
        techStack: [
            "Requirements Gathering",
            "Data Analysis",
            "Tableau",
            "SQL",
        ],
        role: "Business Analysis",
        minBasePay: 70000,
    },
    {
        id: 17,
        title: "IT Support Specialist",
        company: "TechSupport",
        location: "Remote",
        description:
            "We are looking for an IT Support Specialist to join our remote team and provide technical support to our clients. You will be responsible for troubleshooting hardware and software issues, providing end-user support, and ensuring the smooth operation of IT systems. Strong customer service skills and knowledge of common IT tools and technologies are required.",
        experience: 2,
        remote: true,
        techStack: ["Windows", "macOS", "Active Directory", "Helpdesk Tools"],
        role: "IT Support",
        minBasePay: 45000,
    },
    {
        id: 18,
        title: "Database Administrator",
        company: "DataCorp",
        location: "Miami, FL",
        description:
            "We are seeking a skilled Database Administrator to join our team and manage our database infrastructure. You will be responsible for designing and implementing database solutions, ensuring data integrity and security, optimizing database performance, and monitoring database systems. Strong knowledge of SQL and database management systems like PostgreSQL or MySQL is required.",
        experience: 4,
        remote: false,
        techStack: [
            "SQL",
            "PostgreSQL",
            "MySQL",
            "Database Performance Tuning",
        ],
        role: "Database Administration",
        minBasePay: 80000,
    },
    {
        id: 19,
        title: "UI/UX Designer",
        company: "DesignTech",
        location: "San Diego, CA",
        description:
            "We are seeking a talented UI/UX Designer to join our team and create exceptional user experiences for our digital products. You will be responsible for conducting user research, designing intuitive user interfaces, creating wireframes and prototypes, and collaborating with developers to bring your designs to life. Strong design skills and a deep understanding of user-centered design principles are essential.",
        experience: 3,
        remote: false,
        techStack: [
            "Figma",
            "Adobe XD",
            "Sketch",
            "User Research",
            "Usability Testing",
        ],
        role: "UI/UX Design",
        minBasePay: 75000,
    },
    {
        id: 20,
        title: "Systems Administrator",
        company: "SysTech",
        location: "Atlanta, GA",
        description:
            "We are looking for a Systems Administrator to join our team and manage our IT infrastructure. You will be responsible for deploying and maintaining servers, managing virtualization technologies, implementing backup and disaster recovery solutions, and ensuring system security and compliance. Strong knowledge of Linux and Windows server administration, as well as experience with scripting and automation tools, is required.",
        experience: 4,
        remote: false,
        techStack: [
            "Linux",
            "Windows Server",
            "Virtualization",
            "Ansible",
            "Bash Scripting",
        ],
        role: "Systems Administration",
        minBasePay: 70000,
    },
];

export default jobListings;
