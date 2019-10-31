const express = require('express')
const router = express.Router()
const City = require('../models/cityModel')

router.get('/all',async (req, res) => {
  try {
    await City.find({}, (err, cities) =>{
      if (err) return res.status(500).send({error: "Internal Server Error"})
      return res.status(200).send(cities)
    })
    
  } catch(err) {
    console.error(err)
  }
});

module.exports = router