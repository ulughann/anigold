migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q4nn24bm5nckge")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vkgpurfs",
    "name": "parent",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "rny2pr3cx4b74ch",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6q4nn24bm5nckge")

  // remove
  collection.schema.removeField("vkgpurfs")

  return dao.saveCollection(collection)
})
