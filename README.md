<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gardens | Community</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .community-hero {
            background: linear-gradient(135deg, rgba(26, 71, 42, 0.9), rgba(45, 90, 39, 0.8)), 
                        url('https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 8rem 0 4rem;
            text-align: center;
        }
        
        .community-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin: 3rem 0;
            flex-wrap: wrap;
        }
        
        .stat-item {
            text-align: center;
        }
        
        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: var(--accent-orange);
        }
        
        .community-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .community-feature {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            box-shadow: var(--shadow-md);
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            background: var(--light-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
        }
        
        .feature-icon i {
            font-size: 1.5rem;
            color: var(--primary-green);
        }
        
        .competition-section {
            background: linear-gradient(135deg, #1a472a, #2d5a27);
            color: white;
            padding: 4rem 0;
            border-radius: 20px;
            margin: 4rem 0;
        }
        
        .competition-details {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }
        
        .prize-display {
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            margin: 2rem 0;
            backdrop-filter: blur(10px);
        }
        
        .upload-area {
            border: 3px dashed rgba(255,255,255,0.3);
            padding: 3rem;
            text-align: center;
            margin: 2rem 0;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .upload-area:hover {
            border-color: var(--accent-orange);
            background: rgba(255,255,255,0.05);
        }
        
        .upload-area i {
            font-size: 3rem;
            margin-bottom: 1rem;
            color: var(--accent-orange);
        }
        
        .forum-section {
            background: var(--light-green);
            padding: 4rem 0;
            border-radius: 20px;
            margin: 4rem 0;
        }
        
        .forum-topics {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
            margin: 2rem 0;
        }
        
        .forum-topic {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            box-shadow: var(--shadow-sm);
        }
        
        .topic-meta {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            font-size: 0.9rem;
            color: var(--slate);
        }
        
        .topic-stats {
            display: flex;
            gap: 1rem;
        }
        
        .live-events {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: var(--shadow-md);
            margin: 3rem 0;
        }
        
        .event-card {
            display: grid;
            grid-template-columns: auto 1fr;
            gap: 2rem;
            background: var(--light-green);
            padding: 2rem;
            border-radius: 15px;
            margin: 2rem 0;
            align-items: center;
        }
        
        .event-date {
            text-align: center;
            background: var(--primary-green);
            color: white;
            padding: 1rem;
            border-radius: 10px;
            min-width: 100px;
        }
        
        .date-day {
            font-size: 2rem;
            font-weight: bold;
            display: block;
        }
        
        .event-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="main-header">
        <div class="container">
            <div class="logo">
                <a href="index.html"><h1><i class="fas fa-leaf"></i> Gardens</h1></a>
            </div>
            <nav class="nav-main">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="activities.html">Activities</a></li>
                    <li><a href="boxes.html">Boxes</a></li>
                    <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                    <li><a href="community.html" class="active">Community</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="community-hero">
        <div class="container">
            <h1>Growing Together</h1>
            <p class="subtitle">Connect, learn, and share with gardeners worldwide</p>
            <a href="#join-now" class="btn btn-large">Join Our Community</a>
            
            <div class="community-stats">
                <div class="stat-item">
                    <div class="stat-number">10,000+</div>
                    <p>Community Members</p>
                </div>
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <p>Countries Represented</p>
                </div>
                <div class="stat-item">
                    <div class="stat-number">24/7</div>
                    <p>Active Discussions</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Community Features -->
    <section class="community-features-section" id="join-now">
        <div class="container">
            <div class="section-header">
                <h2>What Our Community Offers</h2>
                <p>Connect with gardeners at every level, from complete beginners to seasoned experts</p>
            </div>
            
            <div class="community-features">
                <div class="community-feature">
                    <div class="feature-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3>Active Forums</h3>
                    <p>Join discussions on everything from plant identification to advanced gardening techniques. Get answers from experienced gardeners.</p>
                    <a href="#forums" class="btn-small">Visit Forums</a>
                </div>
                
                <div class="community-feature">
                    <div class="feature-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3>Live Events</h3>
                    <p>Monthly live Q&As, workshops, and garden tours with expert gardeners. All events are recorded for later viewing.</p>
                    <a href="#events" class="btn-small">View Events</a>
                </div>
                
                <div class="community-feature">
                    <div class="feature-icon">
                        <i class="fas fa-camera"></i>
                    </div>
                    <h3>Photo Competitions</h3>
                    <p>Showcase your garden in our monthly photo competitions. Win prizes and get featured in our community gallery.</p>
                    <a href="#competitions" class="btn-small">Enter Competition</a>
                </div>
                
                <div class="community-feature">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Local Groups</h3>
                    <p>Connect with gardeners in your area. Join local meetups, seed swaps, and garden visits organized by members.</p>
                    <a href="#" class="btn-small">Find Local Group</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Current Competition -->
    <section class="competition-section" id="competitions">
        <div class="container">
            <div class="competition-details">
                <h2><i class="fas fa-camera"></i> Photo Competition: "Autumn Harvest"</h2>
                <p class="competition-subtitle">Show us your best autumn gardening photos for a chance to win amazing prizes!</p>
                
                <div class="prize-display">
                    <h3>Grand Prize:</h3>
                    <p><i class="fas fa-trophy"></i> Year's supply of premium seeds + £500 gardening voucher + Featured on homepage</p>
                    <p><i class="fas fa-award"></i> 5 Runner-up prizes: 3-month subscription to your choice of box</p>
                </div>
                
                <div class="competition-info">
                    <p><strong>Theme:</strong> Autumn Harvest - Show us your garden's bounty</p>
                    <p><strong>Deadline:</strong> November 30, 2025, 11:59 PM GMT</p>
                    <p><strong>Voting:</strong> Community voting from Dec 1-7, 2025</p>
                    <p><strong>Winners Announced:</strong> December 10, 2025</p>
                </div>
                
                <div class="upload-area" id="photo-upload-area">
                    <i class="fas fa-cloud-upload-alt"></i>
                    <h3>Upload Your Entry</h3>
                    <p>Drag & drop your photo or click to browse</p>
                    <p class="upload-note">Maximum file size: 10MB. Accepted formats: JPG, PNG</p>
                    <input type="file" id="photo-upload" accept="image/*" style="display: none;">
                    <button class="btn-small" id="browse-button">Browse Files</button>
                </div>
                
                <div class="competition-rules">
                    <h4>Competition Rules:</h4>
                    <ul>
                        <li>Photos must be your own work</li>
                        <li>Maximum 3 entries per person</li>
                        <li>Include a brief description with your entry</li>
                        <li>By entering, you agree to our terms and conditions</li>
                    </ul>
                </div>
                
                <button class="btn btn-large">Submit Your Entry</button>
            </div>
        </div>
    </section>

    <!-- Live Events -->
    <section class="live-events" id="events">
        <div class="container">
            <div class="section-header">
                <h2><i class="fas fa-video"></i> Upcoming Live Events</h2>
                <p>Join our interactive live sessions with gardening experts</p>
            </div>
            
            <div class="event-card">
                <div class="event-date">
                    <span class="date-day">28</span>
                    <span class="date-month">NOV</span>
                </div>
                <div class="event-details">
                    <h3>Winter Gardening Masterclass</h3>
                    <p><i class="fas fa-clock"></i> 7:00 PM GMT | <i class="fas fa-user"></i> Expert: Dr. Lily Chen</p>
                    <p>Learn how to protect your plants during winter, plan for spring, and maintain your garden in cold weather. Live Q&A included.</p>
                    <div class="event-actions">
                        <button class="btn">Register Free</button>
                        <button class="btn-secondary">Add to Calendar</button>
                    </div>
                </div>
            </div>
            
            <div class="event-card">
                <div class="event-date">
                    <span class="date-day">05</span>
                    <span class="date-month">DEC</span>
                </div>
                <div class="event-details">
                    <h3>Christmas Wreath Making Workshop</h3>
                    <p><i class="fas fa-clock"></i> 2:00 PM GMT | <i class="fas fa-user"></i> Expert: Sarah Wilson</p>
                    <p>Create beautiful Christmas wreaths using materials from your garden. Learn techniques you can use year after year.</p>
                    <div class="event-actions">
                        <button class="btn">Register Free</button>
                        <button class="btn-secondary">Add to Calendar</button>
                    </div>
                </div>
            </div>
            
            <div class="event-card">
                <div class="event-date">
                    <span class="date-day">12</span>
                    <span class="date-month">DEC</span>
                </div>
                <div class="event-details">
                    <h3>Ask Me Anything: Organic Gardening</h3>
                    <p><i class="fas fa-clock"></i> 6:30 PM GMT | <i class="fas fa-user"></i> Expert: Tom Green</p>
                    <p>Bring your questions about organic gardening, natural pest control, and soil health. Live, unscripted Q&A session.</p>
                    <div class="event-actions">
                        <button class="btn">Register Free</button>
                        <button class="btn-secondary">Add to Calendar</button>
                    </div>
                </div>
            </div>
            
            <div class="events-cta">
                <a href="#" class="btn">View All Events</a>
                <a href="#" class="btn-secondary">Subscribe to Event Calendar</a>
            </div>
        </div>
    </section>

    <!-- Forum Discussions -->
    <section class="forum-section" id="forums">
        <div class="container">
            <div class="section-header">
                <h2><i class="fas fa-comments"></i> Hot Forum Discussions</h2>
                <p>Join the conversation in our active gardening forums</p>
            </div>
            
            <div class="forum-topics">
                <div class="forum-topic">
                    <h3>Help! Yellow leaves on my tomato plants</h3>
                    <p>My tomato plants are developing yellow leaves starting from the bottom. Any advice would be appreciated!</p>
                    <div class="topic-meta">
                        <span>Posted by BeginnerAnnie</span>
                        <div class="topic-stats">
                            <span><i class="fas fa-comment"></i> 24</span>
                            <span><i class="fas fa-eye"></i> 342</span>
                        </div>
                    </div>
                </div>
                
                <div class="forum-topic">
                    <h3>Best companion plants for roses</h3>
                    <p>What plants work well with roses to deter pests and improve growth? Share your experiences!</p>
                    <div class="topic-meta">
                        <span>Posted by RoseLover42</span>
                        <div class="topic-stats">
                            <span><i class="fas fa-comment"></i> 18</span>
                            <span><i class="fas fa-eye"></i> 289</span>
                        </div>
                    </div>
                </div>
                
                <div class="forum-topic">
                    <h3>Composting in a small urban garden</h3>
                    <p>Space is limited but I want to start composting. Any recommendations for compact compost systems?</p>
                    <div class="topic-meta">
                        <span>Posted by UrbanGardener</span>
                        <div class="topic-stats">
                            <span><i class="fas fa-comment"></i> 36</span>
                            <span><i class="fas fa-eye"></i> 451</span>
                        </div>
                    </div>
                </div>
                
                <div class="forum-topic">
                    <h3>Winter vegetable harvest success!</h3>
                    <p>Just harvested my first winter carrots and kale. So satisfying to have fresh vegetables in December!</p>
                    <div class="topic-meta">
                        <span>Posted by WinterHarvester</span>
                        <div class="topic-stats">
                            <span><i class="fas fa-comment"></i> 42</span>
                            <span><i class="fas fa-eye"></i> 512</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="forum-cta">
                <a href="#" class="btn">Browse All Discussions</a>
                <a href="#" class="btn-secondary">Start New Discussion</a>
            </div>
        </div>
    </section>

    <!-- Community Guidelines -->
    <section class="community-guidelines">
        <div class="container">
            <div class="guidelines-content">
                <h2><i class="fas fa-handshake"></i> Community Guidelines</h2>
                <p>Our community is built on respect, kindness, and shared love of gardening. Please help us maintain a positive environment.</p>
                
                <div class="guidelines-list">
                    <div class="guideline">
                        <i class="fas fa-heart"></i>
                        <h3>Be Kind & Respectful</h3>
                        <p>We welcome gardeners of all experience levels. Treat everyone with respect.</p>
                    </div>
                    
                    <div class="guideline">
                        <i class="fas fa-seedling"></i>
                        <h3>Share Knowledge</h3>
                        <p>Help others learn and grow. Share your experiences and advice generously.</p>
                    </div>
                    
                    <div class="guideline">
                        <i class="fas fa-flag"></i>
                        <h3>Keep it Positive</h3>
                        <p>Focus on solutions and constructive advice. Report any inappropriate content.</p>
                    </div>
                    
                    <div class="guideline">
                        <i class="fas fa-camera"></i>
                        <h3>Respect Copyright</h3>
                        <p>Only share photos you own or have permission to share. Credit others when appropriate.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Join CTA -->
    <section class="join-community">
        <div class="container">
            <div class="join-content">
                <h2>Ready to Join Our Gardening Community?</h2>
                <p>Create your free account today and start connecting with fellow gardeners.</p>
                <div class="join-actions">
                    <button class="btn btn-large">Create Free Account</button>
                    <button class="btn-secondary">Take a Tour First</button>
                </div>
                <p class="join-note">Already a member? <a href="#">Sign in here</a></p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Gardens Community</h3>
                    <p class="footer-description">Connecting gardeners worldwide since 2018.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="#" aria-label="Discord"><i class="fab fa-discord"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Community Features</h3>
                    <ul>
                        <li><a href="#forums">Discussion Forums</a></li>
                        <li><a href="#events">Live Events</a></li>
                        <li><a href="#competitions">Photo Competitions</a></li>
                        <li><a href="#">Local Groups</a></li>
                        <li><a href="#">Member Directory</a></li>
                        <li><a href="#">Community Garden Projects</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Community Resources</h3>
                    <ul>
                        <li><a href="#">Community Guidelines</a></li>
                        <li><a href="#">Moderator Team</a></li>
                        <li><a href="#">Report Issues</a></li>
                        <li><a href="#">Community Awards</a></li>
                        <li><a href="#">Member Spotlights</a></li>
                        <li><a href="#">Community Blog</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Community Support</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> community@gardens.com</li>
                        <li><i class="fas fa-comments"></i> Live Community Chat</li>
                        <li><i class="fas fa-shield-alt"></i> Safety & Moderation</li>
                        <li><i class="fas fa-hands-helping"></i> Volunteer Opportunities</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Gardens Community. A welcoming space for all gardeners.</p>
                <p class="community-note">This community is moderated to ensure a positive experience for all members.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
    <script>
        // Photo upload functionality
        const uploadArea = document.getElementById('photo-upload-area');
        const fileInput = document.getElementById('photo-upload');
        const browseButton = document.getElementById('browse-button');
        
        if (uploadArea && browseButton) {
            browseButton.addEventListener('click', function(e) {
                e.preventDefault();
                fileInput.click();
            });
            
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                uploadArea.style.borderColor = 'var(--accent-orange)';
                uploadArea.style.background = 'rgba(255,255,255,0.1)';
            });
            
            uploadArea.addEventListener('dragleave', function() {
                uploadArea.style.borderColor = 'rgba(255,255,255,0.3)';
                uploadArea.style.background = 'transparent';
            });
            
            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                uploadArea.style.borderColor = 'var(--accent-orange)';
                uploadArea.style.background = 'rgba(255,255,255,0.05)';
                
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    handleFileUpload(files[0]);
                }
            });
            
            fileInput.addEventListener('change', function(e) {
                if (this.files.length > 0) {
                    handleFileUpload(this.files[0]);
                }
            });
            
            function handleFileUpload(file) {
                if (file.size > 10 * 1024 * 1024) {
                    alert('File is too large. Maximum size is 10MB.');
                    return;
                }
                
                if (!file.type.match('image.*')) {
                    alert('Please upload an image file (JPG, PNG)');
                    return;
                }
                
                uploadArea.innerHTML = `
                    <i class="fas fa-check-circle" style="color: #4CAF50;"></i>
                    <h3>File Ready: ${file.name}</h3>
                    <p>Size: ${(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    <button class="btn-small" id="change-file">Change File</button>
                `;
                
                document.getElementById('change-file').addEventListener('click', function(e) {
                    e.preventDefault();
                    uploadArea.innerHTML = `
                        <i class="fas fa-cloud-upload-alt"></i>
                        <h3>Upload Your Entry</h3>
                        <p>Drag & drop your photo or click to browse</p>
                        <p class="upload-note">Maximum file size: 10MB. Accepted formats: JPG, PNG</p>
                        <button class="btn-small" id="browse-button">Browse Files</button>
                    `;
                    setupUpload();
                });
            }
            
            function setupUpload() {
                // Re-attach event listeners after content change
                const newBrowseButton = document.getElementById('browse-button');
                if (newBrowseButton) {
                    newBrowseButton.addEventListener('click', function(e) {
                        e.preventDefault();
                        fileInput.click();
                    });
                }
            }
        }
    </script>
</body>
</html>
// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMain = document.querySelector('.nav-main');

    menuToggle.addEventListener('click', function() {
        navMain.classList.toggle('active');
    });

    // Close menu when clicking a link
    const navLinks = document.querySelectorAll('.nav-main a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMain.classList.remove('active');
        });
    });

    // Form submission simulation (for contact page)
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you! Your message has been sent. Gardens will contact you soon.');
            this.reset();
        });
    }

    // Simple testimonial slider (if added later)
    console.log('Gardens website JS loaded successfully.');
});
document.addEventListener('DOMContentLoaded', function() {
    const personaSelector = document.getElementById('persona-selector');
    const personaSections = document.querySelectorAll('.persona-section');
    
    if (personaSelector) {
        // Load saved persona or default to beginner
        const savedPersona = localStorage.getItem('gardens-persona') || 'beginner';
        personaSelector.value = savedPersona;
        updatePersonaView(savedPersona);
        
        personaSelector.addEventListener('change', function() {
            const selectedPersona = this.value;
            localStorage.setItem('gardens-persona', selectedPersona);
            updatePersonaView(selectedPersona);
        });
    }
    
    function updatePersonaView(persona) {
        // Hide all persona sections
        personaSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected persona section
        const activeSection = document.getElementById(`${persona}-welcome`);
        if (activeSection) {
            activeSection.classList.add('active');
        }
        
        // Update content based on persona
        updateContentForPersona(persona);
    }
    
    function updateContentForPersona(persona) {
        // Example: Change CTAs based on persona
        const primaryButtons = document.querySelectorAll('.btn');
        if (persona === 'corporate') {
            primaryButtons.forEach(btn => {
                if (btn.textContent.includes('Get Your Box')) {
                    btn.textContent = 'Request Corporate Proposal';
                    btn.href = 'contact.html?type=corporate';
                }
            });
        }
    }
    
    // Quiz functionality
    const quizModal = document.getElementById('quiz-modal');
    const startQuizBtn = document.getElementById('start-quiz');
    const closeModal = document.querySelector('.close-modal');
    
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', function() {
            quizModal.style.display = 'flex';
            loadQuizQuestion(0);
        });
    }
    
    if (closeModal) {
        closeModal.addEventListener('click', function() {
            quizModal.style.display = 'none';
        });
    }
    
    window.addEventListener('click', function(e) {
        if (e.target === quizModal) {
            quizModal.style.display = 'none';
        }
    });
    
    // Seasonal tasks
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const currentMonth = new Date().getMonth();
    const monthlyTasks = document.getElementById('monthly-tasks');
    
    if (monthlyTasks) {
        const tasks = {
            0: ['Plan your garden layout', 'Order seeds', 'Clean and repair tools'],
            1: ['Start seeds indoors', 'Prune fruit trees', 'Prepare soil'],
            10: ['Protect plants from frost', 'Clean greenhouse', 'Order bulbs for spring']
        };
        
        const currentTasks = tasks[currentMonth] || ['Plan for next season', 'Compost garden waste', 'Maintain tools'];
        
        monthlyTasks.innerHTML = `
            <div class="task-card">
                <h3>${months[currentMonth]} Priorities</h3>
                <ul>
                    ${currentTasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
                <a href="gardeners-hub.html?filter=seasonal" class="btn-small">View Full Checklist</a>
            </div>
        `;
    }
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gardens | Contact Us</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .contact-hero {
            background: linear-gradient(135deg, rgba(26, 71, 42, 0.9), rgba(45, 90, 39, 0.8)), 
                        url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 8rem 0 4rem;
            text-align: center;
        }
        
        .contact-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .contact-option {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }
        
        .contact-option:hover {
            transform: translateY(-5px);
            box-shadow: var(--shadow-lg);
        }
        
        .contact-icon {
            width: 70px;
            height: 70px;
            background: var(--light-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 1.5rem;
        }
        
        .contact-icon i {
            font-size: 1.8rem;
            color: var(--primary-green);
        }
        
        .contact-form-section {
            background: var(--light-green);
            padding: 4rem 0;
            border-radius: 20px;
            margin: 4rem 0;
        }
        
        .contact-form {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            padding: 3rem;
            border-radius: 15px;
            box-shadow: var(--shadow-md);
        }
        
        .form-group {
            margin-bottom: 1.5rem;
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 0.5rem;
            font-weight: 500;
            color: var(--charcoal);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 2px solid rgba(45, 90, 39, 0.2);
            border-radius: 8px;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary-green);
            box-shadow: 0 0 0 3px rgba(45, 90, 39, 0.1);
        }
        
        .contact-type-selector {
            display: flex;
            gap: 1rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
        }
        
        .contact-type-btn {
            padding: 0.75rem 1.5rem;
            background: white;
            border: 2px solid var(--light-green);
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }
        
        .contact-type-btn.active {
            background: var(--primary-green);
            color: white;
            border-color: var(--primary-green);
        }
        
        .corporate-form {
            display: none;
            background: rgba(45, 90, 39, 0.05);
            padding: 2rem;
            border-radius: 10px;
            margin-top: 2rem;
        }
        
        .corporate-form.active {
            display: block;
        }
        
        .faq-section {
            background: white;
            padding: 4rem 0;
            border-radius: 20px;
            margin: 4rem 0;
            box-shadow: var(--shadow-md);
        }
        
        .faq-item {
            border-bottom: 1px solid rgba(0,0,0,0.1);
            padding: 1.5rem 0;
        }
        
        .faq-question {
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
        }
        
        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease;
        }
        
        .faq-answer.active {
            max-height: 500px;
            margin-top: 1rem;
        }
        
        .contact-map {
            height: 400px;
            background: #f0f0f0;
            border-radius: 15px;
            margin: 3rem 0;
            overflow: hidden;
        }
        
        .team-section {
            background: linear-gradient(135deg, #1a472a, #2d5a27);
            color: white;
            padding: 4rem 0;
            border-radius: 20px;
            margin: 4rem 0;
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .team-member {
            text-align: center;
            background: rgba(255,255,255,0.1);
            padding: 2rem;
            border-radius: 15px;
            backdrop-filter: blur(10px);
        }
        
        .team-member img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1rem;
            border: 4px solid rgba(255,255,255,0.2);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="main-header">
        <div class="container">
            <div class="logo">
                <a href="index.html"><h1><i class="fas fa-leaf"></i> Gardens</h1></a>
            </div>
            <nav class="nav-main">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="activities.html">Activities</a></li>
                    <li><a href="boxes.html">Boxes</a></li>
                    <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="contact.html" class="active">Contact</a></li>
                </ul>
            </nav>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="contact-hero">
        <div class="container">
            <h1>Get in Touch</h1>
            <p class="subtitle">We're here to help with all your gardening questions and needs</p>
            <p>Our team of gardening experts is ready to assist you. Choose the best way to reach us below.</p>
        </div>
    </section>

    <!-- Contact Options -->
    <section class="contact-options-section">
        <div class="container">
            <div class="contact-options">
                <div class="contact-option">
                    <div class="contact-icon">
                        <i class="fas fa-envelope"></i>
                    </div>
                    <h3>Email Us</h3>
                    <p>For general inquiries and support</p>
                    <a href="mailto:hello@gardens.com" class="btn-small">hello@gardens.com</a>
                    <p class="response-time">Response time: 24 hours</p>
                </div>
                
                <div class="contact-option">
                    <div class="contact-icon">
                        <i class="fas fa-phone"></i>
                    </div>
                    <h3>Call Us</h3>
                    <p>For urgent matters and sales inquiries</p>
                    <a href="tel:+442012345678" class="btn-small">+44 20 1234 5678</a>
                    <p class="hours">Mon-Fri: 9AM-6PM GMT</p>
                </div>
                
                <div class="contact-option">
                    <div class="contact-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3>Live Chat</h3>
                    <p>Instant help from our gardening experts</p>
                    <button class="btn-small" id="live-chat-btn">Start Live Chat</button>
                    <p class="availability">Available: 8AM-8PM GMT</p>
                </div>
                
                <div class="contact-option">
                    <div class="contact-icon">
                        <i class="fas fa-building"></i>
                    </div>
                    <h3>Corporate Inquiries</h3>
                    <p>For business partnerships and bulk orders</p>
                    <a href="mailto:corporate@gardens.com" class="btn-small">corporate@gardens.com</a>
                    <p class="dedicated-support">Dedicated account manager</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
        <div class="container">
            <div class="section-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>
            
            <div class="contact-type-selector">
                <button class="contact-type-btn active" data-type="general">General Inquiry</button>
                <button class="contact-type-btn" data-type="support">Customer Support</button>
                <button class="contact-type-btn" data-type="corporate">Corporate Inquiry</button>
                <button class="contact-type-btn" data-type="expert">Ask an Expert</button>
                <button class="contact-type-btn" data-type="feedback">Feedback & Suggestions</button>
            </div>
            
            <form class="contact-form" id="main-contact-form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                </div>
                
                <div class="form-group">
                    <label for="subject">Subject *</label>
                    <input type="text" id="subject" name="subject" required>
                </div>
                
                <div class="form-group">
                    <label for="message">Your Message *</label>
                    <textarea id="message" name="message" rows="6" required></textarea>
                </div>
                
                <div class="form-group">
                    <label for="garden-type">Type of Garden (Optional)</label>
                    <select id="garden-type" name="garden-type">
                        <option value="">Select your garden type</option>
                        <option value="balcony">Balcony/Patio</option>
                        <option value="backyard">Backyard Garden</option>
                        <option value="allotment">Allotment</option>
                        <option value="indoor">Indoor Garden</option>
                        <option value="community">Community Garden</option>
                        <option value="none">I don't have a garden yet</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="experience">Gardening Experience (Optional)</label>
                    <select id="experience" name="experience">
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-5 years)</option>
                        <option value="experienced">Experienced (5+ years)</option>
                        <option value="expert">Expert Gardener</option>
                    </select>
                </div>
                
                <!-- Corporate Form (Hidden by Default) -->
                <div class="corporate-form" id="corporate-form-fields">
                    <h3>Corporate Information</h3>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="company">Company Name *</label>
                            <input type="text" id="company" name="company">
                        </div>
                        
                        <div class="form-group">
                            <label for="position">Your Position *</label>
                            <input type="text" id="position" name="position">
                        </div>
                    </div>
                    
                    <div class="form-row">
                        <div class="form-group">
                            <label for="employees">Number of Employees</label>
                            <select id="employees" name="employees">
                                <option value="">Select range</option>
                                <option value="1-10">1-10</option>
                                <option value="11-50">11-50</option>
                                <option value="51-200">51-200</option>
                                <option value="201-500">201-500</option>
                                <option value="500+">500+</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label for="boxes">Estimated Box Quantity</label>
                            <input type="number" id="boxes" name="boxes" min="10" placeholder="Minimum 10 boxes">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="purpose">Purpose of Inquiry</label>
                        <select id="purpose" name="purpose">
                            <option value="">Select purpose</option>
                            <option value="corporate-gifts">Corporate Gifts</option>
                            <option value="team-building">Team Building</option>
                            <option value="client-appreciation">Client Appreciation</option>
                            <option value="wellness-program">Employee Wellness Program</option>
                            <option value="partnership">Business Partnership</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" name="newsletter" checked>
                        Subscribe to our monthly gardening newsletter
                    </label>
                </div>
                
                <div class="form-group">
                    <label>
                        <input type="checkbox" name="terms" required>
                        I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a> *
                    </label>
                </div>
                
                <button type="submit" class="btn btn-large">Send Message</button>
            </form>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <div class="section-header">
                <h2>Frequently Asked Questions</h2>
                <p>Find quick answers to common questions</p>
            </div>
            
            <div class="faq-list">
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>How do I choose the right box for me?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>We recommend taking our 2-minute Garden Quiz on the homepage. It will analyze your space, experience level, and goals to recommend the perfect box. You can also compare all boxes on our Boxes page or contact our experts for personalized advice.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>What is your shipping policy?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>We ship to the UK, EU, and selected Asian countries. Shipping is free for orders over £50. Standard delivery takes 3-5 business days, express delivery 1-2 business days. Live plants are shipped with special care instructions and guarantees.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Can I customize my subscription box?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>Yes! All our boxes offer customization options. For individual subscriptions, you can modify delivery frequency, select preferences, and add special requests. For corporate orders, we offer fully customized boxes with branding and tailored contents.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>Do you offer refunds or exchanges?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>We offer a 30-day satisfaction guarantee. If you're not happy with your box, contact us within 30 days for a full refund or exchange. For plants that don't thrive, we offer replacements within the first 60 days with proper care documentation.</p>
                    </div>
                </div>
                
                <div class="faq-item">
                    <div class="faq-question">
                        <h3>How do I contact gardening experts?</h3>
                        <i class="fas fa-chevron-down"></i>
                    </div>
                    <div class="faq-answer">
                        <p>You can contact our gardening experts through the "Ask an Expert" option in the contact form, via live chat during business hours, or by posting in our Community forums. Expert responses are typically provided within 24-48 hours.</p>
                    </div>
                </div>
            </div>
            
            <div class="faq-cta">
                <p>Don't see your question here? <a href="#main-contact-form">Ask us directly</a></p>
            </div>
        </div>
    </section>

    <!-- Our Team -->
    <section class="team-section">
        <div class="container">
            <div class="section-header">
                <h2>Meet Our Gardening Experts</h2>
                <p>Our team is passionate about helping you succeed in your gardening journey</p>
            </div>
            
            <div class="team-grid">
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Dr. Lily Chen">
                    <h3>Dr. Lily Chen</h3>
                    <p>Head Horticulturist</p>
                    <p>PhD in Plant Sciences, 15+ years experience</p>
                </div>
                
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tom Green">
                    <h3>Tom Green</h3>
                    <p>Organic Gardening Expert</p>
                    <p>Specialist in sustainable and organic methods</p>
                </div>
                
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Sarah Wilson">
                    <h3>Sarah Wilson</h3>
                    <p>Community Manager</p>
                    <p>Connecting gardeners and organizing events</p>
                </div>
                
                <div class="team-member">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="James Miller">
                    <h3>James Miller</h3>
                    <p>Customer Success Lead</p>
                    <p>Ensuring your gardening success</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Office Locations -->
    <section class="locations-section">
        <div class="container">
            <div class="section-header">
                <h2>Our Locations</h2>
                <p>We operate across multiple regions to serve gardeners worldwide</p>
            </div>
            
            <div class="locations-grid">
                <div class="location-card">
                    <h3><i class="fas fa-map-marker-alt"></i> London, UK</h3>
                    <p>Headquarters & Customer Support</p>
                    <p>123 Garden Street, London W1A 1AA</p>
                    <p><i class="fas fa-phone"></i> +44 20 1234 5678</p>
                </div>
                
                <div class="location-card">
                    <h3><i class="fas fa-map-marker-alt"></i> Auckland, NZ</h3>
                    <p>Asia-Pacific Operations</p>
                    <p>456 Green Lane, Auckland 1010</p>
                    <p><i class="fas fa-phone"></i> +64 9 876 5432</p>
                </div>
                
                <div class="location-card">
                    <h3><i class="fas fa-map-marker-alt"></i> Singapore</h3>
                    <p>Southeast Asia Hub</p>
                    <p>789 Orchard Road, Singapore 238839</p>
                    <p><i class="fas fa-phone"></i> +65 6123 4567</p>
                </div>
            </div>
            
            <div class="contact-map">
                <!-- Map placeholder - in real implementation would use Google Maps API -->
                <div style="width: 100%; height: 100%; background: #e0e0e0; display: flex; align-items: center; justify-content: center; color: #666;">
                    <div style="text-align: center;">
                        <i class="fas fa-map-marked-alt" style="font-size: 3rem; margin-bottom: 1rem;"></i>
                        <p>Interactive Map of Our Locations</p>
                        <p>(Google Maps integration would go here)</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="contact-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Still Have Questions?</h2>
                <p>We're here to help you grow. Contact us through any of the methods above.</p>
                <div class="cta-buttons">
                    <a href="tel:+442012345678" class="btn btn-large">
                        <i class="fas fa-phone"></i> Call Us Now
                    </a>
                    <button class="btn-secondary btn-large" id="open-chat">
                        <i class="fas fa-comments"></i> Start Live Chat
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Gardens</h3>
                    <p class="footer-description">Helping gardeners grow since 2018.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Methods</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> hello@gardens.com</li>
                        <li><i class="fas fa-phone"></i> +44 20 1234 5678</li>
                        <li><i class="fas fa-comments"></i> Live Chat Support</li>
                        <li><i class="fas fa-building"></i> Corporate: corporate@gardens.com</li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Business Hours</h3>
                    <ul>
                        <li>Monday-Friday: 9AM-6PM GMT</li>
                        <li>Saturday: 10AM-4PM GMT</li>
                        <li>Sunday: Closed</li>
                        <li>24/7 Online Support</li>
                        <li>Emergency Plant Care: Available</li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="boxes.html">Shop Boxes</a></li>
                        <li><a href="gardeners-hub.html">Gardening Guides</a></li>
                        <li><a href="community.html">Community</a></li>
                        <li><a href="#">Track Order</a></li>
                        <li><a href="#">Returns & Refunds</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Gardens. All rights reserved.</p>
                <p>Registered in England & Wales No. 12345678 | VAT No. GB 123 4567 89</p>
            </div>
        </div>
    </footer>

    <!-- Chat Widget (Simulated) -->
    <div class="chat-widget" id="chat-widget">
        <div class="chat-header">
            <h4><i class="fas fa-comments"></i> Gardens Support</h4>
            <button class="chat-close">&times;</button>
        </div>
        <div class="chat-body">
            <div class="chat-message bot">
                <p>Hello! I'm your Gardens assistant. How can I help you today?</p>
            </div>
        </div>
        <div class="chat-input">
            <input type="text" placeholder="Type your message...">
            <button><i class="fas fa-paper-plane"></i></button>
        </div>
    </div>

    <script src="script.js"></script>
    <script>
        // Contact type selector
        const contactTypeButtons = document.querySelectorAll('.contact-type-btn');
        const corporateForm = document.getElementById('corporate-form-fields');
        
        contactTypeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                contactTypeButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show/hide corporate form
                if (this.dataset.type === 'corporate') {
                    corporateForm.classList.add('active');
                } else {
                    corporateForm.classList.remove('active');
                }
            });
        });
        
        // FAQ accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function() {
                const answer = this.nextElementSibling;
                const icon = this.querySelector('i');
                
                answer.classList.toggle('active');
                icon.classList.toggle('fa-chevron-down');
                icon.classList.toggle('fa-chevron-up');
            });
        });
        
        // Form submission
        const contactForm = document.getElementById('main-contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Simulate form submission
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    alert('Thank you for your message! We will get back to you within 24 hours.');
                    contactForm.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }, 1500);
            });
        }
        
        // Chat widget
        const chatWidget = document.getElementById('chat-widget');
        const openChatBtn = document.getElementById('open-chat');
        const liveChatBtn = document.getElementById('live-chat-btn');
        const chatClose = document.querySelector('.chat-close');
        
        function openChat() {
            chatWidget.style.display = 'block';
            setTimeout(() => {
                chatWidget.style.opacity = '1';
                chatWidget.style.transform = 'translateY(0)';
            }, 10);
        }
        
        function closeChat() {
            chatWidget.style.opacity = '0';
            chatWidget.style.transform = 'translateY(20px)';
            setTimeout(() => {
                chatWidget.style.display = 'none';
            }, 300);
        }
        
        if (openChatBtn) openChatBtn.addEventListener('click', openChat);
        if (liveChatBtn) liveChatBtn.addEventListener('click', openChat);
        if (chatClose) chatClose.addEventListener('click', closeChat);
        
        // Style for chat widget
        const chatStyle = document.createElement('style');
        chatStyle.textContent = `
            .chat-widget {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 350px;
                background: white;
                border-radius: 15px;
                box-shadow: 0 10px 40px rgba(0,0,0,0.2);
                display: none;
                opacity: 0;
                transform: translateY(20px);
                transition: all 0.3s ease;
                z-index: 1000;
                overflow: hidden;
            }
            
            .chat-header {
                background: var(--primary-green);
                color: white;
                padding: 1rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            
            .chat-header h4 {
                margin: 0;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            
            .chat-close {
                background: none;
                border: none;
                color: white;
                font-size: 1.5rem;
                cursor: pointer;
                padding: 0;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .chat-body {
                height: 300px;
                padding: 1rem;
                overflow-y: auto;
            }
            
            .chat-message {
                margin-bottom: 1rem;
                padding: 0.75rem 1rem;
                border-radius: 10px;
                max-width: 80%;
            }
            
            .chat-message.bot {
                background: var(--light-green);
                margin-right: auto;
            }
            
            .chat-message.user {
                background: var(--primary-green);
                color: white;
                margin-left: auto;
            }
            
            .chat-input {
                display: flex;
                padding: 1rem;
                border-top: 1px solid #eee;
                gap: 0.5rem;
            }
            
            .chat-input input {
                flex: 1;
                padding: 0.75rem;
                border: 2px solid #eee;
                border-radius: 8px;
            }
            
            .chat-input button {
                background: var(--primary-green);
                color: white;
                border: none;
                border-radius: 8px;
                width: 40px;
                cursor: pointer;
            }
            
            @media (max-width: 768px) {
                .chat-widget {
                    width: calc(100% - 40px);
                    bottom: 10px;
                    right: 10px;
                }
            }
        `;
        document.head.appendChild(chatStyle);
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Gardens - Your online gardening partner for boxes, tips, and community activities.">
    <title>Gardens | Modern Gardening Community</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌿</text></svg>">
</head>
<body>
    <!-- Modern Header -->
    <header id="main-header">
        <div class="container">
            <div class="logo">
                <h1><i class="fas fa-leaf"></i> Gardens</h1>
            </div>
            <nav class="nav-main">
                <ul>
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="activities.html">Activities</a></li>
                    <li><a href="boxes.html">Boxes</a></li>
                    <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <div class="user-persona-toggle">
                <span>View as:</span>
                <select id="persona-selector">
                    <option value="beginner">Beginner (Annie)</option>
                    <option value="expert">Expert (Evan)</option>
                    <option value="corporate">Corporate (Chris)</option>
                </select>
            </div>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Modern Hero Section -->
    <section class="hero fade-in-up">
        <div class="container">
            <div class="hero-content">
                <h1>Cultivate Your Space, Nurture Your Joy</h1>
                <p>Join thousands of gardeners worldwide with our curated subscription boxes, expert advice, and thriving community.</p>
                <a href="#onboarding" class="btn btn-large">
                    Start Your Journey <i class="fas fa-arrow-right"></i>
                </a>
                
                <!-- Stats Section -->
                <div class="hero-stats">
                    <div class="stat">
                        <h3>10,000+</h3>
                        <p>Happy Gardeners</p>
                    </div>
                    <div class="stat">
                        <h3>50+</h3>
                        <p>Expert Guides</p>
                    </div>
                    <div class="stat">
                        <h3>24/7</h3>
                        <p>Community Support</p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Floating Images -->
        <div class="hero-floating-images">
            <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Plant 1" class="floating-image floating-1">
            <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Plant 2" class="floating-image floating-2">
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Plant 3" class="floating-image floating-3">
        </div>
    </section>

    <!-- Personalized Welcome -->
    <section class="personalized-welcome" id="onboarding">
        <div class="container">
            <div class="welcome-card">
                <div class="persona-welcome" id="beginner-welcome">
                    <div class="persona-header">
                        <div class="persona-icon">
                            <i class="fas fa-seedling"></i>
                        </div>
                        <div>
                            <h2>Welcome, Beginner Gardener!</h2>
                            <p class="persona-subtitle">Start your gardening journey with confidence</p>
                        </div>
                    </div>
                    <div class="persona-content">
                        <p>We recommend starting with our <strong>Oddbox</strong> - perfect for first-timers. Check out our <a href="gardeners-hub.html?topic=beginner">Beginner Basics</a> for easy-to-follow guides.</p>
                        <div class="persona-actions">
                            <a href="boxes.html#oddbox" class="btn">Explore Oddbox</a>
                            <a href="gardeners-hub.html?topic=beginner" class="btn-secondary">View Beginner Guides</a>
                        </div>
                    </div>
                </div>
                
                <div class="persona-welcome" id="expert-welcome" style="display: none;">
                    <div class="persona-header">
                        <div class="persona-icon">
                            <i class="fas fa-trophy"></i>
                        </div>
                        <div>
                            <h2>Welcome Back, Expert Gardener!</h2>
                            <p class="persona-subtitle">Take your skills to the next level</p>
                        </div>
                    </div>
                    <div class="persona-content">
                        <p>Dive into <a href="gardeners-hub.html?filter=pests">Problem Solvers</a> or showcase your skills in our <a href="community.html#competitions">Photo Competition</a>.</p>
                        <div class="persona-actions">
                            <a href="gardeners-hub.html" class="btn">Explore Advanced Guides</a>
                            <a href="community.html#competitions" class="btn-secondary">Join Competition</a>
                        </div>
                    </div>
                </div>
                
                <div class="persona-welcome" id="corporate-welcome" style="display: none;">
                    <div class="persona-header">
                        <div class="persona-icon">
                            <i class="fas fa-building"></i>
                        </div>
                        <div>
                            <h2>Welcome, Corporate Client!</h2>
                            <p class="persona-subtitle">Premium gardening solutions for businesses</p>
                        </div>
                    </div>
                    <div class="persona-content">
                        <p>Explore <a href="boxes.html#corporate">Custom Corporate Boxes</a> or <a href="contact.html?type=corporate">Request a Proposal</a> for bulk orders.</p>
                        <div class="persona-actions">
                            <a href="boxes.html#corporate" class="btn">View Corporate Solutions</a>
                            <a href="contact.html?type=corporate" class="btn-secondary">Request Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Onboarding Steps -->
    <section class="onboarding-section">
        <div class="container">
            <div class="section-header">
                <h2>Start Growing in 3 Simple Steps</h2>
                <p>Our guided approach makes gardening accessible to everyone</p>
            </div>
            
            <div class="onboarding-steps">
                <div class="step">
                    <div class="step-visual">
                        <img src="https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Garden Quiz">
                        <div class="step-number">1</div>
                    </div>
                    <h3>Take Our Garden Quiz</h3>
                    <p>Tell us about your space, experience, and goals for personalized recommendations.</p>
                    <button class="btn-small" id="start-quiz">Start 2-Min Quiz</button>
                </div>
                
                <div class="step">
                    <div class="step-visual">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Garden Box">
                        <div class="step-number">2</div>
                    </div>
                    <h3>Get Your Perfect Box</h3>
                    <p>Receive curated plants, tools, and guides matched to your needs and season.</p>
                    <a href="boxes.html" class="btn-small">Explore Boxes</a>
                </div>
                
                <div class="step">
                    <div class="step-visual">
                        <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Community">
                        <div class="step-number">3</div>
                    </div>
                    <h3>Grow With Community</h3>
                    <p>Join live talks, competitions, and get support from fellow gardeners worldwide.</p>
                    <a href="community.html" class="btn-small">Join Community</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Boxes -->
    <section class="featured-boxes">
        <div class="container">
            <div class="section-header">
                <h2>Curated Gardening Boxes</h2>
                <p>Each box is carefully designed for different gardening needs and experience levels</p>
            </div>
            
            <div class="boxes-grid">
                <div class="box-card featured">
                    <div class="box-badge">Most Popular</div>
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Oddbox" class="box-image">
                    <div class="box-content">
                        <h3>Oddbox</h3>
                        <p class="box-subtitle">Perfect for beginners</p>
                        <p class="box-description">Weekly deliveries of wonky vegetables, seeds, plus access to our exclusive gardening blog.</p>
                        <div class="box-features">
                            <span><i class="fas fa-check-circle"></i> Weekly deliveries</span>
                            <span><i class="fas fa-check-circle"></i> Expert blog access</span>
                            <span><i class="fas fa-check-circle"></i> Perfect for beginners</span>
                        </div>
                        <div class="box-footer">
                            <span class="box-price">From £18/month</span>
                            <button class="btn" data-box="oddbox">Learn More</button>
                        </div>
                    </div>
                </div>
                
                <div class="box-card">
                    <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Flourish" class="box-image">
                    <div class="box-content">
                        <h3>Flourish</h3>
                        <p class="box-subtitle">Seasonal gardening</p>
                        <p class="box-description">Four seasonal boxes per year with seeds, trays, watering can, and handmade cruelty-free soap.</p>
                        <div class="box-features">
                            <span><i class="fas fa-check-circle"></i> 4 boxes per year</span>
                            <span><i class="fas fa-check-circle"></i> Complete starter kit</span>
                            <span><i class="fas fa-check-circle"></i> Seasonal focus</span>
                        </div>
                        <div class="box-footer">
                            <span class="box-price">£75/year</span>
                            <button class="btn" data-box="flourish">Learn More</button>
                        </div>
                    </div>
                </div>
                
                <div class="box-card">
                    <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cottage" class="box-image">
                    <div class="box-content">
                        <h3>Cottage</h3>
                        <p class="box-subtitle">Wildflower paradise</p>
                        <p class="box-description">Monthly wildflower seeds, fact cards, seed markers, and twine for your cottage garden.</p>
                        <div class="box-features">
                            <span><i class="fas fa-check-circle"></i> Monthly deliveries</span>
                            <span><i class="fas fa-check-circle"></i> Wildflower focus</span>
                            <span><i class="fas fa-check-circle"></i> Educational materials</span>
                        </div>
                        <div class="box-footer">
                            <span class="box-price">£22/month</span>
                            <button class="btn" data-box="cottage">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Seasonal Tasks -->
    <section class="seasonal-tasks-section">
        <div class="container">
            <div class="seasonal-header">
                <i class="fas fa-calendar-alt"></i>
                <div>
                    <h2>This Month's Gardening Tasks</h2>
                    <p>Stay on track with our seasonal gardening checklist</p>
                </div>
            </div>
            
            <div class="tasks-container" id="monthly-tasks">
                <!-- Dynamically filled by JavaScript -->
            </div>
        </div>
    </section>

    <!-- Community Preview -->
    <section class="community-preview-section">
        <div class="container">
            <div class="section-header">
                <h2>Join Our Growing Community</h2>
                <p>Connect with gardeners worldwide, share experiences, and learn together</p>
            </div>
            
            <div class="community-grid">
                <div class="community-card">
                    <div class="community-icon">
                        <i class="fas fa-camera"></i>
                    </div>
                    <h3>Photo Competition</h3>
                    <p>Submit your best garden photo by Nov 30th. Win a year's supply of seeds and get featured!</p>
                    <a href="community.html#competitions" class="btn-small">Enter Now</a>
                </div>
                
                <div class="community-card">
                    <div class="community-icon">
                        <i class="fas fa-video"></i>
                    </div>
                    <h3>Live Expert Talks</h3>
                    <p>Join our monthly live sessions with gardening experts. Next: Winter Gardening on Nov 28th.</p>
                    <a href="community.html#events" class="btn-small">Register Free</a>
                </div>
                
                <div class="community-card">
                    <div class="community-icon">
                        <i class="fas fa-comments"></i>
                    </div>
                    <h3>Active Forums</h3>
                    <p>Get answers to your gardening questions from our community of experienced gardeners.</p>
                    <a href="community.html#forums" class="btn-small">Join Discussion</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Sign-up -->
    <section class="newsletter-section">
        <div class="container">
            <div class="newsletter-card">
                <div class="newsletter-content">
                    <h2>Never Miss a Gardening Tip</h2>
                    <p>Subscribe to our newsletter and receive monthly checklists, seasonal advice, and exclusive offers.</p>
                    <form id="newsletter-form" class="newsletter-form">
                        <div class="form-group">
                            <input type="email" placeholder="Your email address" required>
                            <button type="submit" class="btn">
                                Subscribe <i class="fas fa-paper-plane"></i>
                            </button>
                        </div>
                        <p class="form-note">By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.</p>
                    </form>
                </div>
                <div class="newsletter-image">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Gardening Newsletter">
                </div>
            </div>
        </div>
    </section>

    <!-- Modern Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Gardens</h3>
                    <p class="footer-description">Bringing the joy of gardening to beginners and enthusiasts across Europe, Asia & New Zealand since 2018.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Pinterest"><i class="fab fa-pinterest"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="activities.html">Activities</a></li>
                        <li><a href="boxes.html">Boxes</a></li>
                        <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                        <li><a href="community.html">Community</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="gardeners-hub.html?topic=beginner">Beginner Guides</a></li>
                        <li><a href="gardeners-hub.html?filter=seasonal">Seasonal Checklists</a></li>
                        <li><a href="community.html#events">Live Events</a></li>
                        <li><a href="boxes.html#corporate">Corporate Gifting</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Us</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> hello@gardens.com</li>
                        <li><i class="fas fa-phone"></i> +44 20 1234 5678</li>
                        <li><i class="fas fa-map-marker-alt"></i> London, UK | Auckland, NZ | Singapore</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Gardens. All rights reserved. Designed with accessibility in mind.</p>
                <p class="accessibility-note">
                    <i class="fas fa-universal-access"></i> WCAG 2.1 AA compliant | 
                    <i class="fas fa-leaf"></i> Sustainable packaging | 
                    <i class="fas fa-heart"></i> Made for gardeners, by gardeners
                </p>
            </div>
        </div>
    </footer>

    <!-- Product Modal -->
    <div id="product-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="modal-content"></div>
        </div>
    </div>

    <!-- Quiz Modal -->
    <div id="quiz-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="quiz-content">
                <!-- Quiz content loaded by JavaScript -->
            </div>
        </div>
    </div>

    <!-- Sticky Newsletter Banner -->
    <div class="sticky-newsletter" id="sticky-newsletter">
        <div class="sticky-content">
            <div class="sticky-message">
                <i class="fas fa-envelope"></i>
                <div>
                    <strong>Get Our Free Gardening Checklist!</strong>
                    <p>Monthly tips delivered to your inbox</p>
                </div>
            </div>
            <form class="sticky-form">
                <input type="email" placeholder="Your email" required>
                <button type="submit" class="btn-small">Get Checklist</button>
            </form>
            <button class="close-sticky" aria-label="Close">&times;</button>
        </div>
    </div>

    <script src="script.js"></script>
    <script src="persona.js"></script>
    <script src="animations.js"></script>
</body>
</html>
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const problemFilter = document.getElementById('problem-filter');
    const goalFilter = document.getElementById('goal-filter');
    const hubCards = document.querySelectorAll('.hub-card');
    
    function filterCards() {
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        const selectedProblem = problemFilter.value;
        const selectedGoal = goalFilter.value;
        
        hubCards.forEach(card => {
            const matchesTopic = activeFilter === 'all' || card.dataset.topic === activeFilter;
            const matchesProblem = !selectedProblem || card.dataset.problem === selectedProblem;
            const matchesGoal = !selectedGoal || card.dataset.goal === selectedGoal;
            
            if (matchesTopic && matchesProblem && matchesGoal) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Filter button click
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterCards();
        });
    });
    
    // Dropdown changes
    if (problemFilter) problemFilter.addEventListener('change', filterCards);
    if (goalFilter) goalFilter.addEventListener('change', filterCards);
    
    // Sticky newsletter
    const stickyNewsletter = document.querySelector('.sticky-newsletter');
    const closeSticky = document.querySelector('.close-sticky');
    
    if (stickyNewsletter) {
        // Show after scrolling
        window.addEventListener('scroll', function() {
            if (window.scrollY > 1000 && !localStorage.getItem('newsletter-closed')) {
                stickyNewsletter.classList.add('show');
            }
        });
        
        if (closeSticky) {
            closeSticky.addEventListener('click', function() {
                stickyNewsletter.classList.remove('show');
                localStorage.setItem('newsletter-closed', 'true');
            });
        }
    }
});
/* ===== MODERN DESIGN SYSTEM ===== */

:root {
    /* Modern Color Palette */
    --primary-green: #1a472a;
    --secondary-green: #2d5a27;
    --accent-orange: #ff7e36;
    --light-green: #e8f5e9;
    --cream: #f9f7f4;
    --slate: #5a6b71;
    --charcoal: #2c3e50;
    --white: #ffffff;
    
    /* Gradients */
    --gradient-hero: linear-gradient(135deg, #1a472a 0%, #2d5a27 100%);
    --gradient-card: linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%);
    --gradient-accent: linear-gradient(90deg, #ff7e36 0%, #ff9a3c 100%);
    
    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(26, 71, 42, 0.08);
    --shadow-md: 0 4px 20px rgba(26, 71, 42, 0.12);
    --shadow-lg: 0 10px 40px rgba(26, 71, 42, 0.15);
    --shadow-hover: 0 12px 32px rgba(26, 71, 42, 0.2);
    
    /* Border Radius */
    --radius-sm: 8px;
    --radius-md: 12px;
    --radius-lg: 20px;
    --radius-xl: 30px;
    
    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 2rem;
    --space-lg: 3rem;
    --space-xl: 5rem;
}

/* ===== BASE STYLES ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background-color: var(--cream);
    color: var(--charcoal);
    line-height: 1.6;
    overflow-x: hidden;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--space-md);
}

/* ===== MODERN HEADER ===== */
header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(45, 90, 39, 0.1);
    padding: var(--space-sm) 0;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    transition: all 0.3s ease;
}

header.scrolled {
    padding: 0.5rem 0;
    box-shadow: var(--shadow-md);
}

header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-green);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo h1 i {
    color: var(--accent-orange);
}

/* Modern Navigation */
.nav-main ul {
    display: flex;
    list-style: none;
    gap: var(--space-md);
}

.nav-main a {
    text-decoration: none;
    color: var(--slate);
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: var(--radius-sm);
    transition: all 0.3s ease;
    position: relative;
}

.nav-main a:hover {
    color: var(--primary-green);
    background: var(--light-green);
}

.nav-main a.active {
    color: var(--primary-green);
    background: var(--light-green);
}

.nav-main a.active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 1rem;
    right: 1rem;
    height: 2px;
    background: var(--accent-orange);
    border-radius: 2px;
}

/* Persona Selector Modern */
.user-persona-toggle {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: var(--light-green);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-lg);
}

.user-persona-toggle span {
    color: var(--primary-green);
    font-weight: 500;
    font-size: 0.9rem;
}

#persona-selector {
    background: var(--white);
    border: 2px solid rgba(45, 90, 39, 0.2);
    border-radius: var(--radius-sm);
    padding: 0.4rem 0.8rem;
    color: var(--primary-green);
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}

#persona-selector:hover {
    border-color: var(--primary-green);
}

/* ===== MODERN HERO SECTION ===== */
.hero {
    background: var(--gradient-hero) url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80') center/cover;
    background-blend-mode: overlay;
    color: var(--white);
    padding: var(--space-xl) 0;
    margin-top: 70px;
    position: relative;
    overflow: hidden;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(26, 71, 42, 0.9) 0%, rgba(45, 90, 39, 0.7) 100%);
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
}

.hero-content h2 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    font-weight: 700;
    margin-bottom: var(--space-md);
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-content > p {
    font-size: 1.2rem;
    opacity: 0.9;
    margin-bottom: var(--space-lg);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

/* Modern Onboarding Steps */
.onboarding-steps {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-md);
    margin-top: var(--space-xl);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: var(--radius-lg);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.step {
    background: rgba(255, 255, 255, 0.95);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    text-align: center;
    transition: all 0.3s ease;
    color: var(--charcoal);
}

.step:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.step-number {
    background: var(--gradient-accent);
    color: var(--white);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-sm);
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 0 4px 12px rgba(255, 126, 54, 0.3);
}

.step h3 {
    color: var(--primary-green);
    margin-bottom: var(--space-xs);
    font-size: 1.2rem;
}

.step p {
    color: var(--slate);
    font-size: 0.9rem;
    margin-bottom: var(--space-sm);
}

/* Modern Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    background: var(--gradient-accent);
    color: var(--white);
    text-decoration: none;
    border: none;
    border-radius: var(--radius-lg);
    font-weight: 600;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(255, 126, 54, 0.3);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(255, 126, 54, 0.4);
}

.btn:active {
    transform: translateY(-1px);
}

.btn-small {
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    border-radius: var(--radius-md);
}

.btn-secondary {
    background: transparent;
    border: 2px solid var(--primary-green);
    color: var(--primary-green);
    box-shadow: none;
}

.btn-secondary:hover {
    background: var(--primary-green);
    color: var(--white);
}

/* ===== MODERN CARDS ===== */
.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--space-md);
    margin: var(--space-lg) 0;
}

.card {
    background: var(--white);
    border-radius: var(--radius-md);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    position: relative;
}

.card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.card:hover .card-image {
    transform: scale(1.05);
}

.card-content {
    padding: var(--space-md);
}

.card-tags {
    display: flex;
    gap: 0.5rem;
    margin-bottom: var(--space-sm);
    flex-wrap: wrap;
}

.tag {
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.tag-beginner { background: var(--light-green); color: var(--primary-green); }
.tag-expert { background: #fff3e0; color: #e56a2b; }
.tag-seasonal { background: #e3f2fd; color: #1976d2; }

/* ===== MODERN SECTIONS ===== */
section {
    padding: var(--space-xl) 0;
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-lg);
}

.section-header h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--primary-green);
    margin-bottom: var(--space-sm);
}

.section-header p {
    color: var(--slate);
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
}

/* Modern Seasonal Tasks */
.seasonal-tasks {
    background: var(--white);
    border-radius: var(--radius-lg);
    padding: var(--space-lg);
    margin: var(--space-lg) auto;
    max-width: 1000px;
    box-shadow: var(--shadow-md);
}

.seasonal-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
}

.seasonal-header i {
    color: var(--accent-orange);
    font-size: 2rem;
}

.tasks-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-md);
}

.task-card {
    background: var(--light-green);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    border-left: 4px solid var(--accent-orange);
}

.task-card h3 {
    color: var(--primary-green);
    margin-bottom: var(--space-sm);
}

.task-card ul {
    list-style: none;
    margin-bottom: var(--space-md);
}

.task-card li {
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.task-card li::before {
    content: '✓';
    color: var(--accent-orange);
    font-weight: bold;
}

/* ===== MODERN GARDENERS HUB ===== */
.gardeners-hub {
    background: linear-gradient(180deg, var(--cream) 0%, var(--white) 100%);
}

.quick-find-toolbar {
    background: var(--white);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-md);
    margin: var(--space-lg) 0;
}

.filter-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin: var(--space-md) 0;
}

.filter-btn {
    padding: 0.75rem 1.5rem;
    background: var(--light-green);
    border: 2px solid transparent;
    border-radius: var(--radius-md);
    color: var(--primary-green);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.filter-btn:hover {
    background: var(--primary-green);
    color: var(--white);
}

.filter-btn.active {
    background: var(--primary-green);
    color: var(--white);
    box-shadow: 0 4px 12px rgba(26, 71, 42, 0.2);
}

.problem-filters {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--space-md);
    margin-top: var(--space-md);
}

.problem-filters select {
    padding: 0.75rem 1rem;
    border: 2px solid rgba(45, 90, 39, 0.2);
    border-radius: var(--radius-md);
    background: var(--white);
    color: var(--charcoal);
    font-weight: 500;
    transition: all 0.3s ease;
}

.problem-filters select:focus {
    outline: none;
    border-color: var(--primary-green);
    box-shadow: 0 0 0 3px rgba(26, 71, 42, 0.1);
}

/* Hub Cards Modern */
.hub-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: var(--space-lg);
    margin: var(--space-xl) 0;
}

.hub-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    position: relative;
}

.hub-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.hub-card-image {
    width: 100%;
    height: 220px;
    object-fit: cover;
}

.hub-card-content {
    padding: var(--space-md);
}

.hub-card h3 {
    color: var(--primary-green);
    margin-bottom: var(--space-sm);
    font-size: 1.3rem;
}

.read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-orange);
    text-decoration: none;
    font-weight: 600;
    margin-top: var(--space-sm);
    transition: gap 0.3s ease;
}

.read-more:hover {
    gap: 1rem;
}

/* ===== MODERN COMMUNITY ===== */
.community-card {
    background: var(--white);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    text-align: center;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.community-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.community-card i {
    font-size: 3rem;
    color: var(--accent-orange);
    margin-bottom: var(--space-md);
    background: var(--light-green);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto var(--space-md);
}

/* ===== MODERN FOOTER ===== */
footer {
    background: var(--charcoal);
    color: var(--white);
    padding: var(--space-xl) 0 var(--space-md);
    margin-top: var(--space-xl);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--space-lg);
    margin-bottom: var(--space-lg);
}

.footer-section h3 {
    color: var(--white);
    margin-bottom: var(--space-md);
    font-size: 1.2rem;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: var(--space-sm);
}

.footer-section a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: var(--accent-orange);
}

.social-links {
    display: flex;
    gap: var(--space-sm);
    margin-top: var(--space-md);
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    transition: all 0.3s ease;
}

.social-links a:hover {
    background: var(--accent-orange);
    transform: translateY(-3px);
}

.copyright {
    text-align: center;
    padding-top: var(--space-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
}

/* ===== MODERN MODALS ===== */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 2000;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

.modal-content {
    background: var(--white);
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
    max-width: 600px;
    width: 90%;
    max-height: 90vh;
    overflow-y: auto;
    position: relative;
    animation: slideUp 0.4s ease;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.close-modal {
    position: absolute;
    top: var(--space-md);
    right: var(--space-md);
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--slate);
    transition: color 0.3s ease;
}

.close-modal:hover {
    color: var(--primary-green);
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 768px) {
    :root {
        --space-xl: 3rem;
        --space-lg: 2rem;
        --space-md: 1.5rem;
    }
    
    .hero-content h2 {
        font-size: 2.5rem;
    }
    
    .onboarding-steps {
        grid-template-columns: 1fr;
    }
    
    .nav-main ul {
        display: none;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--white);
        padding: var(--space-md);
        box-shadow: var(--shadow-lg);
        border-radius: 0 0 var(--radius-md) var(--radius-md);
    }
    
    .nav-main.active ul {
        display: flex;
        flex-direction: column;
    }
    
    .user-persona-toggle {
        display: none;
    }
    
    .hub-grid {
        grid-template-columns: 1fr;
    }
    
    .problem-filters {
        grid-template-columns: 1fr;
    }
}

/* ===== UTILITIES ===== */
.text-center { text-align: center; }
.mt-1 { margin-top: var(--space-sm); }
.mt-2 { margin-top: var(--space-md); }
.mt-3 { margin-top: var(--space-lg); }
.mb-1 { margin-bottom: var(--space-sm); }
.mb-2 { margin-bottom: var(--space-md); }
.mb-3 { margin-bottom: var(--space-lg); }

/* Loading Animation */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.fade-in-up {
    animation: fadeInUp 0.6s ease forwards;
}
/* ===== PAGE HERO ===== */
.page-hero {
    background: linear-gradient(135deg, rgba(26, 71, 42, 0.9), rgba(45, 90, 39, 0.8));
    color: white;
    padding: 8rem 0 4rem;
    text-align: center;
    margin-top: 70px;
}

.page-hero h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.page-hero p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 600px;
    margin: 0 auto 2rem;
}

/* ===== SECTION HEADERS ===== */
.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--primary-green);
    margin-bottom: 1rem;
}

.section-header p {
    color: var(--slate);
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
}

/* ===== ACTIVITIES GRID ===== */
.activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.activity-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.activity-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.activity-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.activity-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.activity-card:hover .activity-image img {
    transform: scale(1.1);
}

.activity-category {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-orange);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.activity-content {
    padding: 1.5rem;
}

.activity-content h3 {
    color: var(--primary-green);
    margin-bottom: 1rem;
    font-size: 1.3rem;
}

.activity-details {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem 0;
    color: var(--slate);
    font-size: 0.9rem;
}

.activity-details span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

/* ===== CALENDAR ===== */
.calendar-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin: 2rem 0;
}

.calendar-event {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    align-items: start;
}

.event-date {
    text-align: center;
    background: var(--light-green);
    padding: 1rem;
    border-radius: 8px;
    min-width: 80px;
}

.date-day {
    font-size: 1.8rem;
    font-weight: bold;
    color: var(--primary-green);
    display: block;
}

.date-month {
    font-size: 0.9rem;
    color: var(--slate);
    text-transform: uppercase;
}

.event-details h3 {
    color: var(--primary-green);
    margin-bottom: 0.5rem;
}

/* ===== BOXES GRID ===== */
.boxes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.box-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
    position: relative;
}

.box-card.featured {
    border: 3px solid var(--accent-orange);
}

.box-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.box-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: var(--accent-orange);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 1;
}

.box-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.box-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.box-card:hover .box-image img {
    transform: scale(1.1);
}

.box-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.box-card:hover .box-overlay {
    opacity: 1;
}

.box-quick-view {
    background: white;
    color: var(--primary-green);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

.box-quick-view:hover {
    background: var(--primary-green);
    color: white;
}

.box-content {
    padding: 1.5rem;
}

.box-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
    color: #ffc107;
}

.box-rating span {
    color: var(--slate);
    font-size: 0.9rem;
    margin-left: 0.5rem;
}

.box-subtitle {
    color: var(--accent-orange);
    font-weight: 600;
    margin-bottom: 1rem;
}

.box-features {
    margin: 1rem 0;
}

.box-features span {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    color: var(--slate);
}

.box-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.5rem;
}

.box-pricing {
    display: flex;
    flex-direction: column;
}

.box-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-green);
}

.box-savings {
    font-size: 0.9rem;
    color: var(--accent-orange);
}

/* ===== HUB GRID ===== */
.hub-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin: 3rem 0;
}

.hub-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all 0.3s ease;
}

.hub-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.hub-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.hub-card-content {
    padding: 1.5rem;
}

.hub-card-content h3 {
    color: var(--primary-green);
    margin-bottom: 1rem;
}

.tags {
    display: flex;
    gap: 0.5rem;
    margin: 1rem 0;
    flex-wrap: wrap;
}

.tag {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.75rem;
    font-weight: 600;
}

.tag.beginner { background: #e8f5e9; color: #2e7d32; }
.tag.expert { background: #fff3e0; color: #ef6c00; }
.tag.seasonal { background: #e3f2fd; color: #1565c0; }
.tag.pests { background: #ffebee; color: #c62828; }
.tag.soil { background: #efebe9; color: #5d4037; }
.tag.greenhouse { background: #e8eaf6; color: #3949ab; }

.read-more {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--accent-orange);
    text-decoration: none;
    font-weight: 600;
    margin-top: 1rem;
}

.read-more:hover {
    gap: 1rem;
}

/* ===== FOCUS GRID ===== */
.focus-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.focus-card {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
}

.focus-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
}

/* ===== GUIDELINES ===== */
.guidelines-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.guideline {
    text-align: center;
    padding: 1.5rem;
}

.guideline i {
    font-size: 2rem;
    color: var(--accent-orange);
    margin-bottom: 1rem;
}

/* ===== LOCATIONS ===== */
.locations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.location-card {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: var(--shadow-sm);
}

.location-card h3 {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--primary-green);
    margin-bottom: 1rem;
}

/* ===== UTILITY CLASSES ===== */
.mt-1 { margin-top: 1rem; }
.mt-2 { margin-top: 2rem; }
.mt-3 { margin-top: 3rem; }
.mb-1 { margin-bottom: 1rem; }
.mb-2 { margin-bottom: 2rem; }
.mb-3 { margin-bottom: 3rem; }
.text-center { text-align: center; }

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .page-hero h1 {
        font-size: 2.5rem;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .activities-grid,
    .boxes-grid,
    .hub-grid {
        grid-template-columns: 1fr;
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .contact-type-selector {
        justify-content: center;
    }
    
    .box-footer {
        flex-direction: column;
        gap: 1rem;
        align-items: stretch;
    }
    
    .box-footer button {
        width: 100%;
    }
}
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gardens | Gardeners Hub</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .gardeners-hub-hero {
            background: linear-gradient(135deg, rgba(26, 71, 42, 0.9), rgba(45, 90, 39, 0.8)), 
                        url('https://images.unsplash.com/photo-1598880940080-ff9a29891b85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 8rem 0 4rem;
            text-align: center;
        }
        
        .hub-search {
            max-width: 600px;
            margin: 2rem auto;
        }
        
        .search-bar {
            display: flex;
            gap: 1rem;
            margin-top: 1rem;
        }
        
        .search-bar input {
            flex: 1;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: 50px;
            font-size: 1rem;
        }
        
        .hub-categories {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .hub-category {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            text-align: center;
            box-shadow: var(--shadow-md);
            transition: all 0.3s ease;
        }
        
        .hub-category:hover {
            transform: translateY(-10px);
            box-shadow: var(--shadow-lg);
        }
        
        .hub-category i {
            font-size: 2.5rem;
            color: var(--primary-green);
            margin-bottom: 1rem;
        }
        
        .expert-corner {
            background: linear-gradient(135deg, #2d5a27, #3e7b34);
            color: white;
            padding: 4rem 0;
            margin: 4rem 0;
            border-radius: 20px;
        }
        
        .expert-articles {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .expert-article {
            background: rgba(255,255,255,0.1);
            padding: 1.5rem;
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        
        .article-meta {
            display: flex;
            justify-content: space-between;
            margin-top: 1rem;
            font-size: 0.9rem;
            opacity: 0.9;
        }
        
        .hub-resources {
            background: var(--light-green);
            padding: 3rem;
            border-radius: 20px;
            margin: 3rem 0;
        }
        
        .resources-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }
        
        .resource-item {
            text-align: center;
            padding: 1.5rem;
        }
        
        .resource-item i {
            font-size: 2rem;
            color: var(--accent-orange);
            margin-bottom: 1rem;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="main-header">
        <div class="container">
            <div class="logo">
                <a href="index.html"><h1><i class="fas fa-leaf"></i> Gardens</h1></a>
            </div>
            <nav class="nav-main">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="activities.html">Activities</a></li>
                    <li><a href="boxes.html">Boxes</a></li>
                    <li><a href="gardeners-hub.html" class="active">Gardeners Hub</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="gardeners-hub-hero">
        <div class="container">
            <h1>Gardeners Hub</h1>
            <p class="subtitle">Your comprehensive resource for everything gardening</p>
            
            <div class="hub-search">
                <p>Search thousands of articles, guides, and resources</p>
                <div class="search-bar">
                    <input type="text" placeholder="Search for gardening tips, problems, plants...">
                    <button class="btn"><i class="fas fa-search"></i> Search</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Find Toolbar -->
    <section class="quick-find-section">
        <div class="container">
            <div class="quick-find-toolbar">
                <h2>Quick Find Tools</h2>
                <p>Filter content by your specific needs and interests</p>
                
                <div class="filter-buttons">
                    <button class="filter-btn active" data-filter="all">All Topics</button>
                    <button class="filter-btn" data-filter="beginner">Beginner Basics</button>
                    <button class="filter-btn" data-filter="seasonal">Seasonal Tasks</button>
                    <button class="filter-btn" data-filter="greenhouse">Greenhouse Tips</button>
                    <button class="filter-btn" data-filter="allotment">Allotment Jobs</button>
                    <button class="filter-btn" data-filter="pests">Pest Control</button>
                    <button class="filter-btn" data-filter="soil">Soil Health</button>
                </div>
                
                <div class="problem-filters">
                    <div class="filter-group">
                        <label>Filter by Problem:</label>
                        <select id="problem-filter">
                            <option value="">Select a problem...</option>
                            <option value="pests">Pests & Diseases</option>
                            <option value="nutrient">Nutrient Deficiency</option>
                            <option value="watering">Watering Issues</option>
                            <option value="weather">Weather Damage</option>
                            <option value="soil">Soil Problems</option>
                            <option value="growth">Poor Growth</option>
                        </select>
                    </div>
                    
                    <div class="filter-group">
                        <label>Filter by Goal:</label>
                        <select id="goal-filter">
                            <option value="">Select a goal...</option>
                            <option value="food">Grow Food</option>
                            <option value="flowers">Grow Flowers</option>
                            <option value="wildlife">Attract Wildlife</option>
                            <option value="low-maintenance">Low Maintenance</option>
                            <option value="indoor">Indoor Gardening</option>
                        </select>
                    </div>
                    
                    <div class="filter-group">
                        <label>Filter by Space:</label>
                        <select id="space-filter">
                            <option value="">Select space...</option>
                            <option value="balcony">Balcony</option>
                            <option value="garden">Garden</option>
                            <option value="allotment">Allotment</option>
                            <option value="indoor">Indoor</option>
                            <option value="window">Window Box</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Hub Categories -->
    <section class="hub-categories-section">
        <div class="container">
            <div class="hub-categories">
                <div class="hub-category">
                    <i class="fas fa-book-open"></i>
                    <h3>Beginner Basics</h3>
                    <p>Start your gardening journey with our comprehensive beginner guides and tutorials.</p>
                    <a href="#" class="btn-small">Explore</a>
                </div>
                
                <div class="hub-category">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>Seasonal Guides</h3>
                    <p>Month-by-month gardening tasks and seasonal planting advice.</p>
                    <a href="#" class="btn-small">Explore</a>
                </div>
                
                <div class="hub-category">
                    <i class="fas fa-seedling"></i>
                    <h3>Plant Directory</h3>
                    <p>Comprehensive guide to plants, vegetables, flowers, and herbs.</p>
                    <a href="#" class="btn-small">Explore</a>
                </div>
                
                <div class="hub-category">
                    <i class="fas fa-bug"></i>
                    <h3>Pest Solutions</h3>
                    <p>Identify and treat common garden pests with natural solutions.</p>
                    <a href="#" class="btn-small">Explore</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Current Month's Focus -->
    <section class="monthly-focus">
        <div class="container">
            <div class="section-header">
                <h2><i class="fas fa-calendar-check"></i> November Focus: Winter Preparation</h2>
                <p>Essential tasks to prepare your garden for winter</p>
            </div>
            
            <div class="focus-grid">
                <div class="focus-card">
                    <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Winter Protection">
                    <h3>Protect Tender Plants</h3>
                    <p>How to protect your plants from frost and cold weather damage.</p>
                    <a href="#" class="read-more">Read Guide <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="focus-card">
                    <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Tool Maintenance">
                    <h3>Tool Maintenance</h3>
                    <p>Clean, sharpen, and store your gardening tools for winter.</p>
                    <a href="#" class="read-more">Read Guide <i class="fas fa-arrow-right"></i></a>
                </div>
                
                <div class="focus-card">
                    <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Spring Planning">
                    <h3>Plan for Spring</h3>
                    <p>Order seeds, plan your layout, and prepare for next season.</p>
                    <a href="#" class="read-more">Read Guide <i class="fas fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </section>

    <!-- Expert Corner -->
    <section class="expert-corner">
        <div class="container">
            <div class="section-header">
                <h2>Expert Corner</h2>
                <p>Deep dive articles from our gardening experts</p>
            </div>
            
            <div class="expert-articles">
                <article class="expert-article">
                    <h3>Composting Masterclass</h3>
                    <p>Learn how to create perfect compost for your garden, including hot composting techniques and troubleshooting common issues.</p>
                    <div class="article-meta">
                        <span>Dr. Lily Chen</span>
                        <span>15 min read</span>
                    </div>
                </article>
                
                <article class="expert-article">
                    <h3>Companion Planting Guide</h3>
                    <p>Discover which plants grow well together to improve yields, deter pests, and enhance biodiversity in your garden.</p>
                    <div class="article-meta">
                        <span>Tom Green</span>
                        <span>12 min read</span>
                    </div>
                </article>
                
                <article class="expert-article">
                    <h3>Organic Pest Control</h3>
                    <p>Natural solutions for common garden pests without using harmful chemicals. Safe for children, pets, and wildlife.</p>
                    <div class="article-meta">
                        <span>Sarah Wilson</span>
                        <span>18 min read</span>
                    </div>
                </article>
            </div>
            
            <div class="expert-cta">
                <a href="#" class="btn">View All Expert Articles</a>
            </div>
        </div>
    </section>

    <!-- Hub Resources -->
    <section class="hub-resources">
        <div class="container">
            <div class="section-header">
                <h2>Free Gardening Resources</h2>
                <p>Download our free guides, charts, and tools</p>
            </div>
            
            <div class="resources-grid">
                <div class="resource-item">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>Planting Calendar</h3>
                    <p>Month-by-month planting guide for your region</p>
                    <a href="#" class="btn-small">Download PDF</a>
                </div>
                
                <div class="resource-item">
                    <i class="fas fa-bug"></i>
                    <h3>Pest ID Chart</h3>
                    <p>Identify common pests and organic solutions</p>
                    <a href="#" class="btn-small">Download PDF</a>
                </div>
                
                <div class="resource-item">
                    <i class="fas fa-calculator"></i>
                    <h3>Soil Calculator</h3>
                    <p>Calculate how much soil you need for any space</p>
                    <a href="#" class="btn-small">Use Tool</a>
                </div>
                
                <div class="resource-item">
                    <i class="fas fa-ruler"></i>
                    <h3>Garden Planner</h3>
                    <p>Plan your garden layout and crop rotation</p>
                    <a href="#" class="btn-small">Download Template</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Hub Articles Grid -->
    <section class="hub-articles">
        <div class="container">
            <div class="section-header">
                <h2>Latest Articles</h2>
                <p>Fresh gardening advice updated weekly</p>
            </div>
            
            <div class="hub-grid" id="hub-articles-grid">
                <!-- Articles will be filtered here -->
                <article class="hub-card" data-topic="beginner" data-problem="" data-goal="food" data-space="balcony">
                    <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Beginner gardening">
                    <div class="hub-card-content">
                        <h3>Starting a Balcony Vegetable Garden</h3>
                        <p>Complete guide to growing vegetables in small spaces. Perfect for beginners with limited space.</p>
                        <div class="tags">
                            <span class="tag beginner">Beginner</span>
                            <span class="tag balcony">Balcony</span>
                            <span class="tag food">Food</span>
                        </div>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
                
                <article class="hub-card" data-topic="greenhouse" data-problem="pests" data-goal="food" data-space="garden">
                    <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Greenhouse pest control">
                    <div class="hub-card-content">
                        <h3>Natural Pest Control in Greenhouses</h3>
                        <p>How to manage aphids, whiteflies, and spider mites without chemicals. Companion planting solutions.</p>
                        <div class="tags">
                            <span class="tag expert">Expert</span>
                            <span class="tag pests">Pests</span>
                            <span class="tag greenhouse">Greenhouse</span>
                        </div>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
                
                <article class="hub-card" data-topic="seasonal" data-problem="weather" data-goal="flowers" data-space="garden">
                    <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Winter gardening">
                    <div class="hub-card-content">
                        <h3>Winter Gardening: What to Plant Now</h3>
                        <p>Cold-tolerant vegetables and flowers you can plant now for winter and early spring harvest.</p>
                        <div class="tags">
                            <span class="tag seasonal">Seasonal</span>
                            <span class="tag weather">Weather</span>
                            <span class="tag flowers">Flowers</span>
                        </div>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
                
                <article class="hub-card" data-topic="soil" data-problem="nutrient" data-goal="food" data-space="allotment">
                    <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Soil preparation">
                    <div class="hub-card-content">
                        <h3>Improving Soil Health Naturally</h3>
                        <p>How to test your soil and improve it with organic amendments for better plant growth.</p>
                        <div class="tags">
                            <span class="tag soil">Soil</span>
                            <span class="tag nutrient">Nutrient</span>
                            <span class="tag allotment">Allotment</span>
                        </div>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </article>
            </div>
            
            <div class="hub-cta">
                <a href="#" class="btn">Load More Articles</a>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="hub-newsletter">
        <div class="container">
            <div class="newsletter-card">
                <div class="newsletter-content">
                    <h2>Get Weekly Gardening Tips</h2>
                    <p>Subscribe to our newsletter and receive expert advice, seasonal reminders, and exclusive hub content.</p>
                    <form class="newsletter-form">
                        <div class="form-group">
                            <input type="email" placeholder="Your email address" required>
                            <button type="submit" class="btn">Subscribe</button>
                        </div>
                        <p class="form-note">No spam, just pure gardening wisdom.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Gardens Hub</h3>
                    <p class="footer-description">Your trusted source for gardening knowledge since 2018.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Hub Categories</h3>
                    <ul>
                        <li><a href="#">Beginner Basics</a></li>
                        <li><a href="#">Seasonal Guides</a></li>
                        <li><a href="#">Plant Directory</a></li>
                        <li><a href="#">Pest Solutions</a></li>
                        <li><a href="#">Soil Health</a></li>
                        <li><a href="#">Tool Guides</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="#">Planting Calendar</a></li>
                        <li><a href="#">Pest ID Chart</a></li>
                        <li><a href="#">Garden Planner</a></li>
                        <li><a href="#">Soil Calculator</a></li>
                        <li><a href="#">Expert Articles</a></li>
                        <li><a href="#">Video Tutorials</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Ask an Expert</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> experts@gardens.com</li>
                        <li><i class="fas fa-comments"></i> Live Chat Support</li>
                        <li><i class="fas fa-question-circle"></i> FAQ Database</li>
                        <li><i class="fas fa-video"></i> Video Consultations</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Gardens Hub. All content is reviewed by gardening experts.</p>
            </div>
        </div>
    </footer>

    <!-- Sticky Newsletter -->
    <div class="sticky-newsletter" id="hub-sticky-newsletter">
        <div class="sticky-content">
            <div class="sticky-message">
                <i class="fas fa-download"></i>
                <div>
                    <strong>Free Download: Winter Gardening Checklist</strong>
                    <p>Get your free PDF guide to winter garden preparation</p>
                </div>
            </div>
            <form class="sticky-form">
                <input type="email" placeholder="Email for download" required>
                <button type="submit" class="btn-small">Get Checklist</button>
            </form>
            <button class="close-sticky" aria-label="Close">&times;</button>
        </div>
    </div>

    <script src="script.js"></script>
    <script src="hub-filter.js"></script>
</body>
</html>
// Modern animations and interactions
document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.getElementById('main-header');
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Floating images animation
    const floatingImages = document.querySelectorAll('.floating-image');
    floatingImages.forEach((img, index) => {
        img.style.animation = `float ${3 + index}s ease-in-out infinite`;
    });

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(${Math.random() * 10}deg); }
            50% { transform: translateY(-20px) rotate(${Math.random() * 10}deg); }
        }
        
        .hero-floating-images {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 0;
        }
        
        .floating-image {
            position: absolute;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            opacity: 0.8;
            width: 150px;
            height: 150px;
            object-fit: cover;
        }
        
        .floating-1 { top: 20%; left: 5%; animation-delay: 0s; }
        .floating-2 { top: 60%; right: 10%; animation-delay: 1s; }
        .floating-3 { bottom: 20%; left: 15%; animation-delay: 2s; }
        
        @media (max-width: 768px) {
            .floating-image {
                width: 100px;
                height: 100px;
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 1s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        /* Step visuals */
        .step-visual {
            position: relative;
            margin-bottom: 1rem;
            border-radius: 12px;
            overflow: hidden;
        }
        
        .step-visual img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .step:hover .step-visual img {
            transform: scale(1.1);
        }
        
        .step-number {
            position: absolute;
            top: 15px;
            right: 15px;
            background: linear-gradient(135deg, #ff7e36, #ff9a3c);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.2rem;
            box-shadow: 0 4px 12px rgba(255, 126, 54, 0.4);
        }
        
        /* Box card styles */
        .boxes-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .box-card {
            background: white;
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
            position: relative;
        }
        
        .box-card.featured {
            transform: scale(1.05);
            border: 3px solid #ff7e36;
        }
        
        .box-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        
        .box-badge {
            position: absolute;
            top: 15px;
            right: 15px;
            background: #ff7e36;
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
            z-index: 1;
        }
        
        .box-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
        }
        
        .box-content {
            padding: 1.5rem;
        }
        
        .box-subtitle {
            color: #ff7e36;
            font-weight: 600;
            margin-bottom: 0.5rem;
        }
        
        .box-features {
            margin: 1rem 0;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }
        
        .box-features span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: #5a6b71;
        }
        
        .box-features i {
            color: #2d5a27;
        }
        
        .box-footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 1rem;
        }
        
        .box-price {
            font-size: 1.2rem;
            font-weight: bold;
            color: #2d5a27;
        }
        
        /* Persona welcome card */
        .welcome-card {
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            margin: 2rem 0;
        }
        
        .persona-header {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1.5rem;
        }
        
        .persona-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(135deg, #2d5a27, #3e7b34);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 1.5rem;
        }
        
        .persona-subtitle {
            color: #5a6b71;
            font-size: 0.9rem;
        }
        
        .persona-actions {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
            flex-wrap: wrap;
        }
        
        /* Hero stats */
        .hero-stats {
            display: flex;
            justify-content: center;
            gap: 3rem;
            margin-top: 3rem;
            flex-wrap: wrap;
        }
        
        .stat {
            text-align: center;
        }
        
        .stat h3 {
            font-size: 2.5rem;
            font-weight: bold;
            background: linear-gradient(135deg, #ff7e36, #ff9a3c);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 0.5rem;
        }
        
        .stat p {
            color: rgba(255,255,255,0.9);
            font-size: 0.9rem;
        }
        
        /* Newsletter card */
        .newsletter-card {
            background: linear-gradient(135deg, #1a472a, #2d5a27);
            color: white;
            border-radius: 20px;
            padding: 3rem;
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        .newsletter-image img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
        }
        
        .form-group {
            display: flex;
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .form-group input {
            flex: 1;
            padding: 1rem 1.5rem;
            border: none;
            border-radius: 10px;
            font-size: 1rem;
        }
        
        .form-note {
            font-size: 0.8rem;
            opacity: 0.8;
        }
        
        /* Community icons */
        .community-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #2d5a27, #3e7b34);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 2rem;
            margin: 0 auto 1.5rem;
        }
        
        /* Contact info */
        .contact-info li {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin-bottom: 1rem;
        }
        
        .contact-info i {
            color: #ff7e36;
            width: 20px;
        }
        
        /* Sticky newsletter */
        .sticky-newsletter {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #1a472a, #2d5a27);
            color: white;
            padding: 1rem;
            transform: translateY(100%);
            transition: transform 0.3s ease;
            z-index: 1000;
            box-shadow: 0 -5px 20px rgba(0,0,0,0.2);
        }
        
        .sticky-newsletter.show {
            transform: translateY(0);
        }
        
        .sticky-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        .sticky-message {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        
        .sticky-message i {
            font-size: 1.5rem;
        }
        
        .sticky-form {
            display: flex;
            gap: 1rem;
            flex: 1;
            max-width: 500px;
        }
        
        .sticky-form input {
            flex: 1;
            padding: 0.75rem 1rem;
            border: none;
            border-radius: 5px;
        }
        
        .close-sticky {
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
        }
        
        /* Accessibility note */
        .accessibility-note {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-top: 1rem;
            font-size: 0.8rem;
            color: rgba(255,255,255,0.7);
        }
        
        .accessibility-note i {
            margin-right: 0.5rem;
        }
    `;
    document.head.appendChild(style);
});
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gardens | Subscription Boxes</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    <style>
        .box-comparison {
            background: var(--light-green);
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            margin: var(--space-xl) 0;
        }
        
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: var(--space-lg) 0;
            background: white;
            border-radius: var(--radius-md);
            overflow: hidden;
            box-shadow: var(--shadow-md);
        }
        
        .comparison-table th, .comparison-table td {
            padding: 1rem;
            text-align: center;
            border-bottom: 1px solid rgba(0,0,0,0.1);
        }
        
        .comparison-table th {
            background: var(--primary-green);
            color: white;
            font-weight: 600;
        }
        
        .comparison-table tr:hover {
            background: rgba(45, 90, 39, 0.05);
        }
        
        .feature-icon {
            color: var(--accent-orange);
            margin-right: 0.5rem;
        }
        
        .box-customization {
            background: white;
            border-radius: var(--radius-lg);
            padding: var(--space-xl);
            margin: var(--space-xl) 0;
            box-shadow: var(--shadow-md);
        }
        
        .customization-options {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: var(--space-md);
            margin: var(--space-lg) 0;
        }
        
        .customization-option {
            text-align: center;
            padding: var(--space-md);
            border: 2px solid var(--light-green);
            border-radius: var(--radius-md);
            transition: all 0.3s ease;
        }
        
        .customization-option:hover {
            border-color: var(--primary-green);
            transform: translateY(-5px);
        }
        
        .customization-option i {
            font-size: 2rem;
            color: var(--primary-green);
            margin-bottom: var(--space-sm);
        }
        
        .box-testimonial {
            background: linear-gradient(135deg, #1a472a, #2d5a27);
            color: white;
            padding: var(--space-xl);
            border-radius: var(--radius-lg);
            margin: var(--space-xl) 0;
        }
        
        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: var(--space-lg);
        }
        
        .testimonial-card {
            background: rgba(255,255,255,0.1);
            padding: var(--space-md);
            border-radius: var(--radius-md);
            backdrop-filter: blur(10px);
        }
        
        .testimonial-rating {
            color: #ffd700;
            margin-bottom: var(--space-sm);
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header id="main-header">
        <div class="container">
            <div class="logo">
                <a href="index.html"><h1><i class="fas fa-leaf"></i> Gardens</h1></a>
            </div>
            <nav class="nav-main">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="activities.html">Activities</a></li>
                    <li><a href="boxes.html" class="active">Boxes</a></li>
                    <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="page-hero">
        <div class="container">
            <div class="hero-content">
                <h1>Curated Gardening Boxes</h1>
                <p>Discover our hand-picked subscription boxes designed for every gardener</p>
                <a href="#boxes-grid" class="btn btn-large">
                    Explore Boxes <i class="fas fa-arrow-down"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Boxes Introduction -->
    <section class="boxes-intro">
        <div class="container">
            <div class="intro-content">
                <h2>Perfect for Every Gardener</h2>
                <p>From beginner to expert, urban balcony to country garden, we have a box that fits your needs, space, and skill level.</p>
                <a href="#comparison" class="btn-secondary">Compare All Boxes</a>
            </div>
        </div>
    </section>

    <!-- Boxes Grid -->
    <section class="boxes-grid-section" id="boxes-grid">
        <div class="container">
            <div class="boxes-grid">
                <!-- Oddbox -->
                <article class="box-card featured">
                    <div class="box-badge">Most Popular</div>
                    <div class="box-image">
                        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Oddbox">
                        <div class="box-overlay">
                            <button class="box-quick-view" data-box="oddbox">Quick View</button>
                        </div>
                    </div>
                    <div class="box-content">
                        <h3>Oddbox</h3>
                        <div class="box-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>4.5 (2,134 reviews)</span>
                        </div>
                        <p class="box-subtitle">Perfect for beginners • Weekly deliveries</p>
                        <p class="box-description">Rescue wonky vegetables rejected by supermarkets, plus seeds and exclusive blog access.</p>
                        <div class="box-features">
                            <span><i class="fas fa-check-circle feature-icon"></i> Weekly vegetable deliveries</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Seasonal seeds included</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Access to expert blog</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Perfect for small spaces</span>
                        </div>
                        <div class="box-footer">
                            <div class="box-pricing">
                                <span class="box-price">£18/month</span>
                                <span class="box-savings">Save 20% with annual plan</span>
                            </div>
                            <button class="btn" data-box="oddbox">Choose Plan</button>
                        </div>
                    </div>
                </article>

                <!-- Flourish -->
                <article class="box-card">
                    <div class="box-badge">Seasonal</div>
                    <div class="box-image">
                        <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Flourish">
                        <div class="box-overlay">
                            <button class="box-quick-view" data-box="flourish">Quick View</button>
                        </div>
                    </div>
                    <div class="box-content">
                        <h3>Flourish</h3>
                        <div class="box-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>5.0 (894 reviews)</span>
                        </div>
                        <p class="box-subtitle">Four seasonal boxes • Complete starter kit</p>
                        <p class="box-description">Quarterly boxes with everything you need for seasonal gardening success.</p>
                        <div class="box-features">
                            <span><i class="fas fa-check-circle feature-icon"></i> 4 boxes per year (seasonal)</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Seeds with seed trays</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Watering can included</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Handmade cruelty-free soap</span>
                        </div>
                        <div class="box-footer">
                            <div class="box-pricing">
                                <span class="box-price">£75/year</span>
                                <span class="box-savings">£18.75 per box</span>
                            </div>
                            <button class="btn" data-box="flourish">Choose Plan</button>
                        </div>
                    </div>
                </article>

                <!-- Cottage -->
                <article class="box-card">
                    <div class="box-badge">Wildflowers</div>
                    <div class="box-image">
                        <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cottage">
                        <div class="box-overlay">
                            <button class="box-quick-view" data-box="cottage">Quick View</button>
                        </div>
                    </div>
                    <div class="box-content">
                        <h3>Cottage</h3>
                        <div class="box-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>4.9 (1,567 reviews)</span>
                        </div>
                        <p class="box-subtitle">Monthly wildflowers • Educational</p>
                        <p class="box-description">Transform your space into a cottage garden paradise with monthly wildflower deliveries.</p>
                        <div class="box-features">
                            <span><i class="fas fa-check-circle feature-icon"></i> Monthly wild flower seeds</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Educational fact cards</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Seed markers and twine</span>
                            <span><i class="fas fa-check-circle feature-icon"></i> Perfect for pollinators</span>
                        </div>
                        <div class="box-footer">
                            <div class="box-pricing">
                                <span class="box-price">£22/month</span>
                                <span class="box-savings">Save 15% with annual plan</span>
                            </div>
                            <button class="btn" data-box="cottage">Choose Plan</button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Box Comparison -->
    <section class="box-comparison" id="comparison">
        <div class="container">
            <div class="section-header">
                <h2>Compare All Boxes</h2>
                <p>Find the perfect box for your gardening needs</p>
            </div>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Features</th>
                        <th>Oddbox</th>
                        <th>Flourish</th>
                        <th>Cottage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Price</td>
                        <td>£18/month</td>
                        <td>£75/year</td>
                        <td>£22/month</td>
                    </tr>
                    <tr>
                        <td>Delivery Frequency</td>
                        <td>Weekly</td>
                        <td>Quarterly (4x/year)</td>
                        <td>Monthly</td>
                    </tr>
                    <tr>
                        <td>Best For</td>
                        <td>Beginners & Small Spaces</td>
                        <td>Seasonal Gardeners</td>
                        <td>Wildflower Enthusiasts</td>
                    </tr>
                    <tr>
                        <td>Vegetables Included</td>
                        <td><i class="fas fa-check feature-icon"></i></td>
                        <td><i class="fas fa-check feature-icon"></i></td>
                        <td><i class="fas fa-times"></i></td>
                    </tr>
                    <tr>
                        <td>Flower Seeds Included</td>
                        <td><i class="fas fa-check feature-icon"></i></td>
                        <td><i class="fas fa-check feature-icon"></i></td>
                        <td><i class="fas fa-check feature-icon"></i></td>
                    </tr>
                    <tr>
                        <td>Tools Included</td>
                        <td><i class="fas fa-times"></i></td>
                        <td><i class="fas fa-check feature-icon"></i></td>
                        <td><i class="fas fa-times"></i></td>
                    </tr>
                    <tr>
                        <td>Educational Materials</td>
                        <td>Blog Access</td>
                        <td>Growing Guides</td>
                        <td>Fact Cards</td>
                    </tr>
                    <tr>
                        <td>Difficulty Level</td>
                        <td>Beginner</td>
                        <td>Intermediate</td>
                        <td>Beginner to Intermediate</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="comparison-cta">
                <button class="btn" id="compare-btn">Download Comparison Chart (PDF)</button>
            </div>
        </div>
    </section>

    <!-- Custom Boxes -->
    <section class="box-customization" id="corporate">
        <div class="container">
            <div class="section-header">
                <h2>Custom Corporate Boxes</h2>
                <p>Perfect for corporate gifts, team building, and client appreciation</p>
            </div>
            
            <div class="customization-options">
                <div class="customization-option">
                    <i class="fas fa-gift"></i>
                    <h3>Corporate Gifting</h3>
                    <p>Custom branded boxes for clients and employees</p>
                </div>
                
                <div class="customization-option">
                    <i class="fas fa-users"></i>
                    <h3>Team Building</h3>
                    <p>Gardening workshops and team planting sessions</p>
                </div>
                
                <div class="customization-option">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>Seasonal Programs</h3>
                    <p>Quarterly box programs for year-round engagement</p>
                </div>
                
                <div class="customization-option">
                    <i class="fas fa-seedling"></i>
                    <h3>Wellness Packages</h3>
                    <p>Gardening for stress relief and mindfulness</p>
                </div>
            </div>
            
            <div class="customization-form">
                <h3>Request a Corporate Proposal</h3>
                <form id="corporate-form">
                    <div class="form-row">
                        <input type="text" placeholder="Company Name" required>
                        <input type="email" placeholder="Work Email" required>
                    </div>
                    <div class="form-row">
                        <input type="number" placeholder="Number of Boxes" min="10" required>
                        <select required>
                            <option value="">Select Budget Range</option>
                            <option value="low">£500-£2,000</option>
                            <option value="medium">£2,000-£5,000</option>
                            <option value="high">£5,000+</option>
                        </select>
                    </div>
                    <textarea placeholder="Tell us about your needs..." rows="4"></textarea>
                    <button type="submit" class="btn">Request Proposal</button>
                </form>
            </div>
        </div>
    </section>

    <!-- Testimonials -->
    <section class="box-testimonial">
        <div class="container">
            <div class="section-header" style="color: white;">
                <h2>What Our Gardeners Say</h2>
                <p>Join thousands of happy gardeners growing with us</p>
            </div>
            
            <div class="testimonial-grid">
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"The Oddbox transformed my tiny balcony into a productive vegetable garden. As a complete beginner, the weekly guidance was invaluable!"</p>
                    <div class="testimonial-author">
                        <strong>Annie M.</strong>
                        <span>Begninner Gardener, London</span>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"Flourish boxes have taken my gardening to the next level. The seasonal approach and quality tools are exceptional."</p>
                    <div class="testimonial-author">
                        <strong>Evan R.</strong>
                        <span>Experienced Gardener, Edinburgh</span>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-rating">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p>"We ordered custom boxes for our corporate clients and the feedback was incredible. Gardens made the entire process seamless."</p>
                    <div class="testimonial-author">
                        <strong>Chris B.</strong>
                        <span>Corporate Client, Manchester</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="boxes-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Start Your Gardening Journey?</h2>
                <p>Take our 2-minute quiz to find your perfect box match.</p>
                <button class="btn btn-large" id="box-quiz-btn">
                    Take the Box Quiz <i class="fas fa-play-circle"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Gardens</h3>
                    <p class="footer-description">Curated gardening boxes for every skill level and space.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Our Boxes</h3>
                    <ul>
                        <li><a href="#oddbox">Oddbox</a></li>
                        <li><a href="#flourish">Flourish</a></li>
                        <li><a href="#cottage">Cottage</a></li>
                        <li><a href="#corporate">Corporate Boxes</a></li>
                        <li><a href="#">Gift Cards</a></li>
                        <li><a href="#">Seasonal Specials</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Shipping & Delivery</a></li>
                        <li><a href="#">Returns & Exchanges</a></li>
                        <li><a href="#">Box Customization</a></li>
                        <li><a href="#">Contact Support</a></li>
                        <li><a href="#">Live Chat</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Sales</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> sales@gardens.com</li>
                        <li><i class="fas fa-phone"></i> +44 20 8765 4321</li>
                        <li><i class="fas fa-clock"></i> Mon-Fri: 8AM-8PM</li>
                        <li><i class="fas fa-building"></i> Corporate Inquiries Welcome</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Gardens. All boxes are delivered with sustainable packaging.</p>
            </div>
        </div>
    </footer>

    <!-- Box Modal -->
    <div id="box-modal" class="modal">
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <div id="box-modal-content"></div>
        </div>
    </div>

    <script src="script.js"></script>
    <script>
        // Box quick view functionality
        document.querySelectorAll('.box-quick-view').forEach(button => {
            button.addEventListener('click', function() {
                const boxType = this.dataset.box;
                const modal = document.getElementById('box-modal');
                const modalContent = document.getElementById('box-modal-content');
                
                const boxDetails = {
                    oddbox: `
                        <div class="modal-box-details">
                            <h2>Oddbox Complete Details</h2>
                            <div class="modal-box-image">
                                <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Oddbox">
                            </div>
                            <div class="modal-box-info">
                                <div class="modal-price">
                                    <span class="price-main">£18/month</span>
                                    <span class="price-savings">or £180/year (save £36)</span>
                                </div>
                                <div class="modal-features">
                                    <h3>What's Included:</h3>
                                    <ul>
                                        <li>Weekly delivery of wonky vegetables (3-5 types)</li>
                                        <li>Seasonal seed packets (changes monthly)</li>
                                        <li>Exclusive access to Oddbox blog</li>
                                        <li>Growing guides and recipes</li>
                                        <li>Surprise seasonal extras</li>
                                    </ul>
                                </div>
                                <div class="modal-customization">
                                    <h3>Customize Your Box:</h3>
                                    <select>
                                        <option>Weekly Delivery</option>
                                        <option>Bi-weekly Delivery</option>
                                        <option>Monthly Delivery</option>
                                    </select>
                                    <select>
                                        <option>All Vegetables</option>
                                        <option>Root Vegetables Only</option>
                                        <option>Leafy Greens Only</option>
                                    </select>
                                </div>
                                <button class="btn btn-large" style="width: 100%; margin-top: 2rem;">Subscribe Now</button>
                            </div>
                        </div>
                    `,
                    flourish: `
                        <div class="modal-box-details">
                            <h2>Flourish Complete Details</h2>
                            <div class="modal-box-image">
                                <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Flourish">
                            </div>
                            <div class="modal-box-info">
                                <div class="modal-price">
                                    <span class="price-main">£75/year</span>
                                    <span class="price-savings">4 seasonal boxes (£18.75 per box)</span>
                                </div>
                                <div class="modal-features">
                                    <h3>Seasonal Boxes:</h3>
                                    <ul>
                                        <li><strong>Spring Box:</strong> Seed starting kit, early vegetables, garden planner</li>
                                        <li><strong>Summer Box:</strong> Watering can, pest control, summer crops</li>
                                        <li><strong>Autumn Box:</strong> Harvest tools, preserving guide, bulbs</li>
                                        <li><strong>Winter Box:</strong> Indoor gardening kit, planning materials, soap</li>
                                    </ul>
                                </div>
                                <div class="modal-customization">
                                    <h3>Choose Your Start Month:</h3>
                                    <select>
                                        <option>Start in January (Winter Box)</option>
                                        <option>Start in April (Spring Box)</option>
                                        <option>Start in July (Summer Box)</option>
                                        <option>Start in October (Autumn Box)</option>
                                    </select>
                                </div>
                                <button class="btn btn-large" style="width: 100%; margin-top: 2rem;">Subscribe Now</button>
                            </div>
                        </div>
                    `,
                    cottage: `
                        <div class="modal-box-details">
                            <h2>Cottage Complete Details</h2>
                            <div class="modal-box-image">
                                <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cottage">
                            </div>
                            <div class="modal-box-info">
                                <div class="modal-price">
                                    <span class="price-main">£22/month</span>
                                    <span class="price-savings">or £225/year (save £39)</span>
                                </div>
                                <div class="modal-features">
                                    <h3>Monthly Themes:</h3>
                                    <ul>
                                        <li><strong>January:</strong> Early bloomers (Snowdrops, Crocus)</li>
                                        <li><strong>February:</strong> Pollinator favorites (Primrose, Hellebore)</li>
                                        <li><strong>March:</strong> Spring bulbs (Daffodils, Tulips)</li>
                                        <li><strong>April:</strong> Cottage classics (Lavender, Foxglove)</li>
                                        <li><em>...and 8 more monthly themes!</em></li>
                                    </ul>
                                </div>
                                <div class="modal-customization">
                                    <h3>Customize Your Box:</h3>
                                    <select>
                                        <option>UK Native Wildflowers</option>
                                        <option>Pollinator-Friendly Mix</option>
                                        <option>Shade-Tolerant Varieties</option>
                                        <option>Cut Flower Selection</option>
                                    </select>
                                </div>
                                <button class="btn btn-large" style="width: 100%; margin-top: 2rem;">Subscribe Now</button>
                            </div>
                        </div>
                    `
                };
                
                modalContent.innerHTML = boxDetails[boxType] || '<p>Details not available</p>';
                modal.style.display = 'flex';
            });
        });
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gardens | Activities & Events</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header -->
    <header id="main-header">
        <div class="container">
            <div class="logo">
                <a href="index.html"><h1><i class="fas fa-leaf"></i> Gardens</h1></a>
            </div>
            <nav class="nav-main">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="activities.html" class="active">Activities</a></li>
                    <li><a href="boxes.html">Boxes</a></li>
                    <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                    <li><a href="community.html">Community</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
            <button class="menu-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="page-hero">
        <div class="container">
            <div class="hero-content">
                <h1>Gardening Activities & Events</h1>
                <p>Join our curated gardening activities designed for all skill levels</p>
                <a href="#activities-grid" class="btn btn-large">
                    Explore Activities <i class="fas fa-arrow-down"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Activities Introduction -->
    <section class="activities-intro">
        <div class="container">
            <div class="intro-content">
                <h2>Something for Every Gardener</h2>
                <p>Whether you're just starting out or have years of experience, our activities are designed to help you grow, learn, and connect with fellow gardening enthusiasts.</p>
            </div>
        </div>
    </section>

    <!-- Main Activities Grid -->
    <section class="activities-grid-section" id="activities-grid">
        <div class="container">
            <div class="activities-grid">
                <!-- Activity 1 -->
                <article class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Open Gardens">
                        <span class="activity-category">Seasonal</span>
                    </div>
                    <div class="activity-content">
                        <h3>Open Gardens</h3>
                        <p>Visit beautifully curated gardens across the UK. Learn from expert gardeners and get inspiration for your own space.</p>
                        <div class="activity-details">
                            <span><i class="fas fa-calendar"></i> Monthly Events</span>
                            <span><i class="fas fa-users"></i> Group Tours</span>
                            <span><i class="fas fa-map-marker-alt"></i> Various Locations</span>
                        </div>
                        <a href="#" class="btn-small">View Schedule</a>
                    </div>
                </article>

                <!-- Activity 2 -->
                <article class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Monthly Checklist">
                        <span class="activity-category">Educational</span>
                    </div>
                    <div class="activity-content">
                        <h3>Monthly Gardening Checklist</h3>
                        <p>Never miss an important gardening task. Our seasonal checklists guide you through each month's essential activities.</p>
                        <div class="activity-details">
                            <span><i class="fas fa-clipboard-check"></i> Downloadable PDFs</span>
                            <span><i class="fas fa-mobile-alt"></i> Mobile App</span>
                            <span><i class="fas fa-bell"></i> Reminders</span>
                        </div>
                        <a href="#" class="btn-small">Get Checklist</a>
                    </div>
                </article>

                <!-- Activity 3 -->
                <article class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Greenhouse Tips">
                        <span class="activity-category">Expert</span>
                    </div>
                    <div class="activity-content">
                        <h3>Greenhouse Masterclass</h3>
                        <p>Learn year-round gardening techniques, pest control, and climate management for optimal greenhouse results.</p>
                        <div class="activity-details">
                            <span><i class="fas fa-chalkboard-teacher"></i> Expert-led</span>
                            <span><i class="fas fa-video"></i> Online & In-person</span>
                            <span><i class="fas fa-certificate"></i> Certificate</span>
                        </div>
                        <a href="#" class="btn-small">Join Class</a>
                    </div>
                </article>

                <!-- Activity 4 -->
                <article class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Garden Maintenance">
                        <span class="activity-category">Practical</span>
                    </div>
                    <div class="activity-content">
                        <h3>Garden Maintenance Workshops</h3>
                        <p>Hands-on workshops covering pruning, soil health, tool maintenance, and seasonal garden care.</p>
                        <div class="activity-details">
                            <span><i class="fas fa-tools"></i> Hands-on</span>
                            <span><i class="fas fa-clock"></i> Half-day Sessions</span>
                            <span><i class="fas fa-seedling"></i> All Levels</span>
                        </div>
                        <a href="#" class="btn-small">Book Workshop</a>
                    </div>
                </article>

                <!-- Activity 5 -->
                <article class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Allotment Jobs">
                        <span class="activity-category">Community</span>
                    </div>
                    <div class="activity-content">
                        <h3>Allotment Community Days</h3>
                        <p>Join our community allotment projects. Learn organic growing techniques and share produce with local communities.</p>
                        <div class="activity-details">
                            <span><i class="fas fa-hands-helping"></i> Volunteer</span>
                            <span><i class="fas fa-leaf"></i> Organic Focus</span>
                            <span><i class="fas fa-people-carry"></i> Team Building</span>
                        </div>
                        <a href="#" class="btn-small">Join Project</a>
                    </div>
                </article>

                <!-- Activity 6 -->
                <article class="activity-card">
                    <div class="activity-image">
                        <img src="https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Plant Diary">
                        <span class="activity-category">Digital</span>
                    </div>
                    <div class="activity-content">
                        <h3>Digital Plant Diary</h3>
                        <p>Track your garden's progress with our digital diary. Upload photos, record growth, and receive personalized advice.</p>
                        <div class="activity-details">
                            <span><i class="fas fa-mobile-alt"></i> App Access</span>
                            <span><i class="fas fa-chart-line"></i> Progress Tracking</span>
                            <span><i class="fas fa-cloud"></i> Cloud Storage</span>
                        </div>
                        <a href="#" class="btn-small">Start Diary</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Activity Calendar -->
    <section class="activity-calendar">
        <div class="container">
            <div class="section-header">
                <h2>Upcoming Events Calendar</h2>
                <p>Mark your calendar for these exciting gardening activities</p>
            </div>
            
            <div class="calendar-grid">
                <div class="calendar-event">
                    <div class="event-date">
                        <span class="date-day">28</span>
                        <span class="date-month">NOV</span>
                    </div>
                    <div class="event-details">
                        <h3>Winter Gardening Workshop</h3>
                        <p><i class="fas fa-clock"></i> 10:00 AM - 1:00 PM | <i class="fas fa-map-marker-alt"></i> London Botanical Gardens</p>
                        <p>Learn to protect your plants during winter months.</p>
                        <button class="btn-small">Register</button>
                    </div>
                </div>
                
                <div class="calendar-event">
                    <div class="event-date">
                        <span class="date-day">05</span>
                        <span class="date-month">DEC</span>
                    </div>
                    <div class="event-details">
                        <h3>Christmas Wreath Making</h3>
                        <p><i class="fas fa-clock"></i> 2:00 PM - 4:00 PM | <i class="fas fa-video"></i> Live Online</p>
                        <p>Create beautiful wreaths using garden materials.</p>
                        <button class="btn-small">Register</button>
                    </div>
                </div>
                
                <div class="calendar-event">
                    <div class="event-date">
                        <span class="date-day">15</span>
                        <span class="date-month">DEC</span>
                    </div>
                    <div class="event-details">
                        <h3>Annual Seed Swap</h3>
                        <p><i class="fas fa-clock"></i> 11:00 AM - 3:00 PM | <i class="fas fa-map-marker-alt"></i> Manchester Community Center</p>
                        <p>Swap seeds and share gardening stories.</p>
                        <button class="btn-small">Register</button>
                    </div>
                </div>
            </div>
            
            <div class="calendar-cta">
                <a href="#" class="btn">View Full Calendar</a>
                <a href="#" class="btn-secondary">Download Calendar (PDF)</a>
            </div>
        </div>
    </section>

    <!-- Newsletter Signup -->
    <section class="newsletter-section">
        <div class="container">
            <div class="newsletter-card">
                <div class="newsletter-content">
                    <h2>Stay Updated on Activities</h2>
                    <p>Get monthly activity schedules, early bird discounts, and exclusive event invites delivered to your inbox.</p>
                    <form class="newsletter-form">
                        <div class="form-group">
                            <input type="email" placeholder="Your email address" required>
                            <button type="submit" class="btn">Subscribe</button>
                        </div>
                        <p class="form-note">We'll never spam you. Unsubscribe anytime.</p>
                    </form>
                </div>
                <div class="newsletter-image">
                    <img src="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Gardening Community">
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>Gardens</h3>
                    <p class="footer-description">Bringing the joy of gardening to beginners and enthusiasts since 2018.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="activities.html">Activities</a></li>
                        <li><a href="boxes.html">Boxes</a></li>
                        <li><a href="gardeners-hub.html">Gardeners Hub</a></li>
                        <li><a href="community.html">Community</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Activities</h3>
                    <ul>
                        <li><a href="#">Open Gardens</a></li>
                        <li><a href="#">Monthly Checklist</a></li>
                        <li><a href="#">Greenhouse Tips</a></li>
                        <li><a href="#">Garden Maintenance</a></li>
                        <li><a href="#">Allotment Jobs</a></li>
                        <li><a href="#">Plant Diary</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact</h3>
                    <ul class="contact-info">
                        <li><i class="fas fa-envelope"></i> activities@gardens.com</li>
                        <li><i class="fas fa-phone"></i> +44 20 1234 5678</li>
                        <li><i class="fas fa-clock"></i> Mon-Fri: 9AM-6PM</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>&copy; 2025 Gardens. All activities are subject to availability.</p>
            </div>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>

