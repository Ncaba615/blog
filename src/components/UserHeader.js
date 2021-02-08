import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {

    render() {
        const { user } = this.props; 
        if (!user) {
            return null;
        }
        return <div className='header'>{user.name}</div>
    }
}

//ownProps is a reference to the props about to be sent into a particular component
//doing it this way so we could use mapStateToProps in another file for reusability
const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId )
 };
}

export default connect (mapStateToProps) (UserHeader);