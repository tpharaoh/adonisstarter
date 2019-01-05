'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeviceSchema extends Schema {
  up () {
    this.create('devices', (table) => {
      table.increments()
      table.timestamps()
      table.integer('user_id').unsigned()
      table.string('name')
      table.string('nasio_id')
    })
  }

  down () {
    this.drop('devices')
  }
}

module.exports = DeviceSchema
