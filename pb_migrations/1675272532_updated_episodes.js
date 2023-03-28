migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sczsm4ls",
    "name": "count",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urakxsco",
    "name": "anime",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "i6fzuhaxgynrlpc",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": [
        "name",
        "id",
        "created"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch")

  // remove
  collection.schema.removeField("sczsm4ls")

  // remove
  collection.schema.removeField("urakxsco")

  return dao.saveCollection(collection)
})
