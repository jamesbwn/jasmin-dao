import { SvgIcon, Link } from "@material-ui/core";
import { ReactComponent as GitHub } from "../../assets/icons/github.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";

import { ReactComponent as facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as youtube } from "../../assets/icons/youtube.svg";
import { ReactComponent as instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as reddit } from "../../assets/icons/reddit.svg";

export default function Social() {
  return (
    <div>
      <div className="social-row">
        <Link href="https://t.me/" target="_blank">
          <SvgIcon color="primary" component={Telegram} />
        </Link>
        <Link href="https://twitter.com/" target="_blank">
          <SvgIcon color="primary" component={Twitter} />
        </Link>

        <Link href="https://discord.com/invite/" target="_blank">
          <SvgIcon color="primary" component={Discord} />
        </Link>

        <Link href="https://medium.com/" target="_blank">
          <SvgIcon color="primary" component={Medium} />
        </Link>


      



        {/* <Link href="https://discord.me/hector" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link> */}
      </div>
      {/* <div className="social-row">
      <Link href="https://www.facebook.com/Moob-Financial-103241105532609" target="_blank">
          <SvgIcon color="primary" component={facebook} />
        </Link>

        <Link href="https://www.youtube.com/channel/UCyabKpiS1f28QrlM8xIn61w" target="_blank">
          <SvgIcon color="primary" component={youtube} />
        </Link>

        <Link href="https://www.instagram.com/moobfinancial/" target="_blank">
          <SvgIcon color="primary" component={instagram} />
        </Link> */}

        {/* <Link href="https://www.reddit.com/user/moobfinancial/" target="_blank">
          <SvgIcon color="primary" component={reddit} />
        </Link> */}



        {/* <Link href="https://discord.me/hector" target="_blank">
        <SvgIcon color="primary" component={Discord} />
      </Link> */}
      {/* </div> */}
    </div>


  );
}
