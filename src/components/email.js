import React from "react";
import Icon from "@mdi/react";
import { mdiEmail } from "@mdi/js";

export function Email(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="email"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Email
      </label>
      <div className="col-sm-10">
        <div className="input-group-prepend">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiEmail} size={0.75} className="myIcon">
              ::before
            </Icon>
          </span>
          <input
            type="email"
            className="form-control border border-top-0 border-right-0"
            placeholder="Email"
            name="email"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
