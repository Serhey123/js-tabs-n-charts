import 'normalize.css';
import './scss/main.scss';

import Tabs from './js/tabsPlugin';

import dataService from './js/dataService';
import refs from './js/refs';
import onTabsBtnClick from './js/onTabsClick';
import dataParse from './js/dataParse';
import dataMarkup from './js/dataMarkup';
import makeChart from './js/makeChart';
import onLoading from './js/onLoading';

const tabs1 = new Tabs({
  rootSelector: '#tabs-1',
  activeControlClass: 'controls__item--active',
  activePaneClass: 'pane--active',
});

onLoading.hide();

refs.inputRef.addEventListener('submit', e => {
  e.preventDefault();

  if (e.currentTarget.elements.query.value === '') {
    return;
  }

  refs.tabsBtnRef.removeEventListener('click', onTabsBtnClick);

  onLoading.show();

  dataService.searchQuery = e.currentTarget.elements.query.value;

  const firstTabClass = refs.firstTabRef.classList;
  const secondTabClass = refs.secondTabRef.classList;
  const thirdTabClass = refs.thirdTabRef.classList;

  if (firstTabClass.contains(tabs1._activePaneClass)) {
    refs.firstTabRef.innerHTML = '';

    dataService
      .fetchData('today', 'hours')
      .then(dataParse)
      .then(dataMarkup)
      .then(makeChart);
  } else if (secondTabClass.contains(tabs1._activePaneClass)) {
    refs.secondTabRef.innerHTML = '';

    dataService
      .fetchData('next5days')
      .then(dataParse)
      .then(dataMarkup)
      .then(makeChart);
  } else if (thirdTabClass.contains(tabs1._activePaneClass)) {
    refs.thirdTabRef.innerHTML = '';

    dataService
      .fetchData('last5days')
      .then(dataParse)
      .then(dataMarkup)
      .then(makeChart);
  }

  refs.tabsBtnRef.addEventListener('click', onTabsBtnClick);
});
