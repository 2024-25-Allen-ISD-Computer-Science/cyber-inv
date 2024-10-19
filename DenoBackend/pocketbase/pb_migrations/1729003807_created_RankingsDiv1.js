/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "75gacb4abjc2cdu",
    "created": "2024-10-15 14:50:07.258Z",
    "updated": "2024-10-15 14:50:07.258Z",
    "name": "RankingsDiv1",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "3f8mzdlf",
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
        "id": "amhjes35",
        "name": "points",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("75gacb4abjc2cdu");

  return dao.deleteCollection(collection);
})
