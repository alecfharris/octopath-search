import React from 'react';
import WeaponsList from '../components/WeaponsList/weaponsList.js'

function Weapons() {
    return(
        <div className='d-flex weap-comp-container-outer col-lg-10 col-sm-8'>
            <div className='d-flex weap-comp-container-inner'>
              <WeaponsList />
            </div>
          </div>

    )
}

export default Weapons;