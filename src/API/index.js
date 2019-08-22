import getList from './request';

const install = (Vue) => {
  if (install.installed) {
    return;
  }
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    $api: {
      get() {
        return getList;
      },
    },
  });
};

export default install;
