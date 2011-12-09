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
 * Ported from: http://twitter.github.com/bootstrap/javascript.html#dropdown
 *
 * Example usage: Ext.get('.dropdown').dropdown();
 */
Ext.override(Ext.Element, {
	dropdownD: 'a.menu, .dropdown-toggle',

	dropdownClearMenus: function() {
		Ext.getBody().query('> ' + this.dropdownD).forEach(function(child) {
			var el = Ext.get(child);
			el.parent('li').removeClass('open');
		});
	},

	dropdown: function(selector) {
		this.query('> ' + (selector || this.dropdownD)).forEach(function(child) {
			var el = Ext.get(child);
			el.on('click', function(e) {
				var li = this.parent('li'),
					isActive = li.hasClass('open');

				this.dropdownClearMenus();
				if (!isActive) {
					li.toggleClass('open');
				}

				e.stopPropagation();
			});
		});
	}
});

Ext.onReady(function() {
	Ext.getBody().parent().on('click', Ext.getBody().dropdownClearMenus);
	Ext.getBody().dropdown('[data-dropdown] a.menu, [data-dropdown] .dropdown-toggle');
});