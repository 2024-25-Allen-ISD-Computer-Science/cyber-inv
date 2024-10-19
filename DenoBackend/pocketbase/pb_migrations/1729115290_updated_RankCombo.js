/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dfa7hpv8tkqj7ro")

  collection.options = {
    "query": "WITH CombinedRankings AS (\n    SELECT \n        team_name, \n        points, \n        ROW_NUMBER() OVER (ORDER BY points DESC) + (SELECT COUNT(*) FROM RankingsDiv1) AS id,  -- Adjusting id for unique numbering\n        1 AS division  -- Marking as division 1\n    FROM RankingsDiv1\n    UNION ALL\n    SELECT \n        team_name, \n        points, \n        ROW_NUMBER() OVER (ORDER BY points DESC) AS id,  -- Generating a unique id for each row\n        2 AS division  -- Marking as division 2\n    FROM RankingsDiv2\n)\nSELECT \n    team_name, \n    points, \n    id,\n    division\nFROM CombinedRankings\nORDER BY points DESC;\n"
  }

  // remove
  collection.schema.removeField("irouvugb")

  // remove
  collection.schema.removeField("caqxzlul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbxfnw23",
    "name": "team_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k8hqczvh",
    "name": "points",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ov1ahc5u",
    "name": "division",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dfa7hpv8tkqj7ro")

  collection.options = {
    "query": "WITH CombinedRankings AS (\n    SELECT \n        team_name, \n        points, \n        ROW_NUMBER() OVER (ORDER BY points DESC) + (SELECT COUNT(*) FROM RankingsDiv1) AS id  -- Adjusting id for unique numbering\n    FROM RankingsDiv1\n    UNION ALL\n    SELECT \n        team_name, \n        points, \n        ROW_NUMBER() OVER (ORDER BY points DESC) AS id  -- Generating a unique id for each row\n    FROM RankingsDiv2\n)\nSELECT \n    team_name, \n    points, \n    id\nFROM CombinedRankings\nORDER BY points DESC;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "irouvugb",
    "name": "team_name",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "caqxzlul",
    "name": "points",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 1
    }
  }))

  // remove
  collection.schema.removeField("dbxfnw23")

  // remove
  collection.schema.removeField("k8hqczvh")

  // remove
  collection.schema.removeField("ov1ahc5u")

  return dao.saveCollection(collection)
})
