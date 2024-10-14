/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste")

  collection.options = {
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    teamName, \n    SUM(points) AS teamScore,\n    GROUP_CONCAT(name) AS teammates\nFROM \n    player\nGROUP BY \n    teamName;\n"
  }

  // remove
  collection.schema.removeField("dkvijnsd")

  // remove
  collection.schema.removeField("y2zg1cbi")

  // remove
  collection.schema.removeField("mloel6le")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eiy2zwi0",
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
    "id": "eqdgwkyd",
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
    "id": "fkt0vrn8",
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
    "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    teamName, \n    SUM(points) AS teamScore,\n    GROUP_CONCAT(id) AS teammates\nFROM \n    player\nGROUP BY \n    teamName;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dkvijnsd",
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
    "id": "y2zg1cbi",
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
    "id": "mloel6le",
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
  collection.schema.removeField("eiy2zwi0")

  // remove
  collection.schema.removeField("eqdgwkyd")

  // remove
  collection.schema.removeField("fkt0vrn8")

  return dao.saveCollection(collection)
})
