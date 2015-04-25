var censusAPI = function(sector, age){
	var request = { 
		get: 'sic1,emp,fage4',
		for: 'us:*',
		sic1: sector,
		fage4: age,
		time: 2012,
	};

    var result = $.getJSON(
       "http://api.census.gov/data/bds/firms?get=sic1,emp,fage4&for=us:*&sic1=" + sector + "&fage4=" + age + "&time=2012"
    ).done(function(res) {
      console.log(res);
    });

};

var showResults = function(sic1, fage4){
	var census_array = censusAPI(sic1,fage4);
	console.log(census_array);
	var sector = census_array.sic1;
	console.log(sector);
}

showResults();

