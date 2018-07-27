import React, { Component } from "react";

import { AddEndpointToAmplify } from "../config/AmplifyConfig.js";
import EndpointLists from "./EndpointLists";
import EndpointForm from "./EndpointForm";
import EndpointTags from "./EndpointTags";
import SectionHeader from "../components/SectionHeader";

import 'bulma/css/bulma.css'

class Endpoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          baseUrl: "",
          endpoint: "",
          httpMethod: "GET",
          endpoints: [],
          body: {},
          bodyKey: "",
          bodyValue: "",
          response: null
        };
    }

    componentDidMount(){
        const endpoints = this.getEndpointsInLocalStorage()
        if(endpoints){
            this.setState({endpoints})
        }
    }

    getEndpointsInLocalStorage = () => {
        return JSON.parse(localStorage.getItem("endpoints"))
    }

    setEndpointsInLocalStorage = (endpoints) => {
        this.setState({endpoints})
        localStorage.setItem("endpoints",JSON.stringify(endpoints))
        return this.getEndpointsInLocalStorage()
    }

    removeEndpointsInLocalStorage = () => {
        this.setState({endpoints:[]})
        localStorage.removeItem("endpoints")
    }

    getEndpointByName = name => {        
        const endpoints = this.getEndpointsInLocalStorage();
        for (const endpoint of endpoints) {
            if ( endpoint.name === name ) {
                return endpoint
            }
        }
    }

    addBodyItem = () => {
        if (this.state.bodyKey === "" &&
            this.state.bodyValue === "" ){
                return
            }
        let bodyValue = this.state.bodyValue
        if (!isNaN( this.state.bodyValue - parseFloat( this.state.bodyValue ) )) {
            bodyValue = Number(bodyValue)
        }
        this.setState({
            bodyKey: "",
            bodyValue: "",
            body: {
                ...this.state.body,
                [this.state.bodyKey]: bodyValue
            }
        })
    }
    delBodyItem = delItemKey => {
        let newBodyItems = {}
        for(let key in this.state.body){
            if (this.state.body.hasOwnProperty(key)) {
                if(key !== delItemKey){
                    newBodyItems = {
                        ...newBodyItems,
                        [key]: this.state.body[key]
                    }
                }
            }
        }
        this.setState({ body: newBodyItems })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.name === "" ||
            this.state.baseUrl === "" ||
            this.state.httpMethod === "" ||
            this.state.endpoint === "" ){
                return
            }
        let newEndpoint = {
            name: this.state.name,
            baseUrl: this.state.baseUrl,
            endpointUrl: this.state.endpoint,
            httpMethod: this.state.httpMethod,
            body:null
        }
        if (this.state.body!==null && Object.keys(this.state.body).length !== 0) {
            newEndpoint.body = this.state.body
        }
        this.setState({
            endpoint: "",
            endpoints: [
                ...this.state.endpoints,
                newEndpoint
            ],
            bodyKey: "",
            bodyValue: "",
            body: {},
        },()=>{
            this.setEndpointsInLocalStorage(this.state.endpoints)
            AddEndpointToAmplify(newEndpoint)
        })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleResponse = response => {
        this.setState({response})
        console.log("Response:",response);
    }

    handleDeleteEndpoint = iEndpoint => {

        const endpoints = this.getEndpointsInLocalStorage()
        console.log(iEndpoint,endpoints);
        const newEndpoints = endpoints.filter( (_,index) => index!==iEndpoint )
        this.setEndpointsInLocalStorage(newEndpoints)
    }

    handleEditEndpoint = iEndpoint => {
        let endpoint = this.getEndpointsInLocalStorage()[iEndpoint]
        this.setState({
            name: endpoint.name,
            baseUrl: endpoint.baseUrl,
            endpoint: endpoint.endpointUrl,
            httpMethod: endpoint.httpMethod,
            body: endpoint.body,
        })
        this.handleDeleteEndpoint(iEndpoint)
    }

    autoFillFormWithBaseEndpoint = name => {
        let endpoint = this.getEndpointByName(name)
        this.setState({
            name: endpoint.name,
            baseUrl: endpoint.baseUrl,
        })
    }
    
    render() {
        return (
            <div className="container">
                <SectionHeader title="Endpoint Form" />
                <EndpointForm 
                    handleChange={this.handleChange}
                    addBodyItem={this.addBodyItem}
                    delBodyItem={this.delBodyItem}
                    handleSubmit={this.handleSubmit}
                    removeEndpointsInLocalStorage={this.removeEndpointsInLocalStorage}
                    {...this.state}
                />
                {   
                    this.state.endpoints.length > 0 &&
                    <div>
                        <SectionHeader title="Base Endpoints" />
                        <EndpointTags 
                            endpoints={this.state.endpoints}
                            autoFillFormWithBaseEndpoint={this.autoFillFormWithBaseEndpoint} 
                        />
                        <SectionHeader title="Endpoints" />
                        <EndpointLists 
                            endpoints={this.state.endpoints}
                            handleResponse={this.handleResponse}
                            handleDeleteEndpoint={this.handleDeleteEndpoint}
                            handleEditEndpoint={this.handleEditEndpoint}
                            getEndpointsInLocalStorage={this.getEndpointsInLocalStorage}
                            setEndpointsInLocalStorage={this.setEndpointsInLocalStorage}
                        />
                    </div>
                }
            </div>
        );
    }
}

export default Endpoints;
