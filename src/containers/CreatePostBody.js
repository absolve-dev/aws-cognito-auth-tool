import React, { Component } from 'react';

class CreatePostBody extends Component {
    render(){

        let bodyItems = []
        for(let key in this.props.body){
            if (this.props.body.hasOwnProperty(key)) {
                bodyItems = [
                    ...bodyItems,
                    {
                        [key] : this.props.body[key]
                    }
                ]
             }
        }        
        return(
            <div>
                <h1 className="title">Post Body</h1>

                {   bodyItems.map((item,index) => 
                        <div className="columns" key={index}>
                            <div className="column is-four-fifths">
                                <div className="columns">
                                    <div className="column is-half">
                                            <div className="field">
                                                <div className="control">
                                                    <input 
                                                        readOnly
                                                        className="input" 
                                                        type="text" 
                                                        value={`${Object.keys(item)[0]}`} 
                                                        placeholder="Body Key" 
                                                    />
                                                </div>
                                            </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <div className="control">
                                            <input 
                                                readOnly
                                                className="input" 
                                                type="text" 
                                                name="bodyValue" 
                                                value={`${Object.values(item)[0]}`} 
                                                placeholder="Body Value" 
                                                onChange={this.props.handleChange}
                                            />
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="column"><a className="button is-danger" onClick={()=>this.props.delBodyItem(Object.keys(item)[0])}>-</a></div>
                        </div>
                    )   
                }
                <div className="columns">
                    <div className="column is-four-fifths">
                        <div className="columns">
                            <div className="column is-half">
                                    <div className="field">
                                        <div className="control">
                                            <input 
                                                className="input" 
                                                type="text" 
                                                name="bodyKey" 
                                                value={this.props.bodyKey} 
                                                placeholder="Body Key" 
                                                onChange={this.props.handleChange}
                                            />
                                        </div>
                                    </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <div className="control">
                                    <input 
                                        className="input" 
                                        type="text" 
                                        name="bodyValue" 
                                        value={this.props.bodyValue} 
                                        placeholder="Body Value" 
                                        onChange={this.props.handleChange}
                                    />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column"><a className="button is-link" onClick={() => this.props.addBodyItem()}>+</a></div>
                </div>
                
            </div>
        )
    }
}

export default CreatePostBody;