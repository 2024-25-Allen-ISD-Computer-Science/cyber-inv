/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dfa7hpv8tkqj7ro",
    "created": "2024-10-15 20:53:25.296Z",
    "updated": "2024-10-15 20:53:25.296Z",
    "name": "RankCombo",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dn3azqjv",
        "name": "team_name",
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
        "id": "udt5gguu",
        "name": "points",
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
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "WITH CombinedRankings AS (\n    SELECT \n        team_name, \n        points, \n        ROW_NUMBER() OVER (ORDER BY points DESC) AS id  -- Generating a unique id for each row\n    FROM RankingsDiv1\n    UNION ALL\n    SELECT \n        team_name, \n        points, \n        ROW_NUMBER() OVER (ORDER BY points DESC) AS id  -- Generating a unique id for each row\n    FROM RankingsDiv2\n)\nSELECT \n    team_name, \n    points, \n    id\nFROM CombinedRankings\nORDER BY points DESC;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("dfa7hpv8tkqj7ro");

  return dao.deleteCollection(collection);
})
