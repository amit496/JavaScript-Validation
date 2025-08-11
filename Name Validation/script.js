
// Create animated particles
function createParticles() {
    const particles = document.querySelector('.particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 8 + 's';
        particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
        particles.appendChild(particle);
    }
}

// Initialize particles
createParticles();

const nameInput = document.getElementById('name');
const errorRow = document.getElementById('errorRow');
const successRow = document.getElementById('successRow');
const errorDiv = document.getElementById('error');
const successDiv = document.getElementById('success');
const btnText = document.getElementById('btnText');
const submitBtn = document.querySelector('button[onclick="validation()"]');

// Real-time validation with visual feedback
nameInput.addEventListener('input', function () {
    const value = this.value.trim();
    const successIcon = document.querySelector('.validation-icon.success');
    const errorIcon = document.querySelector('.validation-icon.error');

    if (value.length === 0) {
        this.style.borderColor = '#e1e5e9';
        successIcon.classList.remove('show');
        errorIcon.classList.remove('show');
    } else if (value.length >= 2 && /^[a-zA-Z\s]+$/.test(value)) {
        this.style.borderColor = '#10b981';
        successIcon.classList.add('show');
        errorIcon.classList.remove('show');
    } else {
        this.style.borderColor = '#ef4444';
        errorIcon.classList.add('show');
        successIcon.classList.remove('show');
    }
});

function validation() {
    const name = nameInput.value.trim();

    // Hide previous alerts
    errorRow.style.display = 'none';
    successRow.style.display = 'none';

    // Show loading
    btnText.innerHTML = '<div class="loading"></div>';
    submitBtn.disabled = true;

    setTimeout(() => {
        if (name === '') {
            errorDiv.textContent = 'Name field cannot be empty!';
            errorRow.style.display = 'block';
        } else if (name.length < 2) {
            errorDiv.textContent = 'Name must be at least 2 characters long!';
            errorRow.style.display = 'block';
        } else if (!/^[a-zA-Z\s]+$/.test(name)) {
            errorDiv.textContent = 'Name should contain only letters and spaces!';
            errorRow.style.display = 'block';
        } else {
            successDiv.textContent = `Hello ${name}! Form submitted successfully.`;
            successRow.style.display = 'block';

            // Reset form after 3 seconds
            setTimeout(() => {
                nameInput.value = '';
                nameInput.style.borderColor = '#e1e5e9';
                document.querySelectorAll('.validation-icon').forEach(icon => {
                    icon.classList.remove('show');
                });
                successRow.style.display = 'none';
            }, 3000);
        }

        // Reset button
        btnText.textContent = 'SUBMIT';
        submitBtn.disabled = false;
    }, 1500);
}

// Enter key submission
nameInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        validation();
    }
});
