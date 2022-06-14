const { UserRepository } = require('../repositories/userRepository');

class UserService {
    // TODO: Implement methods to work with user
    
    getAll() {
       return UserRepository.getAll("users")
    }
    
    create(data) {
        return  UserRepository.create(data)
    }
    
    update(id, dataToUpdate) {
        return UserRepository.update(id, dataToUpdate)
    }
    
    delete(id) {
        return UserRepository.delete(id)
    }
    
    search(search) {
        const item = UserRepository.getOne(search);
        console.log(item)
        if(!item) {
            return null;
        }
        return item; 
    }
}

module.exports = new UserService();