// Shop - Configurator Logic
document.addEventListener("DOMContentLoaded", function() {
  // SHOP PAGE
  const configForm = document.getElementById('configForm');
  const configResult = document.getElementById('configResult');
  if(configForm && configResult) {
    configForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const model = configForm.carModel.value;
      const color = configForm.color.value;
      const transmission = configForm.transmission.value;
      const extras = Array.from(configForm.querySelectorAll('input[name="extra"]:checked')).map(cb => cb.value);
      configResult.innerHTML = `
        <h3>Configuration Summary</h3>
        <ul>
          <li><strong>Model:</strong> ${model}</li>
          <li><strong>Color:</strong> ${color}</li>
          <li><strong>Transmission:</strong> ${transmission}</li>
          <li><strong>Extras:</strong> ${extras.length ? extras.join(', ') : 'None'}</li>
        </ul>
        <p>Thank you! Our sales team will reach out soon to finalize your order.</p>
      `;
      configResult.style.display = "block";
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  // CONTACT PAGE
  const contactForm = document.getElementById('contactForm');
  const contactResult = document.getElementById('contactResult');
  if(contactForm && contactResult) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = contactForm.name.value.trim();
      const email = contactForm.email.value.trim();
      const message = contactForm.message.value.trim();
      if (!name || !email || !message) {
        contactResult.innerHTML = "Please fill out all fields.";
      } else {
        contactResult.innerHTML = `Thank you, ${name}! We'll contact you at <strong>${email}</strong> soon.`;
        contactForm.reset();
      }
      contactResult.style.display = "block";
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    });
  }

  // Models - Color Swatch Selection (for demo, just toggle border)
  document.querySelectorAll('.model-colors').forEach(colorsBlock => {
    colorsBlock.querySelectorAll('.color-swatch').forEach(swatch => {
      swatch.addEventListener('click', function() {
        colorsBlock.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('selected'));
        swatch.classList.add('selected');
      });
    });
  });
});