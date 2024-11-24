/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bzf78qqxc5pouo7");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "bzf78qqxc5pouo7",
    "created": "2024-09-20 14:40:34.966Z",
    "updated": "2024-09-20 14:40:34.966Z",
    "name": "players",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "7ohbuvob",
        "name": "field",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/heic"
          ],
          "thumbs": [
            "300x500"
          ],
          "maxSelect": 1,
          "maxSize": 5242880,
          "protected": false
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
      "allowEmailAuth": true,
      "allowOAuth2Auth": true,
      "allowUsernameAuth": true,
      "exceptEmailDomains": null,
      "manageRule": null,
      "minPasswordLength": 8,
      "onlyEmailDomains": null,
      "onlyVerified": false,
      "requireEmail": false
    }
  });

  return Dao(db).saveCollection(collection);
})
