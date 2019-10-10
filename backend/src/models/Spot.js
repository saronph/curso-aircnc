const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({ //infos do cadastro da empresa
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});
//pasta 'file' nao existe, nao precisa criar
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://localhost:3333/files/${this.thumbnail}` 
})

module.exports = mongoose.model('Spot', SpotSchema);