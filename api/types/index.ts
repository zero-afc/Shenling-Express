export namespace Login {
  export interface Request {
    account : string
    password : string
  }
  export interface Response {
    token : string
  }
}

export namespace Tasks {
  export interface TaskListReq {
    status : number
    transportTaskId ?: string
    startTime ?: string
    endTime ?: string
    page : number
    pageSize : number
  }
  export interface TaskItem {
    actualArrivalTime : string
    actualDepartureTime : string
    created : string
    driverId : string
    enablePickUp : boolean
    endAddress : string
    endAgencyId : string
    finishHandover : string
    id : string
    planArrivalTime : string
    planDepartureTime : string
    startAddress : string
    startAgencyId : string
    startHandover : string
    status : number
    transportTaskId : string
  }
  export interface TaskListRes {
    items : TaskItem[],
    counts : string
    page : string
    pageSize : string
    pages : string
  }
}