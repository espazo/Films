import {IAction} from "./ActionTypes";
import {IMovie} from "../../services/MovieService";
import {ISearchCondition} from "../../services/CommonTypes";

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

export type MovieActions = SaveMoviesAction | SetLoadingAction | SetConditionAction | DeleteAction;

export default {
    saveMovieAction,
    setLoadingAction,
    setConditionAction,
    deleteAction,
};
