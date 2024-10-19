/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4s6lq85r80w808j",
    "created": "2024-10-15 17:51:51.140Z",
    "updated": "2024-10-15 17:51:51.140Z",
    "name": "RankingsDiv2",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jgbohuw1",
        "name": "team_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "jppbuz9v",
        "name": "points",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "up6iusdi",
        "name": "ranking",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4s6lq85r80w808j");

  return dao.deleteCollection(collection);
})
