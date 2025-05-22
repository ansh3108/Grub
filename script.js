document.addEventListener('DOMContentLoaded', function() {
  const accordionBtns = document.querySelectorAll('.accordion-button');
  accordionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const content = btn.nextElementSibling;
      content.classList.toggle('hidden');
    });
  });

  const moods = [
    '😊 Happy — Appreciate the little things today.',
    '😌 Serene — Take it slow and steady today.',
    '💪 Confident — You got this!',
    '🌈 Hopeful — Brighter days are ahead.',
    '😴 Tired — Rest is productive too.',
    '🤗 Grateful — Say thanks to someone today.'
  ];

  const moodBox = document.getElementById('moodBox');
  if (moodBox) {
    moodBox.innerText = moods[Math.floor(Math.random() * moods.length)];
  }

  const gratitudePrompts = [
    'What is one thing you are grateful for today?',
    'Name a person who made your life better recently.',
    'Recall a small moment this week that made you smile.',
    'What is something about yourself you appreciate?',
    'Think of a challenge you overcame and what you learned.',
    'What is a comfort you have that you sometimes take for granted?',
    'Who is someone you can always count on?'
  ]; //needs to be exapanded

  const gratitudeBtn = document.getElementById('gratitudeBtn');
  const gratitudeBox = document.getElementById('gratitudeBox');
  if (gratitudeBtn && gratitudeBox) {
    gratitudeBtn.addEventListener('click', function() {
      gratitudeBox.innerText = gratitudePrompts[Math.floor(Math.random() * gratitudePrompts.length)];
    });
  }
});