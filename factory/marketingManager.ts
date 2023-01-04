import HiringManager from "../abstract/hiring-manager";
import CommunityExecution from "../concrete/communityExecution";
import Interviewer from "../interface/interviewer";

class MarketingManager extends HiringManager{

    makeInterviewer(): Interviewer{
        return new CommunityExecution();
    }
}

export default MarketingManager;