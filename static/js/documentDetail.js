
document.querySelectorAll('.detailButton').forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-target');
      document.querySelectorAll('.documentDetailContentSection > div').forEach(div => {
        div.style.display = 'none';
      });
      document.getElementById(targetId).style.display = 'block';
    });
  });