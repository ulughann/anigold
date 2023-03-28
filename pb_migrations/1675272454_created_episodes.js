migrate((db) => {
  const collection = new Collection({
    "id": "rny2pr3cx4b74ch",
    "created": "2023-02-01 17:27:34.423Z",
    "updated": "2023-02-01 17:27:34.423Z",
    "name": "episodes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "0uqk93kx",
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
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch");

  return dao.deleteCollection(collection);
})
