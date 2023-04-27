const openmenu = document.getElementById('menubar');
const mobilemenu = document.getElementById('mobilemenu');
const option = document.getElementById('option');

openmenu.addEventListener('click', () => {
  openmenu.classList.toggle('active');
  mobilemenu.classList.toggle('active');
  option.classList.toggle('active');
});

mobilemenu.addEventListener('click', () => {
  openmenu.classList.remove('active');
  mobilemenu.classList.remove('active');
  option.classList.remove('active');
});
