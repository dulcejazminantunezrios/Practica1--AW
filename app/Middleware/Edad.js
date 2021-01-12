'use strict'

const Response = require('@adonisjs/framework/src/Response')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class Edad {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    if(request.get('edad')>=18){
      await next()
      }
      return Response.json({Error:"El artista es menor de edad"})
  }
}

module.exports = Edad
