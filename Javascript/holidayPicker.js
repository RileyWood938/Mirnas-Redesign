today = new Date();
nextClosure = new Date ()
christmas = new Date("12-24-21");
ExtraDate = new Date("12-20-21");
newYearsDay = new Date("12-31-21");
MLKDay = new Date("01-17-22");

holidays = [christmas, ExtraDate, newYearsDay, MLKDay];

intermediate = [];

var i=0;

for(i=0; i<holidays.length; i++){

	if(today.getTime()-holidays[i].getTime()<0){
		intermediate[i] = -1*(today.getTime()-holidays[i])
	 	console.log(holidays[i] + " " + intermediate[i])
	}

}

min = Math.min(...intermediate);
console.log(intermediate.indexOf(min));
console.log(min)
nextClosure.setDate(holidays[min]);
console.log("next closure is: "+ nextClosure.toString())