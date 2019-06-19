window.addEventListener('load', function() {
  window.cookieconsent.initialise({
    palette: {
      popup: {
        background: '#000',
      },
      button: {
        background: '#f1d600',
      },
    },
    type: 'opt-in',
    content: {
      href: 'https://oss.zenika.com/terms',
    },
    onInitialise: function(status) {
      const type = this.options.type
      const didConsent = this.hasConsented()
      if (type === 'opt-out' && !didConsent) {
        window.gaOptout()
      }
    },
    onStatusChange: function(status, chosenBefore) {
      const type = this.options.type
      const didConsent = this.hasConsented()
      if (type === 'opt-out' && !didConsent) {
        window.gaOptout()
      }
    },
    onRevokeChoice: function() {
      const type = this.options.type
      if (type === 'opt-out') {
        window.gaOptout()
      }
    },
  })
})
