nextClosure = " ";

closureSpot = document.getElementById('closureSpot');
today = new Date();
months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
/* Holidays*/
custom1 = new Date("12-7-21");
christmas = new Date("12-24-2021");
newYear = new Date("12-31-21");
mlk = new Date("1-17-22");
washington = new Date("2-21-22");
custom2 = new Date("3-25-22");
memorial = new Date("5-30-22");
juneteenth  = new Date("6-20-22");

holidays = [custom1, christmas,newYear, mlk, washington, memorial, juneteenth];

for (var i=0; (i > holidays.length) || (nextClosure == " "); i++) {
	if (today.getTime()-holidays[i].getTime()<=0) {
		nextClosure = holidays[i];
		console.log(nextClosure);

	}
};

closureBigDay = days[nextClosure.getDay()];
closureMonth = months[nextClosure.getMonth()];
closureDay = nextClosure.getDate();
closureYear = nextClosure.getFullYear();
nextClosureDate = closureBigDay + ' ' + closureMonth + ' ' + closureDay + ', ' + closureYear ;
closureSpot.innerHTML = 'Our next holiday closure will be: ' + nextClosureDate;
console.log(nextClosureDate);