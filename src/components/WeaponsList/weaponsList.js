import React from 'react';
import axios from 'axios';
import store from '../../js/store/index';
import { addWeapons, weaponsHaveLoaded, queryConditions } from '../../js/actions/index';
import { connect } from 'react-redux';
import WeaponsSort from '../WeaponsSort/weaponsSort';
import './weaponsList.css';

class WeaponsList extends React.Component {

    getAllWeapons() {
        axios.get('http://localhost:4000/weapons')
            .then(res => store.dispatch(addWeapons(res.data)))
            .then(store.dispatch(weaponsHaveLoaded(true)));
    }

    defaultQuery() {
        store.dispatch(queryConditions({
            pgt: '',
            plt: '',
            egt: '',
            elt: '',
            m2ne: '',
            type: '',
            name: '',
            m_type: '',
            mgt: '',
            mlt: ''
        }))
    }

    componentDidMount() {
        this.getAllWeapons();
        this.defaultQuery();
    }

    render() {
        if (this.props.loaded === true && this.props.weapons.length > 0) {
            const weapons = this.props.weapons;
            const list = [];
            for (let i = 0; i < weapons.length; i++) {
                const weapon = weapons[i];
                const shops = weapon.shops;
                const obtained = weapon.obtained;

                // Make sure weapon names are properly capitalized
                let name = weapon.name;
                name = name.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');

                let type = weapon.type;
                type = type.toLowerCase()
                    .split(' ')
                    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ');

                let shopsString = '';
                let obtainedString = '';

                // For loop to turn array into string and ensure that a , follows each item except the last
                if (shops[0] !== "zzz") {
                    console.log(shops);
                    for (let j = 0; j < shops.length; j++) {
                        shopsString += shops[j];
                        if (j < shops.length - 1) {
                            shopsString += ', '
                        }
                    }
                }

                // For loop to turn array into string and ensure that a , follows each item except the last
                for (let j = 0; j < obtained.length; j++) {
                    obtainedString += obtained[j];
                    if (j < obtained.length - 1) {
                        obtainedString += ', '
                    }
                }


                list.push(
                    <tr>
                        <td>{name}</td>
                        <td>{type}</td>
                        <td>{weapon.phys_atk !== 0 ? weapon.phys_atk : ''}</td>
                        <td>{weapon.ele_atk !== 0 ? weapon.ele_atk : ''}</td>
                        <td>{weapon.misc_1.type} {weapon.misc_1.value ? weapon.misc_1.value < 0 ? '' : '+' : ''}{weapon.misc_1.value}</td>
                        <td>{weapon.misc_2}</td>
                        <td>{weapon.cost}</td>
                        <td>{shopsString}</td>
                        <td>{obtainedString}</td>
                    </tr>
                )
            }
            return (
                <table className='outer-table'>
                    <table className='inner-table'>
                        <thead>
                            <tr>
                                <WeaponsSort />
                                <th>S/P: Steal/Purchase; Chest; HI: Hidden Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list}
                        </tbody>
                    </table>
                </table>
            )
        }

        if (this.props.loaded === true && this.props.weapons.length === 0) {
            return (
                <h1 className='d-flex' id='no-results'>No Results</h1>
            )
        }

        else {
            return null;
        }

    }
}

function mapStateToProps(state) { return state }
export default connect(mapStateToProps, { addWeapons, weaponsHaveLoaded })(WeaponsList);