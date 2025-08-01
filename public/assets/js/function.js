$(document).on('click', '.parent-class', function (e) {
    e.preventDefault(); // Prevent default behavior if it's a link or button
    const parent = $(this).attr('data-parent-id'); // Example of getting an attribute
    const link = $(this).attr('href'); 
    console.log(parent);
    $.ajax({
        url: '/set-parent?parent=' + parent, // URL to the server
        type: 'GET',
        success: function (response) {

            window.location.href = link; // Redirect to the link
        },
        error: function (xhr, status, error) {
            
        }
    });
});
