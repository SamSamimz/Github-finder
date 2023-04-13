$(document).ready(function() {
//__Get the username from input field

	$('#search').keyup(function (e) { 
		var username = e.target.value;
  // Request 
  $.ajax({
    url: "https://api.github.com/users/" + username,
    dataType: "json",
    success: function(data) {
      //__if the requst success
      $('#profile').html(`<div class="row bg-white py-3 px-2 rounded">
          <h4 class="text-dark  border-bottom border-dark">${data.name}</h4>
          <div class="col-4">
            <img
              src="${data.avatar_url}"
              width="100%" class="pb-3" alt="">
            <a href="${data.html_url}" class="btn btn-danger">Github</a>
          </div>
          <div class="col-8">
            <span class="badge bg-success">Public : ${data.public_repos}</span>
            <span class="badge bg-danger">Followers : ${data.followers}</span>
            <span class="badge bg-warning text-dark">Following : ${data.following}</span>
          </div>
        </div>
`);
    },
    error: function(error) {
    //___Error
	console.log(error);
	// $('#profile').html(`<div class='alert alert-danger'>${error}</div>`);
    }
  });  		
	});

});




