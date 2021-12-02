nextClosure = " "; /*This will hold the eventual closure date, but i set it up outside the loop so that it can be used as a loop parameter*/
closureSpot = document.getElementById('closureSpot');/*this finds where ont he page the next closure wil be displayed*/
today = new Date();/*get today's date*/
months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];/*set up array for months of the year so that the conversion from date to string is elegant*/
days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];/*same as above for days*/
/* Holidays*/
custom1 = new Date("12-7-21");/*set up a custom holiday here. In a finished product there would be a way for more holidays to be added in the backend, but for now this will do*/
christmas = new Date("12-24-2021");/*list of upcoming holidays and their dates (there does not appear to be an existing javascript library of dates so i just input them myself)*/
newYear = new Date("12-31-21");
mlk = new Date("1-17-22");
washington = new Date("2-21-22");
custom2 = new Date("3-25-22");
memorial = new Date("5-30-22");
juneteenth  = new Date("6-20-22");

holidays = [custom1, christmas,newYear, mlk, washington, memorial, juneteenth];/*put all the holidays into an array so that they can be accessed in the loop*/

for (var i=0; (i > holidays.length) || (nextClosure == " "); i++) { /*create a loop that ends when the whole array is expended, or the first time that an element of holidays is later than the current date*/
	if (today.getTime()-holidays[i].getTime()<=0) {/*make sure that the date being checked uis after today*/
		nextClosure = holidays[i];/*if it is then set t4he next closure to that holiday, otherwise move on to the next holiday int he array*/

	}
};

closureBigDay = days[nextClosure.getDay()];/*convert the holiday into a nice string*/
closureMonth = months[nextClosure.getMonth()];
closureDay = nextClosure.getDate();
closureYear = nextClosure.getFullYear();
nextClosureDate = closureBigDay + ' ' + closureMonth + ' ' + closureDay + ', ' + closureYear ;/*add all the bits of the string together*/
closureSpot.innerHTML = 'Our next holiday closure will be: ' + nextClosureDate;/*put the final string into the page*/