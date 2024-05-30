class Block{
    constructor( data, hash, lastHash) {
        this.data = data
        this.hash = hash
        this.lastHash = lastHash
    }
}

const lighningHash = (data) => {
    return data + '*'
}

class BlockChain{
    constructor(){
        const genisis = new  Block('generated-data', 'generated-hash', 'generated-last-hash')
        this.chain = [genisis]
    }
    addBlock(data){
        const lastHash = this.chain[this.chain.length - 1].hash 
        const hash = lighningHash(data + lastHash)
        const block = new Block(data, hash, lastHash)
        this.chain.push(block)
    }
}

const fooBlockChain = new BlockChain()
fooBlockChain.addBlock('one')
fooBlockChain.addBlock('two')
fooBlockChain.addBlock('three')

console.log(fooBlockChain)
