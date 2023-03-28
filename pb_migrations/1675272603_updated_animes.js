migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6payawhh",
    "name": "ename",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // remove
  collection.schema.removeField("6payawhh")

  return dao.saveCollection(collection)
})
