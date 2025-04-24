(function ($) {
    $.widget("lg.wonderfullMenu", $.ui.menu, {
        options: {
            sticked: false,
            marginTopFixed: 0,
            onePageJs: false,
            idContainer: "",
            mobile: false,
            responsive: false,
            active: false,
            parts: [],
            itemHoverClass: ""
        },
        _create: function () {
            this._super();
            var that = this;
            this.marginTopOrginal = parseInt(this.element.css('margin-top'));
            this.vartop = parseInt(this.element.offset().top);
            this.varScroll = 0;
            this.mobileShowed = false;
            this.menuSize = 0;
            this.itemHover = "";
            this.contentTop = [];

            /* INIT */

            if (this.options.marginTopFixed === 'auto') {
                this.marginTopFixed = parseInt(this.element.css('margin-top'));
            } else if (!isNaN(parseInt(this.options.marginTopFixed))) {
                this.marginTopFixed = parseInt(this.options.marginTopFixed);
            }

            if (this.options.sticked) {
                this.element.parent().css("min-height", parseInt(this.element.height()));
            }

            if (this.options.active) {
                this._calcTopoffset();
            }

            if (this.options.sticked || this.options.active) {
                if (this.options.onePageJs != false) {
                    this.varScroll = parseInt($(document).scrollTop());
                }
                this._checkScroll(this.varScroll);
            }

            if (this.options.mobile && (this.options.responsive || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
                this._checkWidth();
            }

            /* TRIGGER */

            if (this.options.sticked) {
                if (this.options.onePageJs) {
                    $('#' + this.options.idContainer).eye({
                        'top': function (oldVal, newVal) {
                            that.varScroll = Math.abs(parseInt(newVal));
                            that._checkScroll(that.varScroll);
                        }
                    }, 100);
                } else {
                    $(document).on('scroll', function () {
                        that.varScroll = parseInt($(document).scrollTop());
                        that._checkScroll(that.varScroll);
                    });
                }

            }

            if (this.options.active && this.options.mobile && this.options.responsive) {
                $(window).resize(function () {
                    that._checkWidth();
                    that._calcTopoffset();
                });
            } else if (this.options.active) {
                $(window).resize(function () {
                    that._calcTopoffset();
                });
            } else if (this.options.mobile && this.options.responsive) {
                $(window).resize(function () {
                    that._checkWidth();
                });
            }

            if (this.options.mobile) {
                $(document).on('click', '.navButtonMenu', function () {
                    that._toggleMobileMenu();
                });

                $(document).on('click', 'body', function () {
                    if (that.mobileShowed) {
                        that._hideMobileMenu();
                    }                    
                });
            }

        },
        _setOption: function (key, value) {
            this.options[ key ] = value;
            this._update();
        },
        _calcTopoffset: function () {
            var that = this;
            var i = 0;
            jQuery.each(this.options.parts, function () {
                that.menuSize++;
                that.contentTop[i] = $('#' + that.options.parts[i] + '').offset().top;
                i++;
            });
        },
        _stickTheMenu: function () {
            this.sticked = true;
            this.element.addClass("wonderfullSticked");
            this.element.css("top", this.marginTopFixed);
        },
        _unstickTheMenu: function () {
            this.sticked = false;
            this.element.removeClass("wonderfullSticked");
            this.element.css("top", this.marginTopOrginal);
        },
        _mobileMenu: function () {
            this.mobile = true;
            this.element.addClass("wonderfullMobile");
            this.element.css("top", "0px");
            this.element.css("left", "-300px");
            this.mobileShowed = false;
        },
        _unMobileMenu: function () {
            this.mobile = false;
            this.element.removeClass("wonderfullMobile");
            this.element.css("top", this.marginTopOrginal);
            this.element.css("left", 0);
        },
        _showMobileMenu: function () {
            var that = this;
            this.element.animate({
                left: 0
            }, 700, function () {
                that.mobileShowed = true;
            });
        },
        _hideMobileMenu: function () {
            var that = this;
            this.element.animate({
                left: -300
            }, 700, function () {
                that.mobileShowed = false;
            });
        },
        _checkScroll: function (scrolled) {

            if (this.options.sticked) {
                if (this.vartop < scrolled + this.marginTopFixed && !this.sticked) {
                    this._stickTheMenu();
                } else if (scrolled + this.marginTopFixed < this.vartop && (this.sticked || this.mobile)) {
                    this._unstickTheMenu();
                }
            }

            if (this.options.active) {
                if (scrolled < this.contentTop[1]) {
                    if (this.options.parts[0] != this.itemHover) {
                        $('.' + this.options.itemHoverClass).removeClass(this.options.itemHoverClass);
                        $('#' + this.options.idContainer + ' .navItem:eq(0)').addClass(this.options.itemHoverClass);
                        this.itemHover = this.options.parts[0];
                    }
                } else if (scrolled == this.contentTop[this.menuSize - 1]) {
                    if (this.options.parts[this.menuSize - 1] != this.itemHover) {
                        $('.' + this.options.itemHoverClass).removeClass(this.options.itemHoverClass);
                        var temp = this.menuSize - 1;
                        $('#' + this.options.idContainer + ' .navItem:eq(' + temp + ')').addClass(this.options.itemHoverClass);
                        this.itemHover = this.options.parts[this.menuSize - 1];
                    }
                } else {
                    for (var i = 1; i < this.menuSize; i++) {
                        if (scrolled == this.contentTop[i]) {
                            if (this.options.parts[i] != this.itemHover) {
                                $('.' + this.options.itemHoverClass).removeClass(this.options.itemHoverClass);
                                $('#' + this.options.idContainer + ' .navItem:eq(' + i + ')').addClass(this.options.itemHoverClass);
                                this.itemHover = this.options.parts[i];
                            }
                            break;
                        }

                    }

                }
            }

        },
        _checkWidth: function () {
            clientWidth = document.documentElement.clientWidth;
            if ((clientWidth < 767) && !this.mobile) {
                this._mobileMenu();
            } else if ((clientWidth > 767) && this.mobile) {
                this._unMobileMenu();
            }
        },
        _toggleMobileMenu: function () {
            if (this.mobileShowed == false) {
                this._showMobileMenu();
            } else {
                this._hideMobileMenu();
            }
        },
        destroy: function () {
            // Call the base destroy function.
            $.Widget.prototype.destroy.call(this);
        }

    });
})(jQuery);