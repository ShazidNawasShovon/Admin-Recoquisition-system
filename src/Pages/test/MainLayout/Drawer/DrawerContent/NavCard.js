// material-ui
import { Button, CardMedia, Link, Stack, Typography } from '@mui/material';

// project import


// assets
import avatar from '../../../../../assets/images copy/users/avatar-1.png';
import Test from '../../../Test';

// import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const NavCard = () => (
  <Test sx={{ bgcolor: 'grey.50', m: 3 }}>
    <Stack alignItems="center" spacing={2.5}>
      <CardMedia component="img" image={avatar} sx={{ width: 112 }} />
      <Stack alignItems="center">
        <Typography variant="h5">Mantis Pro</Typography>
        <Typography variant="h6" color="secondary">
          Checkout pro features
        </Typography>
      </Stack>
      {/* <AnimateButton> */}
        <Button component={Link} target="_blank" href="https://mantisdashboard.io" variant="contained" color="success" size="small">
          Pro
        </Button>
      {/* </AnimateButton> */}
    </Stack>
  </Test>
);

export default NavCard;
