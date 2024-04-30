const mongoose = require('mongoose')

const schema = mongoose.Schema

const CategorySchema = new schema(
    {
        name: { type: String, required: [true, "Name must be added"] },
        description: { type: String, maxLength: 50, required: [true, "Description must be added"] },
    },
    {
        versionKey: false
    }
)

CategorySchema.virtual('url').get(function () {
    return `/categories/${this._id}`
})

module.exports = mongoose.model('Category', CategorySchema)