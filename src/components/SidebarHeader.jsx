import React from 'react';
import { Typography } from '@mui/material';

const StyledSidebarHeader = (
  <div
    style={{
      height: '64px',
      minHeight: '64px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 20px',
    }}
  />
);

const StyledLogo = (props) => (
  <div
    style={{
      width: '35px',
      minWidth: '35px',
      height: '35px',
      minHeight: '35px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '8px',
      color: 'white',
      fontSize: '24px',
      fontWeight: '700',
      backgroundColor: '#009fdb',
      background: 'linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%)',
      ...(props.rtl
        ? {
          marginLeft: '10px',
          marginRight: '4px',
        }
        : {
          marginRight: '10px',
          marginLeft: '4px',
        }),
    }}
  >
    P
  </div>
);

function SidebarHeader({ children, rtl, ...rest }) {
  return (
    <div {...rest}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <StyledLogo rtl={rtl}>P</StyledLogo>
        <Typography variant="subtitle1" fontWeight={700} color="#0098e5">
          Pro Sidebar
        </Typography>
      </div>
    </div>
  );
}

export default SidebarHeader;
