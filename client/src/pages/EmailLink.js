import React from 'react';

const EmailLink = ({ email }) => {
    const handleEmailClick = () => {
        const mailtoURL = `mailto:?to=${email}&subject=Hello`;
        window.open(mailtoURL);
    };

    return (
        <a href="/" onClick={handleEmailClick}>
            {email}
        </a>
    );
};

export default EmailLink;