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

export const AddEndpointToAmplify = async (endpoint) => {
    if (endpoint) {
        const newConfiguration = await ConstructNewAmplifyConfiguration(endpoint)
        console.log("new",newConfiguration);
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

const ConstructNewAmplifyConfiguration = async (newEndpoint) => {
    const cognito = JSON.parse(localStorage.getItem("cognito"))
    let newEndpointConfig = []
    try {
        const prevConfiguration = await Amplify.configure();
        const prevEndpoints = prevConfiguration.hasOwnProperty("API") ? prevConfiguration.API.endpoints : [];
        console.log("prev",prevEndpoints);
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