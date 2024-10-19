/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nbmystqyd4lu6lm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9c1qmvtf",
    "name": "desc",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nbmystqyd4lu6lm")

  // remove
  collection.schema.removeField("9c1qmvtf")

  return dao.saveCollection(collection)
})
