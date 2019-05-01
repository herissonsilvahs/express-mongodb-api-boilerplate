const Example = require('../controllers/Example')

module.exports = app => {
  app.get('/', Example.index)
}
