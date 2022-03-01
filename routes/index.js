const router = require('express').Router();
const { route } = require('express/lib/application');
const assetController = require('../controllers/assetController');

router.get('/welcome', (req, res) => {
  res.send('Hello World');
});

router.get('/assets', assetController.getAsset);
router.post('/assets', assetController.createAsset);
router.delete('/assets/:id', assetController.deleteAsset);

module.exports = router;
