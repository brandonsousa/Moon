'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('NO ACTION').onUpdate('CASCADE')
      table.integer('provider_id').unsigned().references('id').inTable('providers').onDelete('NO ACTION').onUpdate('CASCADE')
      table.string('name', 20).notNullable()
      table.string('description', 140).notNullable()
      table.float('price', 8, 2).notNullable()
      table.string('color', 10)
      table.string('size', 15).notNullable()
      table.float('amount', 8, 2).notNullable()
      table.string('unit').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
