import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { Google } from '../../../components/googleLogin/googleLogin';

export default createBoard({
    name: 'Google',
    Board: () => <Google />,
    isSnippet: true,
});