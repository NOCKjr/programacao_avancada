const os = require('os')
const log = require('./logger.js')

const {freemem, totalmem} = os


const total = parseInt(totalmem()/1024/1024)
const freeMem = parseInt(freemem()/1024/1024)
const usage = total - freeMem
const percents = parseInt((usage/total) * 100)

function data(){
    const stats = {
        total: `${total} MB`,
        freeMem: `${freeMem} MB`,
        percents: `${percents} MB em uso`
    }
    console.clear()
    console.log('++++++ MEMORY STATS ++++++')
    console.table(stats)
    
    // Mostra a quantidade de memória livre e de memoria total do sistema.
    log('rodando...', JSON.stringify(stats))
}

setInterval((data), 1000)
