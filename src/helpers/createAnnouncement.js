export default function createAnnounecement() {
  document.querySelector('.announcement').innerHTML =
    '<div class="announcement_msg"><p>Failed to create an event.Time slot is already booked</p><button class="close_announcement">x</button></div>';
  const closeAnnounecement = document.querySelector('.close_announcement');
  closeAnnounecement.addEventListener(
    'click',
    () => (document.querySelector('.announcement').innerHTML = ''),
  );
}
