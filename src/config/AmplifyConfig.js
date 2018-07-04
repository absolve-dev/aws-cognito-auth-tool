import Amplify from "aws-amplify";

export const amplifyConfig = (cognito) => {
    if (cognito) {       
        try {
            Amplify.configure({
                Auth: {
                mandatorySignIn: false,
                region: cognito.region,
                userPoolId: cognito.userPoolId,
                identityPoolId: cognito.identityPoolId,
                userPoolWebClientId: cognito.userPoolWebClientId
                }
            })
        } catch(error) {
            console.log(error);
        }
    }     
}

export const LoadEndpointsFromLocalStorage = () => {
    const endpoints = JSON.parse(localStorage.getItem("endpoints"))
    if (endpoints){
        for( const endpoint of endpoints ) {
            AddEndpointToAmplify(endpoint)
        }
    }
}

export const AddEndpointToAmplify = (endpoint) => {
    if (endpoint) {
        const newConfiguration = ConstructNewAmplifyConfiguration(endpoint)
        try {
            Amplify.configure({
                API: {
                    endpoints: newConfiguration
                }
            })
        } catch(error){
            console.log(error);
        }
    }
}

const ConstructNewAmplifyConfiguration = (newEndpoint) => {
    const cognito = JSON.parse(localStorage.getItem("cognito"))
    let newEndpointConfig = []
    try {
        const prevConfiguration = Amplify.configure();
        const prevEndpoints = prevConfiguration.hasOwnProperty("API") ? prevConfiguration.API.endpoints : [];
        if (prevEndpoints.length > 0) {
            const endpointExists = EndpointExistInConfiguration(newEndpoint,prevEndpoints);
            if (endpointExists) {
                newEndpointConfig = [...prevEndpoints]
            } else {
                newEndpointConfig = [
                    ...prevEndpoints,
                    {
                        name: newEndpoint.name,
                        endpoint: newEndpoint.baseUrl,
                        region: cognito.region 
                    }
                ]
            }
        } else {
            newEndpointConfig = [{
                name: newEndpoint.name,
                endpoint: newEndpoint.baseUrl,
                region: cognito.region
            }]
        }
    } catch (error) {
        console.log(error); 
    }
    return newEndpointConfig
}


const EndpointExistInConfiguration = (newEndpoint = {}, prevEndpoints = [{}]) => {
    for ( let i = 0 ; i < prevEndpoints.length; i++ ){
        if (prevEndpoints[i].name === newEndpoint.name && 
            prevEndpoints[i].endpoint === newEndpoint.baseUrl) {
                return true
            }
    }
    return false
}