'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtistaSchema extends Schema {
  up () {
    this.create('artistas', (table) => {
      table.increments()
      table.string('nombre',50).notNullable().unique()
      table.integer('edad').notNullable()
      table.string('cd_origen',150).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('artistas')
  }
}

module.exports = ArtistaSchema
