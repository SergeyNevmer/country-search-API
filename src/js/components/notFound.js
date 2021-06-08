import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

function click() {
  error({
    text: 'Country not found. Try to enter the correct country name.',
    delay: 3000,
  });
}

export default click;
