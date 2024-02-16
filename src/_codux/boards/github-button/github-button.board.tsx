import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GithubButton } from '../../../components/github-button/github-button';

export default createBoard({
    name: 'GithubButton',
    Board: () => <GithubButton />,
    isSnippet: true,
});