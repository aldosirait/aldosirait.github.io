// Language: English
const en = {
    // Navigation
    nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
    },

    // Hero Section
    hero: {
        title: 'JOHN DEVELOPER',
        subtitle: 'Full Stack Developer'
    },

    // About Section
    about: {
        title: 'About Me',
        description_1: 'I am a software developer with around 2 years of experience, mainly focused on backend development. I work with technologies such as Go, Laravel, and CodeIgniter to build reliable and scalable RESTful APIs.',
        description_2: 'I enjoy adapting to new technologies and challenges in software development. I also work with databases such as MySQL and MariaDB, and use Redis to improve application performance.'
    },

    // Skills Section
    skills: {
        title: 'Skills'
    },

    // Projects Section
    projects: {
        title: 'Projects',
        items: {
            ecommerce: {
                title: 'E-Commerce Platform',
                description: 'Complete e-commerce platform with payment system, inventory management, and powerful admin dashboard.'
            },
            task_management: {
                title: 'Task Management App',
                description: 'Task management application with real-time collaboration features, notifications, and calendar integration.'
            },
            portfolio_cms: {
                title: 'Portfolio CMS',
                description: 'Content Management System for portfolios with drag-and-drop builder and multiple themes.'
            },
            ai_chatbot: {
                title: 'AI Chat Bot',
                description: 'AI-based chatbot for customer service with natural language processing and machine learning.'
            },
            fitness_app: {
                title: 'Fitness Tracking App',
                description: 'Mobile app for tracking workouts, nutrition, and progress with analytics and social features.'
            },
            blockchain_wallet: {
                title: 'Blockchain Wallet',
                description: 'Cryptocurrency wallet with multi-chain support, swap features, and security encryption.'
            }
        }
    },

    // Contact Section
    contact: {
        title: 'Contact Me',
        form: {
            name_placeholder: 'Name',
            email_placeholder: 'Email',
            message_placeholder: 'Message',
            submit_button: 'SEND MESSAGE',
            success_message: 'Thank you! Your message has been sent.'
        }
    },

    // Footer
    footer: {
        copyright: '2026 John Developer. All rights reserved.'
    }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = en;
}