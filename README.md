
# rdf-datatype-validation-cli

A CLI tool to validate datatypes in RDF data files.


## Install

```
$ git clone git@github.com:zazuko/rdf-datatype-validation-cli.git
$ cd rdf-datatype-validation-cli
$ npm link
```


## Usage

```
$ npx rdf-validate path/to/file.nt
```


## Limitations

Line numbers are only correct when validating a n-triple file without empty 
lines.

