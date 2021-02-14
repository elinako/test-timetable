import './styles.scss';
import markupCreation from './helpers/markupCreation';
import showDropDown from './helpers/showDropDown';
import createAnnounecement from './helpers/createAnnouncement';
import filtrationByName from './helpers/filtrationByName';
import deleteOveralay from './helpers/deleteOverlay';

window.history.pushState('object or string', 'Title', '/calendar');

const members = [
  { name: 'Kate', meetings: [] },
  { name: 'John', meetings: [] },
  { name: 'Hanna', meetings: [] },
  { name: 'Denis', meetings: [] },
];

const event_btn = document.querySelector('.event_btn');
const container = document.querySelector('.container');
const membersList = document.querySelector('.participants');

event_btn.addEventListener('click', () => addNewTab());
membersList.addEventListener('change', e => filtrationByName(e));

function addNewTab() {
  window.history.pushState('object or string', 'Title', '/create-event');
  container.innerHTML = markupCreation();
  const input = document.querySelector('.input');
  const buttonCreate = document.querySelector('.create_button');
  const buttonCancel = document.querySelector('.cancel_button');
  const inputParticipant = document.querySelector('.input_participant');

  buttonCancel.addEventListener('click', hideMarkup);
  inputParticipant.addEventListener('focus', () =>
    showDropDown(inputParticipant),
  );
  buttonCancel.addEventListener('click', () => (container.innerHTML = ''));

  function hideMarkup() {
    container.innerHTML = '';
  }

  function creation(day, time) {
    return document.querySelector(`.${day}_${time}`);
  }

  function onSubmit(e) {
    e.preventDefault();
    const day = document.querySelector('.select_day').value;
    const time = document.querySelector('.select_time').value.slice(0, 2);
    const participants = inputParticipant.value.split(',');

    const meeting = {
      participants: participants.slice(0, participants.length - 1),
      day: day,
      time: time,
    };

    members.forEach(member => {
      if (participants.includes(member.name)) {
        member.meetings.push(meeting);
      }
    });

    if (input.value === '' || inputParticipant.value === '') {
      alert('Please, enter the name of meeting and participants');
    } else if (creation(day, time).innerHTML === '') {
      return createMetting();
    } else {
      return createAnnounecement();
    }

    function createMetting() {
      const classNames = `${participants
        .slice(0, participants.length - 1)
        .join(`,`)}`;

      creation(
        day,
        time,
      ).innerHTML = `<button class='delete_btn'>${input.value}   X</button>`;
      creation(day, time).classList.add(classNames);

      const deleteMettingBtn = document.querySelector('.delete_btn');
      deleteMettingBtn.addEventListener('click', event =>
        deleteOveralay(event),
      );
    }
  }

  buttonCreate.addEventListener('click', e => {
    onSubmit(e),
      (container.innerHTML = ''),
      window.history.pushState('object or string', 'Title', '/calendar');
  });
}
