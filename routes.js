'use strict'
const fs = require('fs')

module.exports = function (app, opts) {
  const title = 'Guestbook'
  const filePath = 'notes'

  app.get('/', (req, res) => {
    res.render('index', { title })
  })

  app.get('/leave-note', (req, res) => {
    res.render('leave-note', { title })
  })

  app.post('/note', (req, res) => {
    const noteValue = `${req.body.value}|${new Date().toLocaleString()}\n`
    fs.appendFileSync(filePath, noteValue)

    res.status(302)
    res.redirect('/')
  })

  app.get('/read-notes', (req, res) => {
    const notes = fs.readFileSync(filePath, { encoding: 'utf-8', flag: 'r' })
      .split('\n')
      .filter(Boolean)
      .map(row => row.split('|'))

    res.render('read-notes', { title, notes })
  })
}
