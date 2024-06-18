import React from "react";
import {Form} from 'antd';
import {WrappedFormUtils} from "antd/lib/form/Form";


interface IFormProp {
    form: WrappedFormUtils<any>,
}

class MovieForm extends React.Component<IFormProp> {
    render() {
        return <Form>
            <Form.Item></Form.Item>
        </Form>;
    }
}

export default Form.create()(MovieForm);
