import Interviewer from '../interface/interviewer';

class CommunityExecution implements Interviewer{
    askQuestion(): void {
        console.log("Ask a question about communication");
    }
} 

export default CommunityExecution;