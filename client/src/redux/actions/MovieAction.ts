import {IAction} from "./ActionTypes";
import {IMovie, MovieService} from "../../services/MovieService";
import {ISearchCondition, SwitchType} from "../../services/CommonTypes";
import {ThunkAction} from 'redux-thunk';
import {IRootState} from "../reducers/RootReducer";

export type SaveMoviesAction = IAction<'movie_save', {
    movies: IMovie[],
    total: number,
}>;

function saveMovieAction(movies: IMovie[], total: number): SaveMoviesAction {
    return {
        type: 'movie_save',
        payload: {
            movies,
            total,
        },
    };
}

export type SetLoadingAction = IAction<'movie_set_loading', boolean>;

function setLoadingAction(isLoading: boolean): SetLoadingAction {
    return {
        type: 'movie_set_loading',
        payload: isLoading,
    };
}

export type SetConditionAction = IAction<'movie_set_condition', ISearchCondition>;

function setConditionAction(condition: ISearchCondition): SetConditionAction {
    return {
        type: 'movie_set_condition',
        payload: condition,
    };
}

export type DeleteAction = IAction<'movie_delete', string>

function deleteAction(id: string): DeleteAction {
    return {
        type: 'movie_delete',
        payload: id,
    };
}

export type MovieChangeSwitchAction = IAction<'movie_switch', {
    type: SwitchType,
    checked: boolean,
    id: string,
}>

function changeSwitchAction(type: SwitchType, checked: boolean, id: string): MovieChangeSwitchAction {
    return {
        type: 'movie_switch',
        payload: {
            type,
            checked,
            id,
        },
    };
}

export type MovieActions =
    SaveMoviesAction
    | SetLoadingAction
    | SetConditionAction
    | DeleteAction
    | MovieChangeSwitchAction;

function fetchMovies(condition: ISearchCondition):
    ThunkAction<Promise<void>, IRootState, any, MovieActions> {
    return async (dispatch, getState) => {
        dispatch(setLoadingAction(true));
        dispatch(setConditionAction(condition));
        const curCondition = getState().movie.condition;
        const resp = await MovieService.getMovies(curCondition);
        dispatch(saveMovieAction(resp.data, resp.total));
        dispatch(setLoadingAction(false));
    };
}

function deleteMovie(id: string):
    ThunkAction<Promise<void>, IRootState, any, MovieActions> {
    return async (dispatch, getState) => {
        dispatch(setLoadingAction(true));
        await MovieService.delete(id);
        dispatch(deleteAction(id));
        dispatch(setLoadingAction(false));
    };
}

function changeSwitch(kind: SwitchType, checked: boolean, id: string):
    ThunkAction<Promise<void>, IRootState, any, MovieActions> {
    return async (dispatch, getState) => {
        dispatch(changeSwitchAction(kind, checked, id));
        await MovieService.edit(id, {
            [kind]: checked,
        });
    };
}

export default {
    saveMovieAction,
    setLoadingAction,
    setConditionAction,
    deleteAction,
    fetchMovies,
    deleteMovie,
    changeSwitchAction,
    changeSwitch,
};
