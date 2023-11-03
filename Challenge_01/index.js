function decryptMessage () {
  fetch('https://codember.dev/data/message_01.txt')
    .then(response => response.text())
    .then(data => {
      const words = []
      let str = ''
      const dataArray = data.trimEnd().split(' ').map((item) => item.toLowerCase())
      dataArray.forEach((word) => {
        if (words.length === 0) return words.push({ word, repeat: 1 })
        let wordExist = false
        for (const item of words) {
          if (item.word === word) {
            item.repeat += 1
            wordExist = true
            break
          }
        }
        if (!wordExist) {
          words.push({ word, repeat: 1 })
        }
      })
      words.forEach(item => {
        str = str.concat(item.word + item.repeat)
      })
    })
}

console.log(decryptMessage())
