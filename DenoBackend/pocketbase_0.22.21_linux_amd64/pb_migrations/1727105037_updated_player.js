/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsvipydd",
    "name": "PhotoID",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [
        "image/jpeg",
        "image/webp",
        "image/png",
        "image/heic"
      ],
      "thumbs": [
        "300x700"
      ],
      "maxSelect": 1,
      "maxSize": 10000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hsvipydd",
    "name": "PhotoID",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [
        "300x700"
      ],
      "maxSelect": 1,
      "maxSize": 10000000,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
})
