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
