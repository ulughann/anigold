migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("users_name")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "users_name",
    "name": "name",
    "type": "text",
    "required": true,
    "unique": true,
    "options": {
      "min": 1,
      "max": 18,
      "pattern": "^[A-Za-z][A-Za-z0-9_]{7,29}$"
    }
  }))

  return dao.saveCollection(collection)
})
