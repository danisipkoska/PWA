import React from "react";

export function Problem(props) {
  return (
    <div className="form-group row">
      <label
        htmlFor="Problem"
        className="col-sm-2 col-form-label text-secondary font-weight-bold"
      >
        Describe your problem
      </label>
      <p className="col-sm-10">
        <textarea
          name="problem"
          className="form-control  border border-top-0 border-right-0 border-left-0"
          style={{ resize: "none" }}
          rows="3"
          onChange={props.handleChange}
        />
      </p>
    </div>
  );
}
