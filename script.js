document.addEventListener('DOMContentLoaded', async () => {
  async function getExercise(type) {
    const url = `https://api.api-ninjas.com/v1/exercises?type=stretching&muscle=${type}`;

    const responseArray = await fetch(url, {
      method: 'GET',
      headers: { 'X-Api-Key': '25+q+VJaPDaB41EXF4ar4Q==wLd4krskL8AuW4l3' },
      contentType: 'application/json',
    })
      .then((response) => response.json())
      .then((response) => response);
    const stretchesContainer = document.createElement('div');
    stretchesContainer.id = type;
    stretchesContainer.className = 'stretchesContainer';
    for (let i = 0; i < 4; i += 1) {
      const stretch = responseArray[i];
      const stretchesList = document.createElement('ul');
      stretchesContainer.appendChild(stretchesList);
      const listElement = document.createElement('li');
      listElement.id = `${stretch.name.replace(' ', '-').toLowerCase()}`;
      listElement.innerHTML = `<strong>Stretch:</strong> ${stretch.name} <br /> <br /><strong>Instructions:</strong> ${stretch.instructions}`;
      stretchesList.appendChild(listElement);
      document.getElementById('container').appendChild(stretchesContainer);
    }
  }
  const stretchTypes = ['lower_back', 'middle_back', 'neck', 'abdominals', 'forearms', 'lats'];
  stretchTypes.forEach((el) => getExercise(el));
  document.getElementById('buttons').addEventListener('click', (event) => {
    const visible = document.querySelector('.show');
    if (visible) {
      visible.style.display = 'none';
      visible.classList.remove('show');
    }
    const currentValue = document.getElementById(event.target.value);
    currentValue.style.display = 'block';
    currentValue.classList.add('show');
  });
});
