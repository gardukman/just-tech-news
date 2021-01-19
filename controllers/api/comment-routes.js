const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    ('/', (req, res) => {
        Comment.findAll({

        })
            .then(dataRes => res.json(dataRes))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
    });
});

router.post('/', (req, res) => {
    // verify the session
    if (req.session) {
    Comment.create({
        comment_text: req.body.comment_text,
        // use the id provided from the session
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(resData => res.json(resData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

});

module.exports = router;