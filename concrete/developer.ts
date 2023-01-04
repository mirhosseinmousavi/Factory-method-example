import Interviewer from '../interface/interviewer';

class Developer implements Interviewer{
    askQuestion(): void {
        console.log(`Ask a question about developer skill`);
    }
}

export default Developer;