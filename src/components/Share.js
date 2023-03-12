import React from "react";
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, EmailShareButton, EmailIcon, PinterestShareButton, PinterestIcon } from "react-share";

const Share = () => {
    return (
        <div>
            <FacebookShareButton url={"https://api-ninjas.com/api/quotes"}>
                <FacebookIcon size={32} round/>
            </FacebookShareButton>
            <TwitterShareButton url={"https://api-ninjas.com/api/quotes"}>
                <TwitterIcon size={32} round/>
            </TwitterShareButton>
            <PinterestShareButton url={"https://api-ninjas.com/api/quotes"}>
                <PinterestIcon size={32} round/>
            </PinterestShareButton>
            <EmailShareButton url={"https://api-ninjas.com/api/quotes"}>
                <EmailIcon size={32} round/>
            </EmailShareButton>
        </div>
    )
};

export default Share;