// OneTrue Assist - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeTabs();
    initializeSearch();
    initializeNavigation();
    initializeMobileMenu();
});

// Tab Functionality
function initializeTabs() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and contents
            tabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            document.getElementById(targetTab).classList.add('active');
            
            // Update URL hash for bookmarking
            window.location.hash = targetTab;
        });
    });

    // Handle initial tab from URL hash
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        const targetTab = document.querySelector(`[data-tab="${hash}"]`);
        if (targetTab) {
            targetTab.click();
        }
    }
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.querySelector('.search-input');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.card');
        
        cards.forEach(card => {
            const title = card.querySelector('.card-title')?.textContent.toLowerCase() || '';
            const description = card.querySelector('.card-description')?.textContent.toLowerCase() || '';
            const eyebrow = card.querySelector('.card-eyebrow')?.textContent.toLowerCase() || '';
            
            const matches = title.includes(searchTerm) || 
                          description.includes(searchTerm) || 
                          eyebrow.includes(searchTerm);
            
            if (matches || !searchTerm) {
                card.style.display = 'block';
                card.style.opacity = '1';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });

        // Show/hide section headers based on visible cards
        updateSectionVisibility();
    });

    // Clear search on Escape key
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            this.dispatchEvent(new Event('input'));
        }
    });
}

// Update section visibility based on visible cards
function updateSectionVisibility() {
    const sections = document.querySelectorAll('.section-header');
    
    sections.forEach(section => {
        const sectionContent = section.nextElementSibling;
        if (sectionContent) {
            const visibleCards = sectionContent.querySelectorAll('.card[style*="display: block"], .card:not([style*="display: none"])');
            if (visibleCards.length === 0) {
                section.style.display = 'none';
            } else {
                section.style.display = 'block';
            }
        }
    });
}

// Navigation Functionality
function initializeNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all nav items
            navItems.forEach(nav => nav.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Handle navigation logic here
            const navText = this.querySelector('.nav-text')?.textContent;
            console.log(`Navigating to: ${navText}`);
            
            // You can add actual navigation logic here
            console.log(`Navigating to ${navText}...`);
        });
    });
}

// Mobile Menu Functionality
function initializeMobileMenu() {
    // Create mobile menu toggle button
    const navbarContainer = document.querySelector('.navbar-container');
    const mobileToggle = document.createElement('button');
    mobileToggle.className = 'mobile-menu-toggle';
    mobileToggle.innerHTML = '<span class="material-icons">menu</span>';
    mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
    
    // Insert toggle button at the beginning of navbar
    navbarContainer.insertBefore(mobileToggle, navbarContainer.firstChild);
    
    const sidebar = document.querySelector('.sidebar');
    
    mobileToggle.addEventListener('click', function() {
        sidebar.classList.toggle('open');
        const isOpen = sidebar.classList.contains('open');
        
        // Update button icon
        this.innerHTML = isOpen ? 
            '<span class="material-icons">close</span>' : 
            '<span class="material-icons">menu</span>';
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickInsideSidebar = sidebar.contains(e.target);
            const isClickOnToggle = mobileToggle.contains(e.target);
            
            if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
                mobileToggle.innerHTML = '<span class="material-icons">menu</span>';
                document.body.style.overflow = '';
            }
        }
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('open');
            mobileToggle.innerHTML = '<span class="material-icons">menu</span>';
            document.body.style.overflow = '';
        }
    });
}

// Deploy Button Functionality
function initializeDeployButtons() {
    const deployButtons = document.querySelectorAll('.deploy-button');
    
    deployButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.card');
            const title = card.querySelector('.card-title')?.textContent || 'Unknown';
            
            // Add loading state
            const originalText = this.innerHTML;
            this.innerHTML = '<span class="material-icons">hourglass_empty</span> Deploying...';
            this.disabled = true;
            
            // Simulate deployment process
            setTimeout(() => {
                this.innerHTML = originalText;
                this.disabled = false;
                console.log(`${title} deployed successfully!`);
            }, 2000);
        });
    });
}


// Initialize deploy buttons when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initializeDeployButtons();
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Tab navigation with arrow keys
    if (e.altKey) {
        const tabs = document.querySelectorAll('.tab');
        const activeTab = document.querySelector('.tab.active');
        const activeIndex = Array.from(tabs).indexOf(activeTab);
        
        if (e.key === 'ArrowLeft' && activeIndex > 0) {
            e.preventDefault();
            tabs[activeIndex - 1].click();
        } else if (e.key === 'ArrowRight' && activeIndex < tabs.length - 1) {
            e.preventDefault();
            tabs[activeIndex + 1].click();
        }
    }
    
    // Focus search with Ctrl+K
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.focus();
        }
    }
});

// Performance optimization: Debounce search input
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to search
const debouncedSearch = debounce(function(searchTerm) {
    // Search logic here
}, 300);
