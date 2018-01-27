
function set_inbox_visible(vis) {
    let gmail_container = document.querySelector('.aeF');
    if (vis) {
      gmail_container.style.display = 'block';
      document.querySelector('.G-tF').style.visibility = 'visible';
      button.button.innerHTML = 'Hide Inbox';
    } else {
      gmail_container.style.display = 'none';
      document.querySelector('.G-tF').style.visibility = 'hidden';
      button.button.innerHTML = 'Show Inbox';
    }
}

function hide_if_inbox() {
  set_inbox_visible(is_visible || document.location.href !== 'https://mail.google.com/mail/u/0/#inbox');
}

class ToggleInboxButton {
  constructor() {
    let wrapper = document.createElement('div');
    wrapper.style.display = 'inline-block';
    wrapper.style.position = 'relative';
    wrapper.style.zIndex = '4';
    wrapper.style.float = 'left';

    let button_wrapper = document.createElement('div');
    button_wrapper.className = 'G-Ni J-J5-Ji';

    let button = document.createElement('div');
    button.className = 'T-I J-J5-Ji T-I-ax7';
    button.role = 'button';
    button.tabindex = '0';
    button.style['-webkit-user-select'] = 'none';
    button.innerHTML = 'Show Inbox';
    button.id = 'show_inbox';

    wrapper.appendChild(button_wrapper);
    button_wrapper.appendChild(button);
    this.wrapper = wrapper;
    this.button = button;
  }

  changeText(text) {
    this.button.innerHTML = text;
  }
}

let is_visible = false;
let button = new ToggleInboxButton();

button.button.addEventListener('click', (e) => {
    is_visible = !is_visible;
    set_inbox_visible(is_visible);
});

window.addEventListener('hashchange', function() {
    hide_if_inbox();
});

let interval = setInterval(() => {
  let gmail_container = document.querySelector('.aeF');
  if (document.querySelector('.G-tF')) {
    clearInterval(interval);
    document.getElementById(':5').prepend(button.wrapper);
  }
}, 100);
