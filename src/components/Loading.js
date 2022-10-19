import styled from "styled-components"

const LoadingContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  z-index: 10;
  & img {
    width: 100%;
    height: auto;
  }
`

const Loading = () => {
  return (
    <LoadingContainer>
      <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2a8f4464-f2a3-497b-aa19-cd6d7f1982e5/loading.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221018%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221018T191610Z&X-Amz-Expires=86400&X-Amz-Signature=c2f313cf73707063a3d110f7b9d80434e03d5597b90ff11c032c43b2ab86c016&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22loading.gif%22&x-id=GetObject" />
    </LoadingContainer>
  );
}

export default Loading; 