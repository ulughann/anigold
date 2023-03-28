migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // add
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gmyikxnu",
    "name": "cover",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg"
      ],
      "thumbs": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // remove
  collection.schema.removeField("okqhkxqw")

  // remove
  collection.schema.removeField("gmyikxnu")

  return dao.saveCollection(collection)
})
