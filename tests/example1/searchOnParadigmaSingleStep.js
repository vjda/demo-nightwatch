module.exports = {
  'Realizar una busqueda con el buscador de Paradigma Digital': function (client) {
    client
      .url('http://paradigmadigital.com')
      .maximizeWindow()
      .waitForElementVisible('#menu-item-topSearch', 5000)
      .assert.title('Paradigma - Transformación Digital Aplicada')
      .click('#menu-item-topSearch a')
      .waitForElementVisible('#menu-item-topSearch input[type=search]', 1000)
      .setValue('#menu-item-topSearch input[type=search]', 'Nightwatch')
      .assert.visible('#menu-item-topSearch input[type=submit]')
      .click('#menu-item-topSearch input[type=submit]')
      .waitForElementVisible('#searchPage', 5000)
      .click('#searchPage article a')
      .end()
  }
}
