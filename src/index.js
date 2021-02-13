import './styles.css';

const event_btn = document.querySelector('.event_btn');
const container = document.querySelector('.container');
const membersList = document.querySelector('.participants');

const members = [
  { name: 'Kate', meetings: [] },
  { name: 'John', meetings: [] },
  { name: 'Hanna', meetings: [] },
  { name: 'Denis', meetings: [] },
];

event_btn.addEventListener('click', () => addNewTab());

function markupCreation() {
  return `<form class='event_create_form'>
  <label for="">Name of the event:
  <input type="text" class='input'>
</label>
<label for="">Participants:
  <select class='select_participant'>
    <option value='Kate'>
      Kate
    </option>
    <option value='John'>
      John
    </option>
    <option value='Hanna'>
      Hanna
    </option>
    <option value='Denis'>
    Denis
  </option>
  </select>
</label>
<label for="">Day:
  <select class='select_day'>
  <option value='Monday'>
    Monday
  </option>
  <option value='Tuesday'>
    Tuesday
  </option>
  <option value='Wednesday'>
    Wednesday
  </option>
  <option value='Thursday'>
    Thursday
  </option>
  <option value='Friday'>
    Friday
  </option>
</select>
</label>
<label for="">Time:
 <select class='select_time'>
  <option value='10:00'>
    10:00
  </option>
  <option value='11:00'>
    11:00
  </option>
  <option value='12:00'>
    12:00
  </option>
  <option value='13:00'>
    13:00
  </option>
  <option value='14:00'>
    14:00
  </option>
  <option value='15:00'>
    15:00
  </option>
  <option value='16:00'>
    16:00
  </option>
  <option value='17:00'>
    17:00
  </option>
  <option value='18:00'>
    18:00
  </option>
 </select>
</label>
<button>Cancel</button>
<button class='create_button'>Create</button>
</form>`;
}

function addNewTab() {
  container.innerHTML = markupCreation();
  const input = document.querySelector('.input');
  const buttonCreate = document.querySelector('.create_button');

  function creation(day, time) {
    return document.querySelector(`.${day}_${time}`);
  }

  function onSubmit(e) {
    e.preventDefault();
    const day = document.querySelector('.select_day').value;
    const time = document.querySelector('.select_time').value.slice(0, 2);
    const participant = document.querySelector('.select_participant').value;
    const user = members.find(member => member.name === participant);
    user.meetings.push({
      name: user.name,
      day: day,
      time: time,
      meeting: input.value,
    });

    return (
      (creation(
        day,
        time,
      ).innerHTML = `${input.value} <button class='delete_btn'>x</button>`),
      creation(day, time).classList.add(`${user.name}`)
    );
  }

  buttonCreate.addEventListener('click', e => {
    onSubmit(e);
  });
}

membersList.addEventListener('change', e => filtrationByName(e));

function filtrationByName(e) {
  const name = e.target.value;
  const allTd = document.querySelectorAll('td');
  const requiredTd = document.querySelectorAll(`.${name}`);
  allTd.forEach(td => {
    if (!td.classList.contains(`${name}`)) {
      td.children.forEach(elem => console.log(elem));
    }
  });
}
