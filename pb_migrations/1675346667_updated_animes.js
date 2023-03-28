migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "okqhkxqw",
    "name": "likes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "okqhkxqw",
    "name": "rating",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": 1,
      "max": 100
    }
  }))

  return dao.saveCollection(collection)
})
