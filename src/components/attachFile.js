import React from "react";

export function Attach(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="attachFile"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Attach File
      </label>
      <div className="col-sm-10">
        <input
          name="upload"
          type="file"
          className="form-control-file border border-top-0 border-right-0 border-bottom-1"
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
}
