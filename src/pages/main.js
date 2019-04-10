import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'

class BaseCodeMain extends connect(store)(LitElement) {
  static get properties() {
    return {
      baseCode: String
    }
  }
  render() {
    return html`
      <section>
        <h2>BaseCode</h2>
        <img src=${logo}></img>
      </section>
    `
  }

  stateChanged(state) {
    this.baseCode = state.baseCode.state_main
  }
}

window.customElements.define('base-code-main', BaseCodeMain)
