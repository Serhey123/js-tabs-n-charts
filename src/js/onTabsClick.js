import dataParse from './dataParse';
import makeChart from './makeChart';
import dataMarkup from './dataMarkup';
import refs from './refs';
import dataService from './dataService';

function onTabsBtnClick(e) {
  if (e.target.id === 'first') {
    refs.firstTabRef.innerHTML = '';
    dataService
      .fetchData('today', 'hours')
      .then(dataParse)
      .then(dataMarkup)
      .then(makeChart);
  } else if (e.target.id === 'second') {
    refs.secondTabRef.innerHTML = '';
    dataService
      .fetchData('next5days')
      .then(dataParse)
      .then(dataMarkup)
      .then(makeChart);
  } else if (e.target.id === 'third') {
    refs.thirdTabRef.innerHTML = '';
    dataService
      .fetchData('last5days')
      .then(dataParse)
      .then(dataMarkup)
      .then(makeChart);
  }
}

export default onTabsBtnClick;
