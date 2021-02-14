export default function markupCreation() {
  return `
  <div class='markup_overlay'>
  <div class='form_container'>
  <form class='event_create_form'>
    <label for="">Name of the event:
    <input type="text" class='input'>
  </label>
  <label for="Participants">Participants: 
  <div class='container_dropdown'>
  <form>
      <input type="text" class='input_participant'>
  </form>
  <div class="dropContainer"></div>
</div>
  </label>
  <label for="Day">Day:
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
  <div class='button_container'>
  <button class='cancel_button'>Cancel</button>
  <button class='create_button'>Create</button>
  </div>
  </form>
  </div>
  </div>
  `;
}
