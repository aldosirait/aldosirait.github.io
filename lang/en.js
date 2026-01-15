// Language: English
const en = {
    // Navigation
    nav: {
        about: 'About',
        skills: 'Tools',
        projects: 'Projects',
        contact: 'Contact'
    },

    // Hero Section
    hero: {
        title: 'ALDO ALFREDO SIRAIT',
        subtitle: 'Software Developer'
    },

    // About Section
    about: {
        title: 'About Me',
        description_1: 'I am a software developer with around 2 years of experience, mainly focused on backend development. I work with technologies such as Go, Laravel, and CodeIgniter to build reliable and scalable RESTful APIs.',
        description_2: 'I enjoy adapting to new technologies and challenges in software development. I also work with databases such as MySQL and MariaDB to improve application performance.'
    },

    // Skills Section
    skills: {
        title: 'Tools'
    },

    // Projects Section
    projects: {
        title: 'Projects',
        items: {
            waiting_list_outlet: {
                title: 'Outlet Waiting List System',
                description: 'Windows and Android-based queue management system used by multiple restaurant outlets such as Beauty In The Pot Plaza Senayan, Tom Sushi, Sushi Tei, and Paradise Dynasty.'
            },
            recruitment_bisagroup: {
                title: 'Bisagroup Recruitment System',
                description: 'Web-based recruitment system focused on backend development including API creation, PDF export features, and currently used by more than 400 registered users.'
            },
            pickup_waiting_list: {
                title: 'Pickup Waiting List System',
                description: 'Windows-based system used to record and call ready-to-pickup orders efficiently.'
            },
            voucher_system: {
                title: 'Voucher System Enhancement',
                description: 'Development of new features in an existing web-based voucher system, including bulk approve and bulk reject functionality for voucher requests.'
            },
            helpdesk_system: {
                title: 'Helpdesk System Enhancement',
                description: 'Feature enhancements for a helpdesk ticketing system such as new statuses (waiting for vendor, waiting for part, resolved), timeline analytics dashboard, and spare-part management.'
            },
            invoice_exchange: {
                title: 'Invoice Exchange System',
                description: 'Feature development for an existing website to enable report exports in Excel and PDF formats.'
            },
            hris_system: {
                title: 'HRIS System (Ongoing)',
                description: 'Ongoing backend development for an internal HRIS including overtime requests, announcements, leave requests, Google OAuth integration, and employee status management.'
            },
            asset_management: {
                title: 'Asset Management System',
                description: 'Enhancement of asset inventory system to record and monitor warranty periods for company assets.'
            },
            graphic_design_book: {
                title: 'Graphic Design Book: Theory and Practice',
                description: 'Participated in the development of the book "Graphic Design: Theory and Practice" using CorelDRAW X7.'
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