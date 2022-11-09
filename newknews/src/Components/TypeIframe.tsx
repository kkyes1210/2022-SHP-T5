import styled from "styled-components";


interface IIframe{
    url: string;
}

const Size = styled.div`
iframe{
    width: 40vw;
    height: 40vw;
}
`;
function TypeIframe(target: IIframe){
    return(
        <Size>
            <iframe src={target.url}>
            
            </iframe>
        </Size>
    );
}
export default TypeIframe;