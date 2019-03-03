import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses}
                {this.props.businesses.map( business => {
                 return ( 
                 <div>
                 <h1>Hello</h1>
                 <Business key= {business.id}  business= {business}/>;
                 </div>
                 )
            })} 
            </div>
        )
    }
}

export default BusinessList;