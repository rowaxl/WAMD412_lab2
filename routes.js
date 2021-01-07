'use strict'
module.exports = function (app, opts) {
  // Setup routes, middleware, and handlers
  app.get('/', (req, res) => {
    res.locals.name = '0106_lab'
    res.render('index')
  })
}
