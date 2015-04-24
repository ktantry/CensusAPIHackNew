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

var census_array = censusAPI(70,'c');
console.log(censusAPI(70,'c'));
console.log(census_array[1][2]);