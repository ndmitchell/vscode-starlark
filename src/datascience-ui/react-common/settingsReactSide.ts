// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';
import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';

import { IDataScienceExtraSettings } from '../../client/datascience/types';

// The WebPanel constructed by the extension should inject a getInitialSettings function into
// the script. This should return a dictionary of key value pairs for settings
// tslint:disable-next-line:no-any
export declare function getInitialSettings(): any;

let loadedSettings: IDataScienceExtraSettings;

export function getSettings(): IDataScienceExtraSettings {
    if (loadedSettings === undefined) {
        load();
    }

    return loadedSettings;
}

export function updateSettings(jsonSettingsString: string) {
    const newSettings = JSON.parse(jsonSettingsString);
    loadedSettings = <IDataScienceExtraSettings>newSettings;
}

function load() {
    // tslint:disable-next-line:no-typeof-undefined
    if (typeof getInitialSettings !== 'undefined') {
        loadedSettings = <IDataScienceExtraSettings>getInitialSettings(); // NOSONAR
    } else {
        // Default settings for tests
        loadedSettings = {
            allowImportFromNotebook: true,
            jupyterLaunchTimeout: 10,
            jupyterLaunchRetries: 3,
            enabled: true,
            jupyterServerURI: 'local',
            notebookFileRoot: 'WORKSPACE',
            changeDirOnImportExport: true,
            useDefaultConfigForJupyter: true,
            jupyterInterruptTimeout: 10000,
            searchForJupyter: true,
            allowInput: true,
            showCellInputCode: true,
            collapseCellInputCodeByDefault: true,
            maxOutputSize: 400,
            errorBackgroundColor: '#FFFFFF',
            sendSelectionToInteractiveWindow: false,
            markdownRegularExpression: '^(#\\s*%%\\s*\\[markdown\\]|#\\s*\\<markdowncell\\>)',
            codeRegularExpression: '^(#\\s*%%|#\\s*\\<codecell\\>|#\\s*In\\[\\d*?\\]|#\\s*In\\[ \\])',
            showJupyterVariableExplorer: true,
            variableExplorerExclude: 'module;function;builtin_function_or_method',
            enablePlotViewer: true,
            extraSettings: {
                editor: {
                    cursor: 'line',
                    cursorBlink: 'blink',
                    autoClosingBrackets: 'languageDefined',
                    autoClosingQuotes: 'languageDefined',
                    autoSurround: 'languageDefined',
                    autoIndent: false,
                    fontLigatures: false
                },
                fontSize: 14,
                fontFamily: 'Consolas, \'Courier New\', monospace',
                theme: 'Default Dark+'
            },
            intellisenseOptions: {
                quickSuggestions: {
                    other: true,
                    comments: false,
                    strings: false
                },
                acceptSuggestionOnEnter: 'on',
                quickSuggestionsDelay: 10,
                suggestOnTriggerCharacters: true,
                tabCompletion: 'on',
                suggestLocalityBonus: true,
                suggestSelection: 'recentlyUsed',
                wordBasedSuggestions: true,
                parameterHintsEnabled: true
            },
            runStartupCommands: '',
            debugJustMyCode: true
        };
    }
}

export function computeEditorOptions(): monacoEditor.editor.IEditorOptions {
    const intellisenseOptions = getSettings().intellisenseOptions;
    const extraSettings = getSettings().extraSettings;
    if (intellisenseOptions && extraSettings) {
        return {
            quickSuggestions: {
                other: intellisenseOptions.quickSuggestions.other,
                comments: intellisenseOptions.quickSuggestions.comments,
                strings: intellisenseOptions.quickSuggestions.strings
            },
            acceptSuggestionOnEnter: intellisenseOptions.acceptSuggestionOnEnter,
            quickSuggestionsDelay: intellisenseOptions.quickSuggestionsDelay,
            suggestOnTriggerCharacters: intellisenseOptions.suggestOnTriggerCharacters,
            tabCompletion: intellisenseOptions.tabCompletion,
            suggest: {
                localityBonus: intellisenseOptions.suggestLocalityBonus
            },
            suggestSelection: intellisenseOptions.suggestSelection,
            wordBasedSuggestions: intellisenseOptions.wordBasedSuggestions,
            parameterHints: {
                enabled: intellisenseOptions.parameterHintsEnabled
            },
            cursorStyle: extraSettings.editor.cursor,
            cursorBlinking: extraSettings.editor.cursorBlink,
            autoClosingBrackets: extraSettings.editor.autoClosingBrackets as any,
            autoClosingQuotes: extraSettings.editor.autoClosingQuotes as any,
            autoIndent: extraSettings.editor.autoIndent as any,
            autoSurround: extraSettings.editor.autoSurround as any,
            fontLigatures: extraSettings.editor.fontLigatures
        };
    }

    return {};
}
