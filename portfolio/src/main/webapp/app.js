/**
 * @fileoverview Beans app.
 */

/**
 * @typedef {!Object} Params
 * @property {string} name
 */

/** Main app. */
export class App {
  /**
   * @param {!Params=} params Arguments for rendering BeanApp.
   */
  constructor(params = {
    name: 'World',
  }) {
    /**
     * @private @const {{
     *  name: string,
     * }}
     */
    this.params_ = params;
  }

  /**
   * @return {string} HTML template string for BeanApp.
   */
  render = () => {
    return `
      <div>
        <h1>Hello, ${this.params_}!</h1>
      </div>
    `;
  }
}
