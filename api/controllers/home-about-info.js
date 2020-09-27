const mongoose = require('mongoose');
const HomeAboutInfo = require('../models/home-about-info');

exports.get_all_home_about_info = (req, res, next) => {
    HomeAboutInfo
        .find()
        .select('_id title name description subtitle youtubeLink youtubeId')
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                homeAboutInfo: docs.map(doc => {
                    return {
                        _id: doc._id,
                        title: doc.title,
                        description: doc.description,
                        subtitle: doc.subtitle,
                        youtubeLink: doc.youtubeLink,
                        youtubeId: doc.youtubeId
                    }
                })
            }
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

exports.post_home_about_info = (req, res, next) => {
    const homeAboutInfo = new HomeAboutInfo({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        name: req.body.name,
        description: req.body.description,
        subtitle: req.body.subtitle,
        youtubeLink: req.body.youtubeLink,
        youtubeId: req.body.youtubeId
    });

    homeAboutInfo
        .save()
        .then(result => {
            res.status(201).json({
                message: 'Home About Info created successfully',
                createdHomeAboutInfo: {
                    title: result.title,
                    name: result.name,
                    description: result.description,
                    subtitle: result.subtitle,
                    youtubeLink: result.youtubeLink,
                    youtubeId: result.youtubeId
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });
}

exports.patch_home_about_info = (req, res, next) => {
    const id = req.params.homeAboutInfoId
    const updateOps = {};
    for(const ops of req.body) {
        updateOps[ops.propName] = ops.value
    }

    HomeAboutInfo
        .updateOne({_id: id}, {$set: updateOps})
        .exec()
        .then(docs => {
            res.status(200).json({
                message: 'Home About Info Transaction updated',
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.delete_all_home_about_info = (req, res, next) => {
    HomeAboutInfo
        .deleteMany()
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'All Home About Info deleted'
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}