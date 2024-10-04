/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eybd2oaj",
    "name": "Grade",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Freshman",
        "Sophomore",
        "Junior",
        "Senior"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eybd2oaj",
    "name": "Grade",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "FreshmanSophomoreJunior",
        "Senior"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
