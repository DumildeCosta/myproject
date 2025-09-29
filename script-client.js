
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#10b981',
                        secondary: '#4f46e5',
                        dark: '#1e293b',
                        light: '#f8fafc'
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            },
            darkMode: 'class'
        }
   
      
        // Theme toggle
        const themeToggle = document.getElementById('theme-toggle');
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        
        function toggleTheme() {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
            feather.replace();
        }
        
        // Check for saved theme preference or use system preference
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
            document.documentElement.classList.add('dark');
        }
        
        themeToggle.addEventListener('click', toggleTheme);
        
        // Mobile sidebar toggle
        const openSidebarBtn = document.getElementById('open-sidebar');
        const closeSidebarBtn = document.getElementById('close-sidebar');
        const mobileSidebarOverlay = document.getElementById('mobile-sidebar-overlay');
        const sidebar = document.querySelector('.mobile-sidebar');
        
        openSidebarBtn.addEventListener('click', function() {
            sidebar.classList.add('open');
            mobileSidebarOverlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
        
        closeSidebarBtn.addEventListener('click', function() {
            sidebar.classList.remove('open');
            mobileSidebarOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        mobileSidebarOverlay.addEventListener('click', function() {
            sidebar.classList.remove('open');
            mobileSidebarOverlay.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        // Initialize feather icons
        document.addEventListener('DOMContentLoaded', function() {
            feather.replace();
        });
 