import React from "react";
import {Button, Checkbox, Form, InputNumber, Switch, Input, message} from 'antd';
import {WrappedFormUtils} from "antd/lib/form/Form";
import {IMovie} from "../services/MovieService";
import ImgUploader from "./ImgUploader";
import {RouteComponentProps, withRouter} from "react-router";


interface IFormProp extends RouteComponentProps {
    form: WrappedFormUtils,
    onSubmit: (movie: IMovie) => Promise<string>;
}

const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 19,
        offset: 1,
    },
};

const AllAreams: { label: string, value: string }[] = [
    {label: 'cn', value: 'cn'},
    {label: 'us', value: 'us'},
    {label: 'tw', value: 'tw'},
    {label: 'hk', value: 'hk'},
];

const AllKinds: { label: string, value: string }[] = [
    {label: 'hy', value: 'hy'},
    {label: 'sp', value: 'sp'},
    {label: 'ca', value: 'ca'},
    {label: 'fe', value: 'fe'},
];

const AreaGroups = Checkbox.Group;

class MovieForm extends React.Component<IFormProp> {
    private handleSubmit(e: React.FormEvent<any>) {
        e.preventDefault();
        this.props.form.validateFields(async errors => {
            if (!errors) {
                const formData = this.props.form.getFieldsValue();
                const result: string = await this.props.onSubmit(formData as IMovie);
                if (result) {
                    message.error(`add fail: ${result}`);
                } else {
                    message.success('add success', 1, () => {
                        this.props.history.push('/movie');
                    });
                }
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return <Form
            onSubmit={this.handleSubmit.bind(this)}
            {...formItemLayout} style={{
            width: '400px',
        }}>
            <Form.Item label='item name'>
                {getFieldDecorator<IMovie>('name', {
                    rules: [{required: true, message: 'username is required'},]
                })(
                    <input/>
                )}
            </Form.Item>
            <Form.Item label='item poster'>
                {getFieldDecorator<IMovie>('poster')(
                    <ImgUploader/>
                )}
            </Form.Item>
            <Form.Item label='item areas'>
                {getFieldDecorator<IMovie>('areas', {
                    rules: [{required: true, message: 'areas is required'}]
                })(
                    <AreaGroups options={AllAreams}/>
                )}
            </Form.Item>
            <Form.Item label='item kinds'>
                {getFieldDecorator<IMovie>('types', {
                    rules: [{required: true, message: 'kinds is required'}]
                })(
                    <AreaGroups options={AllKinds}/>
                )}
            </Form.Item>
            <Form.Item label='item timelong'>
                {getFieldDecorator<IMovie>('timeLong', {
                    rules: [{required: true, message: 'timelong is required'}]
                })(
                    <InputNumber min={1} step={10}/>
                )}
            </Form.Item>
            <Form.Item label='item is hot'>
                {getFieldDecorator<IMovie>('isHot', {
                    initialValue: false,
                })(
                    <Switch/>
                )}
            </Form.Item>
            <Form.Item label='item is coming'>
                {getFieldDecorator<IMovie>('isComing', {
                    initialValue: false,
                })(
                    <Switch/>
                )}
            </Form.Item>
            <Form.Item label='item is classic'>
                {getFieldDecorator<IMovie>('isClassic', {
                    initialValue: false,
                })(
                    <Switch/>
                )}
            </Form.Item>
            <Form.Item label='item is description'>
                {getFieldDecorator<IMovie>('description')(
                    <Input.TextArea></Input.TextArea>
                    // <div></div>
                )}
            </Form.Item>
            <Form.Item labelCol={{span: 0}} wrapperCol={{span: 19, offset: 5}}>
                <Button htmlType='submit' type='primary'>submit</Button>
            </Form.Item>
        </Form>;
    }
}


export default withRouter(Form.create<IFormProp>()(MovieForm));
