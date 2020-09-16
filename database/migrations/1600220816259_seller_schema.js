'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SellerSchema extends Schema {
  up () {
    this.create('sellers', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('NO ACTION').onUpdate('CASCADE')
      table.integer('product_id').unsigned().references('id').inTable('products').onDelete('NO ACTION').onUpdate('CASCADE')
      table.float('amount', 8, 2).notNullable()
      table.float('price', 8, 2).notNullable()
      table.string('payment_type', 10).notNullable()
      table.integer('plots', 2)
      table.date('payday')
      table.timestamps()
    })
  }

  down () {
    this.drop('sellers')
  }
}

module.exports = SellerSchema
