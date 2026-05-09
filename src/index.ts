let _chars = ''
// 0-9
for (let i = 48; i <= 57; i++) {
  _chars += String.fromCharCode(i)
}
// A-Z
for (let i = 65; i <= 90; i++) {
  _chars += String.fromCharCode(i)
}
// a-z
for (let i = 97; i <= 122; i++) {
  _chars += String.fromCharCode(i)
}

export let charset_values = {
  base10_digits: _chars.replace(/[A-Za-z]/g, ''),
  base26_letters: _chars.replace(/[0-9a-z]/g, ''),
  base32_crockford: _chars.replace(/[ILOU]/g, '').replace(/[a-z]/g, ''),
  base36_alphanumeric: _chars.replace(/[a-z]/g, ''),
  base58_bitcoin: _chars.replace(/[0OIl]/g, ''),
  base64_url: _chars + '-_',
}

export function createUniqueSequence(options: {
  charset: string
  min_length: number
}) {
  let { charset, min_length } = options
  let used_set = new Set()
  function next() {
    for (;;) {
      let result = ''
      for (let i = 0; i < min_length; i++) {
        let index = Math.floor(Math.random() * charset.length)
        result += charset[index]
      }
      if (!used_set.has(result)) {
        used_set.add(result)
        return result
      }
      min_length++
    }
  }
  return {
    next,
    charset,
    get min_length() {
      return min_length
    },
    used_set,
  }
}
