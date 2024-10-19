/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j")

  // remove
  collection.schema.removeField("yyp1t7qy")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yyp1t7qy",
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

  // remove
  collection.schema.removeField("76ejtqn3")

  return dao.saveCollection(collection)
})
