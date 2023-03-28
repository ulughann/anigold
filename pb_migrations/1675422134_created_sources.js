migrate((db) => {
  const collection = new Collection({
    "id": "6q4nn24bm5nckge",
    "created": "2023-02-03 11:02:14.595Z",
    "updated": "2023-02-03 11:02:14.595Z",
    "name": "sources",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ykr7lpnh",
        "name": "link",
        "type": "url",
        "required": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "qo4gjysm",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
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
  const collection = dao.findCollectionByNameOrId("6q4nn24bm5nckge");

  return dao.deleteCollection(collection);
})
