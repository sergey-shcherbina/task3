const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

// TODO: Implement route controllers for user

const router = Router();

router.post('/', createUserValid, responseMiddleware);

router.put('/:id', updateUserValid, responseMiddleware);


router.get('/', (req, res) => {
    const users = UserService.getAll();
    return res.json(users)
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const user = UserService.search(id);
    return res.json(user)
})

// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     const dataToUpdate = req.body;
//     console.log(id)
//     const user = UserService.update(id, dataToUpdate)
//     return res.json(user)
// })

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const user = UserService.delete(id);
    return res.json(user)
})

module.exports = router