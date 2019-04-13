//
// Demo.js
// only for preview purposes - remove it when starting your project
//

$(document).ready(function() {
    $('[data-toggle="sweet-alert"]').on("click", function() {
        var type = $(this).data("sweet-alert");

        switch (type) {
            case "basic":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-primary",
                    text: "A few words about this sweet alert ...",
                    title: "Here's a message!"
                });
                break;

            case "info":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-info",
                    text: "A few words about this sweet alert ...",
                    title: "Info",
                    type: "info"
                });
                break;

            case "info":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-info",
                    text: "A few words about this sweet alert ...",
                    title: "Info",
                    type: "info"
                });
                break;

            case "success":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-success",
                    text: "A few words about this sweet alert ...",
                    title: "Success",
                    type: "success"
                });
                break;

            case "warning":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-warning",
                    text: "A few words about this sweet alert ...",
                    title: "Warning",
                    type: "warning"
                });
                break;

            case "question":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-dark",
                    text: "A few words about this sweet alert ...",
                    title: "Are you sure?",
                    type: "question"
                });
                break;

            case "confirm":
                swal({
                    buttonsStyling: false,
                    cancelButtonClass: "btn btn-secondary",
                    confirmButtonClass: "btn btn-danger",
                    confirmButtonText: "Yes, delete it!",
                    showCancelButton: true,
                    text: "You won't be able to revert this!",
                    title: "Are you sure?",
                    type: "warning"
                }).then(result => {
                    if (result.value) {
                        // Show confirmation
                        swal({
                            buttonsStyling: false,
                            confirmButtonClass: "btn btn-primary",
                            text: "Your file has been deleted.",
                            title: "Deleted!",
                            type: "success"
                        });
                    }
                });
                break;

            case "image":
                swal({
                    buttonsStyling: false,
                    confirmButtonClass: "btn btn-primary",
                    confirmButtonText: "Super!",
                    imageUrl: "../../assets/img/prv/splash.png",
                    text: "Modal with a custom image ...",
                    title: "Sweet"
                });
                break;

            case "timer":
                swal({
                    showConfirmButton: false,
                    text: "I will close in 2 seconds.",
                    timer: 2000,
                    title: "Auto close alert!"
                });
                break;
        }
    });
});
