const express = require('express');
const router = express.Router();
const ClassDataModel = require('../models/classInfo');

const renderItems = async res => {
  const topicData = await ClassDataModel.getAllTopicData();
  const topicStatusList = await ClassDataModel.getAllClassStatus();

  return res.render('template', {
    locals: {
      title: 'Class Topic Ranking',
      topicData,
      topicStatusList
    },
    partials: {
      partial: 'partial-index'
    }
  });
};

const updateEach = async items => {
  console.log('items are ', items);
  for (let key in items) {
    ClassDataModel.update(key, items[key]);
  }
};

/* GET home page. */
router.get('/', async (req, res, next) => {
  renderItems(res);
});

router.post('/', async (req, res) => {
  const addUpdatedValues = await updateEach(req.body);

  renderItems(res);
});

module.exports = router;
