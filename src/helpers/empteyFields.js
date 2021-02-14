export default function emptyFields() {
  document.querySelector('.empty_fields').innerHTML =
    '<p>Please, enter the name of meeting and participants</p><button class="close_eptyFiealdsBtn">x</button>';
  const closeAnnounecement = document.querySelector('.close_eptyFiealdsBtn');
  closeAnnounecement.addEventListener(
    'click',
    () => (document.querySelector('.empty_fields').innerHTML = ''),
  );
}
