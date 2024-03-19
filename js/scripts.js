const solutionElement = document.getElementById('solution');
const checkElement = document.getElementById('check');

checkElement.addEventListener('change', () => {
  solutionElement.classList.toggle('show');
});
