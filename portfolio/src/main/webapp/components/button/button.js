/** @fileoverview Common styled button component. */

import { css } from '/css.js';

const styles = css
  .createStyleSheet(
    {
      // "button" is a rule name; a class gets generated.
      button: {
        width: 100,
        height: 100,
        color: 'red',
      },
    },
  )
  // .attach() adds the style tag to the document's head.
  .attach();

/**
 * @typedef {!Object} Params
 * @property {string} label
 */

export class Button {
  constructor(params = {}) {
    /** @private @const {!Params} */
    this.params_ = params;
  }

  /** @return {string} */
  render() {
    const { label } = this.params_;
    return `
      <button class="${styles.classes.button}">${label}</button>
    `;
  }
}