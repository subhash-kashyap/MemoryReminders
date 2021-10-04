/**
 * Sends emails with data from the current spreadsheet.
 */
function sendEmails() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var startRow = 2; // First row of data to process
  var numRows = 2000; // Number of rows to process
  // Fetch the range of cells A2:B3
  var dataRange = sheet.getRange(startRow, 1, numRows,8);
  // Fetch values for each row in the Range.
  var data = dataRange.getValues();
  //console.log("data",data)
  for (var i in data) {
    var row = data[i];
    var emailAddress = row[1]; // First column
    var readon = row[2];
    //console.log(typeof(readon));
    var reminder1 = row[4]; // EndDate
    var reminder2 = row[5]
    
    var reminder3 = row[6]
    
    var reminder4 = row[7]
    
    var reminderCheck = row[3] //YES or NO

    if (reminderCheck == "YES"){
      var today = new Date()
      //today.setDate( today.getDay(),today.getMonth(), today.getFullYear())
      // var todayDate = today.getUTCDate().toString() + (today.getUTCMonth() + 1).toString() + today.getUTCFullYear().toString()
      year = today.getUTCFullYear();
      month = today.getUTCMonth();
      day = today.getUTCDate();
      var todayDate = new Date(year, month, day, 00, 00, 00, 00);
      console.log('Today Date', todayDate)
      var timeZone = 'IST';
      // console.log("today",  today);
      console.log("readDate",readon);
      console.log("reminder1",reminder1);
      console.log("reminder2",reminder2);
      console.log("reminder3",reminder3);
      console.log("reminder4",reminder4);
      if(reminder1.valueOf() === todayDate.valueOf() || reminder2.valueOf() === todayDate.valueOf() || reminder3.valueOf() === todayDate.valueOf() || reminder4.valueOf() === todayDate.valueOf() || readon.valueOf() === todayDate.valueOf() ){
        console.log('match')
        var message =  row[0]; // First Column, learning 
        var subject = 'Reminder to revist from ' + readon;
        console.log(message+subject)
        MailApp.sendEmail(emailAddress, subject, message);
      }
    }
  }
}
