const calendarTable = document.getElementById("calendar-table");

let lastPaidDate = null;

let tcpApprovalDeadlineRow = null;
let epafsDeadlineRow = null;

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
  dec: 11,
};

const now = new Date();
const currDay = now.getDate();
const currMonth = now.getMonth();
const currentYear = now.getFullYear();

const pattern = /^(?<month>[A-Za-z]{3})\s+(?<day>\d{1,2}),\s*(?<year>\d{4})$/;

for (let i = 1; i < calendarTable.rows.length; i++) {
  const payDate = calendarTable.rows[i].cells[2];
  const status = calendarTable.rows[i].cells[3].querySelector("span");

  const dateStr = payDate.textContent;

  const match = dateStr.match(pattern);
  if (match) {
    let month = match.groups.month.toLowerCase(); // "jan" (string)
    month = monthMap[month];
    const day = parseInt(match.groups.day, 10); // 9 (number)
    // const year = parseInt(match.groups.year, 10);    // 2026 (number)

    // console.log(day)
    // console.log(month)
    // console.log(year)

    if (month < currMonth || (month === currMonth && day <= currDay)) {
      status.textContent = "Paid";
      status.style.color = "green";
      status.style.backgroundColor = "rgba(0, 100, 0, 0.2)";
      payDate.style.color = "green";

      lastPaidDateRow = calendarTable.rows[i];
    }
  }

  // Get tcpApprovalDeadlineRow
  if (tcpApprovalDeadlineRow === null) {
    const tcpApprovalDateStr = calendarTable.rows[i].cells[1].textContent;
    const matchTcp = tcpApprovalDateStr.match(pattern);

    if (matchTcp) {
      const yearTcp = parseInt(matchTcp.groups.year, 10);
      const monthTcp = monthMap[matchTcp.groups.month.toLowerCase()]; // "jan" (string)
      const dayTcp = parseInt(matchTcp.groups.day, 10);

      //   console.log("TCP");
      //   console.log(dayTcp);
      //   console.log(monthTcp);
      //   console.log(yearTcp);
      if (yearTcp > currentYear) {
        tcpApprovalDeadlineRow = calendarTable.rows[i];
      } else if (yearTcp === currentYear) {
        if (monthTcp > currMonth) {
          tcpApprovalDeadlineRow = calendarTable.rows[i];
        } else if (monthTcp === currMonth) {
          if (dayTcp >= currDay) {
            tcpApprovalDeadlineRow = calendarTable.rows[i];
          }
        }
      }
    }
  }

  // Get epafsDeadlineRow
  if (epafsDeadlineRow === null) {
    const epafsOriginatedDateStr = calendarTable.rows[i].cells[4].textContent;
    const matchEpafs = epafsOriginatedDateStr.match(pattern);

    if (matchEpafs) {
      const yearEpafs = parseInt(matchEpafs.groups.year, 10);
      const monthEpafs = monthMap[matchEpafs.groups.month.toLowerCase()]; // "jan" (string)
      const dayEpafs = parseInt(matchEpafs.groups.day, 10);

      //   console.log("EPAFs");
      //   console.log(dayEpafs);
      //   console.log(monthEpafs);
      //   console.log(yearEpafs);
      if (yearEpafs > currentYear) {
        epafsDeadlineRow = calendarTable.rows[i];
      } else if (yearEpafs === currentYear) {
        if (monthEpafs > currMonth) {
          epafsDeadlineRow = calendarTable.rows[i];
        } else if (monthEpafs === currMonth) {
          if (dayEpafs >= currDay) {
            epafsDeadlineRow = calendarTable.rows[i];
          }
        }
      }
    }
  }
}

lastPaidDateRow.id = "last-paid-row";

// Find the row with the next deadlines for TCP Approval and EPAFs Originated

// console.log(tcpApprovalDeadlineRow);
// console.log(epafsDeadlineRow);

tcpApprovalDeadlineRow.id = "tcp-approval";
epafsDeadlineRow.id = "epafs-approval";

const tcpDeadline = document.getElementById("tcp-deadline-date");
const epafsDeadline = document.getElementById("epafs-deadline-date");

tcpDeadline.href = "#tcp-approval";
epafsDeadline.href = "#epafs-approval";

tcpDeadline.firstChild.textContent = `Next Deadline: ${tcpApprovalDeadlineRow.cells[1].textContent}`;
epafsDeadline.firstChild.textContent = `Next Deadline: ${epafsDeadlineRow.cells[4].textContent}`;

// //if link is clicked
// tcpDeadline.addEventListener( (event) => {
//     tcpDeadline
// }
// );
