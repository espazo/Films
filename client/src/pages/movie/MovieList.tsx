import MovieTable, {IMovieEvent} from "../../components/MovieTable";
import {connect} from 'react-redux';
import {IRootState} from "../../redux/reducers/RootReducer";
import {Dispatch} from "redux";
import MovieAction from "../../redux/actions/MovieAction";
import {IMovieState} from "../../redux/reducers/MovieReducer";
import {SwitchType} from "../../services/CommonTypes";

function mapStateToProps(state: IRootState): IMovieState {
    return state.movie;
}

function mapDispatchToProps(dispatch: Dispatch<any>): IMovieEvent {
    return {
        onLoad() {
            dispatch(MovieAction.fetchMovies({
                page: 1,
                limit: 10,
                key: ''
            }));
        },
        onSwitchChange(kind: SwitchType, checked: boolean, id: string) {
            dispatch(MovieAction.changeSwitch(
                kind,
                checked,
                id,
            ));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
