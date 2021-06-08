import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/confirm/dist/PNotifyConfirm.css';

function click() {
  error({
    text: 'Too many matches found. Please enter a more specific query!',
    delay: 1000,
  });
}

export default click;
