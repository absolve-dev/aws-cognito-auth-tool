import React from 'react';

const SectionHeader = props => (
    <div>
        <hr className="hr" style={{marginBottom:"0"}}/>
        <div style={{ display:"flex", marginTop:"10px",marginBottom:"15px"}}>
            <h1 className="title"> {props.title} </h1>
        </div>
    </div>
)

export default SectionHeader;