import countryMarkup from '../templates/countryMarkup.hbs';

export default function createCountryMarkup(container, item) {
  container.insertAdjacentHTML('beforeend', countryMarkup(item));
}
