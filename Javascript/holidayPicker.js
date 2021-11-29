nextHoliday = new Date();
var i=0;

do {
	nextHolidayStr=nextHoliday.toLocaleDateString('en-us',{day:"numeric", month:"numeric", year: "numeric"});
	console.log(nextHolidayStr);

	if(nextHolidayStr=="12/24/2021"){
		console.log("Christmas");
		i=1;
	}else{
		console.log("not Christmas");
		nextHoliday.setDate(nextHoliday.getDate()+86400000)
		i=0;
	}
}
while(i==0);
