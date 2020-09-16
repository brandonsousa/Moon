'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProviderSchema extends Schema {
  up () {
    this.create('providers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('NO ACTION').onUpdate('CASCADE')
      table.string('name', 24).notNullable()
      table.string('document', 16).unique()
      table.string('phone', 11).notNullable()
      table.string('email', 256).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('providers')
  }
}

module.exports = ProviderSchema
