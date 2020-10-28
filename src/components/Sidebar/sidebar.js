import React from 'react';
import SearchButton from '../SearchButton/searchButton.js';
import store from '../../js/store/index';
import { queryConditions } from '../../js/actions/index';
import { connect } from 'react-redux';
import './sidebar.css';

class Sidebar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            pgt: '',
            plt: '',
            egt: '',
            elt: '',
            m2ne: '',
            type: '',
            m_type: '',
            mgt: '',
            mlt: ''
        };
    
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
      }

    render() {
        return (
          <div className="sidebar col-lg-2 col-sm-4">
            <div className="sticky-top">
              <p className="menu-item">
                {" "}
                Name
                <br />
                <input
                  className="name-input"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  id="name"
                ></input>
              </p>

              <p className="menu-item">
                {" "}
                Phys. Atk
                <br />
                <input
                  className="num-input"
                  name="pgt"
                  value={this.state.pgt}
                  onChange={this.handleChange}
                  id="phys-atk-input-min"
                ></input>
                to
                <input
                  className="num-input"
                  name="plt"
                  value={this.state.plt}
                  onChange={this.handleChange}
                  id="phys-atk-input-max"
                ></input>
              </p>

              <p className="menu-item">
                {" "}
                Elem. Atk
                <br />
                <input
                  className="num-input"
                  name="egt"
                  value={this.state.egt}
                  onChange={this.handleChange}
                  id="elem-atk-input-min"
                ></input>
                to
                <input
                  className="num-input"
                  name="elt"
                  value={this.state.elt}
                  onChange={this.handleChange}
                  id="elem-atk-input-max"
                ></input>
              </p>

              <p className="menu-item">
                {" "}
                Stat Property
                <br />
                <select
                  className="property-select"
                  name="m_type"
                  value={this.state.m_type}
                  onChange={this.handleChange}
                >
                  <option value=""></option>
                  <option value="Accuracy">Accuracy</option>
                  <option value="Critical">Critical</option>
                  <option value="Evasion">Evasion</option>
                  <option value="Speed">Speed</option>
                </select>
                <p className="property-inputs">
                  <input
                    className="num-input"
                    name="mgt"
                    value={this.state.mgt}
                    onChange={this.handleChange}
                    id="property-input-min"
                  ></input>
                  to
                  <input
                    className="num-input"
                    name="mlt"
                    value={this.state.mlt}
                    onChange={this.handleChange}
                    id="property-input-max"
                  ></input>
                </p>
              </p>

              <p className="menu-item">
                Additional Property
                <br />
                <select
                  className="property-select"
                  name="m2ne"
                  value={this.state.m2ne}
                  onChange={this.handleChange}
                >
                  <option value="blank"></option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </p>

              <p className="menu-item">
                Weapon Type
                <br />
                <select
                  className="property-select"
                  name="type"
                  value={this.state.type}
                  onChange={this.handleChange}
                >
                  <option value="">Any</option>
                  <option value="sword">Sword</option>
                  <option value="polearm">Polearm</option>
                  <option value="dagger">Dagger</option>
                  <option value="axe">Axe</option>
                  <option value="bow">Bow</option>
                  <option value="staff">Staff</option>
                </select>
              </p>

              <br />

              <SearchButton
                pgt={this.state.pgt}
                plt={this.state.plt}
                egt={this.state.egt}
                elt={this.state.elt}
                m2ne={this.state.m2ne}
                type={this.state.type}
                name={this.state.name}
                m_type={this.state.m_type}
                //  Make sure that if user leaves number values of stat property blank, that all weapons with that stat property still display
                mgt={
                  this.state.mgt === ""
                    ? (this.mgt = "-999")
                    : (this.mgt = this.state.mgt)
                }
                mlt={
                  this.state.mlt === ""
                    ? (this.mlt = "999")
                    : (this.mlt = this.state.mlt)
                }
              />
            </div>
            <div>
              Icons made by{" "}
              <a href="http://www.freepik.com/" title="Freepik">
                Freepik
              </a>{" "}
              from{" "}
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </div>
        );
}
}

function mapStateToProps(state) { return state }
export default connect(mapStateToProps, { queryConditions })(Sidebar);