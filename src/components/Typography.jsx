import React from 'react';

const StyledTypography = ({ variant, fontWeight, color, fontSize, children, ...rest }) => {
  let fontSizeValue = '';
  let lineHeightValue = '';

  switch (variant) {
    case 'h1':
      fontSizeValue = '72px';
      lineHeightValue = '90px';
      break;
    case 'h2':
      fontSizeValue = '60px';
      lineHeightValue = '72px';
      break;
    case 'h3':
      fontSizeValue = '48px';
      lineHeightValue = '60px';
      break;
    case 'h4':
      fontSizeValue = '36px';
      lineHeightValue = '44px';
      break;
    case 'h5':
      fontSizeValue = '30px';
      lineHeightValue = '38px';
      break;
    case 'h6':
      fontSizeValue = '24px';
      lineHeightValue = '32px';
      break;
    case 'subtitle1':
      fontSizeValue = '20px';
      lineHeightValue = '30px';
      break;
    case 'subtitle2':
      fontSizeValue = '18px';
      lineHeightValue = '28px';
      break;
    case 'body1':
      fontSizeValue = '16px';
      lineHeightValue = '24px';
      break;
    case 'body2':
      fontSizeValue = '12px';
      lineHeightValue = '18px';
      break;
    case 'caption':
      fontSizeValue = '10px';
      lineHeightValue = '16px';
      break;
    default:
      break;
  }

  return (
    <p
      style={{
        margin: 0,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        fontSize: fontSize || fontSizeValue,
        fontWeight: fontWeight || '',
        color: color || '',
        lineHeight: lineHeightValue,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

function Typography({ variant = 'body1', children, ...rest }) {
  return <StyledTypography variant={variant} {...rest}>{children}</StyledTypography>;
}

export default Typography;
