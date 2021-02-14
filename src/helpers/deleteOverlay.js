export default function deleteOveralay(event) {
  document.querySelector(
    '.delete_container',
  ).innerHTML = `<div class="delete_overlay_container"><div class="delete_msg"><p>Are You shure You want to delete "${event.path[1].innerText}" event?</p><div class="delete_btn_container"><button class="delete_yes">Yes</button><button class="delete_no">No</button></div></div></div>`;

  const deleteYesBtn = document.querySelector('.delete_yes');
  const deleteNoBtn = document.querySelector('.delete_no');

  deleteYesBtn.addEventListener('click', deleteMeeting);
  deleteNoBtn.addEventListener('click', refuseDelete);

  function deleteMeeting() {
    event.path[1].innerHTML = '';
    event.path[1].classList.value = event.path[1].classList[0];
    document.querySelector('.delete_container').innerHTML = '';
  }

  function refuseDelete() {
    document.querySelector('.delete_container').innerHTML = '';
  }
}
