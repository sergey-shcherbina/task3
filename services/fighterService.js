const { FighterRepository } = require('../repositories/fighterRepository');

class FighterService {
     
    // TODO: Implement methods to work with fighters

    getAll() {
        return FighterRepository.getAll("fighters")
    }
    create(data) {
        return  FighterRepository.create(data)
    }
    update(id, dataToUpdate) {
        return FighterRepository.update(id, dataToUpdate)
    }
    delete(id) {
        return FighterRepository.delete(id)
    }
    search(search) {
        const item = FighterRepository.getOne(search);
        console.log(item)
        if(!item) {
            return null;
        }
        return item; 
    }
}

module.exports = new FighterService();