// Language: Indonesian (Bahasa Indonesia)
const id = {
    // Navigation
    nav: {
        about: 'Tentang',
        skills: 'Alat Pengembangan',
        projects: 'Proyek',
        contact: 'Kontak'
    },

    // Hero Section
    hero: {
        title: 'JOHN DEVELOPER',
        subtitle: 'Full Stack Developer'
    },

    // About Section
    about: {
        title: 'Tentang Saya',
        description_1: 'Saya adalah seorang software developer dengan pengalaman sekitar 2 tahun yang berfokus pada pengembangan backend. Saya terbiasa menggunakan Go, Laravel, dan CodeIgniter untuk membangun RESTful API yang stabil dan scalable.',
        description_2: 'Saya senang beradaptasi dengan teknologi baru serta menghadapi tantangan dalam dunia pengembangan software. Saya juga terbiasa mengelola database seperti MySQL dan MariaDB, serta menggunakan Redis untuk meningkatkan performa aplikasi.'
    },

    // Skills Section
    skills: {
        title: 'Keahlian'
    },

    // Projects Section
    projects: {
        title: 'Proyek',
        items: {
            ecommerce: {
                title: 'Platform E-Commerce',
                description: 'Platform e-commerce lengkap dengan sistem pembayaran, manajemen inventory, dan dashboard admin yang powerful.'
            },
            task_management: {
                title: 'Aplikasi Manajemen Tugas',
                description: 'Aplikasi manajemen tugas dengan fitur kolaborasi real-time, notifikasi, dan integrasi kalender.'
            },
            portfolio_cms: {
                title: 'Portfolio CMS',
                description: 'Content Management System untuk portfolio dengan drag-and-drop builder dan multiple themes.'
            },
            ai_chatbot: {
                title: 'AI Chat Bot',
                description: 'Chatbot berbasis AI untuk customer service dengan natural language processing dan machine learning.'
            },
            fitness_app: {
                title: 'Aplikasi Fitness Tracking',
                description: 'Aplikasi mobile untuk tracking workout, nutrition, dan progress dengan analytics dan social features.'
            },
            blockchain_wallet: {
                title: 'Blockchain Wallet',
                description: 'Cryptocurrency wallet dengan multi-chain support, swap features, dan security encryption.'
            }
        }
    },

    // Contact Section
    contact: {
        title: 'Hubungi Saya',
        form: {
            name_placeholder: 'Nama',
            email_placeholder: 'Email',
            message_placeholder: 'Pesan',
            submit_button: 'KIRIM PESAN',
            success_message: 'Terima kasih! Pesan Anda telah terkirim.'
        }
    },

    // Footer
    footer: {
        copyright: '2026 John Developer. All rights reserved.'
    }
};

// Export untuk digunakan di file lain
if (typeof module !== 'undefined' && module.exports) {
    module.exports = id;
}