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
        title: 'ALDO ALFREDO SIRAIT',
        subtitle: 'Software Developer'
    },

    // About Section
    about: {
        title: 'Tentang Saya',
        description_1: 'Saya adalah seorang software developer dengan pengalaman sekitar 2 tahun yang berfokus pada pengembangan backend. Saya terbiasa menggunakan Go, Laravel, dan CodeIgniter untuk membangun RESTful API yang stabil dan scalable.',
        description_2: 'Saya senang beradaptasi dengan teknologi baru serta menghadapi tantangan dalam dunia pengembangan software. Saya juga terbiasa mengelola database seperti MySQL dan MariaDB untuk meningkatkan performa aplikasi.'
    },

    // Skills Section
    skills: {
        title: 'Alat Pengembangan'
    },

    // Projects Section
    projects: {
        title: 'Proyek',
        items: {
            waiting_list_outlet: {
                title: 'Sistem Waiting List Outlet',
                description: 'Sistem antrian berbasis Windows dan Android yang digunakan di beberapa outlet restoran seperti Beauty In The Pot Plaza Senayan, Tom Sushi, Sushi Tei, dan Paradise Dynasty.'
            },
            recruitment_bisagroup: {
                title: 'Sistem Recruitment Bisagroup',
                description: 'Sistem rekrutmen berbasis web dengan fokus pada pengembangan backend seperti pembuatan API, fitur export PDF, dan telah digunakan oleh lebih dari 400 user terdaftar.'
            },
            pickup_waiting_list: {
                title: 'Sistem Pickup Waiting List',
                description: 'Sistem berbasis Windows yang digunakan untuk mencatat dan memanggil pesanan pickup yang sudah siap.'
            },
            voucher_system: {
                title: 'Pengembangan Sistem Voucher',
                description: 'Pengembangan fitur baru pada sistem voucher berbasis web berupa bulk approve dan bulk reject untuk permintaan voucher.'
            },
            helpdesk_system: {
                title: 'Pengembangan Sistem Helpdesk',
                description: 'Pengembangan fitur pada sistem helpdesk seperti penambahan status waiting for vendor, waiting for part, resolved sebelum finish, dashboard analisis timeline, dan manajemen part.'
            },
            invoice_exchange: {
                title: 'Sistem Tukar Faktur',
                description: 'Pengembangan fitur pada website existing agar laporan dapat di-export ke dalam format Excel dan PDF.'
            },
            hris_system: {
                title: 'Sistem HRIS (On Going)',
                description: 'Pengembangan backend sistem HRIS internal untuk manajemen karyawan seperti permintaan lembur, pengumuman, cuti, integrasi Google OAuth, dan perubahan status pegawai.'
            },
            asset_management: {
                title: 'Manajemen Asset',
                description: 'Pengembangan sistem inventory asset untuk mencatat dan memantau masa garansi asset perusahaan.'
            },
            graphic_design_book: {
                title: 'Buku Desain Grafis: Teori dan Praktek',
                description: 'Ikut serta dalam pengembangan buku Desain Grafis: Teori dan Praktek dengan menggunakan CorelDRAW X7.'
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