function dropDownList(input) {
  return `<ul> <li ><button class='Kate_button dropdown_btn' >Kate</button></li>
        <li ><button class='John_button dropdown_btn' >John</button></li>
        <li ><button class='Hanna_button dropdown_btn' >Hanna</button></li>
        <li ><button  class='Denis_button dropdown_btn'  >Denis</button></li>
    </ul>`;
}

export default function showDropDown(input) {
  const dropContainer = document.querySelector('.dropContainer');
  dropContainer.innerHTML = dropDownList();
  input.setAttribute('disabled', 'null');
  const KateBtn = document.querySelector('.Kate_button');
  const JohnBtn = document.querySelector('.John_button');
  const HannaBtn = document.querySelector('.Hanna_button');
  const DenisBtn = document.querySelector('.Denis_button');

  KateBtn.addEventListener('click', e => {
    e.preventDefault(),
      (input.value += 'Kate' + ','),
      KateBtn.setAttribute('disabled', 'null');
  });
  JohnBtn.addEventListener('click', e => {
    e.preventDefault(),
      (input.value += 'John' + ','),
      JohnBtn.setAttribute('disabled', 'null');
  });
  HannaBtn.addEventListener('click', e => {
    e.preventDefault(),
      (input.value += 'Hanna' + ','),
      HannaBtn.setAttribute('disabled', 'null');
  });
  DenisBtn.addEventListener('click', e => {
    e.preventDefault(),
      (input.value += 'Denis' + ','),
      DenisBtn.setAttribute('disabled', 'null');
  });
}
