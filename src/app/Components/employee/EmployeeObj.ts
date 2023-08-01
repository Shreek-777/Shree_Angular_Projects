export class EmployeeObj{
    firstName:string | undefined;
    lastName:string | undefined;
    technology:string | undefined;
    desination:string | undefined;
    skills:string | undefined;
    coreExperties:string | undefined;
    isCertification: string | undefined;
    id!:number 
    
    compony:string | undefined;
    aboutYourself:string | undefined;
  
    constructor() {
      this.firstName="";
      this.lastName="";
      this.technology="";
      this.desination="";
      this.skills="";
      this.coreExperties="";
      this.compony="";
      this.aboutYourself="",
      this.isCertification="";
  
    }
  
  }
  