import { Chip } from '@mui/material';

const EnvBadge = () => {
  const { MODE } = import.meta.env;
  const isProd = MODE === 'prod';

  return (
    <Chip
      style={{
        position: 'absolute',
        bottom: '-4px',
        left: '106px',
        pointerEvents: 'none',
        height: '16px',
        lineHeight: '16px',
        fontSize: '10px',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: isProd ? 'red' : '#00197C',
      }}
      label={isProd ? 'LIVE' : MODE}
    />
  );
};

export default EnvBadge;
