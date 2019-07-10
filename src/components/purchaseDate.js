import React from "react";
import Icon from "@mdi/react";
import { mdiCalendar } from "@mdi/js";

export function PurchaseDate(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="purchaseDate"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Purchase Date
      </label>
      <div className="col-sm-10">
        <div className="input-group-prepend">
          <span className="input-group-text input-group-text-custom rounded-0">
            <Icon path={mdiCalendar} size={0.75} className="myIcon">
              ::before
            </Icon>
          </span>
          <input
            name="purchaseDate"
            type="date"
            className="form-control border border-top-0 border-right-0"
            id="date"
            placeholder="dd/mm/yyyy"
            onChange={props.handleChange}
          />
        </div>
      </div>
    </div>
  );
}
