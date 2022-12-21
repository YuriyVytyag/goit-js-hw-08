// // get all action buttons
// const actions = document.querySelectorAll('[data-action]');
// const counterValue = document.querySelector('.counter-value');
// console.log(actions);
// // get counter value from local storage, if there is no value pass 0
// let counter = JSON.parse(localStorage.getItem('counter')) || 0;
// console.log(counter);
// counterValue.textContent = counter;
// // change counters text in html to current value
// actions.forEach(action => {
//   action.addEventListener('click', () => {
//     const action_name = action.dataset.action;
//     // if (action_name === 'increase') {
//     //   counter += 1;
//     // }
//     // if (action_name === 'decrease') {
//     //   counter -= 1;
//     // }
//     // if (action_name === 'reset') {
//     //   counter = 0;
//     // }
//     // if (action_name === 'save') {
//     //   localStorage.setItem('counter', counter);
//     // }
//     // if (action_name === 'clear-save') {
//     //   localStorage.removeItem('counter');
//     // }
//     switch (action_name) {
//       case 'increase':
//         counter++;
//         break;
//       case 'decrease':
//         counter--;
//         break;
//       case 'reset':
//         counter = 0;
//         break;
//       case 'save':
//         localStorage.setItem('counter', counter);
//         break;
//       case 'clear-save':
//         localStorage.removeItem('counter');
//         break;
//     }

//     counterValue.textContent = counter;
//     console.log(counter);
//   });
// });
// for all action buttons add event listener
// action_name 'increase' => counter++;
// action_name 'decrease' => counter--;
// action_name 'reset' => counter = 0;
// action_name 'save' => set current counter valueto LS;
// action_name 'clear-save' => clear LS;

// in every action, update counter text in html

// refs
const themeSwitcher = document.getElementById('theme-switch');
const bodyEl = document.body;
// light theme is default, that's why themeSwitcher is unchecked
themeSwitcher.checked = false;
checkTheme();

function clickHandler(e) {
  const isChecked = e.target.checked;
  if (isChecked) {
    bodyEl.classList.remove('light');
    bodyEl.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    bodyEl.classList.add('light');
    bodyEl.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  // if you change theme to dark, add 'dark' class and remove previus, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function checkTheme() {
  const saveTheme = localStorage.getItem('theme') || 'light';
  bodyEl.classList = saveTheme;
  if (saveTheme === 'dark') {
    themeSwitcher.checked = true;
  }
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // dont forget about themeSwitcher, if current theme is dark, it should be checked
}

// add event listener

themeSwitcher.addEventListener('change', clickHandler);
