import moment from "moment";

let TimeSlotData=[]

let x = {
    slotInterval: 30,
    openTime: '09:00',
    closeTime: '00:00'
  };

  //Format the time
  let startTime = moment(x.openTime, "HH:mm");
  //Format the end time and the next day to it 
  let endTime = moment(x.closeTime, "HH:mm").add(1, 'days');
  
  //Times
  let allTimes = [];

  //Loop over the times - only pushes time with 30 minutes interval
  let i=1;
  while (startTime < endTime) {
    //Push times
    allTimes.push({id:i,value:startTime.format("HH:mm"),label:startTime.format("HH:mm"),value:startTime.format("HH:mm")});
    //Add interval of 30 minutes
    startTime.add(x.slotInterval, 'minutes');
    i++;
  }

  // console.log(allTimes);



  export default TimeSlotData=allTimes