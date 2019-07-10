import React from "react";
import Icon from "@mdi/react";
import { mdiPhone } from "@mdi/js";

export function Telephone(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="contactNumber"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Contact Number
      </label>
      <div className="col-sm-10">
        <div className="input-group-prepend">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiPhone} size={0.75} className="myIcon">
              ::before
            </Icon>
          </span>
          <input
            type="tel"
            className="form-control border border-top-0 border-right-0"
            id="telephone"
            placeholder="Contact Number"
            name="tel"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
