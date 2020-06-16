'use-strict';

let router = require('express').Router();
let UserController = require('../controller/UserController');
let FeedController = require('../controller/FeedController');
let RelationshipController = require('../controller/RelationshipController');
let LikeController = require('../controller/LikeController');
let CommentController = require('../controller/CommentController');
let pushNotification = require('../controller');
let SalonController = require('../controller/SalonController');
let BookingController = require('../controller/BookingController');

router.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'Response successful'
    })
})
//api for User
router.route('/users')
    .post(UserController.createUser)

router.route('/get-users')
    .post(UserController.index)

router.route('/update-user')
    .get(UserController.index)
    .post(UserController.updateUser)

router.route('/get-user-profile')
    .post(UserController.getUserProfile)

router.route('/update-language')
    .post(UserController.updateLanguage)

router.route('/log-out')
    .post(UserController.logout)
//api for Feed
router.route('/feeds')
    .get(FeedController.index)
    .post(FeedController.createFeed)

router.route('/get-newsfeed')
    .post(FeedController.getFeeds)

router.route("/get-user-feeds")
    .post(FeedController.getUserFeed)

router.route('/remove-feed')
    .post(FeedController.removeFeed)

router.route('/get-feed-detail')
    .post(FeedController.getFeedDetail)

router.route('/update-newsfeed')
    .post(FeedController.updateFeed)

router.route('/get-feed-comment')
    .post(CommentController.getComment)

router.route('/add-comment')
    .post(CommentController.addComment)

router.route('/follow')
    .post(RelationshipController.handleFollow)

router.route("/get-my-follows")
    .post(RelationshipController.getRelationship)

router.route("/like")
    .post(LikeController.handleLike)

router.route('/get-comment')
    .post(CommentController.getComment)

router.route('/reported-feed')
    .post(FeedController.reportedFeed)

router.route('/search-friend')
    .post(UserController.searchFriends)

router.route('/get-user-social-gallery')
    .get(FeedController.getUserSocialGallery)
// router.route('/listen-booking')
//     .post(pushNotification.listenBooking);

router.route('/listen-booking')
    .post(BookingController.listenBooking);

router.route('/listen-messages')
    .post(pushNotification.listenMessages);

router.route('/update-salon-info')
    .post(SalonController.updateSalon)
    // .get(SalonController.getSalon)

module.exports = router;
