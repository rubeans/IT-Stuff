const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ItemSchema = new Schema(
    {
        name: { type: String, required: true, maxLength: 60 },
        description: { type: String, maxLength: 100 },
        category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
        price: { type: Number, required: true },
        stock: { type: Number, required: true }
    },
    {
        versionKey: false
    }
)

ItemSchema.virtual('url').get(function () {
    return `/items/${this._id}`
})

module.exports = mongoose.model('Item', ItemSchema)