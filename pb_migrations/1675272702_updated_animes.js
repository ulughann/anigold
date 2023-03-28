migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "td0ldyfz",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "rny2pr3cx4b74ch",
      "cascadeDelete": false,
      "maxSelect": null,
      "displayFields": [
        "name",
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // remove
  collection.schema.removeField("td0ldyfz")

  return dao.saveCollection(collection)
})
