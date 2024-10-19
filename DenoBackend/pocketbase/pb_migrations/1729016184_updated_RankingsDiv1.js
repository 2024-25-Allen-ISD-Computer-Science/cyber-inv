/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75gacb4abjc2cdu")

  // remove
  collection.schema.removeField("amhjes35")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eo1zhmmd",
    "name": "points",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75gacb4abjc2cdu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "amhjes35",
    "name": "points",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("eo1zhmmd")

  return dao.saveCollection(collection)
})
