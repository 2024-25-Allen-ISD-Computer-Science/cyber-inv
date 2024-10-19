/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("75gacb4abjc2cdu")

  // remove
  collection.schema.removeField("xhtu8d9f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggiucfc0",
    "name": "team_members",
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
  const collection = dao.findCollectionByNameOrId("75gacb4abjc2cdu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xhtu8d9f",
    "name": "team_members",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // remove
  collection.schema.removeField("ggiucfc0")

  return dao.saveCollection(collection)
})
