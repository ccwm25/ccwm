/**
 * CCWM Website - Main JavaScript
 * Handles mobile menu and interactive features
 */

(function() {
    'use strict';

    // ===== Mobile Menu Toggle =====
    function initMobileMenu() {
        const menuToggle = document.getElementById('mobileMenuToggle');
        const mainNav = document.getElementById('mainNav');

        if (!menuToggle || !mainNav) return;

        // Toggle menu on button click
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)) {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            }
        });

        // Close menu when clicking a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    menuToggle.classList.remove('active');
                    mainNav.classList.remove('active');
                }
            }, 250);
        });
    }

    // ===== Show More Button for News =====
    function initShowMoreNews() {
        const showMoreBtn = document.getElementById('showMoreNews');
        if (!showMoreBtn) return;

        showMoreBtn.addEventListener('click', function() {
            const hiddenItems = document.querySelectorAll('.news-item[data-more="true"]');
            
            hiddenItems.forEach(function(item) {
                item.classList.remove('hidden');
            });

            // Hide the button after showing all items
            const btnContainer = this.parentElement;
            if (btnContainer) {
                btnContainer.style.display = 'none';
            }
        });
    }

    // ===== Show More Button for Events =====
    function initShowMoreEvents() {
        const showMoreBtn = document.getElementById('showMoreEvents');
        if (!showMoreBtn) return;

        showMoreBtn.addEventListener('click', function() {
            const hiddenItems = document.querySelectorAll('.event-item[data-more="true"]');
            
            hiddenItems.forEach(function(item) {
                item.classList.remove('hidden');
            });

            // Hide the button after showing all items
            const btnContainer = this.parentElement;
            if (btnContainer) {
                btnContainer.style.display = 'none';
            }
        });
    }

    // ===== Smooth Scroll for Anchor Links =====
    function initSmoothScroll() {
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#"
                if (href === '#') return;

                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ===== Back to Top Button =====
    function initBackToTop() {
        // Check if we're on mobile
        if (window.innerWidth <= 768) {
            const backToTopBtn = document.createElement('button');
            backToTopBtn.innerHTML = '↑';
            backToTopBtn.className = 'back-to-top';
            backToTopBtn.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 44px;
                height: 44px;
                background-color: #333;
                color: #fff;
                border: none;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s, visibility 0.3s;
                z-index: 998;
            `;

            document.body.appendChild(backToTopBtn);

            // Show/hide button based on scroll position
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.style.opacity = '1';
                    backToTopBtn.style.visibility = 'visible';
                } else {
                    backToTopBtn.style.opacity = '0';
                    backToTopBtn.style.visibility = 'hidden';
                }
            });

            // Scroll to top on click
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ===== Initialize All Functions =====
    function init() {
        initMobileMenu();
        initShowMoreNews();
        initShowMoreEvents();
        initSmoothScroll();
        initBackToTop();
    }

    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

