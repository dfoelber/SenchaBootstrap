/**
 * Copyright (C) 2011 David Foelber
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 * of the Software, and to permit persons to whom the Software is furnished to do
 * so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * Ported from: http://twitter.github.com/bootstrap/javascript.html#buttons
 */
Ext.override(Ext.Element, {
    buttonDefaultLoadingText: 'loading...',
    buttonData: {},

    buttonSetState: function(el, state) {
        var d = 'disabled',
            data = el.buttonData;

        state = 'data-' + state + '-text';
        if (!data['data-reset-text']) {
            data['data-reset-text'] = el.dom.innerHTML;
        }

        el.dom.innerHTML = data[state] || el.getAttribute(state) || el.buttonDefaultLoadingText;

        if (state == 'data-loading-text') {
            el.addClass(d).set({d: d});
        } else {
            el.removeClass(d).set({d: null}, false);
        }
    },

    buttonToggle: function(el) {
        el.toggleClass('active');
    },

    button: function(options) {
        if (options == 'toggle') {
            this.buttonToggle(this);
        } else if (options) {
            this.buttonSetState(this, options);
        }
    }
});

Ext.onReady(function() {
    Ext.getBody().query('> .btn[data-toggle]').forEach(function(child) {
        var el = Ext.get(child);
        el.button('toggle');
    });
});