/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    teamName, \n    SUM(points) AS teamScore,\n    GROUP_CONCAT(name) AS teammates\nFROM \n    player\nGROUP BY \n    teamName+\" \";\n"
  }

  // remove
  collection.schema.removeField("cj5qwcmx")

  // remove
  collection.schema.removeField("coweukgw")

  // remove
  collection.schema.removeField("kjlzlayv")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "swziwasa",
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
    "id": "cpuej9dv",
    "name": "teamScore",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ev8ywzzv",
    "name": "teammates",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    teamName, \n    SUM(points) AS teamScore,\n    GROUP_CONCAT(name) AS teammates\nFROM \n    player\nGROUP BY \n    teamName;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cj5qwcmx",
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
    "id": "coweukgw",
    "name": "teamScore",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kjlzlayv",
    "name": "teammates",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("swziwasa")

  // remove
  collection.schema.removeField("cpuej9dv")

  // remove
  collection.schema.removeField("ev8ywzzv")

  return dao.saveCollection(collection)
})
