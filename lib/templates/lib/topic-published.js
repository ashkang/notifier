const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw
const t = require('t-component')

module.exports = function welcomeEmail (vars, opts) {
  t.lang(opts.lang)
  const _t = (key) => t(key, vars)

  const h = opts.lang === 'fa' ?
  `
    <p dir="rtl">${_t('templates.email.greeting')}</p>
    <p dir="rtl">${_t('templates.topic-published.body')}</p>
    <p dir="rtl">${vars.topic}</p>
    <p dir="rtl">${raw(_t('templates.topic-published.body2'))}</p>
    <p dir="rtl">${_t('templates.email.signature')}</p>
  ` :
  `
    <p>${_t('templates.email.greeting')}</p>
    <p>${_t('templates.topic-published.body')}</p>
    <p>${vars.topic}</p>
    <p>${raw(_t('templates.topic-published.body2'))}</p>
    <p>${_t('templates.email.signature')}</p>
  `

  return html(h).toString()
}
