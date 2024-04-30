require('dotenv').config()
const database_connection = require('./database/mongodb_connection')
const mongoose = require('mongoose')
const Item = require('./models/item')
const Category = require('./models/category')

const defaultItems = [
  {
    name: "i3 12100F",
    description: "INTEL 3° Generation",
    category: "662b065c64374eec29046da2",
    price: 137.99,
    stock: 14
  },
  {
    name: "RTX 4090",
    description: "NVIDIA's lastest graphic card",
    category: "662b065c64374eec29046da1",
    price: 499.90,
    stock: 6
  },
  {
    name: "8GB RAM",
    description: "DDR4 2666Hz",
    category: "662b065c64374eec29046da4",
    price: 49.99,
    stock: 32
  },
  {
    name: "Kingston SSD 1TB",
    description: "Read: 460, Write: 440",
    category: "662b065c64374eec29046da5",
    price: 87.30,
    stock: 21
  }
]

const defaultCategories = [
  { name: "MOBO", description: "MotherBoard" },
  { name: "CPU", description: "Central Processing Unit" },
  { name: "GPU", description: "Graphic Processing Unit" },
  { name: "RAM", description: "Random-Access Memory" },
  { name: "Storage", description: "HD, SSD, CD, Cloud, etc." }
]

run().catch(e => console.error(e))
async function run() {
  try {
    await database_connection()
    // Insert default categories
    // await Category.insertMany(defaultCategories)
    // console.log("New categories inserted")

    //Insert default items
    // await Item.insertMany(defaultItems)
    // console.log("New items inserted")
  } catch (e) {
    console.error(e)
  }
}