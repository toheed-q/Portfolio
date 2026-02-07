import { getImgPath } from "@/utils/image";

export const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Blog", href: "/#blog" },
];

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "3+",
        description: "Years of professional experience in .NET development",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "25+",
        description: "Successfully completed projects across various domains",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "100%",
        description: "Client satisfaction rate with quality deliverables",
    },
];

export const Progress = [
    { title: 'C#', Progress: 80 },
    { title: 'ASP.NET Core', Progress: 80 },
    { title: 'Blazor', Progress: 78 },
    { title: 'Blazor Hybrid MAUI', Progress: 88 },
    { title: 'WPF', Progress: 85 },
    { title: 'SQL Server', Progress: 75 },
    { title: 'Entity Framework Core', Progress: 82 }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Full Stack .NET Development',
        description: 'Building enterprise-grade applications using ASP.NET Core, Blazor, and modern web technologies with clean architecture principles.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Blazor Applications',
        description: 'Creating interactive web applications using Blazor Server and WebAssembly for rich, responsive user experiences.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'WPF Desktop Applications',
        description: 'Developing robust Windows desktop applications with WPF using MVVM pattern and modern UI/UX design.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'API Development',
        description: 'Designing and implementing RESTful APIs with ASP.NET Core Web API, ensuring security, scalability, and performance.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Database Design',
        description: 'Creating efficient database schemas, stored procedures, and optimizing queries for SQL Server and other databases.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Cloud Solutions',
        description: 'Deploying and managing applications on Azure cloud platform with best practices for security and scalability.',
    },
]

export const portfolioinfo = [
    {
        image: getImgPath('/images/portfolio/dms mockup.webp'),
        alt: 'Distribution Management System',
        title: 'Distribution Management System (DMS)',
        slug: 'dms',
        info: 'WPF Desktop Application',
        description: 'Windows Desktop Application | .NET 8 WPF | MVVM | Entity Framework Core (EF Core) + SQLite. Developed a secure POS-integrated inventory management system with real-time stock, sales, and ledger tracking. Implemented role-based access control with SHA-256 password hashing and user approval workflows.',
        tech: ['WPF', '.NET 8', 'MVVM', 'EF Core', 'SQLite'],
        link: 'https://github.com/toheed-q/Inventory-Management-System',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/maui.png'),
        alt: 'Smart Tales & Task App',
        title: 'Smart Tales & Task App',
        slug: 'smart-tales',
        info: 'Blazor MAUI Cross-Platform App',
        description: 'Cross-Platform App | .NET Blazor Hybrid (MAUI) | OpenAI API | OCR | TTS (Twilio) | FastAPI. Built a cross-platform app using .NET Blazor Hybrid (MAUI) and OpenAI API for AI-powered storytelling. Integrated OCR, TTS (Twilio), and FastAPI microservices for task management and interactive storytelling workflows.',
        tech: ['Blazor MAUI', 'OpenAI API', 'OCR', 'TTS', 'FastAPI'],
        link: 'https://github.com/toheed-q',
        Class: 'md:mt-24'
    },
    {
        image: getImgPath('/images/portfolio/hall.png'),
        alt: 'HallMasterPro',
        title: 'HallMasterPro',
        slug: 'hallmasterpro',
        info: 'Blazor Static SSR Web Application',
        description: 'Web Application | Blazor Static SSR | .NET | SQL Server | EF Core | SignalR. Developed a full-stack application using Clean Architecture with modular layers. Implemented role-based access control, multi-entity management, payments, notifications, and reporting. Integrated SignalR for real-time updates on dashboards and system events.',
        tech: ['Blazor Static SSR', 'SQL Server', 'EF Core', 'SignalR', 'Clean Architecture'],
        link: '',
        Class: 'md:mt-0'
    },
    {
        image: getImgPath('/images/portfolio/book store.jpg'),
        alt: 'FableNest',
        title: 'FableNest E-Commerce Book Store',
        slug: 'fablenest',
        info: 'ASP.NET Core Web Application',
        description: 'E-Commerce Web Application | ASP.NET Core | Entity Framework Core | SQL Server | Razor Pages. Built a full-featured online bookstore with shopping cart, payment integration, order management, and admin dashboard. Implemented secure authentication, product catalog, and inventory management.',
        tech: ['ASP.NET Core', 'EF Core', 'SQL Server', 'Razor Pages'],
        link: 'https://github.com/toheed-q/-Ecommerce-Book-Store',
        Class: 'md:mt-24'
    }
]