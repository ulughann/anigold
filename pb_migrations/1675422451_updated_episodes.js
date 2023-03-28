migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ltvimm6t",
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
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch")

  // remove
  collection.schema.removeField("ltvimm6t")

  return dao.saveCollection(collection)
})
