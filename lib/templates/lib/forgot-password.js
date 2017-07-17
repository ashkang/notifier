const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw
const t = require('t-component')

module.exports = function welcomeEmail (vars, opts) {
  t.lang(opts.lang)
  const _t = (key) => t(key, vars)

  const h = opts.lang === 'fa' ?
  `
    <p dir="rtl">${_t('templates.email.greeting')}</p>
    <p dir="rtl">${raw(_t('templates.forgot-password.body'))}</p>
    <p dir="rtl">${_t('templates.email.signature')}</p>
    <p dir="rtl">${_t('templates.forgot-password.ps')}</p>
  ` :
  `
    <p>${_t('templates.email.greeting')}</p>
    <p>${raw(_t('templates.forgot-password.body'))}</p>
    <p>${_t('templates.email.signature')}</p>
    <p>${_t('templates.forgot-password.ps')}</p>
  `  
  return html(h).toString()
}
