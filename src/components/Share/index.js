import React from 'react';
import { FacebookShareButton, FacebookIcon, FacebookShareCount } from "react-share";

const url = "https://nirbhar.me",
    quote = "I pledge to boycott Chinese products, uninstall all Chinese apps and suport #MadeinIndia. You can do so too, just go to https://nirbar.me",
    hashtag = "#atmanirbhar";

export default function () {
    return (
        <div className="facebook-share">
            <FacebookShareButton
                url={url}
                quote={quote}
                hashtag={hashtag}
                className="facebook-share-button">
                <FacebookIcon size={32} round />
            </FacebookShareButton>
            <FacebookShareCount url={url} className="facebook-share-count">
                {count => count}
            </FacebookShareCount>
        </div>
    )
}