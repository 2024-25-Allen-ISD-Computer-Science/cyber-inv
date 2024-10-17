/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lxnvc9uh",
    "name": "grade",
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
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // remove
  collection.schema.removeField("lxnvc9uh")

  return dao.saveCollection(collection)
})
