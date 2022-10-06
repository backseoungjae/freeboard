const deviceSizes = {
  mobile: '360px',
  tablet: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const theme = {
  deviceSizes,
  device,
};

export default theme;
