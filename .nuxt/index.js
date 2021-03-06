import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_srcplugin327d9244_39f5cde6 from 'nuxt_plugin_srcplugin327d9244_39f5cde6' // Source: ./src.plugin.327d9244.js (mode: 'client')
import nuxt_plugin_templatesplugin30764206_5e762ed6 from 'nuxt_plugin_templatesplugin30764206_5e762ed6' // Source: ./templates.plugin.30764206.js (mode: 'all')
import nuxt_plugin_workbox_1fc6fd22 from 'nuxt_plugin_workbox_1fc6fd22' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_0dea0235 from 'nuxt_plugin_metaplugin_0dea0235' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_axios_03e4d186 from 'nuxt_plugin_axios_03e4d186' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_validation_16b6b817 from 'nuxt_plugin_validation_16b6b817' // Source: ../plugins/mixins/validation.js (mode: 'all')
import nuxt_plugin_axios_5659d192 from 'nuxt_plugin_axios_5659d192' // Source: ../plugins/axios.js (mode: 'all')
import nuxt_plugin_componentsglobal_65822712 from 'nuxt_plugin_componentsglobal_65822712' // Source: ../plugins/components.global.js (mode: 'all')
import nuxt_plugin_userInterface_347e81b0 from 'nuxt_plugin_userInterface_347e81b0' // Source: ../plugins/mixins/userInterface.js (mode: 'all')
import nuxt_plugin_toast_7d528cd2 from 'nuxt_plugin_toast_7d528cd2' // Source: ../plugins/mixins/toast.js (mode: 'all')
import nuxt_plugin_auth_f008e22c from 'nuxt_plugin_auth_f008e22c' // Source: ./auth.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"en"},"title":"DukaPal","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Scutum Admin Template (Vue.js version)"}],"script":[{"src":"\u002Fvendor\u002Fuikit.min.js"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"preload","href":"\u002Fvendor\u002Fuikit.min.js","as":"script"},{"rel":"preload","href":"\u002Ffonts\u002Froboto_base64.css","as":"style"},{"rel":"preload","href":"\u002Ffonts\u002FsourceCodePro_base64.css","as":"style"},{"rel":"preload","href":"\u002Ffonts\u002Fmdi\u002Fcss\u002Fmaterialdesignicons.css","as":"style"},{"rel":"stylesheet","href":"\u002Ffonts\u002Froboto_base64.css"},{"rel":"stylesheet","href":"\u002Ffonts\u002FsourceCodePro_base64.css"},{"rel":"stylesheet","href":"\u002Ffonts\u002Fmdi\u002Fcss\u002Fmaterialdesignicons.css"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (process.client && typeof nuxt_plugin_srcplugin327d9244_39f5cde6 === 'function') {
    await nuxt_plugin_srcplugin327d9244_39f5cde6(app.context, inject)
  }

  if (typeof nuxt_plugin_templatesplugin30764206_5e762ed6 === 'function') {
    await nuxt_plugin_templatesplugin30764206_5e762ed6(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_1fc6fd22 === 'function') {
    await nuxt_plugin_workbox_1fc6fd22(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_0dea0235 === 'function') {
    await nuxt_plugin_metaplugin_0dea0235(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_03e4d186 === 'function') {
    await nuxt_plugin_axios_03e4d186(app.context, inject)
  }

  if (typeof nuxt_plugin_validation_16b6b817 === 'function') {
    await nuxt_plugin_validation_16b6b817(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_5659d192 === 'function') {
    await nuxt_plugin_axios_5659d192(app.context, inject)
  }

  if (typeof nuxt_plugin_componentsglobal_65822712 === 'function') {
    await nuxt_plugin_componentsglobal_65822712(app.context, inject)
  }

  if (typeof nuxt_plugin_userInterface_347e81b0 === 'function') {
    await nuxt_plugin_userInterface_347e81b0(app.context, inject)
  }

  if (typeof nuxt_plugin_toast_7d528cd2 === 'function') {
    await nuxt_plugin_toast_7d528cd2(app.context, inject)
  }

  if (typeof nuxt_plugin_auth_f008e22c === 'function') {
    await nuxt_plugin_auth_f008e22c(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
