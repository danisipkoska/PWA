import React from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export function LastName(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="lname"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Last Name
      </label>
      <div className="col-sm-10">
        <div className="input-group-prepend">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiAccount} size={0.75} className="myIcon">
              ::before
            </Icon>
          </span>
          <input
            type="text"
            className="form-control border border-top-0 border-right-0"
            value={props.lname}
            name="lname"
            placeholder="Last Name"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
