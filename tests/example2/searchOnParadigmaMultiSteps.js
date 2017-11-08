module.exports = {

  before: function (client) {
    console.log('before: Abriendo el navegador')
    client
      .url('http://paradigmadigital.com')
      .maximizeWindow()
  },

  after: function (client) {
    console.log('after: Cerrando el navegador')
    client.end()
  },

  beforeEach: function () {
    console.log('beforeEach: Ejecutando step')
  },

  afterEach: function () {
    console.log('afterEach: Step ejecutado!')
  },

  '@tags': ['buscador', 'paradigma', 'ejemplo2'],
  'Paso 1: Introducir la cadena de busqueda en el buscador': function (client) {
    client
      .waitForElementVisible('#menu-item-topSearch', 5000)
      .assert.title('Paradigma - Transformación Digital Aplicada')
      .click('#menu-item-topSearch a')
      .waitForElementVisible('#menu-item-topSearch input[type=search]', 1000)
      .setValue('#menu-item-topSearch input[type=search]', 'Nightwatch')
  },

  'Paso 2: Realizar la busqueda': function (client) {
    client
      .assert.visible('#menu-item-topSearch input[type=submit]')
      .click('#menu-item-topSearch input[type=submit]')
  },

  'Paso 3: Navegando al primer resultado de la pagina': function (client) {
    client
      .waitForElementVisible('#searchPage', 5000)
      .click('#searchPage article a')
  }

}
