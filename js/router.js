let routes = {};
let current = '';
let pending = 'forward';
let transitioning = false;

export function initRouter(table) {
  routes = table;
  window.addEventListener('hashchange', () => { render(pending); pending = 'forward'; });
  render('fade');
}

export function go(name, direction = 'forward') {
  const target = `#/${name}`;
  pending = direction;
  if (location.hash === target) render(direction);
  else location.hash = target;
}

export function back() {
  pending = 'back';
  if (history.length > 1) history.back();
  else go('welcome', 'back');
}

function render(direction) {
  if (transitioning) return;
  const name = location.hash.slice(2) || 'welcome';
  const factory = routes[name] || routes.welcome;
  const app = document.querySelector('#app');
  const oldScreen = app.querySelector('.screen');
  const nextScreen = factory();
  nextScreen.classList.add('route-layer', `route-enter-${direction}`);
  app.append(nextScreen);

  if (oldScreen) {
    transitioning = true;
    oldScreen.classList.add('route-layer', `route-exit-${direction}`);
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      oldScreen.remove();
      nextScreen.classList.remove('route-layer', `route-enter-${direction}`);
      transitioning = false;
    };
    const onRouteEnd = event => {
      if (event.target !== nextScreen) return;
      nextScreen.removeEventListener('animationend', onRouteEnd);
      finish();
    };
    nextScreen.addEventListener('animationend', onRouteEnd);
    window.setTimeout(finish, 420);
  } else {
    const onInitialEnd = event => {
      if (event.target !== nextScreen) return;
      nextScreen.removeEventListener('animationend', onInitialEnd);
      nextScreen.classList.remove('route-layer', `route-enter-${direction}`);
    };
    nextScreen.addEventListener('animationend', onInitialEnd);
  }
  app.focus();
  current = name;
}

export const route = () => current;
