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
