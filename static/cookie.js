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
      console.log({ callback: 'onInitialise', status, didConsent })
      if (type === 'deny' && !didConsent) {
        console.log('disable cookie')
        window.gaOptout()
      }
    },
    onStatusChange: function(status, chosenBefore) {
      const type = this.options.type
      const didConsent = this.hasConsented()
      console.log({ callback: 'onStatusChange', status, didConsent, chosenBefore })
      if (type === 'deny' && !didConsent) {
        console.log('disable cookie')
        window.gaOptout()
      }
    },
    onRevokeChoice: function() {
      const type = this.options.type
      console.log({ callback: 'onRevokeChoice', status })
      if (type === 'deny') {
        console.log('disable cookie')
        window.gaOptout()
      }
    },
  })
})
