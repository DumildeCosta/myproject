// Tailwind CSS configuration
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#4f46e5',
                        secondary: '#10b981',
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
        
        // Password visibility toggle
        const togglePassword = document.getElementById('toggle-password');
        const passwordInput = document.getElementById('password');
        
        if (togglePassword && passwordInput) {
            togglePassword.addEventListener('click', function() {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                this.innerHTML = feather.icons[type === 'password' ? 'eye' : 'eye-off'].toSvg();
            });
        }
        
        // Form submission and role selection
        const loginForm = document.getElementById('login-form');
        const loginContainer = document.getElementById('login-container');
        const roleSelection = document.getElementById('role-selection');
        const providerBtn = document.getElementById('provider-btn');
        const clientBtn = document.getElementById('client-btn');
        const backToLogin = document.getElementById('back-to-login');
        const clientDashboard = document.getElementById('client-dashboard');
        const providerDashboard = document.getElementById('provider-dashboard');
        
        if (loginForm) {
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                if (!email || !password) {
                    alert('Por favor, preencha todos os campos');
                    return;
                }
                
                setTimeout(() => {
                    loginContainer.classList.add('hidden');
                    roleSelection.classList.remove('hidden');
                }, 500);
            });
        }
        
        if (backToLogin) {
            backToLogin.addEventListener('click', function() {
                roleSelection.classList.add('hidden');
                loginContainer.classList.remove('hidden');
            });
        }
        
        if (providerBtn) {
            providerBtn.addEventListener('click', function() {
                roleSelection.classList.add('hidden');
                providerDashboard.classList.remove('hidden');
            });
        }
        
        if (clientBtn) {
            clientBtn.addEventListener('click', function() {
                roleSelection.classList.add('hidden');
                clientDashboard.classList.remove('hidden');
            });
        }
        
        // Mobile sidebar toggle for dashboards
        const openSidebarBtns = document.querySelectorAll('#open-sidebar');
        const closeSidebarBtns = document.querySelectorAll('#close-sidebar');
        const mobileSidebarOverlays = document.querySelectorAll('#mobile-sidebar-overlay');
        const sidebars = document.querySelectorAll('.mobile-sidebar');
        
        openSidebarBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const sidebar = this.closest('.flex').querySelector('.mobile-sidebar');
                const overlay = this.closest('.flex').querySelector('#mobile-sidebar-overlay');
                sidebar.classList.add('open');
                overlay.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeSidebarBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const sidebar = this.closest('.mobile-sidebar');
                const overlay = document.querySelector('#mobile-sidebar-overlay');
                sidebar.classList.remove('open');
                overlay.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        });
        
        mobileSidebarOverlays.forEach(overlay => {
            overlay.addEventListener('click', function() {
                const sidebar = document.querySelector('.mobile-sidebar.open');
                sidebar.classList.remove('open');
                this.classList.add('hidden');
                document.body.style.overflow = 'auto';
            });
        });
        
        // Initialize feather icons
        document.addEventListener('DOMContentLoaded', function() {
            feather.replace();
        });

      
  document.getElementById("client-btn").addEventListener("click", function () {
    window.location.href = "client-dashboard.html"; // abre cliente.html
  });

  document.getElementById("provider-btn").addEventListener("click", function () {
    window.location.href = "provider-dashboard.html"; // abre prestador.html
  });

