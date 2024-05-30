class Block{
    constructor(timeStamp, lastHash, hash, data){
        this.timeStamp = timeStamp
        this.lastHash =lastHash
        this.hash =hash
        this.data =data
    }
}

const block1 = new Block('01/02/2024', 'health-lastHash', 'health-hash', 'health-data')
console.log(block1)