/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    teamName, \n    SUM(points) AS teamScore\nFROM \n    player\nGROUP BY \n    teamName;\n"
  }

  // remove
  collection.schema.removeField("b4j1vh2i")

  // remove
  collection.schema.removeField("pmf8zdbt")

  // remove
  collection.schema.removeField("tdwonxyb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pilfqifb",
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
    "id": "amvxgbzs",
    "name": "teamScore",
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
    "query": "SELECT id, name,teamName, points from player"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b4j1vh2i",
    "name": "name",
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
    "id": "pmf8zdbt",
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
    "id": "tdwonxyb",
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

  // remove
  collection.schema.removeField("pilfqifb")

  // remove
  collection.schema.removeField("amvxgbzs")

  return dao.saveCollection(collection)
})
