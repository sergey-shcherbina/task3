const { user } = require('../models/user');
const UserService = require('../services/userService');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    try {
        const { firstName, lastName, email, phoneNumber, password } = req.body;
        if (!firstName) {
            throw Error('First name missing');
        }
        if (!lastName) {
            throw Error('Last name missing');
        }
        if (!email) {
            throw Error('Email missing');
        }
        if (email.length > 35 || email.length < 12 || email.substr(-10) !== '@gmail.com') {
            throw Error('Email incorrect');
        }
        if (phoneNumber.length !== 13 || phoneNumber.substr(0, 4) !== '+380' || typeof Number(phoneNumber.substr(4)) !== 'number') {
            throw Error('Phone number incorrect');
        }
        if (typeof password !== 'string' || password.length < 3) {
            throw Error('Password incorrect');
        }
        const emailInvalid = UserService.search(email)
        if (emailInvalid) {
            throw Error('User with this email already exists')
        }
        const phoneNumberValid = UserService.search(phoneNumber) 
        if (phoneNumberValid) {
            throw Error('User with this phone number already exists')
        }    
        const data  = UserService.create({firstName , lastName , email , phoneNumber, password});
        res.data = data
    } catch (err) {
        res.err = err;
    } 
    next();
    // } finally {
    //     next();
    // }
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update
    // try {
    //     // const { firstName, lastName, email, phoneNumber, password } = req.body;
    //     const { id } = req.params;
    //     const dataToUpdate = req.body;
    // if (dataToUpdate.email && (dataToUpdate.email.length > 35 || email.length < 12 || email.substr(-10) !== '@gmail.com')) {

    // }
        
        // const keysData = Object.keys(dataToUpdate)
        // keysData.forEach(it => {
        //     if (it === 'firstName') {

        //     }
        
        // const keysModel = Object.keys(user)
        // 
        // for (let elem of keysData) {
        //     if (!(elem === 'firstName' || elem === 'lastName' || 
        //         elem === 'email' || elem === 'phoneNumber' || elem === 'password'))
            // if (!(keysModel.some(function(it) { 
            //     if (it === elem) {
            //         return true 
            //     } else {
            //         return false
            //     }
            // }
            // )))
    
            // keysData.forEach(item => {
            //     if (!keysModel.some(it => it !== item))
                
                // {
                //     throw Error(`${elem}`)
                // } else {
                //     throw Error(`good good`)
                // }
        //         {
        //             console.log(elem)
        //         } else {
        //             console.log("good")
        //         }
        // }
            // })
        
        

    //     if (!firstName) {
    //         throw Error('First name missing');
    //     }
    //     if (!lastName) {
    //         throw Error('Last name missing');
    //     }
    //     if (!email) {
    //         throw Error('Email missing');
    //     }
    //     if (email.length > 35 || email.length < 12 || email.substr(-10) !== '@gmail.com') {
    //         throw Error('Email incorrect');
    //     }
    //     if (phoneNumber.length !== 13 || phoneNumber.substr(0, 4) !== '+380' || typeof Number(phoneNumber.substr(4)) !== 'number') {
    //         throw Error('Phone number incorrect');
    //     }
    //     if (typeof password !== 'string' || password.length < 3) {
    //         throw Error('Password incorrect');
    //     }
    //     const emailInvalid = UserService.search(email)
    //     if (emailInvalid) {
    //         throw Error('User with this email already exists')
    //     }
    //     const phoneNumberValid = UserService.search(phoneNumber) 
    //     if (phoneNumberValid) {
    //         throw Error('User with this phone number already exists')
    //     }    
    //     const data  = UserService.create({firstName , lastName , email , phoneNumber, password});
    // 
    
    // res.data = data
    // } catch (err) {
    //     res.err = err;
    // } 
    next();
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;