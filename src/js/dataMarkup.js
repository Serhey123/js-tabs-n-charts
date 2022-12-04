import tpl from '../templates/tpl.hbs';
import tplNext from '../templates/tplNext.hbs';
import tplPrev from '../templates/tplPrev.hbs';
import refs from './refs';
import dataService from './dataService';
import onLoading from './onLoading';

function dataMarkup(data) {
  onLoading.hideLoader();
  if (dataService.period === 'today') {
    const articleTpl = tpl(data);
    data.label = data.mappedDate;
    data.id = 'weatherNow';

    refs.firstTabRef.insertAdjacentHTML('beforeend', articleTpl);
    return data;
  } else if (dataService.period === 'next5days') {
    const articleTpl = tplNext(data);

    data.id = 'weatherNext';

    refs.secondTabRef.insertAdjacentHTML('beforeend', articleTpl);
    return data;
  } else if (dataService.period === 'last5days') {
    const articleTpl = tplPrev(data);

    data.id = 'weatherPrev';

    refs.thirdTabRef.insertAdjacentHTML('beforeend', articleTpl);
    return data;
  }
}

export default dataMarkup;
