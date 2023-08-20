import React from 'react';

const CheckBoxWrapper = (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
    }}
  />
);

const CheckBoxLabel = (
  <label
    style={{
      marginLeft: '10px',
      marginRight: '10px',
      fontSize: '13px',
      cursor: 'pointer',
    }}
  />
);

const CheckBox = (props) => (
  <div
    style={{
      position: 'relative',
      cursor: 'pointer',
      width: '32px',
      height: '20px',
      borderRadius: '30px',
      backgroundColor: props.checked ? '#0ed693' : '#dde0e7',
    }}
  />
);

const CheckBoxCircle = (props) => (
  <div
    style={{
      position: 'absolute',
      top: '3px',
      left: '3px',
      width: '14px',
      height: '14px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      transition: 'left 0.2s',
      ...(props.checked ? { left: '15px' } : {}),
    }}
  />
);

function Switch({ id, label, checked, ...rest }) {
  return (
    <div>
      <CheckBoxWrapper>
        <CheckBox checked={checked}>
          <input
            id={id}
            type="checkbox"
            style={{
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '32px',
              height: '20px',
              opacity: 0,
              zIndex: 2,
            }}
            checked={checked}
            {...rest}
          />
          <CheckBoxCircle checked={checked} />
        </CheckBox>
        {label && (
          <CheckBoxLabel htmlFor={id}>
            {label}
          </CheckBoxLabel>
        )}
      </CheckBoxWrapper>
    </div>
  );
}

export default Switch;
