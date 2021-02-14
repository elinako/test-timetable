export default function filtrationByName(e) {
  const name = e.target.value;
  const allTd = document.querySelectorAll('td');
  allTd.forEach(td => {
    if (!td.classList.value.includes(`${name}`)) {
      td.children.forEach(elem =>
        elem.setAttribute('style', 'visibility: hidden'),
      );
    } else {
      td.children.forEach(elem =>
        elem.setAttribute('style', 'visibility: visible'),
      );
    }
  });
}
