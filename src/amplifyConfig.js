import Amplify from "aws-amplify";

export const amplifyConfig = (config) => {
    if (config) {
        try {
            Amplify.configure({
                Auth: {
                  mandatorySignIn: false,
                  region: config.region,
                  userPoolId: config.userPoolId,
                  identityPoolId: config.identityPoolId,
                  userPoolWebClientId: config.userPoolWebClientId
                },
            })
        } catch(error) {
            console.log(error);
        }
    } 
}