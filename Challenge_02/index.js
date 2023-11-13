function miniCompiler () {
  const data = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&'
  let message = ''
  let number = 0
  const options = {
    '#': () => { number += 1 },
    '@': () => { number -= 1 },
    '*': () => { number *= number },
    '&': () => { message = message.concat(number) }
  }
  const array = data.split('')
  array.forEach(element => options[element]())
  return message
}

console.log(miniCompiler())
