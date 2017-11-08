module.exports = {

  before: function (client) {
    console.log('before: Abriendo el navegador');
    client
      .page.yahoo.home.searchToolbar()
      .navigate();

    client.maximizeWindow();
  },

  after: function (client) {
    console.log('after: Cerrando el navegador');
    client.end();
  },

  beforeEach: function () {
    console.log('beforeEach: Ejecutando step');
  },

  afterEach: function () {
    console.log('afterEach: Step ejecutado!');
  },

  '@tags': ['buscador', 'yahoo'],
  "Paso 1: Introducir la cadena de busqueda en el buscador": function (client) {
    var yahooSearch = client.page.yahoo.home.searchToolbar();

    yahooSearch
      .waitForPageLoaded()
      .assert.title('Yahoo Search - Búsqueda en la Web')
      .setValue('@searchBar', 'Nightwatchjs org')
      .assert.hasFocus('@searchBar')
  },

  'Paso 2: Realizar la busqueda': function (client) {
    var yahooSearch = client.page.yahoo.home.searchToolbar();

    yahooSearch
      .assert.visible('@submit')
      .click('@submit');
  },

  'Paso 3: Navegar a la segunda pagina': function (client) {
    var yahooPagination = client.page.yahoo.searchPage.pagination();

    yahooPagination
      .waitForPageLoaded()
      .click('@nextPage');
  },

  'Paso 4: Hacer click sobre el cuarto resultado': function (client) {
    var yahooResults = client.page.yahoo.searchPage.searchResults();

    yahooResults
      .waitForElementVisible('@results', client.globals.timeout.long)
      .clickOnResult(4);
  }

}
