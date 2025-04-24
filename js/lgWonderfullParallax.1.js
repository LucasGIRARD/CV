(function ($) {
    $.widget("lg.wonderfullParallax", {
        options: {
            onePageJs: false,
            idContainer: "",
            bgParallax: false
        },
        _create: function () {
            /* STANDARD VARS */
            var that = this;
            
            var position, dT, wH;
            
            this.startPosition = this.element.position().top;
            this.offsetTop = this.element.offset().top;
            this.velocity = this.element.attr('data-velocity');
            this.bgStart = parseInt(this.element.attr('data-fit'), 10);
            /* CONTEXTUAL VARS */

            if (this.offsetTop >= (dT + wH)) {
                this.element.addClass('parallaxInitNotVisible');
            }

            /* TRIGGER */

            if (this.options.onePageJs === true && this.options.bgParallax === true && Boolean(this.bgStart) === true) {

                $('#' + this.options.idContainer).eye({
                    'top': function (oldVal, newVal) {
                        var tmpScroll = Math.abs(parseInt(newVal));
                        that._calculate_fit(tmpScroll);
                        that._move_advanced();
                    }
                }, 10);

            } else if (this.options.onePageJs === true && this.options.bgParallax === true && Boolean(this.bgStart) === false) {

                $('#' + this.options.idContainer).eye({
                    'top': function (oldVal, newVal) {
                        var tmpScroll = Math.abs(parseInt(newVal));
                        that._calculate(tmpScroll);
                        that._move_advanced();
                    }
                }, 10);

            } else if (this.options.onePageJs === true && this.options.bgParallax === false && Boolean(this.bgStart) === true) {

                $('#' + this.options.idContainer).eye({
                    'top': function (oldVal, newVal) {
                        var tmpScroll = Math.abs(parseInt(newVal));
                        that._calculate_fit(tmpScroll);
                        that._move_simple();
                    }
                }, 10);

            } else if (this.options.onePageJs === true && this.options.bgParallax === false && Boolean(this.bgStart) === false) {

                $('#' + this.options.idContainer).eye({
                    'top': function (oldVal, newVal) {
                        var tmpScroll = Math.abs(parseInt(newVal));
                        that._calculate(tmpScroll);
                        that._move_simple();
                    }
                }, 10);

            } else if (this.options.onePageJs === false && this.options.bgParallax === true && Boolean(this.bgStart) === true) {
                $(document).scroll(function () {
                    var tmpScroll = $(window).scrollTop();
                    that._calculate_fit(tmpScroll);
                    that._move_advanced();
                });
            } else if (this.options.onePageJs === false && this.options.bgParallax === true && Boolean(this.bgStart) === false) {
                $(document).scroll(function () {
                    var tmpScroll = $(window).scrollTop();
                    that._calculate(tmpScroll);
                    that._move_advanced();
                });
            } else if (this.options.onePageJs === false && this.options.bgParallax === false && Boolean(this.bgStart) === true) {
                $(document).scroll(function () {
                    var tmpScroll = $(window).scrollTop();
                    that._calculate_fit(tmpScroll);
                    that._move_simple();
                });
            } else if (this.options.onePageJs === false && this.options.bgParallax === false && Boolean(this.bgStart) === false) {
                $(document).scroll(function () {
                    var tmpScroll = $(window).scrollTop();
                    that._calculate(tmpScroll);                    
                    that._move_simple();
                });
            }
        },
        _calculate: function (_scrollTop) {
            if (this.element.hasClass('parallaxInitNotVisible')) {
                wH = $(window).height();
                position = this.startPosition + (_scrollTop + (wH - this.offsetTop)) * this.velocity;
            } else {
                position = this.startPosition + _scrollTop * this.velocity;
            }
        },
        _calculate_fit: function (_scrollTop) {
            this._calculate(_scrollTop);
            position = position + this.bgStart;
        },
        _move_advanced: function () {
            this.element.css("backgroundPosition", '50% ' + position + 'px');
        },
        _move_simple: function () {
            this.element.css("top", position);
        },
        _setOption: function (key, value) {
            this.options[ key ] = value;
        },
        destroy: function () {
            // Call the base destroy function.
            $.Widget.prototype.destroy.call(this);
        }

    });
})(jQuery);