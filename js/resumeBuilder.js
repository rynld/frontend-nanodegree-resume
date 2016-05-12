var name = "reynaldo cruz";


var skills = ["c#","python","programming","machine learning"];

var bio = {
	"name": "reynaldo",
	"skills": skills,
	"role" :"Software Engineer",
	"contacts":{"location":"Hollywood,Fl"}
};


var education = {
	"schools":[{"Havana University":"Computer Science","location":"Miami,Fl"},{"Lenin":"High School","location":"Plantation,Fl"}]
};

var projects = {
	"projects":[{"Title":"Tiger Grammar","language":"C#"},{"Title":"Othello","language":"C#"}]
};

var work = {
	"jobs":[{"Title":"assistent","Employer":"University","location":"Havana,Cuba"}]

};

if(bio.skills.lenght != 0)
{
	$("#header").append(HTMLskillsStart);
	
	for(i in bio.skills)
	{
		$("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));		
			}	
}

function display_work(work)
{
	for(i in work.jobs)
	{
		$("#workExperience").append(HTMLworkStart);
		var final = HTMLworkEmployer.replace("%data%",work.jobs[i].Employer) + HTMLworkTitle.replace("%data%",work.jobs[i].Title);
		$(".work-entry:last").append(final);
	}
}

display_work(work);

// $(document).click(function(loc)
// {
// 	console.log(loc.pageX,loc.pageY);
// });

$("#main").append(internationalizeButton);

for(i in projects.projects)
{
	console.log(i);
	$("#projects").append(HTMLprojectStart);	
	$(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.projects[i].Title));
	$(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.projects[i].language));
}


$("#mapDiv").append(googleMap);




