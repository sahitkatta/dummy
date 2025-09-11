// OneTrue Assist - Interactive Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initializeTabs();
    initializeSearch();
    initializeNavigation();
    initializeMobileMenu();
    initializeChatbot();
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
            
            // Check if it's the Data Onboarding Assistant
            if (title === 'Data Onboarding Assistant') {
                openChatbot();
            } else {
                // Add loading state for other assistants
                const originalText = this.innerHTML;
                this.innerHTML = '<span class="material-icons">hourglass_empty</span> Deploying...';
                this.disabled = true;
                
                // Simulate deployment process
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                    console.log(`${title} deployed successfully!`);
                }, 2000);
            }
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

// Chatbot Functionality
function initializeChatbot() {
    const defaultContent = document.getElementById('default-content');
    const chatbotContent = document.getElementById('chatbot-content');
    const chatbotWelcome = document.getElementById('chatbot-welcome');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInputContainer = document.getElementById('chatbot-input-container');
    const chatbotClose = document.getElementById('chatbot-close');
    const mainInput = document.getElementById('main-chatbot-input');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const seeMoreBtn = document.getElementById('see-more-btn');
    const additionalSuggestions = document.getElementById('additional-suggestions');
    const suggestionBoxes = document.querySelectorAll('.suggestion-box');

    // Close chatbot and return to main content
    chatbotClose.addEventListener('click', closeChatbot);

    // Send message on Enter key (main input)
    mainInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Send message on Enter key (chat input)
    chatbotInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendChatMessage();
        }
    });

    // Send message on button click
    chatbotSend.addEventListener('click', sendChatMessage);

    // Handle see more button click
    seeMoreBtn.addEventListener('click', toggleAdditionalSuggestions);

    // Handle suggestion box clicks (initial boxes)
    suggestionBoxes.forEach(box => {
        box.addEventListener('click', function() {
            const suggestion = this.getAttribute('data-suggestion');
            mainInput.value = suggestion;
            sendMessage();
        });
    });

    // Handle additional suggestion box clicks
    function handleAdditionalSuggestions() {
        const additionalBoxes = additionalSuggestions.querySelectorAll('.suggestion-box');
        additionalBoxes.forEach(box => {
            box.addEventListener('click', function() {
                const suggestion = this.getAttribute('data-suggestion');
                mainInput.value = suggestion;
                sendMessage();
            });
        });
    }

    function openChatbot() {
        defaultContent.style.display = 'none';
        chatbotContent.style.display = 'flex';
        mainInput.focus();
    }

    function closeChatbot() {
        chatbotContent.style.display = 'none';
        defaultContent.style.display = 'block';
        // Reset chatbot state
        chatbotWelcome.style.display = 'flex';
        chatbotMessages.innerHTML = '';
        chatbotInputContainer.style.display = 'none';
        chatbotMessages.classList.remove('active');
        // Reset see more state
        additionalSuggestions.style.display = 'none';
        seeMoreBtn.classList.remove('expanded');
        seeMoreBtn.querySelector('span:first-child').textContent = 'See more';
    }

    function toggleAdditionalSuggestions() {
        const isExpanded = additionalSuggestions.style.display !== 'none';
        
        if (isExpanded) {
            // Hide additional suggestions
            additionalSuggestions.style.display = 'none';
            seeMoreBtn.classList.remove('expanded');
            seeMoreBtn.querySelector('span:first-child').textContent = 'See more';
        } else {
            // Show additional suggestions
            additionalSuggestions.style.display = 'grid';
            seeMoreBtn.classList.add('expanded');
            seeMoreBtn.querySelector('span:first-child').textContent = 'See less';
            // Add event listeners to additional suggestions
            handleAdditionalSuggestions();
        }
    }

    function sendMessage() {
        const message = mainInput.value.trim();
        if (!message) return;

        // Hide welcome section and show messages
        chatbotWelcome.style.display = 'none';
        chatbotMessages.classList.add('active');
        chatbotInputContainer.style.display = 'block';

        // Add user message
        addMessage(message, 'user');
        mainInput.value = '';

        // Simulate assistant response
        setTimeout(() => {
            const response = getAssistantResponse(message);
            addMessage(response, 'assistant');
        }, 1000);
    }

    function sendChatMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Simulate assistant response
        setTimeout(() => {
            const response = getAssistantResponse(message);
            addMessage(response, 'assistant');
        }, 1000);
    }

    function addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.innerHTML = `<span class="material-icons">${sender === 'user' ? 'person' : 'smart_toy'}</span>`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        
        if (sender === 'assistant' && typeof content === 'object' && content.type === 'form') {
            // Create form response
            const greeting = document.createElement('p');
            greeting.textContent = content.greeting;
            greeting.style.marginBottom = '16px';
            messageContent.appendChild(greeting);
            
            const form = document.createElement('form');
            form.className = 'chatbot-form';
            
            // Add form grid if specified
            if (content.form.useGrid) {
                form.className += ' form-grid';
            }
            
            // Add dropdowns
            if (content.form.dropdowns) {
                content.form.dropdowns.forEach(dropdown => {
                    const dropdownContainer = document.createElement('div');
                    dropdownContainer.className = `form-field ${dropdown.fullWidth ? 'full-width' : ''}`;
                    
                    const label = document.createElement('label');
                    label.textContent = dropdown.label;
                    label.setAttribute('for', dropdown.id);
                    
                    const materialSelect = document.createElement('div');
                    materialSelect.className = 'material-select';
                    
                    const select = document.createElement('select');
                    select.id = dropdown.id;
                    select.name = dropdown.id;
                    select.required = dropdown.required || false;
                    
                    // Add default option
                    const defaultOption = document.createElement('option');
                    defaultOption.value = '';
                    defaultOption.textContent = '';
                    select.appendChild(defaultOption);
                    
                    // Add options
                    dropdown.options.forEach(option => {
                        const optionElement = document.createElement('option');
                        optionElement.value = option;
                        optionElement.textContent = option;
                        select.appendChild(optionElement);
                    });
                    
                    const selectLabel = document.createElement('span');
                    selectLabel.className = 'select-label';
                    selectLabel.textContent = dropdown.placeholder || `Select ${dropdown.label}`;
                    
                    materialSelect.appendChild(select);
                    materialSelect.appendChild(selectLabel);
                    
                    dropdownContainer.appendChild(label);
                    dropdownContainer.appendChild(materialSelect);
                    form.appendChild(dropdownContainer);
                });
            }
            
            // Add text fields
            if (content.form.textFields) {
                content.form.textFields.forEach(textField => {
                    const fieldContainer = document.createElement('div');
                    fieldContainer.className = `form-field ${textField.fullWidth ? 'full-width' : ''}`;
                    
                    const label = document.createElement('label');
                    label.textContent = textField.label;
                    label.setAttribute('for', textField.id);
                    
                    const materialInput = document.createElement('div');
                    materialInput.className = 'material-input';
                    
                    const input = document.createElement('input');
                    input.type = textField.type || 'text';
                    input.id = textField.id;
                    input.name = textField.id;
                    input.required = textField.required || false;
                    
                    const inputLabel = document.createElement('span');
                    inputLabel.className = 'input-label';
                    inputLabel.textContent = textField.placeholder || textField.label;
                    
                    materialInput.appendChild(input);
                    materialInput.appendChild(inputLabel);
                    
                    fieldContainer.appendChild(label);
                    fieldContainer.appendChild(materialInput);
                    form.appendChild(fieldContainer);
                });
            }
            
            // Add submit button
            const submitButton = document.createElement('button');
            submitButton.type = 'submit';
            submitButton.className = 'form-submit-btn';
            submitButton.textContent = content.form.submitText;
            
            form.appendChild(submitButton);
            messageContent.appendChild(form);
            
            // Add form submit handler
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const formValues = {};
                for (let [key, value] of formData.entries()) {
                    formValues[key] = value;
                }
                
                // Add user message showing form submission
                const submissionText = `Submitted: ${Object.entries(formValues).map(([key, value]) => `${key}: ${value}`).join(', ')}`;
                addMessage(submissionText, 'user');
                
                // Simulate next response
                setTimeout(() => {
                    const nextResponse = getNextFormResponse(formValues);
                    addMessage(nextResponse, 'assistant');
                }, 1000);
            });
            
        } else {
            // Regular text message
            messageContent.innerHTML = `<p>${content}</p>`;
        }
        
        messageDiv.appendChild(avatar);
        messageDiv.appendChild(messageContent);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function getAssistantResponse(userMessage) {
        const lowerMessage = userMessage.toLowerCase();
        
        if (lowerMessage.includes('onboard') || lowerMessage.includes('data asset')) {
            return {
                type: 'form',
                greeting: "Welcome! Let's set up your data onboarding project. Please provide the following information:",
                form: {
                    useGrid: true,
                    dropdowns: [
                        {
                            id: 'entity-type',
                            label: 'Entity Type',
                            placeholder: 'Choose entity type',
                            options: ['Use Existing Entities', 'Create New Entities'],
                            required: true
                        },
                        {
                            id: 'project-category',
                            label: 'Project Category',
                            placeholder: 'Select category',
                            options: ['Data Warehouse', 'Data Lake', 'Analytics Platform', 'ML Pipeline'],
                            required: true
                        }
                    ],
                    textFields: [
                        {
                            id: 'project-name',
                            label: 'Project Name',
                            placeholder: 'Enter project name',
                            required: true,
                            fullWidth: true
                        }
                    ],
                    submitText: 'Start Onboarding'
                }
            };
        } else if (lowerMessage.includes('connection') || lowerMessage.includes('connect')) {
            return {
                type: 'form',
                greeting: "Let's configure your data source connection. Please provide the following details:",
                form: {
                    useGrid: true,
                    dropdowns: [
                        {
                            id: 'provider',
                            label: 'Data Provider',
                            placeholder: 'Select provider',
                            options: ['AWS S3', 'Azure Blob Storage', 'Google Cloud Storage', 'MySQL Database', 'PostgreSQL', 'MongoDB', 'API Endpoint', 'File System'],
                            required: true
                        },
                        {
                            id: 'connection-type',
                            label: 'Connection Type',
                            placeholder: 'Choose connection type',
                            options: ['Direct Connection', 'SSH Tunnel', 'VPN', 'Proxy'],
                            required: true
                        },
                        {
                            id: 'authentication',
                            label: 'Authentication',
                            placeholder: 'Select auth method',
                            options: ['Username/Password', 'API Key', 'OAuth 2.0', 'Certificate', 'IAM Role'],
                            required: true
                        },
                        {
                            id: 'encryption',
                            label: 'Encryption',
                            placeholder: 'Choose encryption',
                            options: ['TLS 1.2', 'TLS 1.3', 'SSL', 'None'],
                            required: true
                        }
                    ],
                    textFields: [
                        {
                            id: 'hostname',
                            label: 'Hostname/Endpoint',
                            placeholder: 'Enter hostname or endpoint URL',
                            required: true
                        },
                        {
                            id: 'port',
                            label: 'Port',
                            placeholder: 'Enter port number',
                            type: 'number',
                            required: true
                        },
                        {
                            id: 'database-name',
                            label: 'Database Name',
                            placeholder: 'Enter database name',
                            required: true
                        },
                        {
                            id: 'owner-email',
                            label: 'Owner Email',
                            placeholder: 'Enter owner email address',
                            type: 'email',
                            required: true,
                            fullWidth: true
                        }
                    ],
                    submitText: 'Configure Connection'
                }
            };
        } else if (lowerMessage.includes('connector') || lowerMessage.includes('add')) {
            return {
                type: 'form',
                greeting: "Let's add a new connector to your data sources. Please configure the following parameters:",
                form: {
                    useGrid: true,
                    dropdowns: [
                        {
                            id: 'connector-type',
                            label: 'Connector Type',
                            placeholder: 'Select connector type',
                            options: ['Database Connector', 'File Connector', 'API Connector', 'Cloud Connector', 'Streaming Connector', 'ETL Connector'],
                            required: true
                        },
                        {
                            id: 'data-format',
                            label: 'Data Format',
                            placeholder: 'Choose data format',
                            options: ['JSON', 'CSV', 'XML', 'Parquet', 'Avro', 'ORC', 'Binary'],
                            required: true
                        },
                        {
                            id: 'sync-frequency',
                            label: 'Sync Frequency',
                            placeholder: 'Select sync frequency',
                            options: ['Real-time', 'Every 5 minutes', 'Every hour', 'Daily', 'Weekly', 'Manual'],
                            required: true
                        },
                        {
                            id: 'error-handling',
                            label: 'Error Handling',
                            placeholder: 'Choose error handling',
                            options: ['Stop on Error', 'Skip and Continue', 'Retry with Backoff', 'Send to Dead Letter Queue'],
                            required: true
                        }
                    ],
                    textFields: [
                        {
                            id: 'connector-name',
                            label: 'Connector Name',
                            placeholder: 'Enter connector name',
                            required: true
                        },
                        {
                            id: 'endpoint-url',
                            label: 'Endpoint URL',
                            placeholder: 'Enter endpoint URL',
                            type: 'url',
                            required: true
                        },
                        {
                            id: 'batch-size',
                            label: 'Batch Size',
                            placeholder: 'Enter batch size (e.g., 1000)',
                            type: 'number',
                            required: true
                        },
                        {
                            id: 'timeout',
                            label: 'Timeout (seconds)',
                            placeholder: 'Enter timeout in seconds',
                            type: 'number',
                            required: true
                        }
                    ],
                    submitText: 'Add Connector'
                }
            };
        } else if (lowerMessage.includes('start') || lowerMessage.includes('begin')) {
            return {
                type: 'form',
                greeting: "Let's begin your data onboarding journey! Please provide the following project details:",
                form: {
                    useGrid: true,
                    dropdowns: [
                        {
                            id: 'project-type',
                            label: 'Project Type',
                            placeholder: 'Select project type',
                            options: ['Data Warehouse', 'Data Lake', 'Analytics Platform', 'ML Pipeline', 'Real-time Analytics', 'Data Science Lab'],
                            required: true
                        },
                        {
                            id: 'data-volume',
                            label: 'Expected Data Volume',
                            placeholder: 'Choose data volume',
                            options: ['Small (< 1GB)', 'Medium (1GB - 100GB)', 'Large (100GB - 1TB)', 'Enterprise (> 1TB)', 'Unlimited'],
                            required: true
                        },
                        {
                            id: 'team-size',
                            label: 'Team Size',
                            placeholder: 'Select team size',
                            options: ['1-5 users', '6-20 users', '21-50 users', '51-100 users', '100+ users'],
                            required: true
                        },
                        {
                            id: 'compliance',
                            label: 'Compliance Requirements',
                            placeholder: 'Select compliance',
                            options: ['GDPR', 'HIPAA', 'SOX', 'PCI DSS', 'None', 'Other'],
                            required: true
                        }
                    ],
                    textFields: [
                        {
                            id: 'project-name',
                            label: 'Project Name',
                            placeholder: 'Enter project name',
                            required: true
                        },
                        {
                            id: 'description',
                            label: 'Project Description',
                            placeholder: 'Brief description of your project',
                            required: true,
                            fullWidth: true
                        }
                    ],
                    submitText: 'Create Project'
                }
            };
        } else if (lowerMessage.includes('help') || lowerMessage.includes('guidance')) {
            return {
                type: 'form',
                greeting: "I'm here to help! Let me understand your specific needs and provide targeted assistance:",
                form: {
                    useGrid: true,
                    dropdowns: [
                        {
                            id: 'help-category',
                            label: 'Help Category',
                            placeholder: 'Select help category',
                            options: ['Getting Started', 'Data Sources', 'Connections', 'Troubleshooting', 'Best Practices', 'Performance Optimization', 'Security'],
                            required: true
                        },
                        {
                            id: 'urgency',
                            label: 'Urgency Level',
                            placeholder: 'Select urgency',
                            options: ['Low', 'Medium', 'High', 'Critical'],
                            required: true
                        },
                        {
                            id: 'experience',
                            label: 'Experience Level',
                            placeholder: 'Select experience',
                            options: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
                            required: true
                        }
                    ],
                    textFields: [
                        {
                            id: 'specific-issue',
                            label: 'Specific Issue or Question',
                            placeholder: 'Describe your specific issue or question',
                            required: true,
                            fullWidth: true
                        }
                    ],
                    submitText: 'Get Help'
                }
            };
        } else {
            return {
                type: 'form',
                greeting: "Welcome to the Data Onboarding Assistant! Let me help you get started. What would you like to do?",
                form: {
                    useGrid: true,
                    dropdowns: [
                        {
                            id: 'onboarding-step',
                            label: 'Primary Action',
                            placeholder: 'What would you like to do?',
                            options: ['Start New Onboarding', 'Configure Data Source', 'Add Connector', 'Get Help', 'Troubleshoot Issues', 'View Documentation'],
                            required: true
                        },
                        {
                            id: 'data-type',
                            label: 'Data Type',
                            placeholder: 'What type of data?',
                            options: ['Structured Data', 'Semi-structured Data', 'Unstructured Data', 'Mixed Data Types', 'Not Sure'],
                            required: true
                        }
                    ],
                    textFields: [
                        {
                            id: 'business-goal',
                            label: 'Business Goal',
                            placeholder: 'What are you trying to achieve?',
                            required: true,
                            fullWidth: true
                        }
                    ],
                    submitText: 'Get Started'
                }
            };
        }
    }

    function getNextFormResponse(formValues) {
        // Simple follow-up responses based on form submissions
        const keys = Object.keys(formValues);
        if (keys.includes('entity-type')) {
            return {
                type: 'form',
                greeting: "Great choice! Now let's configure your data source details:",
                form: {
                    dropdowns: [
                        {
                            id: 'data-type',
                            label: 'Data Type',
                            options: ['Structured Data', 'Semi-structured Data', 'Unstructured Data']
                        }
                    ],
                    textFields: [
                        {
                            id: 'source-name',
                            label: 'Source Name',
                            placeholder: 'Enter data source name'
                        }
                    ],
                    submitText: 'Configure Source'
                }
            };
        } else if (keys.includes('provider')) {
            return {
                type: 'form',
                greeting: "Excellent! Your data source configuration is complete. Let's proceed with data validation:",
                form: {
                    dropdowns: [
                        {
                            id: 'validation-level',
                            label: 'Validation Level',
                            options: ['Basic', 'Standard', 'Comprehensive']
                        }
                    ],
                    submitText: 'Start Validation'
                }
            };
        } else {
            return {
                type: 'form',
                greeting: "Perfect! Your configuration has been saved. What would you like to do next?",
                form: {
                    dropdowns: [
                        {
                            id: 'next-action',
                            label: 'Next Action',
                            options: ['View Dashboard', 'Add Another Source', 'Configure Pipeline', 'Export Configuration']
                        }
                    ],
                    submitText: 'Continue'
                }
            };
        }
    }

    // Make openChatbot globally available
    window.openChatbot = openChatbot;
}
