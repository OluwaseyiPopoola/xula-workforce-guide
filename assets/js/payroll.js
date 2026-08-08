const calendarTable = document.getElementById("calendar-table")

let lastPaidDate = null;

const monthMap = {
  jan: 0,
  feb: 1,
  mar: 2,
  apr: 3,
  may: 4,
  jun: 5,
  jul: 6,
  aug: 7,
  sep: 8,
  oct: 9,
  nov: 10,
  dec: 11
};


const now = new Date();
const currDay = now.getDate();
const currMonth = now.getMonth(); 
const currentYear = now.getFullYear();

const pattern = /^(?<month>[A-Za-z]{3})\s+(?<day>\d{1,2}),\s*(?<year>\d{4})$/;
    
for (let i = 1; i < calendarTable.rows.length; i++) {
    const payDate = calendarTable.rows[i].cells[2];
    const status = calendarTable.rows[i].cells[3].querySelector('span');

    const dateStr = payDate.textContent;

    const match = dateStr.match(pattern);
    if (match) {
        let month = match.groups.month.toLowerCase(); // "jan" (string)
        month = monthMap[month];
        const day = parseInt(match.groups.day, 10);      // 9 (number)
        // const year = parseInt(match.groups.year, 10);    // 2026 (number)
        
        // console.log(day)
        // console.log(month)
        // console.log(year)

        if (month < currMonth || (month === currMonth && day <= currDay) ) {
            status.textContent = "Paid";
            status.style.color = "green";
            status.style.backgroundColor = "rgba(0, 100, 0, 0.2)";
            payDate.style.color = "green";

            lastPaidDateRow = calendarTable.rows[i] 
        }
    } 
}


lastPaidDateRow.id = "last-paid-row"
