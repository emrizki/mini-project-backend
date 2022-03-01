const { Aset } = require('../models');

class assetController {
  static getAsset(req, res) {
    // method untuk get asset dari database
    Aset.findAll({ attributes: { exclude: ['createdAt', 'updatedAt'] } })
      .then((data) => {
        console.log(data);
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({ message: 'internal server error' });
      });
  }

  static createAsset(req, res) {
    const asetObj = {
      name: req.body.name,
      description: req.body.description,
    };

    Aset.create(asetObj)
      .then((dataAset) => {
        res.status(201).json({
          id: dataAset.id,
          name: dataAset.name,
          description: dataAset.description,
        });
      })
      .catch((err) => {
        res.status(500).json({ message: 'internal server error' });
      });
  }
}

module.exports = assetController;
