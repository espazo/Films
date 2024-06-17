import React from "react";
import ImgUploader from "../../components/ImgUploader";

export default class extends React.Component {

    state = {
        img: '',

    }

    render() {
        return (
            // <ImgUploader curImgUrl='https://www.google.com/logos/doodles/2024/celebrating-rita-lobato-velho-6753651837110235.4-2x.png'/>
            <ImgUploader
                value={this.state.img}
                onChange={newUrl => {
                    this.setState({
                        img: newUrl,
                    });
                }}
            />
        );
    }
}
