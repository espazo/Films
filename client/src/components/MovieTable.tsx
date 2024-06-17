import React from 'react';
import {IMovieState} from "../redux/reducers/MovieReducer";
import {Switch, Table} from 'antd';
import {IMovie} from "../services/MovieService";
import {ColumnProps} from "antd/lib/table";
import defaultPosterImg from '../assets/na.png';
import {SwitchType} from "../services/CommonTypes";

export interface IMovieEvent {
    onLoad(): void,

    onSwitchChange(
        kind: SwitchType,
        newState: boolean,
        id: string,
    ): void,
}

export default class extends React.Component<IMovieState & IMovieEvent> {
    componentDidMount() {
        if (this.props.onLoad) {
            this.props.onLoad();
        }
    }

    private getColumns(): ColumnProps<IMovie>[] {
        return [
            {
                title: 'poster',
                dataIndex: 'poster',
                render(poster: string) {
                    return poster ? <img className='tablePoster' src={poster}/> :
                        <img className='tablePoster' src={defaultPosterImg}/>;
                },
            },
            {
                title: 'name',
                dataIndex: 'name',
            },
            {
                title: 'areas',
                dataIndex: 'areas',
                render: (areas: string[]) => {
                    return areas.join('，');
                },
            },
            {
                title: 'kind',
                dataIndex: 'types',
                render(types: string[]) {
                    return types.join('，');
                },
            },
            {
                title: 'timeLong',
                dataIndex: 'timeLong',
                render(timeLong: number) {
                    return timeLong + ' Minutes';
                }
            },
            {
                title: 'isHot',
                dataIndex: 'isHot',
                render: (isHot: boolean, record) => {
                    return <Switch defaultChecked={isHot} onChange={(checked: boolean) => {
                        this.props.onSwitchChange(SwitchType.isHOt, checked, record._id!);
                    }}/>
                }
            },
            {
                title: 'isComing',
                dataIndex: 'isComing',
                render: (isComing: boolean, record: IMovie) => {
                    return <Switch defaultChecked={isComing} onChange={(checked) => {
                        this.props.onSwitchChange(SwitchType.isComing, checked, record._id!);
                    }}/>
                }
            },
            {
                title: 'isClassic',
                dataIndex: 'isClassic',
                render: (isClassic: boolean, record) => {
                    return <Switch defaultChecked={isClassic} onChange={(checked) => {
                        this.props.onSwitchChange(SwitchType.isClassic, checked, record._id!);
                    }}/>
                }
            },
        ];
    }

    render() {
        return (
            <Table rowKey='_id' dataSource={this.props.data} columns={this.getColumns()}/>
        );
    }
}