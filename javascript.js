/* OVERALL WEBPAGE ANIMATION */
function animateOnScroll(selector, animationClass = 'show', hiddenClass = 'hidden') {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(animationClass);
          entry.target.classList.remove(hiddenClass);
          obs.unobserve(entry.target); // Stop observing once it's shown
        }
      });
    });

    const elements = document.querySelectorAll(selector);
    elements.forEach(el => observer.observe(el));
  }

  // Usage: animate all elements with the class "hidden"
  document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll('.hidden');
  });


/*FOR skills.html*/
  function wrapWordsInBox(sourceId, outputId) {
    const sourceText = document.getElementById(sourceId).innerText;
    const words = sourceText.trim().split(/\s+/);
    const outputDiv = document.getElementById(outputId);

    // Clear previous content (optional)
    outputDiv.innerHTML = '';

    words.forEach(word => {
      const p = document.createElement("p");
      p.textContent = word;
      outputDiv.appendChild(p);
    });
}


wrapWordsInBox('tech_hidden', 'output_tech');
wrapWordsInBox('lang_hidden', 'output_lang');
wrapWordsInBox('nontech_hidden', 'output_nontech');
