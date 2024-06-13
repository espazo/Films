import {IMovie} from "../../services/MovieService";
import {ISearchCondition} from "../../services/CommonTypes";
import {
    DeleteAction,
    MovieActions,
    SaveMoviesAction,
    SetConditionAction,
    SetLoadingAction
} from "../actions/MovieAction";
import {Reducer} from "react";

export type IMovieCondition = Required<ISearchCondition>;

export interface IMovieState {
    data: IMovie[],
    condition: IMovieCondition,
    total: number,
    isLoading: boolean,
}

const defaultState: IMovieState = {
    data: [],
    condition: {
        page: 1,
        limit: 10,
        key: '',
    },
    total: 0,
    isLoading: false,
};

type MovieReducer<A> = Reducer<IMovieState, A>;

const saveMovie: MovieReducer<SaveMoviesAction> = function (prevState, action) {
    // return Object.assign({}, prevState, {
    //     data: action.payload.movies,
    //     total: action.payload.total,
    // });
    return {
        ...prevState,
        data: action.payload.movies,
        total: action.payload.total,
    };
}

const setCondition: MovieReducer<SetConditionAction> = function (prevState, action) {
    return {
        ...prevState,
        condition: {
            ...prevState.condition,
            ...action.payload,
        },
    };
}

const setLoading: MovieReducer<SetLoadingAction> = function (prevState, action) {
    return {
        ...prevState,
        isLoading: action.payload,
    };
}

const deleteMovie: MovieReducer<DeleteAction> = function (prevState, action) {
    return {
        ...prevState,
        data: prevState.data.filter(m => m._id != action.payload),
        total: prevState.total - 1,
    };
}

export default function (preyState: IMovieState = defaultState, action: MovieActions) {
    switch (action.type) {
        case 'movie_delete':
            deleteMovie(preyState, action);
            break;
        case 'movie_save':
            saveMovie(preyState, action);
            break;
        case 'movie_set_condition':
            setCondition(preyState, action);
            break;
        case 'movie_set_loading':
            setLoading(preyState, action);
            break;
        default:
            break;
    }
};
