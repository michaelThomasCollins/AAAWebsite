import { Grid2, IconButton } from "@mui/material";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
function SocialLinks() {
  return (
    <Grid2>
      <IconButton>
        <FacebookOutlinedIcon />
      </IconButton>
      <IconButton>
        <EmailRoundedIcon />
      </IconButton>
      <IconButton>
        <LinkedInIcon />
      </IconButton>
      <IconButton>
        <InstagramIcon />
      </IconButton>
      <IconButton>
        <PinterestIcon />
      </IconButton>
      {/* <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton> */}
    </Grid2>
  );
}
export default SocialLinks;
