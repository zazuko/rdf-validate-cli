#!/usr/bin/env node

const fromFile = require('rdf-utils-fs/fromFile')
const { validateQuad } = require('rdf-datatype-validation')

const filePath = process.argv[2]

if (!filePath) {
  console.error('Missing file path argument')
  process.exit(1)
}

const stream = fromFile(filePath)

let line = 1
stream.on('data', quad => {
  if (!validateQuad(quad)) {
    console.log(`[Line ${line}] "${quad.object.value}" is not a valid value for datatype ${quad.object.datatype.value}`)
  }
  line += 1
})
