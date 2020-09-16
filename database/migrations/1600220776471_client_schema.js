'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('NO ACTION').onUpdate('CASCADE')
      table.string('username', 80).notNullable()
      table.string('document', 14).unique()
      table.string('phone', 11).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('street', 40).notNullable()
      table.string('number', 7).notNullable()
      table.string('neighborhood', 24).notNullable()
      table.string('city', 30).notNullable()
      table.string('uf', 2).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
