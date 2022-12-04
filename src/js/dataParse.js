import Papa from 'papaparse';
import errorNotification from './notification';
import getAverage from './getAverageTemp';

function dataParse(res) {
  const parsedData = Papa.parse(res, { header: true });

  errorNotification(parsedData.data);

  const name = parsedData.data.find(entry => entry.name);

  const date = parsedData.data.map(entry => entry.datetime);

  const temp = parsedData.data.map(entry => entry.temp);

  date.splice(-1, 1);
  temp.splice(-1, 1);

  const mappedDate = date.map(hour => {
    return hour.slice(-8, -3);
  });

  const averageTemp = getAverage(temp);

  return {
    label: date,
    data: temp,
    name: name.name,
    averageTemp: averageTemp,
    mappedDate: mappedDate,
  };
}

export default dataParse;
