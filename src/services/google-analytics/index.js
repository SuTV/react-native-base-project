import { GoogleAnalyticsTracker, GoogleAnalyticsSettings } from 'react-native-google-analytics-bridge';
import { GA_ID } from 'react-native-dotenv'

export const getGATracker = () => {
    let _tracker = new GoogleAnalyticsTracker(GA_ID);
    GoogleAnalyticsSettings.setDryRun(true);
    GoogleAnalyticsSettings.setDispatchInterval(60);
    
    return _tracker;
}