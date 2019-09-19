import React, {Component} from 'react';


class Checkboxes extends Component {


  render(){
    return (
      <form className="filter-form">
        <h3 className = "filter-header">Filters</h3>
          <div className = "form-list">
              {this.props.checkboxes.map((section,id) => (
                <div className = "checkbox-list" key={id}>
                  <p className = "checkbox-title">{Object.keys(section)}:</p>

                  {Object.values(section).map((box,i) => (
                    <div className = "checkbox-section" key={i}>
                      {box.map((element,index) => (

                        <label className="checkbox container" key={index}>
                          <div>
                            <input
                                type="checkbox"
                                name={element}
                                onChange={ e => {this.props.allFilterClickListener(e, Object.keys(section))}}
                            />
                            <span className="checkmark"></span>
                            <p className = "checkbox-description">{element}</p>
                          </div>
                        </label>

                      ))}
                    </div>
              ))}
                </div>
              ))}
          </div>
      </form>
    )
  }
}

export default Checkboxes
