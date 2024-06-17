import React from 'react';
import {message, Modal, Upload} from "antd";
import {UploadFile} from "antd/lib";
import {IResponseData, IResponseError} from "../services/CommonTypes";

interface IImgUploaderProps {
    value?: string,

    onChange(imgUrl: string): void,
}

interface IImgStatus {
    showModal: boolean,

}

export default class extends React.Component<IImgUploaderProps, IImgStatus> {

    private getUploadContent() {
        if (this.props.value) {
            return null;
        } else {
            return <div>
                +
                <div>Upload</div>
            </div>;
        }
    }

    private getFileList(): UploadFile[] {
        const curImgUrl = this.props.value;
        if (curImgUrl) {
            return [{
                uid: curImgUrl,
                name: curImgUrl,
                url: curImgUrl,
            }];
        }
        return [];
    }

    async handleRequest(params: any) {
        let formData = new FormData();
        formData.append(params.filename, params.file);
        const request = new Request(params.action, {
            method: 'post',
            body: formData,
        });
        const response: IResponseData<string> | IResponseError = await fetch(request).then(response => response.json());
        if (response.err) {
            message.error(response.err);
        } else {
            message.info('upload success');
            this.props.onChange(response.data!);
        }
    }

    state: IImgStatus = {
        showModal: false,
    };

    render() {
        return (
            <div>
                <Upload
                    action='/api/upload'
                    name='imgfile'
                    accept='.jpg,.jpeg,.png,.gif'
                    listType='picture-card'
                    fileList={this.getFileList()}
                    customRequest={this.handleRequest.bind(this)}
                    onRemove={() => this.props.onChange('')}
                    onPreview={() => {
                        this.setState({
                            showModal: true,
                        });
                    }}
                >
                    {this.getUploadContent()}
                </Upload>
                <Modal visible={this.state.showModal} footer={null} onCancel={() => {
                    this.setState({
                        showModal: false,
                    });
                }}>
                    <img src={this.props.value} style={{width: '100%'}} alt="image"/>
                </Modal>
            </div>
        );
    }
}
