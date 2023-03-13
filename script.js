$(function () {
    $(".menu").on("click", function () {
        if ($(".menu-tags").css("display") == "none") {
            $(".menu-tags").css("display", "block");
        } else {
            $(".menu-tags").hide();
        }
    });

    $(".ask").on("click", function (event) {
        event.preventDefault();
        $.ajax({
            url: 'quotes.json?time="+newDate().getTime"',
            type: "get",
            contentType: "application/json",
            dataType: "json",
            cache: false,
            headers: {
                "Cache-control": "no-cache, no-store, must-revalidate",
                Pragma: "no-cache",
                Expires: "0",
            },
            success: function (response) {
                console.log(response);
            },
            error: function (error) {
                console.log("error", error);
            },
        });
    });
});
