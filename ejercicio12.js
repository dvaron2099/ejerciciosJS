/**
  Dado un numero mostrar todos los numeros desde ese al 0 de 8 en 8
  en una lista de guiones donde cada numero debe enpezar por n°

  EjemplosÑ
  hastaCero(100) // Devuelve:

  -- del 100 al 0 --
  - n°100
  - n°92
  - n°84
  - n°76
  - n°68
  - n°60
  - n°52
  - n°44
  - n°28
  - n°20
  - n°12
  - n°4
  --- FIN ---
 */

  function hastaCero(numero) {

    console.log(`--- Del ${numero} al 0 ---`)
    for (let i = numero; i > 0; i = i-8) {
      console.log(`- n°${i}`)

    }
    console.log(`--- FIN ---`)
  }

hastaCero(100)
