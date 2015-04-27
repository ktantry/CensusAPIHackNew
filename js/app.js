var censusAPI = function(sector, age){
	var request = { 
		get: 'sic1,emp,fage4',
		for: 'us:*',
		sic1: sector,
		fage4: age,
		time: 2012,
	};

    var result = $.getJSON(
       "https://api.census.gov/data/bds/firms?get=sic1,emp,fage4&for=us:*&sic1=" + sector + "&fage4=" + age + "&time=2012"
    ).done(function(res) {
		var index_array = res[1][1];
		console.log(index_array);
		$(".results-div").html("<p class='results-paragraph'>There are " +  index_array +  " number of employees within those criteria</p>");
    });
};

$(document).ready(function(){
	$('button').mousedown(function(){

		//Create Sector Hash
		var sector_hash = new Object();
	  		sector_hash['Economy Wide'] = 0;
	  		sector_hash['Agriculture, Forestry, and Fishing'] = 7;
	  		sector_hash['Mining'] = 10;
	  		sector_hash['Construction'] = 15;
	  		sector_hash['Manufacturing'] = 20;
	  		sector_hash['Transportation, Communication, and Public Utilities'] = 40;
	  		sector_hash['Wholesale Trade'] = 50;
	  		sector_hash['Retail Trade'] = 52;
	  		sector_hash['Finance, Insurance, and Real Estate'] = 60;
	  		sector_hash['Services'] = 70;

	  	var firm_age_hash = new Object();
	  		firm_age_hash['0'] = 'a';
	  		firm_age_hash['1'] = 'b';
	  		firm_age_hash['3'] = 'c';
	  		firm_age_hash['4'] = 'e';
	  		firm_age_hash['5'] = 'f';
	  		firm_age_hash['6-10'] = 'g';
	  		firm_age_hash['11-15'] = 'h';
	  		firm_age_hash['16-20'] = 'i';
	  		firm_age_hash['21-25'] = 'j';
	  		firm_age_hash['26+'] = 'k';
	  		firm_age_hash['Left Censored'] = 'l';
	  		firm_age_hash['Economy Wide – All Ages (selected by default)'] = 'm';

	  	var sector_selected;
	  	var firm_age_selected;

				$(".sector-dropdown").each(function() {
			    	sector_selected = (this.options[this.selectedIndex].value);					    	    		
	    		});
				

		    		/*alert(sector_selected);*/
		    	$(".firm-age-dropdown").each(function() {
			    	firm_age_selected = (this.options[this.selectedIndex].value);
			    	
			});
		    	var sector_input = sector_hash[sector_selected]; 
		    	var firm_age_input = firm_age_hash[firm_age_selected]; 
		    	censusAPI(sector_input, firm_age_input);	    	
		});
	});


