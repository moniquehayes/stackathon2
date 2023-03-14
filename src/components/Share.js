import React from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, PinterestShareButton, PinterestIcon } from "react-share";

const Share = () => {
    return (
        <div>
            <FacebookShareButton url={"https://github.com/moniquehayes/stackathon2"}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton url={"https://github.com/moniquehayes/stackathon2"}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <PinterestShareButton url={"https://github.com/moniquehayes/stackathon2"}>
                <PinterestIcon size={32} round/>
            </PinterestShareButton>
            <EmailShareButton url={"https://github.com/moniquehayes/stackathon2"}>
                <EmailIcon size={32} round/>
            </EmailShareButton>
        </div>
    )
};

export default Share;