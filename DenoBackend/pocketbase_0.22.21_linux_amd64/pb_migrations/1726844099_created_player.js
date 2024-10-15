/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vd2i8gl67rez9qn",
    "created": "2024-09-20 14:54:59.656Z",
    "updated": "2024-09-20 14:54:59.656Z",
    "name": "player",
    "type": "auth",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wjwdxkfx",
        "name": "IsHighschooler",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vd2i8gl67rez9qn");

  return dao.deleteCollection(collection);
})
