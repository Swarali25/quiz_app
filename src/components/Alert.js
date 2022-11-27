import React from 'react'

export default function Alert(props) {
  return (
    <div style={{ height: "40px" }}>
    {props.alert && (
      <div>
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show role="alert"`}
        >
          <strong>{props.alert.type}</strong> :{" "}
          <strong>{props.alert.message}</strong>
        </div>
      </div>
    )}
  </div>
  )
}
