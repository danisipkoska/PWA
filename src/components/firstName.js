import React from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export function FirstName(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="fname"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        First Name
      </label>
      <div className="col-sm-10 ">
        <div className="input-group-prepend ">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiAccount} size={0.75} />
          </span>
          <input
            type="text"
            name="fname"
            className="form-control border border-top-0 border-right-0 border-left-0 rounded-0"
            required
            placeholder="First Name"
            value={props.fname}
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
