// Navigation active link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
      link.addEventListener("click", function () {
        navLinks.forEach(el => el.classList.remove("active"));
        this.classList.add("active");
      });
    });

    // Project Modals
    function openModal(id) {
      document.getElementById(id).style.display = 'flex';
    }
    function closeModal(id) {
      document.getElementById(id).style.display = 'none';
    }

    // Extra-Curricular Activities modal logic
    const activityBoxes = document.querySelectorAll('.icon-box');

    function openActivityModal(id) {
      document.body.classList.add('modal-open'); // This class controls blur for both activity and testimonial modals
      document.getElementById(id).classList.add('active');
    }
    function closeActivityModal() {
      document.body.classList.remove('modal-open');
      document.querySelectorAll('.activity-modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }

    activityBoxes.forEach(box => {
      box.addEventListener('click', () => {
        const activity = box.getAttribute('data-activity');
        openActivityModal('modal-' + activity);
      });
    });

    // Close activity modal if clicking outside modal content
    document.querySelectorAll('.activity-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeActivityModal();
        }
      });
    });

    // Testimonials modal logic
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    function openTestimonialModal(id) {
      document.body.classList.add('testimonial-modal-open'); // This class controls blur for both activity and testimonial modals
      document.getElementById(id).classList.add('active');
    }

    function closeTestimonialModal() {
      document.body.classList.remove('testimonial-modal-open');
      document.querySelectorAll('.testimonial-modal-overlay.active').forEach(modal => {
        modal.classList.remove('active');
      });
    }

    testimonialCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-testimonial');
        openTestimonialModal('testimonial-modal-' + id);
      });
    });

    // Close testimonial modal on clicking outside modal content
    document.querySelectorAll('.testimonial-modal-overlay').forEach(overlay => {
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
          closeTestimonialModal();
        }
      });
    });