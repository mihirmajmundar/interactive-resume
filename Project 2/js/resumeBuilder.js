var bio = {
	"name" : "Mihir Majmundar",
	"role" : "Web Developer",
	"contacts" : 
			{
				"mobile": "732.804.3960",
				"email" : "mihir.majmundar@gmail.com",
				"github": "mihirmajmundar",
				"twitter": "mihirmajmundar",
				"blog" : "",
				"location": "11 Mission Dr, Monroe, NJ 08831"
			},
	"welcomeMessage" : "I am awesome. Want to know WHY!!! Here is the summary.",
	"skills" : ["Programming", "iOS Development", "CSS", "AJAX", "Database", "JavaScript", "Data Analysis", "Forecasting"],
	"biopic": "images/Mihir_Majmundar.JPG",
	"display": function(){
					$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
					$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
					$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
					$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
					$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
					$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
					$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
//					$("#header").append(HTMLblog.replace("%data%", bio.contacts.blog));
					$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
					$("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));
					if (bio.skills.length>0) {
						$("#header").append(HTMLskillsStart);
						for (i=0; i<bio.skills.length;i++){
							$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
						}
					}
					$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
					$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
					$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
					$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
					$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

				}
	}; 

var projects = {
	"projects" : [
				  {
				  "title" : "Capital Manager / Budget Analyst",
				  "dates" : "2008-Present",
				   "discription" : "Prepared Capital budget using network trend and forecast. Reviewed budget with finance team in deep dive calls and obtain capital funding for Remote Test and Telemetry (RTT) and Customer Access Service (CAS). Prepared and published a monthly report on capital spending and forecast. Saved over $5.3M capital in 2012 using techniques like harvesting unused plug-ins, redesigning engineering rules, changing process and guideline documents. Re-designed the CAS project trigger process. New process saves over $400,000 every year in Interest During Construction (IDC). Developed and implemented the Third Party Audit (TPA) process. Scrutinized audit assignments and invoices to ensure allocated budget dollars are not exceeded. Shared periodic updates with the quality area managers. Supported three Directors in the Southeast region and managed $69.3M of the total IECS budget of $1.3B. Effectively supported 25 Implementation Engineers and 1145 active CFAS projects.",
				   "images" : ["images/pro1img1.jpg","images/pro1img2.jpg","images/pro1img1.jpg"]
				  },
				  {
				  "title" : "Project Manager",
				  "dates" : "2008-Present",
				   "discription" : "Tracked and monitored the progress of vendor training to reduce errors that affect customer service. More than 10,000 vendors employees and sub contractors took online training courses. Recognized by senior leadership for the effort. Expressed business needs/requirements to developers from different users groups. Tracked and monitored the development of the IT system to meet the business objective. Took appropriate action, including escalation to meet the goal. Communicated different development issues, business process changes and solutions. Coordinated and managed the transaction of developed system to production environment. Created communication platform to help users communicate openly on different GeoLink issues. Partnered with On-Net web program team for automated updates and status from MediaMan. Built the team of AFO editors and Atlantic editor to work on backlog. Entered more than 400 projects in GeoLink. More than 500 rings and splices information for NY, NJ and DV markets have been verified and entered in GeoLink. Developed and documented the end-to-end processes for broadband wireless organization and DOJ project. Implemented the process and work flow on web and maintained the changes in the process. Established and maintained a clear plan of record for the year. Worked with key stakeholders and implementation engineer to ensure projects are completed and invoices are paid in the current year. Communicated frequently with key stakeholders. Delivered all EHBs/iPLANs/Funding Authorizations on time.",
				   "images" : ["images/pro1img1.jpg","images/pro1img2.jpg","images/pro1img1.jpg"]
				  },
				  {
				  "title" : "Data Analyst",
				  "dates" : "2008-Present",
				   "discription" : "Assisted Mobility & Wireline Installation vendors with achieving overall quality performance targets by enabling successful implementation of Vendor Service Process Assurance (VeSPA) audits using Six Sigma principle. Analyzed vendor defect data, reviewed process and identified process gaps and area of improvements. Prepared the implementation plan with vendor and tracked progress. Created various reports to measure cycle time, standard deviation, percentage on-time and other measurements to identify bottlenecks and roadblocks. Analyzed reports using management by exception method, identified spikes and dips for further analysis, and made recommendations to the process team for optimization. Analyzed rent data using different statistical tools, created a 3D analytical view of rent payments, total EDS1 counts and type I EDS1 counts per building. This allowed the team to look at data intelligently and make informed decisions for rent reduction initiative. Conceptualized the need and transferred in the real results which lead to conclusion. Analyzed the capacity data and network trends to determine the requirement for additional shelves and if required, trigger the job to install the shelf.",
				   "images" : ["images/pro1img1.jpg","images/pro1img2.jpg","images/pro1img1.jpg"]
				  },
				  {
				  "title" : "Web Developer",
				  "dates" : "2008-Present",
				   "discription" : "Designed and created greater than six web sites and two SharePoint sites for different organizations using ASP, ColdFusion, ASP .NET, C#,HTML, DHTML, JavaScript, Visual Script, MapEdit, Perl and CGI. Designed centralized database in SQL 2000 and MS Access. Main features of web sites included: document management, document repository, workflow management, automation, custom reports, team contacts, technical tools, web portal and communication tools including event scheduler, forum, announcements, discussion board and action item status tracker. Continuously assessed the feature/functionality of MediaMan as a division tool to support achievement of business goals through MR System and request from users. Managed critical resource of the division for system and data integrity, critical business analysis, enabled user to share ideas and experience by creating a common platform. Managed user permissions for servers. Scheduled training and walk-through sessions for end users. Provided end user support to more than 1000 users. Continued to provide skillful and rapid support to requests – several ad-hoc and immediate - for specialized reports and/or information analysis from executives, network planners, sales teams, and division colleagues. Continuous improvement and refinement of these websites based on own observation and user feedback. Maintained web base systems and databases. Created canned and ad-hoc Crystal reports on Crystal Enterprise and Business Object like Work Volume, DMOQ reports, Status Tracker, Cycle Time, OP46 violations, Capital and Expense reports and various matrices.",
				   "images" : ["images/pro1img1.jpg","images/pro1img2.jpg","images/pro1img1.jpg"]
				  }
				  ],
	"display" : function(){
					for (project in projects.projects){
						$("#projects").append(HTMLprojectStart);
						var formattedprojecttitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
						var formattedyear = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
						var formatteddescription = HTMLprojectDescription.replace("%data%", projects.projects[project].discription);
						$(".project-entry:last").append(formattedprojecttitle);
						$(".project-entry:last").append(formattedyear);
						$(".project-entry:last").append(formatteddescription);
						for (image in projects.projects[project].images){
							var imageurl = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
							$(".project-entry:last").append(imageurl);
						}
					}
				}
	};

var education = {
	"schools":[
			  {"name" : "Monmouth University",
			  "location":"West Long Branch, NJ",
			  "major":"Business Admin",
			  "degree": "MBA",
			  "year": "2001-2004"
			  },
			  {"name" : "Wayne State University",
			  "location":"Detroit, MI",
			  "major":"Computer Engineering",
			  "degree": "MS",
			  "year": "1997-1998"
			  },
			  {"name" : "Sardar Patel University",
			  "location":"V.V. Nagar, India",
			  "major":"Electronics Engineering",
			  "degree": "BE",
			  "year": "1992-1996"
			  },
			  {"name" : "AT&T/JURAN",
			  "location":"NJ",
			  "major":"Six Sigma",
			  "degree": "Green Belt",
			  "year": "2005"
			  }
			  ],
	"onlineCourses" : [
					   {"title" : "Intro to Data Science",
						"school" : "Udacity",
						"date" : 2014,
						"url" : "https://www.udacity.com/course/ud359-nd"
					   },
					   {"title" : "Data Wrangling with MongoDB",
						"school" : "Udacity",
						"date" : 2015,
						"url" : "https://www.udacity.com/course/ud032-nd"
					   },
					   {"title" : "JavaScript Basics",
						"school" : "Udacity",
						"date" : 2015,
						"url" : "https://www.udacity.com/course/ud804-nd"
					   },
					   {"title" : "Intro to HTML and CSS",
						"school" : "Udacity",
						"date" : 2015,
						"url" : "https://www.udacity.com/course/ud304-nd"
					   }
						  ],
	"display" : function(){
					for (school in education.schools){
						$("#education").append(HTMLschoolStart);
						var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
						var formattedyear = HTMLschoolDates.replace("%data%", education.schools[school].year);
						var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
						var formattedlocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
						var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
						$(".education-entry:last").append(formattedschoolname);
						$(".education-entry:last").append(formatteddegree);
						$(".education-entry:last").append(formattedyear);
						$(".education-entry:last").append(formattedlocation);
						$(".education-entry:last").append(formattedmajor);
					}
					$(".education-entry:last").append(HTMLonlineClasses);
					for (onlineCourse in education.onlineCourses){
						var formattedtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
						var formattedschoolname = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
						var formatedcource = formattedtitle + formattedschoolname
						var formattedyear = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].date);
						var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
						$(".education-entry:last").append(formatedcource);
						$(".education-entry:last").append(formattedyear);
						$(".education-entry:last").append(formattedurl);
					}
				}
	};

var work = {
	"experience":[
				  {"employer": "AT&T",
				  "title": "Sr Project Manager",
				  "dates": "3/1999 - Present",
				  "location": "Piscataway, NJ",
				  "description": "Capital Manager / Budget Analyst"
				  },
				  {"employer": "Wayne State University",
				  "title": "Network Administrator",
				  "dates": "3/1997 - 1998",
				  "location": "Detroit, MI",
				  "description": "Manage network, access for the department of more than 100 employees. Set up lab and configure computers."
				  }
				  ],
	"display" : function(){
					for (job in work.experience){
						$("#workExperience").append(HTMLworkStart);
						var formattedtitle = HTMLworkTitle.replace("%data%", work.experience[job].title);
						var formattedemployer = HTMLworkEmployer.replace("%data%", work.experience[job].employer);
						var formattedemptitle = formattedemployer + formattedtitle;
						var formatteddates = HTMLworkDates.replace("%data%", work.experience[job].dates);
						var formattedlocation = HTMLworkLocation.replace("%data%", work.experience[job].location);
						var formatteddescription = HTMLworkDescription.replace("%data%", work.experience[job].description);
						$(".work-entry:last").append(formattedemptitle);
						$(".work-entry:last").append(formatteddates);
						$(".work-entry:last").append(formattedlocation);
						$(".work-entry:last").append(formatteddescription);
					}
				}
	};


bio.display();
work.display();
education.display();
projects.display();
$("#mapDiv").append(googleMap);
