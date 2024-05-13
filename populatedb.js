require('dotenv').config()
const database_connection = require('./database/mongodb_connection')
const mongoose = require('mongoose')
const Item = require('./models/item')
const Category = require('./models/category')

const mobo_id = "662b065c64374eec29046da1"
const cpu_id = "662b065c64374eec29046da2"
const gpu_id = "662b065c64374eec29046da3"
const ram_id = "662b065c64374eec29046da4"
const storage_id = "662b065c64374eec29046da5"

const defaultItems = [
  {
    name: "i9 13100F",
    description: "INTEL 9 13° Generation",
    category: cpu_id,
    price: 489.90,
    stock: 3
  },
  {
    name: "RTX 1660",
    description: "NVIDIA's graphic card",
    category: gpu_id,
    price: 310,
    stock: 10
  },
  {
    name: "RAM Smart 4GB",
    description: "DDR3 1333Hz",
    category: ram_id,
    price: 24.99,
    stock: 45
  },
  {
    name: "MSI A520M-A PRO",
    description: "Chipset A520, AMD AM4, mATX, DDR4",
    category: mobo_id,
    price: 300,
    stock: 5
  },
  {
    name: "ASUS - ROG Strix B760-G Gaming WiFi",
    description: "LGA1700, DDR5, PCIe 5.0, WiFi 6E, Bluetooth v5.3, mATX",
    category: mobo_id,
    price: 599.90,
    stock: 1
  },
  {
    name: "2 TB SEAGATE",
    description: "Read: 260, Write: 250",
    category: storage_id,
    price: 43.99,
    stock: 21
  }
]

const defaultCategories = [
  { name: "MOBO", description: "MotherBoard" },
  { name: "CPU", description: "Central Processing Unit" },
  { name: "GPU", description: "Graphic Processing Unit" },
  { name: "RAM", description: "Random-Access Memory" },
  { name: "Storage", description: "HD, SSD, CD, Cloud, etc." },
  { name: "Peripherals", description: "Mouse, Keyboard, Headset, etc." }
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