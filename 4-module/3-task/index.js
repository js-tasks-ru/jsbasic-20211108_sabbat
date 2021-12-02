function highlight(table) {
  for (let row of table.rows) {
    
    let status = row.querySelector('[data-available]')
    if (!status) {
      row.hidden = 'true';
    } else {
      if (status.dataset.available === 'true') {
        row.classList.add('available');
      } else if (status.dataset.available === 'false') {
        row.classList.add('unavailable');
      }
    }

    if (row.cells[2].textContent === 'm') {
      row.classList.add('male');
    } else if (row.cells[2].textContent === 'f') {
      row.classList.add('female');
    }

    if (row.cells[1].textContent < 18) {
      row.style.textDecoration = 'line-through';
    }

  }
}
