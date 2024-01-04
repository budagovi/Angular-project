export interface Job {
    id: number;
    title: string;
  }



  export interface DisplaySchedule {
    startTime: string;
    endTime: string;
    userId: number;
    userFirstName: string;
    userLastName: string;
    jobTitle: string;
    isApproved: boolean;
  }




  export interface Schedule {
    startTime: string;
    endTime: string;
    userId: number;
    jobId: number;
    isApproved: boolean;
  }