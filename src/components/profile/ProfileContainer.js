import React from 'react'
import InputFormContainer from "./Posts/InputForm/InputFormContainer";
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {useParams} from "react-router";


const withRouter = WrappedComponent => props => {
    const params = useParams();
    // etc... other react-router-dom v6 hooks
    return (
        <WrappedComponent
            {...props}
            params={params}
            // etc...
        />
    );
};

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
            .then(response => {
                 this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile = {this.props.profile} />
                <InputFormContainer/>
            </div>
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})



let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})  (WithUrlDataContainerComponent);