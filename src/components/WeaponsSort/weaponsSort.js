import React from 'react';
import axios from 'axios';
import store from '../../js/store/index';
import { addWeapons, weaponsHaveLoaded } from '../../js/actions/index';
import { connect } from 'react-redux';
import './weaponsSort.css';

// Make this work for both phys and ele atk by adding parameter that differentiates between the 
// two to ele sort and changes the search and render method as a result. DRY!
class WeaponsSort extends React.Component {

    constructor(props) {
        super(props);
        this.weapSort = this.weapSort.bind(this);
      }

    // Fix so that it can still sort when no search has been performed yet
    weapSort(sortVal) {
        console.log(sortVal);
        axios.post('http://localhost:4000/weapons/search/sort',
    {
        pgt: this.props.query.pgt,
        plt: this.props.query.plt,
        egt: this.props.query.egt,
        elt: this.props.query.elt,
        m2ne: this.props.query.m2ne,
        type: this.props.query.type,
        name: this.props.query.name,
        m_type: this.props.query.m_type,
        mgt: this.props.query.mgt,
        mlt: this.props.query.mlt,
        sort_by: sortVal
    })
    .then(res => store.dispatch(addWeapons(res.data)))
    .then(store.dispatch(weaponsHaveLoaded(true)));
}

    render (){ 
        return(
        // Add Phys Atk th
        <React.Fragment>
        <th className= 'clickable' onClick={() => this.weapSort({name: 1})}>Weapon Name</th>
        <th className= 'clickable' onClick={() => this.weapSort({type: 1, name: 1})}>Type</th>
        <th className= 'clickable' onClick={() => this.weapSort({phys_atk: -1})}>Phys. Atk</th>
        <th className= 'clickable' onClick={() => this.weapSort({ele_atk: -1})}>Elem. Atk</th>
        <th className= 'clickable' onClick={() => this.weapSort({misc_1: -1})}>Misc. 1</th>
        <th className= 'clickable' onClick={() => this.weapSort({misc_2: -1})}>Misc. 2</th>
        <th className= 'clickable' onClick={() => this.weapSort({cost: 1})}>Cost</th>
        <th className= 'clickable' onClick={() => this.weapSort({shops: 1})}>Shops</th>
        {/* <th onClick={() => this.weapSort({obtained: 1})}>S/P: Steal/Purchase; Chest; HI: Hidden Item</th> */}

        </React.Fragment>
    )
}
}

function mapStateToProps(state) { return state }
export default connect(mapStateToProps, { addWeapons, weaponsHaveLoaded })(WeaponsSort);