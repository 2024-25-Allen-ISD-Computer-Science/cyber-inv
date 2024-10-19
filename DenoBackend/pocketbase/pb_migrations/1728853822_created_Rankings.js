/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pv84mfgujprxste",
    "created": "2024-10-13 21:10:22.904Z",
    "updated": "2024-10-13 21:10:22.904Z",
    "name": "Rankings",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wkdrslb8",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT id, teamName from player"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pv84mfgujprxste");

  return dao.deleteCollection(collection);
})
