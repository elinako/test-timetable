export default function createAnnounecement() {
  document.querySelector('.announcement').innerHTML =
    '<p>Already exist</p><button class="close_announcement">x</button>';
  const closeAnnounecement = document.querySelector('.close_announcement');
  closeAnnounecement.addEventListener(
    'click',
    () => (document.querySelector('.announcement').innerHTML = ''),
  );
}
