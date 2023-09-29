/**
  Imagina que estas trabajando en una empresa de "estudio de mercado" y debes de procesar
  mensualmente un archivo de trafico aereo "txt,csv" el cual contiene un aproximado de 1k -15k de registros y debes
  mapear los registros para identificar cuantos vuelos se realizaron con un Aribus380
*/

const fs = require('fs')
const path = require('path')

const PATH_FILE = path.join(__dirname, 'data', 'air_traffic.csv')

const mainFunction = () => {
  fs.readFile(PATH_FILE, "utf-8", (err, data) =>{
    let counter = 0;
    if(!err){
      const arrayLines = data.split('\n')

      for (const key in arrayLines) {
        const line = arrayLines[key]
        if (line.includes('A380')) {
          counter += 1
        }
      }
      console.log(counter)
    }
  })
}

mainFunction()
