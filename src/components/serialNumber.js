import React from "react";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";

export function SerialNumber(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="serialNumber"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Serial Number
      </label>
      <div className="col-sm-10">
        <div className="input-group-prepend">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiAccount} size={0.75} className="myIcon">
              ::before
            </Icon>
          </span>
          <input
            type="serialNumber"
            className="form-control border border-top-0 border-right-0"
            id="serialNumber"
            placeholder="Serial Number"
            name="serial"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
