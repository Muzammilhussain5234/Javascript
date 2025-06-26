class Railway {
  constructor(givenname,address,trainno,time){
    this.name=givenname;
    this.address=address;
    this.trainno=trainno;
    this.time=time;
  }
  SubmitEvent(){
    console.log("Name:"+this.name);
    console.log("Address:"+this.address);
    console.log("Train No:"+this.trainno);
    console.log("Time:"+this.time);
  }
  cancel(){
    console.log("Ticket Cancelled"+" "+this.name+" "+this.trainno);
  }
}
let t=new Railway("Railway","Chennai",12345,"10:00");
t.SubmitEvent();
let z=new Railway("Railway","Chennai",25265,"10:00");
z.cancel();