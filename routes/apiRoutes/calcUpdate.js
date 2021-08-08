const Calculations = require('../../models/Calculations');
const router = require('express').Router();

router.post('/', (req, res) => {
    
    Calculations.create(req.body)
      .then((product) => {
    
        if (req.body.tagIds.length) {
          const productTagIdArr = req.body.tagIds.map((tag_id) => {
            return {
              product_id: product.id,
              tag_id,
            };
          });
          return ProductTag.bulkCreate(productTagIdArr);
        }
        res.status(200).json(product);
      })
      .then((productTagIds) => res.status(200).json(productTagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  });

modules.exports = router;