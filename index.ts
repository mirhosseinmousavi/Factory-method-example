import DeveloperManager from "./factory/developerManager";
import MarketingManager from "./factory/marketingManager";

function main(){

    const developerManager = new DeveloperManager();
    developerManager.takeInterview();

    const marketingManager = new MarketingManager();
    marketingManager.takeInterview();
}

main();