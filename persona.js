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
