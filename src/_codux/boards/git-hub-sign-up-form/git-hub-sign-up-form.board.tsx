import React from 'react';
import { createBoard } from '@wixc3/react-board';
import { GitHubSignUpForm } from '../../../components/githubLogin/githubLogin';

export default createBoard({
    name: 'GitHubSignUpForm',
    Board: () => <GitHubSignUpForm />,
    isSnippet: true,
});