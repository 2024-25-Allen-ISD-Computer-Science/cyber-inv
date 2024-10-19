/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "pv84mfgujprxste",
    "created": "2024-10-13 21:10:22.904Z",
    "updated": "2024-10-15 01:08:46.163Z",
    "name": "Rankings",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "9muko04x",
        "name": "teamName",
        "type": "text",
        "required": true,
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
        "id": "ijhqxgf5",
        "name": "teamScore",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      },
      {
        "system": false,
        "id": "7aas3ulk",
        "name": "teammates",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 1
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\"",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT \n    (ROW_NUMBER() OVER()) AS id,\n    teamName, \n    SUM(points) AS teamScore,\n    GROUP_CONCAT(name) AS teammates\nFROM \n    player\nGROUP BY \n    teamName;\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
