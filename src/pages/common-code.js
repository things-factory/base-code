import { html, LitElement } from 'lit-element'
import { connect } from 'pwa-helpers/connect-mixin.js'
import { store, PageView } from '@things-factory/shell'

import logo from '../../assets/images/hatiolab-logo.png'

class CommonCode extends connect(store)(PageView) {
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

window.customElements.define('common-code', CommonCode)
