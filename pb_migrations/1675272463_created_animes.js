migrate((db) => {
  const collection = new Collection({
    "id": "i6fzuhaxgynrlpc",
    "created": "2023-02-01 17:27:43.384Z",
    "updated": "2023-02-01 17:27:43.384Z",
    "name": "animes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "myjsdljj",
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
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc");

  return dao.deleteCollection(collection);
})
