import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import onLoading from './onLoading';

function errorNotification(data) {
  if (data.length === 0) {
    onLoading.hide();
    error({
      text: 'Nothing found...',
    });
  }
}

export default errorNotification;
