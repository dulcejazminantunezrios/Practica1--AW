'use strict'

const { createMany } = require('../../app/Models/Artista')
/*
|--------------------------------------------------------------------------
| ArtistaSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const Database = use ('Database')
class ArtistaSeeder {
  async run () {
    await Factory.model('App/Models/Artista').createMany(10)
  }
}

module.exports = ArtistaSeeder
