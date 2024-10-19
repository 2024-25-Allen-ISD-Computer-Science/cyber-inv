/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j")

  // remove
  collection.schema.removeField("jppbuz9v")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cvodmw0y",
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
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jppbuz9v",
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
  collection.schema.removeField("cvodmw0y")

  return dao.saveCollection(collection)
})
