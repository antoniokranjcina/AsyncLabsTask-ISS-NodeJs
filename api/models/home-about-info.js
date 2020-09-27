const mongoose = require('mongoose');

const homeAboutInfoSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: String,
    title: {type: String},
    description: {type: String},
    subtitle: [{
        titleSub: String,
        paragraphs: [{
            paragraph: String
        }]
    }],
    youtubeLink: {type: String},
    youtubeId: {type: String},
});

module.exports = mongoose.model('HomeAboutInfo', homeAboutInfoSchema);