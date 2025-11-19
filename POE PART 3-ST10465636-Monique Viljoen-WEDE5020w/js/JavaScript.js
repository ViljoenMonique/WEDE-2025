document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript.js loaded – lightbox, search and forms working!');

    /*=================================================================
      1. LIGHTBOX 
    =================================================================*/
    const triggers = document.querySelectorAll('.lightbox-trigger');

    let lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.innerHTML = `
            <img id="lightbox-img" alt="">
            <button id="lightbox-close">×</button>
            <p id="lightbox-caption"></p>
        `;
        document.body.appendChild(lightbox);
    }

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxCaption = document.getElementById('lightbox-caption');

    const closeLightbox = () => {
        lightbox.style.display = 'none';
        lightbox.style.opacity = '0';
        lightboxImg.style.transform = 'scale(0.8)';
        lightboxCaption.textContent = '';
        document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
    });

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();

            const imgSrc = this.src;
            const imgAlt = this.alt || 'Image';

            const img = new Image();
            img.onload = () => {
                lightboxImg.src = imgSrc;
                lightboxCaption.textContent = imgAlt;
                lightbox.style.display = 'flex';
                document.body.style.overflow = 'hidden';

                setTimeout(() => {
                    lightbox.style.opacity = '1';
                    lightboxImg.style.transform = 'scale(1)';
                }, 10);
            };
            img.src = imgSrc;
        });
    });

    /*=================================================================
      2. SEARCH 
    =================================================================*/
    const input = document.getElementById('siteSearch');
    const results = document.getElementById('searchResults');

    const pages = [
        { title: 'Enquiry', url: 'enquiry.html', keywords: 'sponsorship partnership enquiry form charity durban' },
        { title: 'Donate', url: 'donate.html', keywords: 'sponsorship donate donation sponsor' },
        { title: 'Volunteer', url: 'volunteer.html', keywords: 'volunteer meal prep' },
        { title: 'Contact Us', url: 'contact.html', keywords: 'contact durban phone email' },
        { title: 'Services', url: 'services.html', keywords: 'soup kitchen hunger relief' }
    ];

    input.addEventListener('input', () => {
        const query = input.value.toLowerCase().trim();
        results.innerHTML = '';

        if (query.length < 2) {
            results.style.display = 'none';
            return;
        }

        const matches = pages.filter(p =>
            p.title.toLowerCase().includes(query) ||
            p.keywords.toLowerCase().includes(query)
        );

        if (matches.length > 0) {
            matches.forEach(p => {
                const div = document.createElement('div');
                div.className = 'search-result';
                div.innerHTML = `<strong>${p.title}</strong><br><small>${p.url}</small>`;
                div.onclick = () => window.location.href = p.url;
                results.appendChild(div);
            });
            results.style.display = 'block';
        } else {
            results.innerHTML = '<div class="no-results">No results found</div>';
            results.style.display = 'block';
        }
    });

    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !results.contains(e.target)) {
            results.style.display = 'none';
        }
    });

    /*=================================================================
      3. FORM VALIDATION + SUCCESS POPUP 
    =================================================================*/
    function handleFormSubmit(formId, successMessage) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailField = form.querySelector('input[type="email"]');
            const email = emailField ? emailField.value.trim() : '';
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address.');
                if (emailField) emailField.focus();
                return;
            }

            alert(successMessage);
            form.reset();
        });
    }

    handleFormSubmit('contact-form', 'Your contact enquiry has been submitted successfully. We will get back to you in 2–3 business days.');
    handleFormSubmit('enquiry-form', 'Your enquiry has been submitted successfully. We will get back to you in 3–5 business days.');
    handleFormSubmit('volunteer-form', 'Your volunteer application has been submitted successfully. We will get back to you soon.');

});
