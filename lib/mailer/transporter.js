const nodemailer = require('nodemailer')
const config = require('../config')

let opts = config.get('mailer.service')
  ? config.get('mailer')
  : config.get('nodemailer')

// Use directTransport when nothing is configured
if (opts && Object.keys(opts).length === 0) {
  opts = undefined
}

if (opts && opts.name)
  delete opts.name

if (opts && opts.email)
  delete opts.email

const transport = opts ?
  nodemailer.createTransport(opts) :
  nodemailer.createTransport()

module.exports = transport
