import { success } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

function click() {
  success({
    text: 'Country found!',
    delay: 1000,
  });
}

export default click;
