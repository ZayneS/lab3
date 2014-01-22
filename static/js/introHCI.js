'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
    $("#testjs").text("Please wait...");
    $(".jumbotron p").toggleClass("active");
	});

  $("a.thumbnail").click(projectClick);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

  $("#submitBtn").click(updateProject);
}


function projectClick(e) {
  console.log("Project clicked");
  e.preventDefault();
  // $(this).css('background-color','#7fff00');
  // In an event listener, $(this) is the leement that fired the event

    var projectTitle = $(this).find("p").text();
    // console.log(projectTitle);
    // var jumbotronHeader = $("#jumbotron h1");
    // console.log(jumbotronHeader.length)
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    // var containingProject = $(this).closest(".project");
    // containingProject.append("<div class='project-description'><p>Description of the project.</p></div>");

    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       // description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
       description.toggleClass("hide");
    }
}

function updateProject(e) {
  var project = $("#project").val();
  var width = $("#width").val();
  var desc = $("#description").val();

  console.log(project);
  $(project).animate({"width":width});
  var description = $(project +" .project-description");
  if (description.length == 0) { 
       $(project).append("<div class='project-description'><p>"+desc+"</p></div>"); 
    } else { 
       description.text(desc);
    }

}

