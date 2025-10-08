
export interface CourseModule {
  title: string;
  duration: string;
  topics: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  duration: string;
  level: string;
  objectives: string[];
  modules: CourseModule[];
  capstoneProjects?: string[];
}

export const coursesData: Course[] = [
  {
    id: "excel-analytics",
    title: "Excel Analytics",
    description: "Master advanced Excel functions, pivot tables, and data visualization for business intelligence and analytics.",
    icon: "📊",
    color: "from-green-400 to-green-600",
    duration: "20 Hours",
    level: "Beginner to Advanced",
    objectives: [
      "Master Excel Interface and Basic Operations",
      "Advanced Data Entry and Formatting Techniques", 
      "Create Dynamic Charts and Data Visualizations",
      "Build Interactive Dashboards and Reports",
      "Implement Advanced Formulas and Functions",
      "Develop Personal Budget and Sales Analysis Systems"
    ],
    modules: [
      {
        title: "Introduction to Excel",
        duration: "2 hours",
        topics: ["Excel Interface Overview", "Basic Navigation and Operations", "Understanding Workbooks and Worksheets", "Cell Basics: Selecting, Editing, and Formatting"]
      },
      {
        title: "Data Entry and Basic Functions",
        duration: "2 hours", 
        topics: ["Entering Data: Text, Numbers, and Dates", "Basic Formulas and Functions: SUM, AVERAGE, MIN, MAX", "AutoFill and Flash Fill", "Basic Error Checking"]
      },
      {
        title: "Data Formatting",
        duration: "2 hours",
        topics: ["Formatting Cells: Fonts, Colors, and Borders", "Number Formatting: Currency, Percentages, and Dates", "Conditional Formatting", "Aligning and Merging Cells"]
      },
      {
        title: "Managing Worksheets", 
        duration: "2 hours",
        topics: ["Inserting and Deleting Worksheets", "Renaming and Moving Worksheets", "Grouping and Ungrouping Worksheets", "Freezing Panes and Split Windows"]
      },
      {
        title: "Advanced Formulas and Functions",
        duration: "3 hours", 
        topics: ["Logical Functions: IF, AND, OR", "Lookup Functions: VLOOKUP, HLOOKUP, and INDEX-MATCH", "Text Functions: CONCATENATE, LEFT, RIGHT, MID, LEN", "Date and Time Functions"]
      },
      {
        title: "Data Visualization", 
        duration: "3 hours",
        topics: ["Creating and Customizing Charts: Column, Line, Pie, and Bar", "Sparklines", "Chart Elements: Titles, Labels, and Legends", "Data Analysis with PivotTables and PivotCharts"]
      },
      {
        title: "Data Analysis Tools",
        duration: "3 hours", 
        topics: ["Sorting and Filtering Data", "Data Validation", "What-If Analysis: Goal Seek and Data Tables", "Using Solver for Optimization"]
      },
      {
        title: "Advanced Data Management",
        duration: "3 hours",
        topics: ["Importing Data from External Sources", "Using Tables for Data Management", "Advanced Filtering and Sorting", "Removing Duplicates"]
      }
    ],
    capstoneProjects: [
      "Personal Budget Tracker - Create a comprehensive personal budget tracker using Excel",
      "Sales Data Analysis - Analyze sales data to generate insights for a fictional company"
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing", 
    description: "Comprehensive digital marketing strategies including SEO, SEM, social media, content marketing, and analytics.",
    icon: "📱",
    color: "from-blue-400 to-blue-600", 
    duration: "30 Hours",
    level: "Beginner to Intermediate",
    objectives: [
      "Master Digital Marketing Fundamentals and Strategy",
      "Implement SEO and SEM Best Practices",
      "Create Engaging Social Media Campaigns", 
      "Develop Content Marketing Strategies",
      "Execute Email Marketing Campaigns",
      "Build Online Reputation Management Systems"
    ],
    modules: [
      {
        title: "Introduction to Digital Marketing",
        duration: "2 hours",
        topics: ["Understanding Digital Marketing", "Importance and Benefits", "Traditional Marketing vs. Digital Marketing", "Key Concepts and Terminology"]
      },
      {
        title: "Website Planning and Creation",
        duration: "3 hours", 
        topics: ["Understanding Domain and Hosting", "Planning a Website Structure", "Introduction to Website Design", "Content Management Systems (CMS)", "Website Optimization", "Website Launch and Maintenance"]
      },
      {
        title: "Search Engine Optimization (SEO)",
        duration: "4 hours",
        topics: ["Introduction to SEO", "On-Page SEO Techniques", "Off-Page SEO Techniques", "Keyword Research and Analysis", "SEO Tools and Analytics", "SEO Best Practices"]
      },
      {
        title: "Search Engine Marketing (SEM)", 
        duration: "3 hours",
        topics: ["Introduction to SEM", "Google Ads Overview", "Creating Effective Ad Campaigns", "Keyword Selection and Bidding", "Ad Copywriting Techniques", "SEM Campaign Analytics"]
      },
      {
        title: "Social Media Marketing",
        duration: "4 hours", 
        topics: ["Introduction to Social Media Marketing", "Social Media Platforms Overview", "Creating and Managing Social Media Campaigns", "Content Creation and Curation", "Social Media Advertising", "Analytics and Reporting"]
      },
      {
        title: "Content Marketing",
        duration: "3 hours",
        topics: ["Understanding Content Marketing", "Content Strategy and Planning", "Types of Content", "Content Creation and Optimization", "Content Distribution Channels", "Measuring Content Performance"]
      },
      {
        title: "Email Marketing",
        duration: "3 hours", 
        topics: ["Introduction to Email Marketing", "Building an Email List", "Creating Engaging Email Campaigns", "Email Design and Layout", "Automation and Segmentation", "Email Marketing Metrics and Analytics"]
      },
      {
        title: "Analytics and Reporting",
        duration: "3 hours",
        topics: ["Introduction to Web Analytics", "Google Analytics Overview", "Setting Up Google Analytics", "Tracking and Measuring Website Traffic", "Conversion Tracking", "Reporting and Analysis"]
      },
      {
        title: "Online Reputation Management", 
        duration: "2 hours",
        topics: ["Importance of Online Reputation", "Strategies for Managing Online Reputation", "Monitoring and Responding to Online Reviews", "Building a Positive Online Presence"]
      }
    ],
    capstoneProjects: [
      "Comprehensive Digital Marketing Plan - Create a digital marketing strategy for a hypothetical business",
      "Social Media Campaign Execution - Plan and execute a social media campaign for a product or service"
    ]
  },
  {
    id: "power-bi",
    title: "Power BI",
    description: "Create stunning visualizations and interactive dashboards with Microsoft Power BI for business intelligence.",
    icon: "📈", 
    color: "from-purple-400 to-purple-600",
    duration: "30 Hours",
    level: "Intermediate",
    objectives: [
      "Master Power BI Desktop and Service Components", 
      "Implement Advanced Data Modeling Techniques",
      "Create Interactive Dashboards and Reports",
      "Develop DAX Functions and Calculations",
      "Build Advanced Visualizations and Custom Charts",
      "Deploy AI-Powered Analytics Solutions"
    ],
    modules: [
      {
        title: "Introduction to Power BI",
        duration: "2 hours",
        topics: ["Overview of Power BI", "Power BI Components: Power BI Desktop, Service, and Mobile", "Installing Power BI Desktop", "Power BI Interface and Navigation"]
      },
      {
        title: "Connecting to Data",
        duration: "3 hours", 
        topics: ["Data Sources Supported by Power BI", "Connecting to Different Data Sources", "Data Preparation and Cleaning", "Data Types and Roles in Power BI"]
      },
      {
        title: "Data Transformation with Power Query",
        duration: "4 hours",
        topics: ["Introduction to Power Query Editor", "Data Cleaning and Shaping Techniques", "Merging and Appending Queries", "Using Advanced Editor and M Language"]
      },
      {
        title: "Building Basic Visualizations", 
        duration: "3 hours",
        topics: ["Creating Basic Charts: Bar, Line, Pie, and Column Charts", "Formatting and Customizing Visualizations", "Using Filters, Slicers, and Drill-Through", "Creating Tables and Matrices"]
      },
      {
        title: "Advanced Visualizations",
        duration: "4 hours", 
        topics: ["Creating Advanced Chart Types: Waterfall, Funnel, and Gauge Charts", "Using Maps and Geographic Visualizations", "Creating Custom Visuals", "Implementing R and Python Visuals"]
      },
      {
        title: "Data Modeling and DAX",
        duration: "4 hours",
        topics: ["Understanding Data Modeling", "Creating Relationships Between Tables", "Introduction to DAX (Data Analysis Expressions)", "Writing Basic and Advanced DAX Measures and Calculations"]
      },
      {
        title: "Creating Interactive Reports", 
        duration: "3 hours",
        topics: ["Designing Interactive Reports", "Using Bookmarks and Buttons for Navigation", "Implementing Drill-through and Tooltips", "Creating and Customizing Report Themes"]
      },
      {
        title: "Power BI Service",
        duration: "3 hours", 
        topics: ["Publishing Reports to Power BI Service", "Creating and Managing Dashboards", "Sharing and Collaborating in Power BI", "Scheduling Data Refreshes"]
      },
      {
        title: "Power BI Mobile and Embedded",
        duration: "2 hours",
        topics: ["Introduction to Power BI Mobile", "Designing Reports for Mobile Devices", "Overview of Power BI Embedded", "Integrating Power BI into Custom Applications"]
      },
      {
        title: "Advanced Analytics and AI", 
        duration: "4 hours",
        topics: ["Using AI Visuals: Key Influencers, Decomposition Tree", "Implementing Quick Insights", "Implementing Machine Learning Models", "Using Cognitive Services in Power BI", "Performing Advanced Analytics with R and Python"]
      }
    ],
    capstoneProjects: [
      "Sales Performance Dashboard - Create a comprehensive sales performance dashboard using Power BI",
      "Customer Segmentation Analysis - Use clustering techniques and advanced DAX calculations"
    ]
  },
  {
    id: "tableau", 
    title: "Tableau",
    description: "Professional data visualization and business intelligence with Tableau Desktop for advanced analytics.",
    icon: "📊",
    color: "from-orange-400 to-orange-600",
    duration: "30 Hours", 
    level: "Intermediate to Advanced",
    objectives: [
      "Master Tableau Desktop Interface and Navigation",
      "Implement Advanced Data Connection and Preparation",
      "Create Interactive Dashboards and Stories", 
      "Develop Advanced Calculations and Parameters",
      "Build Geographic and Statistical Visualizations",
      "Deploy Tableau Server Solutions"
    ],
    modules: [
      {
        title: "Introduction to Tableau",
        duration: "2 hours",
        topics: ["Overview of Tableau", "Tableau Products and Versions", "Installing Tableau Desktop", "Tableau Interface and Navigation"]
      },
      {
        title: "Connecting to Data", 
        duration: "3 hours",
        topics: ["Data Sources Supported by Tableau", "Connecting to Different Data Sources", "Data Preparation and Cleaning", "Data Types and Roles in Tableau"]
      },
      {
        title: "Basic Visualizations",
        duration: "3 hours", 
        topics: ["Creating Basic Charts: Bar, Line, Pie, and Scatter", "Formatting and Customizing Visualizations", "Using Show Me Feature", "Working with Filters and Sorting"]
      },
      {
        title: "Intermediate Visualizations",
        duration: "4 hours",
        topics: ["Creating Maps and Geographic Visualizations", "Dual-Axis and Combo Charts", "Creating Histograms and Bullet Charts", "Using Highlight Tables and Heat Maps"]
      },
      {
        title: "Advanced Visualizations", 
        duration: "4 hours", 
        topics: ["Creating Advanced Chart Types: Waterfall, Pareto, and Gantt Charts", "Using Table Calculations: Calculated Fields, Table Calculations, and LOD Expressions", "Advanced Mapping Techniques", "Creating Animations and Motion Charts"]
      },
      {
        title: "Dashboards and Stories",
        duration: "4 hours", 
        topics: ["Building Effective Dashboards", "Using Dashboard Actions", "Designing Interactive Dashboards", "Creating and Publishing Stories"]
      },
      {
        title: "Data Blending and Joins",
        duration: "3 hours",
        topics: ["Understanding Data Blending", "Using Joins in Tableau", "Managing Relationships Between Data Sources", "Combining Data from Multiple Sources"]
      },
      {
        title: "Tableau Prep",
        duration: "3 hours", 
        topics: ["Introduction to Tableau Prep", "Data Cleaning and Shaping with Tableau Prep", "Creating Data Flows", "Scheduling Data Prep for Tableau Desktop"]
      },
      {
        title: "Tableau Server and Online",
        duration: "3 hours",
        topics: ["Publishing Workbooks to Tableau Server/Online", "Managing Permissions and User Access", "Using Tableau Server for Collaboration", "Scheduling Data Extracts and Refreshes"]
      },
      {
        title: "Advanced Analytics", 
        duration: "4 hours",
        topics: ["Trend Lines and Forecasting", "Clustering and Distribution Analysis", "Reference Lines and Bands", "Parameter Controls"]
      }
    ],
    capstoneProjects: [
      "Sales Performance Dashboard - Create a comprehensive sales performance dashboard using Tableau",
      "Customer Segmentation Analysis - Develop a customer segmentation analysis using Tableau"
    ]
  },
  {
    id: "business-analytics",
    title: "Business Analytics", 
    description: "Statistical analysis, predictive modeling, and data-driven decision making for business intelligence.",
    icon: "📊",
    color: "from-teal-400 to-teal-600",
    duration: "30 Hours",
    level: "Advanced", 
    objectives: [
      "Master Statistical Analysis and Data Mining Techniques",
      "Implement Predictive Modeling and Forecasting",
      "Develop Business Intelligence Solutions",
      "Create Advanced Data Visualizations and Reports", 
      "Apply Machine Learning in Business Context",
      "Build Customer Segmentation and Sales Forecasting Models"
    ],
    modules: [
      {
        title: "Introduction to Business Analytics",
        duration: "3 hours", 
        topics: ["Definition and Importance of Business Analytics", "Types of Analytics: Descriptive, Predictive, Prescriptive", "Business Analytics vs. Business Intelligence", "Overview of Business Analytics Tools and Software"]
      },
      {
        title: "Exploratory Data Analysis",
        duration: "3 hours",
        topics: ["Descriptive Statistics", "Data Visualization Techniques", "Identifying Patterns and Trends", "Hypothesis Testing"]
      },
      {
        title: "Predictive Analytics", 
        duration: "4 hours",
        topics: ["Introduction to Predictive Modeling", "Linear and Logistic Regression", "Decision Trees", "Machine Learning Algorithms"]
      },
      {
        title: "Data Collection and Data Management",
        duration: "3 hours", 
        topics: ["Data Sources and Types", "Data Collection Methods", "Data Warehousing and Data Lakes", "Data Cleaning and Pre-processing"]
      },
      {
        title: "Statistical Analysis",
        duration: "3 hours",
        topics: ["Probability Distributions", "Inferential Statistics", "Regression Analysis", "Time Series Analysis"]
      },
      {
        title: "Prescriptive Analytics", 
        duration: "4 hours",
        topics: ["Optimization Techniques", "Simulation Modeling", "Scenario Analysis", "Decision Analysis"]
      },
      {
        title: "Data Visualization and Reporting",
        duration: "3 hours", 
        topics: ["Principles of Effective Data Visualization", "Advanced Charting Techniques", "Dashboards and Interactive Reports", "Data Storytelling"]
      },
      {
        title: "Big Data Analytics",
        duration: "3 hours",
        topics: ["Introduction to Big Data", "Hadoop and Spark Frameworks", "NoSQL Databases", "Big Data Analytics Tools"]
      },
      {
        title: "Analytics in Business Domains", 
        duration: "4 hours",
        topics: ["Marketing Analytics", "Financial Analytics", "Operations Analytics", "HR Analytics"]
      },
      {
        title: "Ethics and Data Privacy",
        duration: "2 hours", 
        topics: ["Ethical Considerations in Business Analytics", "Data Privacy Regulations (GDPR, CCPA)", "Ensuring Data Security", "Responsible Data Usage"]
      }
    ],
    capstoneProjects: [
      "Customer Segmentation Analysis - Perform customer segmentation using a dataset of customer transactions",
      "Sales Forecasting Model - Develop a sales forecasting model for a retail business"
    ]
  },
  {
    id: "predictive-analytics", 
    title: "Predictive Data Analysis",
    description: "Machine learning algorithms and R programming for advanced predictive analytics and data science.",
    icon: "🤖",
    color: "from-indigo-400 to-indigo-600", 
    duration: "30 Hours",
    level: "Advanced",
    objectives: [
      "Master R/Python Programming for Data Science",
      "Implement Machine Learning Algorithms",
      "Build Forecasting and Time Series Models", 
      "Create Advanced Statistical Models",
      "Develop Model Deployment Strategies",
      "Apply Clustering and Classification Techniques"
    ],
    modules: [
      {
        title: "Introduction to Predictive Analytics and R",
        duration: "2 hours", 
        topics: ["Overview of Predictive Analytics", "Importance of Predictive Analytics in Business", "Introduction to R Programming", "Setting Up R and RStudio"]
      },
      {
        title: "Data Preparation and Cleaning",
        duration: "3 hours",
        topics: ["Importing Data in R", "Data Cleaning Techniques", "Handling Missing Values", "Data Transformation and Feature Engineering"]
      },
      {
        title: "Exploratory Data Analysis", 
        duration: "3 hours",
        topics: ["Descriptive Statistics", "Data Visualization with ggplot2", "Identifying Patterns and Trends", "Correlation Analysis"]
      },
      {
        title: "Introduction to Predictive Modeling",
        duration: "3 hours", 
        topics: ["Overview of Predictive Modeling Techniques", "Splitting Data: Training and Test Sets", "Evaluation Metrics for Predictive Models", "Introduction to Linear Regression"]
      },
      {
        title: "Regression Analysis",
        duration: "3 hours",
        topics: ["Simple Linear Regression", "Multiple Linear Regression", "Assumptions of Linear Regression", "Model Diagnostics and Validation"]
      },
      {
        title: "Classification Techniques", 
        duration: "4 hours",
        topics: ["Logistic Regression", "Decision Trees", "Random Forests", "Evaluation Metrics for Classification Models (ROC, AUC)"]
      },
      {
        title: "Clustering and Segmentation",
        duration: "3 hours", 
        topics: ["Introduction to Clustering", "K-Means Clustering", "Hierarchical Clustering", "Evaluating Clustering Results"]
      },
      {
        title: "Advanced Predictive Modeling Techniques",
        duration: "4 hours",
        topics: ["Support Vector Machines (SVM)", "Gradient Boosting Machines (GBM)", "Neural Networks", "Hyperparameter Tuning"]
      },
      {
        title: "Time Series Analysis and Forecasting", 
        duration: "3 hours",
        topics: ["Introduction to Time Series Analysis", "Decomposition of Time Series", "ARIMA Models", "Forecasting with R"]
      },
      {
        title: "Model Deployment and Visualization",
        duration: "2 hours", 
        topics: ["Introduction to Model Deployment", "Shiny for Interactive Web Applications", "Visualizing Predictive Models", "Sharing Results with Stakeholders"]
      }
    ],
    capstoneProjects: [
      "Sales Forecasting Model - Develop a sales forecasting model using historical sales data",
      "Customer Churn Prediction - Build a customer churn prediction model using customer data"
    ]
  },
  {
    id: "sql",
    title: "SQL", 
    description: "Comprehensive database management, advanced queries, and data manipulation with SQL programming.",
    icon: "🗄️",
    color: "from-red-400 to-red-600",
    duration: "30 Hours", 
    level: "Beginner to Advanced",
    objectives: [
      "Master SQL Fundamentals and Database Design",
      "Implement Advanced Query Techniques",
      "Create Stored Procedures and Functions", 
      "Optimize Database Performance",
      "Develop Data Warehousing Solutions",
      "Build ETL Processes and Data Pipelines"
    ],
    modules: [
      {
        title: "Introduction to Programming with R and Python",
        duration: "3 hours", 
        topics: ["Overview of R and Python", "Installing R, Python and IDEs", "Setting Up Python and IDEs (Anaconda, Jupyter Notebook)", "Basic Syntax and Data Types in R and Python"]
      },
      {
        title: "Control Structures",
        duration: "3 hours",
        topics: ["Conditional Statements", "Loops (for, while)", "User Control (break, next, continue)", "Functions and Control Flow Manipulation"]
      },
      {
        title: "Data Input and Output", 
        duration: "3 hours",
        topics: ["Reading and Writing Data Files (CSV, Excel, JSON)", "Web Scraping Basics", "APIs and Data Collection", "Data Input/Output in R and Python"]
      },
      {
        title: "Data Visualization",
        duration: "3 hours", 
        topics: ["Introduction to Data Visualization", "Plotting with matplotlib, seaborn (Python) and ggplot2, lattice (R)", "Customizing Plots (labels, legends, colors)", "Data Visualization with ggplot2 in R and matplotlib/seaborn in Python"]
      }
    ]
  },
  {
    id: "soft-skills", 
    title: "Soft Skills & Placement",
    description: "Essential communication, leadership, and interview preparation skills for career success and professional growth.",
    icon: "🎯",
    color: "from-pink-400 to-pink-600", 
    duration: "30 Hours",
    level: "All Levels",
    objectives: [
      "Develop Professional Communication Skills",
      "Master Leadership and Team Management",
      "Build Strong Interview and Presentation Skills", 
      "Create Compelling Resumes and Portfolios",
      "Enhance Workplace Etiquette and Professionalism",
      "Develop Stress Management and Adaptability"
    ],
    modules: [
      {
        title: "Introduction to Soft Skills",
        duration: "2 hours", 
        topics: ["Understanding Soft Skills", "Importance in Professional and Personal Life", "Key Soft Skills for Career Success", "Self-Assessment and Goal Setting"]
      },
      {
        title: "Communication Skills",
        duration: "4 hours",
        topics: ["Verbal and Non-Verbal Communication", "Active Listening", "Effective Speaking and Presentation Skills", "Written Communication (Emails, Reports)", "Communication Barriers and Overcoming Them"]
      },
      {
        title: "Interpersonal Skills", 
        duration: "4 hours",
        topics: ["Building Relationships", "Networking and Relationship Management", "Conflict Resolution", "Emotional Intelligence", "Empathy and Social Awareness"]
      },
      {
        title: "Time Management",
        duration: "3 hours", 
        topics: ["Importance of Time Management", "Setting Goals and Priorities", "Planning and Scheduling Techniques", "Overcoming Procrastination", "Tools and Techniques for Time Management"]
      },
      {
        title: "Leadership Skills",
        duration: "3 hours",
        topics: ["Understanding Leadership", "Leadership Styles and Theories", "Developing Leadership Skills", "Team Building and Motivation", "Delegation and Empowerment"]
      },
      {
        title: "Problem-Solving and Critical Thinking", 
        duration: "2 hours",
        topics: ["Importance of Problem-Solving", "Problem-Solving Techniques", "Critical Thinking Skills", "Creative Thinking and Innovation", "Decision-Making Processes"]
      },
      {
        title: "Stress Management and Resilience",
        duration: "2 hours", 
        topics: ["Understanding Stress and Its Impact", "Coping with Stress", "Building Resilience", "Managing Stress and Resilience", "Maintaining Work-Life Balance", "Mindfulness and Stress Reduction Techniques"]
      },
      {
        title: "Presentation Skills",
        duration: "3 hours",
        topics: ["Planning and Preparing a Presentation", "Structuring Your Presentation", "Using Visual Aids Effectively", "Managing Your Audience", "Handling Questions and Feedback", "Practice and Delivery Techniques"]
      },
      {
        title: "Professional Etiquette", 
        duration: "3 hours",
        topics: ["Workplace Etiquette", "Business Communication Etiquette", "Meeting Etiquette", "Email and Phone Etiquette", "Dress Code and Grooming", "Cultural Sensitivity"]
      },
      {
        title: "Career Development and Networking",
        duration: "4 hours", 
        topics: ["Career Planning and Goal Setting", "Building a Personal Brand", "Networking Strategies", "Job Search Techniques", "Interview Preparation and Techniques", "Salary Negotiation and Career Advancement"]
      }
    ]
  },
  {
    id: "web-development",
    title: "Web & App Development", 
    description: "Full-stack development with modern frameworks including React, Node.js, and mobile app development.",
    icon: "💻",
    color: "from-cyan-400 to-cyan-600",
    duration: "30 Hours", 
    level: "Beginner to Advanced",
    objectives: [
      "Master HTML, CSS, and JavaScript Fundamentals",
      "Build Modern Web Applications with React/Angular",
      "Develop Backend APIs with Node.js and Databases", 
      "Create Mobile Applications for iOS and Android",
      "Implement DevOps and Deployment Strategies",
      "Build Full-Stack E-commerce Solutions"
    ],
    modules: [
      {
        title: "Web Development Fundamentals",
        duration: "15 hours", 
        topics: ["HTML5 Structure and Semantics", "CSS3 Styling and Responsive Design", "JavaScript ES6+ Programming", "DOM Manipulation and Events", "Web APIs and Fetch", "Version Control with Git"]
      },
      {
        title: "Frontend Framework Development",
        duration: "25 hours",
        topics: ["React.js Components and State Management", "Angular Framework and TypeScript", "Vue.js Progressive Framework", "State Management (Redux, Vuex)", "Component Libraries and UI Frameworks", "Progressive Web Apps (PWA)"]
      },
      {
        title: "Backend Development", 
        duration: "20 hours",
        topics: ["Node.js and Express.js", "RESTful API Design and Development", "Database Design (SQL and NoSQL)", "Authentication and Authorization", "File Upload and Processing", "Error Handling and Logging"]
      },
      {
        title: "Database Management",
        duration: "10 hours", 
        topics: ["Relational Databases (MySQL, PostgreSQL)", "NoSQL Databases (MongoDB, Firebase)", "Database Design and Normalization", "Query Optimization", "Database Security", "Data Migration and Backup"]
      },
      {
        title: "Mobile App Development",
        duration: "15 hours",
        topics: ["React Native Development", "Flutter Development", "Native iOS Development (Swift)", "Native Android Development (Kotlin)", "Cross-Platform Development", "App Store Deployment"]
      },
      {
        title: "DevOps and Deployment", 
        duration: "10 hours",
        topics: ["Cloud Platforms (AWS, Azure, GCP)", "Containerization with Docker", "CI/CD Pipelines", "Server Management and Monitoring", "Performance Optimization", "Security Best Practices"]
      },
      {
        title: "Testing and Quality Assurance",
        duration: "5 hours", 
        topics: ["Unit Testing and Integration Testing", "End-to-End Testing", "Test-Driven Development (TDD)", "Code Quality and Linting", "Performance Testing", "Security Testing"]
      }
    ],
    capstoneProjects: [
      "E-commerce Web Application - Build a full-stack e-commerce platform with payment integration",
      "Social Media Mobile App - Create a mobile application with real-time features and user authentication"
    ]
  }
];
