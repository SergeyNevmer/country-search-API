'use strict';
import fetchCountry from './fetchCountries';
import modalWSuccess from './components/success';
import modalWManyMatchesFound from './components/manyMatchesFound';
import modalWNotFound from './components/notFound';
import createCountriesMarkup from './components/createCountriesMarkup';
import countryMarkup from './components/countryTemplate';
import removeItems from './components/removingItemsInContainer';
const _ = require('lodash');

const refs = {
  input: document.querySelector('#input'),
  list: document.querySelector('#listCountries'),
  container: document.querySelector('.containerForCountry'),
};

refs.input.addEventListener('input', _.debounce(onInput, 500));

function onInput() {
  const searchQuery = refs.input.value.trim();
  if (searchQuery === '') {
    removeItems(refs.list);
    return;
  }
  fetchCountry(searchQuery).then(data => {
    if (data.length > 10) {
      modalWManyMatchesFound();
    }
    if (data.length >= 2 && data.length <= 10) {
      removeItems(refs.list);
      removeItems(refs.container);
      createCountriesMarkup(refs.list, data);
    }
    if (data.length === 1) {
      removeItems(refs.list);
      removeItems(refs.container);
      modalWSuccess();
      countryMarkup(refs.container, data[0]);
    }
    if (data.status === 404) modalWNotFound();
  });
}
