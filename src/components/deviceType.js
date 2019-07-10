import React from "react";
import Icon from "@mdi/react";
import { mdiTabletCellphone } from "@mdi/js";

export function Device(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="deviceType"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Device Type
      </label>
      <div className="col-sm-10">
        <div className="input-group-prepend">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiTabletCellphone} size={0.75} className="myIcon">
              ::before
            </Icon>
          </span>
          <input
            type="text"
            className="form-control border border-top-0 border-right-0"
            id="deviceType"
            placeholder="Device"
            name="device"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
