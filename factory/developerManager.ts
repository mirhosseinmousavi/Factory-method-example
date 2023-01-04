import HiringManager from "../abstract/hiring-manager";
import Developer from "../concrete/developer";
import Interviewer from "../interface/interviewer";

class DeveloperManager extends HiringManager{

    makeInterviewer(): Interviewer {
        return new Developer();
    }
    
}

export default DeveloperManager;