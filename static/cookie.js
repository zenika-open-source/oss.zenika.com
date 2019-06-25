const GA_ID = 'UA-138180707-1'

function setCookie(name, value, expires, domain) {
  document.cookie = name + "=" + value + ";expires=" + expires + ";path=/;domain=" + domain
}

function optin() {
  const disableGA = 'ga-disable-' + GA_ID
  window[disableGA] = false;

  ga('create', GA_ID, 'auto');
  ga('set', 'anonymizeIp', true);
  ga('send', 'pageview');
}

function optout() {
  const disableGA = 'ga-disable-' + GA_ID
  window[disableGA] = true;

  const domain = "." + document.location.hostname
  setCookie('_ga', 'false', 'Thu, 01 Jan 1970 00:00:01 GMT', domain)
  setCookie('_gat', 'false', 'Thu, 01 Jan 1970 00:00:01 GMT', domain)
  setCookie('_gid', 'false', 'Thu, 01 Jan 1970 00:00:01 GMT', domain)
}

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
      const didConsent = this.hasConsented()
      if (status === 'deny' || !didConsent) {
        optout()
      } else if (status === 'allow') {
        optin()
      }
    },
    onStatusChange: function(status) {
      if (status === 'deny') {
        optout()
      } else if (status === 'allow') {
        optin()
      }
    },
    onRevokeChoice: function() {
      if (status === 'deny') {
        optout()
      } else if (status === 'allow') {
        optin()
      }
    },
  })
})

// by default all cookie disabled
optout();
