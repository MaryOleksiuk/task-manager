// Core
import React from 'react';
import moment from 'moment';

export const Footer = () => {
    const year = moment().format('YYYY');

    return (
        <footer>
            <span>© {year} Created by Mariia Oleksiuk</span>
        </footer>
    );
};
