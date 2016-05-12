var name = "reynaldo cruz";


var skills = ["c#","python","programming","machine learning"];

var bio = {
	"name": "reynaldo",
	"skills": skills,
	"role" :"Software Engineer"
};


var education = {
	"education":[{"Havana University":"Computer Science"},{"Lenin":"High School"}]
};

var projects = {
	"projects":[{"Title":"Tiger Grammar","language":"C#"}]
};

var work = {
	"jobs":[{"Title":"assistent","Employer":"University"}]

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



