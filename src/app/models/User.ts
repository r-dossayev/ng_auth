

export interface User{

  firstName:string|null|undefined|unknown;
  lastName:string|null|undefined|unknown;
  username:string;
  password:string;

}
export interface Task{

  _id:string;
  name:string;
  description:string;
  isCompleted:boolean;
  date:Date;
}
