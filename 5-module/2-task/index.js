function toggleText() {
  let buttonToggle = document.querySelector('.toggle-text-button');
  let hideText = document.getElementById('text');
  buttonToggle.onclick = function () {
    hideText.toggleAttribute('hidden');
  }
}
