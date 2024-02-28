export class House {
  constructor(data) {
    this.id = data.id || data._id
    this.bathrooms = data.bathrooms
    this.bedrooms = data.bedrooms
    this.levels = data.levels
    this.year = data.year
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.description = data.description
    this.creator = data.creator
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}
const houseData = {
  "bathrooms": 1,
  "bedrooms": 1,
  "createdAt": "2023-10-10T22:48:23.198Z",
  "creator": {
    "_id": "6525cefac22ddff8178f8c70",
    "name": "Charles Francis Xavier",
    "picture": "https://www.looper.com/img/gallery/professor-xs-entire-backstory-explained/intro-1587748942.jpg",
    "id": "6525cefac22ddff8178f8c70"
  },
  "creatorId": "6525cefac22ddff8178f8c70",
  "description": "It doesn't have a door only a window",
  "id": "6525d4b732075d754277178b",
  "imgUrl": "https://images.unsplash.com/photo-1611622295630-7839220cf0e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  "levels": 1,
  "price": 1500,
  "updatedAt": "2023-10-10T22:48:23.198Z",
  "year": 2022,
  "__v": 0,
  "_id": "6525d4b732075d754277178b",
}
