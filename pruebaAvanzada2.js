/**
  Imagina que estas trabajando en una empresa de "analisis ambiental" y debes de procesar diariamente
  un archivo de resgistro de monitorizacion de ioT (sensores) "txt, csv" el cual contiene
  un aproximado de 1M de registros y debes mapear los registros...
 */

const Queue = require('bull');
const fs = require('fs')
const es = require('event-stream')
const path = require('path')

const lineQueue = new Queue('line_queue', 'redis://redis:6380');

lineQueue.process((job, done) => {
  setTimeout(() => {
    const {data} = job
    console.log(data)
    done()
  }, 2000)
})


const PATH_FILE = path.join(__dirname, 'data','epa_hap_daily_summary.csv')

const mainFunction = () => {

    fs.createReadStream(PATH_FILE ,"utf-8")
    .pipe(es.split())
    .on('data', (data) => {

      lineQueue.add({data}, {
        attempts:1
      })

    })
  }
  mainFunction()
