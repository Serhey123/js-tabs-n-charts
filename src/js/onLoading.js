import refs from './refs';

export default {
  show() {
    refs.tabsRef.classList.remove('hidden');
    refs.loader.classList.remove('hidden');
  },

  hide() {
    refs.tabsRef.classList.add('hidden');
    refs.loader.classList.add('hidden');
  },

  hideLoader() {
    refs.loader.classList.add('hidden');
  },
};
