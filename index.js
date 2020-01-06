'use strict';

const { mergeWith } = require('lodash');

hexo.on('generateBefore', () => {
  
  let config = Object.assign({
    theme: 'next',
    languages: 'languages'
  }, hexo.config.config_plus)

  let merge = (object, sources) => {
    return mergeWith(object, sources, (objValue, srcValue) => {
      if (Array.isArray(objValue)) {
        return srcValue;
      }
    });
  }

  let data = hexo.locals.get('data') || {};

  // Read config from data.next or theme_config
  merge(hexo.theme.config, data[config.theme]);

  // Custom languages support.
  if (!data[config.languages]) {
    return;
  }
  let mergeLang = (lang) => {
    i18n.set(lang, merge(i18n.get([lang]), data[config.languages][lang]));
  };
  let lang = hexo.config.language;
  let i18n = hexo.theme.i18n;
  if (Array.isArray(lang)) {
    lang.forEach(item => mergeLang(item));
  } else {
    mergeLang(lang);
  }
});
