import Interviewer from '../interface/interviewer';

abstract class HiringManager{

    abstract makeInterviewer(): Interviewer

    takeInterview(){
        const interviewer = this.makeInterviewer();
        interviewer.askQuestion();
    }
}

export default HiringManager;