const url =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline';

const key = 'Q8ZAAYQYAWLAJ2E4E3BGB622W';

export default {
  searchQuery: '',
  fetchData(period, include = 'days') {
    this.period = period;
    return fetch(
      `${url}/${this.searchQuery}/${period}?unitGroup=metric&contentType=csv&include=${include}&key=${key}`,
    ).then(res => res.text());
  },
};
