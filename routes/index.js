const express = require('express');
const router = express.Router();
const ClassDataModel = require('../models/classInfo');

const renderItems = async (res, topicData, topicStatusList) => {
  return res.render('template', { 
    locals: {
      title: 'Class Topic Ranking',
      topicData: topicData,
      topicStatusList: topicStatusList
    },
    partials: {
      partial: 'partial-index'
    }
  });
}

const updateEach = async (items) => {
  for(let key in items) {
    ClassDataModel.update(key, items[key]);
  }
}

/* GET home page. */
router.get('/', async (req, res, next) => {
  const topicData = await ClassDataModel.getAllTopicData();
  const topicStatusList = await ClassDataModel.getAllClassStatus();

  renderItems(res, topicData, topicStatusList);
});

router.post('/', async (req, res) => {
  const addUpdatedValues = await updateEach(req.body);
  const topicData = await ClassDataModel.getAllTopicData();
  const topicStatusList = await ClassDataModel.getAllClassStatus();

  renderItems(res, topicData, topicStatusList);
});

module.exports = router;