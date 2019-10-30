// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import './index.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { IVsCodeApi } from '../react-common/postOffice';
import { detectBaseTheme } from '../react-common/themeDetector';
import { createStore, generateConnected } from './redux';

// This special function talks to vscode from a web panel
export declare function acquireVsCodeApi(): IVsCodeApi;
const baseTheme = detectBaseTheme();

// Create the redux store
const store = createStore(
    // tslint:disable-next-line: no-typeof-undefined
    typeof acquireVsCodeApi !== 'undefined',
    baseTheme);

// Wire up a connected react control for our NativeEditor
const Connected = generateConnected();

// Stick them all together
// tslint:disable:no-typeof-undefined
ReactDOM.render(
    <Provider store={store}>
        <Connected />
    </Provider>,
  document.getElementById('root') as HTMLElement
);
