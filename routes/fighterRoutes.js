const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

// const { dbAdapter } = require('../config/db');
// const { FighterRepository } = require('../repositories/fighterRepository')

const router = Router();
	router.post('/', (req, res) => {
		const { name, health, power, defense } = req.body
		const fighter = FighterService.create({name, health, power, defense})
		return res.json(fighter)
	})
	
// router.post('/', (req, res) => {
//   const {id, name, health, power, defense} = req.body
//   const fighters = dbAdapter.get("fighters").push({id, name, health, power, defense}).write();
//   console.log(fighters)
//   return res.json({fighters})
//   // res.json(user)
// })

router.get('/', (req, res) => {
	const fighters = FighterService.getAll()
	console.log(fighters)
  	return res.json(fighters)
})
// router.delete('/:id', (req, res) => {
// 	// const id = req.params.id
// 	const fighter = FighterService.delete(req.params.id)
// 	return res.json(fighter)
// })

  // const data = dbAdapter.get("users").value()
  // const data = dbAdapter.get("fighters").value()
//   const data = FighterRepository.getAll("users")
//   console.log(data)
//   return res.json(data)


// TODO: Implement route controllers for fighter

module.exports = router;