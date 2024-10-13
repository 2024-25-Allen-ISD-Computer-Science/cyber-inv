/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste")

  collection.options = {
    "query": "SELECT id, teamName, points from player"
  }

  // remove
  collection.schema.removeField("wkdrslb8")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iwv0rl2z",
    "name": "teamName",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ycnyvykg",
    "name": "points",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste")

  collection.options = {
    "query": "SELECT id, teamName from player"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wkdrslb8",
    "name": "teamName",
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
  collection.schema.removeField("iwv0rl2z")

  // remove
  collection.schema.removeField("ycnyvykg")

  return dao.saveCollection(collection)
})
