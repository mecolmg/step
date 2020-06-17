/**
 * @fileoverview Beans app.
 */

import { Button } from './components/button/button.js';

/**
 * @typedef {!Object} Params
 * @property {string} username
 */

/** Main app. */
export class App {
  /**
   * @param {!Params=} params Arguments for rendering BeanApp.
   */
  constructor(params = {
    username: 'World',
  }) {
    /** @private @const {!Params} */
    this.params_ = params;
  }

  /**
   * @return {string} HTML template string for the App.
   */
  render = () => {
    const { username } = this.params_;
    return `
      <div>
        <h1>Hello, ${username}!</h1>
        ${new Button({ label: 'Do something!' }).render()}
      </div>
    `;
  }
}

$(document).ready(() => {
  $('#app').html(new App({ username: 'Colm' }).render());
});