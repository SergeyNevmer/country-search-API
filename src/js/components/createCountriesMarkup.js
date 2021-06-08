import listMarkup from '../templates/list-countries.hbs';

function createCountriesMarkup(list, items) {
  list.insertAdjacentHTML(
    'beforeend',
    items.map(item => listMarkup(item)),
  );
}

export default createCountriesMarkup;
