import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.module.css";
import App from "./App";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/Image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import MemberRepository from "./service/member_repository";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const FileInput = memo(props=>(<ImageFileInput {...props} imageUploader={imageUploader}/>));
const memberRepository = new MemberRepository();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} FileInput={FileInput} memberRepository={memberRepository}/>
  </React.StrictMode>,
  document.getElementById("root")
);

