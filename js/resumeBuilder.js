/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Fouad Azem",
	"role": "java/j2ee Developer Expert",
	"contacts": {
		"mobile": "+972546148515",
		"email": "fouad.Azam@gmail.com",
		"github": "fouada",
		"location": "Taibe, Tayibe"
	},
	"welcomeMessage": "Welcome to my CV to who is intersted",
	"skills": ["Java", "j2ee", "javascript", "HTML", "CSS", "webservices", "XML",
		"SPRING", "MAVEN", "Bootstrap"],
	"bioPic": "images/me.jpg"

};


var education = {
	"schools": [
		{
			"name": "Netanya academic College",
			"city": "Netanya,ISR",
			"degree": "BSC",
			"major": ["CompScience", "mathematics"],
			"location": "netanya",
			"dates": 2008,
			"url":"http://www.netanya.ac.il/Pages/default.aspx"

		}

		],

	"onlineCourses": [
		{
			"title": "Responsive Web Design",
			"school": "Udacity",
			"dates": 2015,
			"url":"https://www.udacity.com/course/viewer#!/c-ud893-nd"

	},
		{
			"title": "Responsive web Images",
			"school": "Udacity",
			"dates": 2015,
			"url":"https://www.udacity.com/course/viewer#!/c-ud882-nd"

	},
		{
			"title": "javascript Course",
			"school": "Udacity",
			"dates": 2015,
			"url":"https://www.udacity.com/course/viewer#!/c-ud804-nd"
	},

		{
			"title": "Jquery Course",
			"school": "Udacity",
			"dates": 2015,
			"url":"https://www.udacity.com/course/viewer#!/c-ud245-nd"

	}
	]

};

var work = {
	"jobs": [
		{
			"employer": "Amdocs ISR",
			"title": "java/j2ee Developer Expert",
			"dates": "11 November 2014-Future",
			"description": "As an expert I wrote technical design and develope new OMS functionality and support Delivery team with new functionality and new development in the customization layer.I was also involved in the functional design – screens display, services functionality and signature and develope new I took part in integration between the Amdocs Ordering product and other products.Ordering server calling APIs of Billing and CRM.Self Service calling Ordering APIs.Ordering and CRM GUI to GUI.during development i used to deal with Performance degredations during the performance NFT tests and hands on with JProb,jprofiler and VM tools in order to resolve bottlenecks and performance consumptions issues.In addition to handling defects that were part of the ongoing development, I also solved defects that were found in customization and production. All those defects were handled in very short time to the satisfactory of the customers.I also traveled to the customers sites for support(Production support for biggest customers such as AT&T,USCC and Rogers) and disscussions of new development functionality which involve oms and CRM and billing as well as MCSS(self services system).as an Expert inside my team i used to review my teammates new code and direct my teammates colluege during development and ongoing defects handling i develop new functionality and new APIs on Ordering on the delivery for big customers functionality and hands on with EJB ,web services,weblogic,webshpere and jboss server as well as become a PBG(core) developer for develop new functionality and support multiple customers(Delivery teams).",
			"location": "HaPnina Street, Ra'anana 8"
},
		{
			"employer": "Amdocs ISR",
			"title": "java/j2ee Developer Senior SME",
			"dates": "25 july 2011 - 11 November 2014",
			"description": "As Senior SME I continued working on end-to-end tasks and also assisted developers with their code.i develop new functionality and new APIs on Ordering on the delivery for big customers functionality and hands on with EJB ,web services,weblogic,webshpere and jboss server as well as become a PBG(core) developer for develop new functionality and support multiple customers(Delivery teams).",
			"location": "HaPnina Street, Ra'anana 8"
},
		{
			"employer": "Amdocs ISR",
			"title": "java/j2ee Developer SME",
			"dates": "25 july 2010 - 25 july 2011",
			"description": "I started working on small tasks, assisting the development experts of the Amdocs Ordering product. During time, I was given the opportunity to work on whole tasks . Then I was given overall tasks – write the technical design by myself and writing the entire code.",
			"location": "HaPnina Street, Ra'anana 8"
},
		{
			"employer": "10 Levels",
			"title": "java/j2ee GUI Developer",
			"dates": "12 Nov 2008 - 25 Feb 2010",
			"description": "develop new GUI screen and forms and use swing(java) and SSH and TCP/IP Protocls and develop new Products for monitoring networks of customers for telecumenacations companies",
			"location": "22 Maskit St,Herzliya Pituach."
},
		{
			"employer": "Internet Zahav-012 smile",
			"title": "Network support expert",
			"dates": "10 Jan 2004 - 5 July 2006",
			"description": "support large and big companies with large network and wireless communications and Connectivity issues handling in the networks of multiples computers and devices and wireless issues",
			"location": "Ramat Gan"
}

	]
};


var projects = {
	"projects": [
		{
			"title": "Responsive Web Design Project",
			"dates": "2015",
			"description": "this Project developed using HTML5 and CSS and Jquery scripts and Menu bar scripts and include using responsive web fundemntal design with Responsive images which looks great on every device",
			"url": "https://github.com/fouada/FinalProject1",
			"images":["images/BOKEH_Small.jpg","images/SUNFLOWER_Small.jpg"]
}
	]
};

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header")
		.prepend(formattedRole);
	$("#header")
		.prepend(formattedName);
	for (var contact in bio.contacts) {
		var formattedContact = HTMLcontactGeneric.replace("%contact%",contact);
		var formattedContactWithValue = formattedContact.replace("%data%", bio.contacts[
			contact]);
		$("#topContacts")
			.append(formattedContactWithValue);
	}

	var formattedPicture = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header")
		.append(formattedPicture);
	var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header")
		.append(formattedWelcomeMessage);
	if (bio.skills.length > 0) {
		$("#header")
			.append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills")
				.append(formattedSkill);
		}
	}

};
work.display = function() {
	if (work.jobs.length > 0) {
		for (var job in work.jobs) {
			$("#workExperience")
				.append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last")
				.append(formattedEmployerTitle);
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			$(".work-entry:last")
				.append(formattedDates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[
				job].description);
			$(".work-entry:last")
				.append(formattedDescription);
		}
	}

};









projects.display = function() {
	for (var project in projects.projects) {
		$("#projects")
			.append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[
			project].title);
		$(".project-entry:last")
			.append(formattedTitle);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[
			project].dates);
		$(".project-entry:last")
			.append(formattedDates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects
			.projects[project].description);
		$(".project-entry:last")
			.append(formattedDescription);
			if(projects.projects[project].images.length>0)
			{
				for(var image in projects.projects[project].images)
				{
					var formattedImage=HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
					$(".project-entry:last").append(formattedImage);
				}
			}


	}

};


education.display = function() {
	if (education.schools.length > 0) {
		for (var school in education.schools) {
			$("#education")
				.append(HTMLschoolStart);
			var schoolName = HTMLschoolName.replace("%data%", education.schools[school]
				.name);
			var schoolDgree = HTMLschoolDegree.replace("%data%", education.schools[
				school].degree);
			$(".education-entry:last")
				.append(schoolName + schoolDgree);
			var schoolDates = HTMLschoolDates.replace("%data%", education.schools[
				school].dates);
			$(".education-entry:last")
				.append(schoolDates);
			var schoolLocation = HTMLschoolLocation.replace("%data%", education.schools[
				school].location);
			$(".education-entry:last")
				.append(schoolLocation);
			var htmlschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[
				school].major);
			$(".education-entry:last")
				.append(htmlschoolMajor);

		}

			$(".education-entry:last").append(HTMLonlineClasses);
				for(var onlineCourse in education.onlineCourses)
				{
					
					var onlineCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[onlineCourse].title);
					var onlineCourseSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[onlineCourse].school);
					var onlineCourseTitleSchool =onlineCourseTitle + onlineCourseSchool;
					$(".education-entry:last").append(onlineCourseTitleSchool);
					var onlineSchoolDates=HTMLonlineDates.replace("%data%",education.onlineCourses[onlineCourse].dates);
					$(".education-entry:last").append(onlineSchoolDates);
					var onlineSchoolUrl=HTMLonlineURL.replace("%data%",education.onlineCourses[onlineCourse].url);
					$(".education-entry:last").append(onlineSchoolUrl);
				}
	}

};
bio.display();
projects.display();
work.display();
education.display();
$('#mapDiv')
	.append(googleMap);
var projectEntry = $('#projects')
	.find(".project-entry");
var aChild = projectEntry.find("a");
aChild.attr("href", projects.projects[0].url);
aChild.attr("target", "_blank");
$('#footerContacts').prepend('<li id="social"><a target="_blank" href="http://digg.com/submit?phase=2&url=https%3A%2F%2Fgithub.com%2Fudacity%2Fresponsive-images&title=Udacity%20nano%20course%3A%20Responsive%20Images&bodytext=Responsive%20images%20for%20your%20sites%20and%20web%20apps&topic=tech_news" class="zocial-digg">Digg</a></li>');
$('#footerContacts').prepend('<li id="social"><a target="_blank" href="https://plus.google.com/share?url=https://github.com/udacity/responsive-images" class="zocial-googleplus">Google+</a></li>');
$('#footerContacts').prepend('<li id="social"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https://github.com/udacity/responsive-images" class="zocial-facebook">Facebook</a></li>');
$('#footerContacts').prepend('<li id="social"><a target="_blank" href="https://twitter.com/home?status=https://github.com/udacity/responsive-images" class="zocial-twitter">Twitter</a></li>');