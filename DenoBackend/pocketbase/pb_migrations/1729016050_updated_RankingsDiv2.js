/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j")

  // remove
  collection.schema.removeField("76ejtqn3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fc0dc8mi",
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
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "76ejtqn3",
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
  collection.schema.removeField("fc0dc8mi")

  return dao.saveCollection(collection)
})
