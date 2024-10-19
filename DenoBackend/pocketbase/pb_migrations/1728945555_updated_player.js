/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ku6zpyd7",
    "name": "Division",
    "type": "number",
    "required": false,
    "presentable": true,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ku6zpyd7",
    "name": "Division",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": 0,
      "max": 1,
      "noDecimal": true
    }
  }))

  return dao.saveCollection(collection)
})
