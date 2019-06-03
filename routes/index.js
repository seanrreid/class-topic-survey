const express = require('express');
const router = express.Router();
const ClassDataModel = require('../models/classInfo');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const topicData = await ClassDataModel.getAll();

  res.render('template', { 
    locals: {
      title: 'Class Topic Ranking',
      topicData: topicData
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
