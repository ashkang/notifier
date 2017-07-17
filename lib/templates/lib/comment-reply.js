const html = require('es6-string-html-template').html
const raw = require('es6-string-html-template').raw

module.exports = function welcomeEmail (vars, { lang }) {
  const t = translations[lang] || translations.en
  return t(vars)
}

const styles = raw(`
  <style>
    p { margin: 0; }
  </style>
`)

const translations = module.exports.translations = {
  en: ({ userName, topicTitle, reply, comment, url }) => html`
    ${styles}
    <p>Hi! ${userName},</p>
    <br />
    <p><strong>${reply.author.fullName}</strong> replied to a comment on "${topicTitle}".</p>
    <br />
    <p>Original comment by <strong>${comment.author.fullName}</strong>:</p>
    <p><i>${comment.text}</i></p>
    <br />
    <p>Reply by <strong>${reply.author.fullName}</strong>:</p>
    <p><i>${reply.text}</i></p>
    <br />
    <p>${raw(`Please <a href="${url}">click here</a> to see it.`)}</p>
  `.toString(),

  es: ({ userName, topicTitle, reply, comment, url }) => html`
    ${styles}
    <p>Hola ${userName},</p>
    <p><strong>${reply.author.fullName}</strong> respondió un comentario en "${topicTitle}".</p>
    <p>Comentario original por <strong>${comment.author.fullName}</strong>:</p>
    <p><i>${comment.text}</i></p>
    <br />
    <p>Respuesta por <strong>${reply.author.fullName}</strong>:</p>
    <p><i>${reply.text}</i></p>
    <br />
    <p>${raw(`Por favor, <a href="${url}">cliquea aquí</a> para verla.`)}</p>
  `.toString(),

  fa: ({ userName, topicTitle, reply, comment, url }) => html`
    ${styles}
    <p dir="rtl">${userName} عزیز سلام،</p>
    <br />
    <p dir="rtl"><strong>${reply.author.fullName}</strong> بر روی موضوع: "${topicTitle}" نظر جدیدی افزوده است.</p>
    <br />
    <p dir="rtl">نویسنده اصلی مطلب: <strong>${comment.author.fullName}</strong></p>
    <p dir="rtl"><i>${comment.text}</i></p>
    <br />
    <p dir="rtl">پاسخ توسط: <strong>${reply.author.fullName}</strong></p>
    <p dir="rtl"><i>${reply.text}</i></p>
    <br />
    <p dir="rtl">${raw(`برای مشاهده آن <a href="${url}">اینجا</a> کلیک کنید.`)}</p>
  `.toString(),

}
