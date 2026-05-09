import { charset_values, createUniqueSequence } from '.'

let min_length = 1
let uniqueSequence = createUniqueSequence({
  min_length,
  charset: charset_values.base58_bitcoin,
})

let i = 0
for (;;) {
  try {
    let result = uniqueSequence.next()
  } catch (error) {
    process.stdout.write(
      `\r length: ${min_length} | i: ${i.toLocaleString()}\n`,
    )
    console.error('set size:', uniqueSequence.used_set.size.toLocaleString())
    console.error(error)
    process.exit(1)
  }
  if (uniqueSequence.min_length == min_length) {
    i++
    if (i % 1_000_000 === 0) {
      process.stdout.write(
        `\r length: ${min_length} | i: ${i.toLocaleString()}`,
      )
    }
  } else {
    process.stdout.write(
      `\r length: ${min_length} | i: ${i.toLocaleString()}\n`,
    )
    min_length = uniqueSequence.min_length
    i = 0
  }
}
