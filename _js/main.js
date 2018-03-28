$(document).ready(function () {
    $('.plan-tab-table-id a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    });
    $("body").on("click", ".btn-sidebar-mobile", function () {
        if ($(".sidebar-main").hasClass("active")) {
            $(".sidebar-main").removeClass("active").slideUp();
        } else {
            $(".sidebar-main").addClass("active").slideDown();
        }
    });
    if ($(".datepicker").length > 0) {
        $('.datepicker').daterangepicker({
            "locale": {
                "format": "DD/MM/YYYY"
            },
            "opens": "left"
        });
    }
    if ($(".birthday").length > 0) {
        $('.birthday').daterangepicker({
            "singleDatePicker": true,
            "showDropdowns": true,
            "locale": {
                "format": "DD/MM/YYYY"
            },
        }, function (start, end, label) {
        });
    }
    $("body").on("click", ".btn-change-plan", function () {
        $(this).parents(".plan-choose").fadeOut(700).addClass("hidden");
        $(this).parents(".panel-body").find(".plan-option").fadeIn(700).removeClass("hidden");
    });
    $("body").on("click", ".box-plan-charge-create", function () {
        $(this).parents(".plan-option").fadeOut(700).addClass("hidden");
        $(this).parents(".panel-body").find(".plan-choose").fadeIn(700).removeClass("hidden");
        $currentCollapse = parseInt($(this).parents(".collapse").attr("data-rel"));
        if ($currentCollapse == 6) {
            $(".btn-register-plan").removeClass("disabled").removeAttr("disabled");
        } else {
            setTimeout(function () {
                $(".collapse-" + ($currentCollapse + 1)).collapse('show');
                $('html,body').animate({
                        scrollTop: $(".collapse-" + ($currentCollapse + 1)).parents(".panel").offset().top
                    },
                    'slow');
            }, 1000);

        }
    });
    $("body").on("click", ".btn-loadmore-plans", function () {
        var cla = $(this);
        $.ajax({
            type: "GET",
            url: 'loadmore-plans',
            success: function (response) {
                cla.parents(".plan-option").find(".plans").append(response);
                if (response.length == 0) {
                    cla.remove();
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
            }
        });
    });
    if ($(".collapse-with-icon").length > 0) {
        $(".collapse-with-icon").on('show.bs.collapse', function () {
            $(this).parents(".panel").find(".panel-heading h4 .icon").removeClass("icon-arrow-down").addClass("icon-arrow-up");
        });
        $(".collapse-with-icon").on('hidden.bs.collapse', function () {
            $(this).parents(".panel").find(".panel-heading h4 .icon").removeClass("icon-arrow-up").addClass("icon-arrow-down");
        });
    }
    if ($(".map").length > 0) {
        var height = $(document).height();
        $(".map").css("height", height + "px");
    }
    if ($(".map-info").length > 0) {
        slimScroll();
        $('.map-info').slimScroll().bind('slimscroll', function (e, pos) {
            if (pos == 'bottom') {
                $.ajax({
                    type: "GET",
                    url: 'loadmore-store',
                    success: function (response) {
                        $(".map-info").append(response);
                        slimScroll();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                    }
                });
            }

        });
    }
    var windowWidth = $(window).width();
    if (windowWidth < 720) {
        setTimeout(function () {
            showInfoStore($(".show-search-mobile"));
        }, 2000);

        $("body").on("click", ".show-search-mobile", function () {
            showInfoStore($(this));

        });
        $("body").on("click", ".overlay-map", function () {
            hideInfoStore($(this));
        })
    }


});
function slimScroll() {
    $('.map-info').slimScroll({
        height: 'auto',
    });
}
function showInfoStore($this) {
    $this.find(".overlay-map").fadeIn();
    $this.animate({bottom: "0%"});
    $this.find(".map-main").animate({bottom: "0%"});
    $this.removeClass("show-search-mobile");
    slimScroll();
}
function hideInfoStore($this) {
    $this.fadeOut();
    $this.parents(".ds-map").animate({bottom: "-75%"});
    $this.parents(".ds-map").addClass("show-search-mobile");
    $this.parents(".ds-map").find(".map-main").animate({bottom: "9%"});
}