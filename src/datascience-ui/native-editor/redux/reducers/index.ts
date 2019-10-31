// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.
'use strict';

import { INativeEditorActionMapping, NativeEditorActionTypes } from '../actions';
import { Creation } from './creation';
import { Execution } from './execution';
import { Focus } from './focus';
import { Variables } from './variables';
import { Helpers } from './helpers';
import { InteractiveWindowMessages } from '../../../../client/datascience/interactive-common/interactiveWindowTypes';

// The list of reducers. 1 per message/action.
export const reducerMap: INativeEditorActionMapping = {
    // State updates
    [NativeEditorActionTypes.INSERT_ABOVE]: Creation.insertAbove,
    [NativeEditorActionTypes.INSERT_ABOVE_FIRST]: Creation.insertAboveFirst,
    [NativeEditorActionTypes.INSERT_BELOW]: Creation.insertBelow,
    [NativeEditorActionTypes.FOCUS_CELL]: Focus.focusCell,
    [NativeEditorActionTypes.ADD_NEW_CELL]: Creation.addNewCell,
    [NativeEditorActionTypes.EXECUTE_CELL]: Execution.executeCell,
    [NativeEditorActionTypes.EXECUTE_ALL_CELLS]: Execution.executeAllCells,
    [NativeEditorActionTypes.TOGGLE_VARIABLE_EXPLORER]: Variables.toggleVariableExplorer,
    [NativeEditorActionTypes.REFRESH_VARIABLES]: Variables.refreshVariables,

    // Messages from the webview (some are ignored)
    [InteractiveWindowMessages.StartCell]: Creation.startCell,
    [InteractiveWindowMessages.FinishCell]: Creation.finishCell,
    [InteractiveWindowMessages.UpdateCell]: Creation.updateCell,
    // [InteractiveWindowMessages.GotoCodeCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.CopyCodeCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.RestartKernel]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.Export]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.GetAllCells]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ReturnAllCells]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.DeleteCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.DeleteAllCells]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.Undo]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.Redo]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ExpandAll]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.CollapseAll]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.StartProgress]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.StopProgress]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.Interrupt]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.SubmitNewCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.UpdateSettings]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.DoSave]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.SendInfo]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.Started]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.AddedSysInfo]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.RemoteAddCode]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.RemoteReexecuteCode]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.Activate]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ShowDataViewer]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.GetVariablesRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.GetVariablesResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.GetVariableValueRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.GetVariableValueResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.VariableExplorerToggle]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ProvideCompletionItemsRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.CancelCompletionItemsRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ProvideCompletionItemsResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ProvideHoverRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.CancelHoverRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ProvideHoverResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ProvideSignatureHelpRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.CancelSignatureHelpRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ProvideSignatureHelpResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.AddCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.EditCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.RemoveCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.SwapCells]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.InsertCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.LoadOnigasmAssemblyRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.LoadOnigasmAssemblyResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.LoadTmLanguageRequest]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.LoadTmLanguageResponse]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.OpenLink]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ShowPlot]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.StartDebugging]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.StopDebugging]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.GatherCode]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.LoadAllCells]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.LoadAllCellsComplete]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ScrollToCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.ReExecuteCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NotebookIdentity]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NotebookDirty]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NotebookClean]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.SaveAll]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NativeCommand]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.VariablesComplete]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NotebookRunAllCells]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NotebookRunSelectedCell]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.NotebookAddCellBelow]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.RenderComplete]: Helpers.defaultReducer,
    // [InteractiveWindowMessages.FocusedCellEditor]: Helpers.defaultReducer
}
