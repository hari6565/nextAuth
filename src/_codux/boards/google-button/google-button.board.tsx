import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GoogleButton } from '../../../components/googleButton/googleButton';

export default createBoard({
    name: 'GoogleButton',
    Board: () => <GoogleButton />,
    isSnippet: true,
});