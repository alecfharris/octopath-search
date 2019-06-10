import React from 'react';
import axios from 'axios';
import store from '../../js/store/index';
import { addWeapons, weaponsHaveLoaded, queryConditions } from '../../js/actions/index';
import { connect } from 'react-redux';

class searchButton extends React.Component {

    constructor(props) {
        super(props);
        this.weaponsSearch= this.weaponsSearch.bind(this);
    }

    weaponsSearch() {
        // p = phys; e = ele; m = misc_1; m2ne = misc_2.$ne;
        axios.post('http://localhost:4000/weapons/search',
            {
                pgt: this.props.pgt,
                plt: this.props.plt,
                egt: this.props.egt,
                elt: this.props.elt,
                m2ne: this.props.m2ne,
                type: this.props.type,
                name: this.props.name,
                m_type: this.props.m_type,
                mgt: this.props.mgt,
                mlt: this.props.mlt
            })
            .then(res => store.dispatch(addWeapons(res.data)))
            .then(store.dispatch(weaponsHaveLoaded(true)))
            .then(store.dispatch(queryConditions({
                pgt: this.props.pgt,
                plt: this.props.plt,
                egt: this.props.egt,
                elt: this.props.elt,
                m2ne: this.props.m2ne,
                type: this.props.type,
                name: this.props.name,
                m_type: this.props.m_type,
                mgt: this.props.mgt,
                mlt: this.props.mlt})))
    }

    render() {
        return (
            <button className='search-btn' onClick={this.weaponsSearch}>Search</button>
        )
    }
}

function mapStateToProps(state) { return state }
export default connect(mapStateToProps, { addWeapons, weaponsHaveLoaded })(searchButton);