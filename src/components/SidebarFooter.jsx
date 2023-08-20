import React from 'react';
import { Typography } from '@mui/material';
import packageJson from '../../package.json';
import { GitHub } from '@mui/icons-material';

const StyledButton = (
  <a
    style={{
      padding: '5px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      display: 'inline-block',
      backgroundColor: '#fff',
      color: '#484848',
      textDecoration: 'none',
    }}
  />
);

const StyledSidebarFooter = (
  <div
    style={{
      width: '50%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      borderRadius: '8px',
      color: 'white',
      background: 'linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%)',
    }}
  />
);

const StyledCollapsedSidebarFooter = (
  <a
    style={{
      width: '40px',
      height: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      color: 'white',
      background: 'linear-gradient(45deg, rgb(21 87 205) 0%, rgb(90 225 255) 100%)',
    }}
  />
);

const codeUrl =
  'https://github.com/azouaoui-med/react-pro-sidebar/blob/master/storybook/Playground.tsx';

function SidebarFooter({ children, collapsed, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '20px',
      }}
    >
      {collapsed ? (
        <a href={codeUrl} target="_blank">
          <GitHub size={28} />
        </a>
      ) : (
        <div {...rest}>
          <div style={{ marginBottom: '12px' }}>
            <GitHub size={30} />
          </div>
          <Typography fontWeight={600}>Pro Sidebar</Typography>
          <Typography variant="caption" style={{ letterSpacing: 1, opacity: 0.7 }}>
            V {packageJson.version}
          </Typography>
          <div style={{ marginTop: '16px' }}>
            <a href={codeUrl} target="_blank">
              <Typography variant="caption" color="#607489" fontWeight={600}>
                View code
              </Typography>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default SidebarFooter;
