function dropDownList(input) {
  return `<ul> <li>Kate<button class='Kate_button'>+</button></li>
        <li>John<button class='John_button'>+</button></li>
        <li>Hanna<button class='Hanna_button'>+</button></li>
        <li>Denis<button class='Denis_button'>+</button></li>
    </ul>`;
}

export default function showDropDown(input) {
  const dropContainer = document.querySelector('.dropContainer');
  dropContainer.innerHTML = dropDownList();
  console.log('show drop');
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
