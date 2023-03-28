migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rny2pr3cx4b74ch")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
