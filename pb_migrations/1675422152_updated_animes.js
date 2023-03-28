migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s6tarzzf",
    "name": "sources",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "6q4nn24bm5nckge",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("i6fzuhaxgynrlpc")

  // remove
  collection.schema.removeField("s6tarzzf")

  return dao.saveCollection(collection)
})
