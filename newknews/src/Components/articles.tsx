import styled from "styled-components";
import { useState } from "react";

const Leftframe = styled.div`
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 48vw;
  margin: 1vw;
`;
const Rightframe = styled.div`
  float: right;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  width: 48vw;
  margin: 1vw;
`;
const ImageWrapper = styled.div`
  float: left;
  margin: 1vw;
  width: 16vw;
  height: auto;
  display: flex;
  align-items: center;
  img{
    width: 16vw;
    height: 8vw;
  }
`;
const HeadlineWrapper = styled.div`
  float: right;
  width: 30vw;
  height: auto;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
`;



function Accordion({title,
    contentA0,imageFileA0,articleLinkA0,
    contentA1,imageFileA1,articleLinkA1,
    contentA2,imageFileA2,articleLinkA2,
    contentB0,imageFileB0,articleLinkB0,
    contentB1,imageFileB1,articleLinkB1,
    contentB2,imageFileB2,articleLinkB2}){
    const [isCheck, setCheck] = useState(false);

    return(
        <>
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                boxSizing: "border-box",
                backgroundColor: "gray",
                width: "100%",
                height: "60px",
                color: "#fff",
                margin: "5px 0px"
            }}>
                <h1 style={{ fontSize: "20px"}}>{title}</h1>
                <button onClick={() => {
                    setCheck((e) => !e);
                }}>
                    {isCheck ? "-" : "+"}
                </button>
            </div>
            {isCheck && (
                <p style={{
                    margin: "0",
                    backgroundColor: "skyblue",                    
                }}>
                    <Leftframe>
                        Type A
                    </Leftframe>
                    <Rightframe>
                        Type B
                    </Rightframe>
                    <Leftframe>
                        <ImageWrapper>
                            <img src={imageFileA0}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventA0}>
                            {contentA0}
                        </HeadlineWrapper>
                    </Leftframe>

                    <Rightframe>
                        <ImageWrapper>
                            <img src={imageFileB0}/>
                        </ImageWrapper>
                        <HeadlineWrapper onClick={MouseClickEventB0}>
                            {contentB0}
                        </HeadlineWrapper>
                    </Rightframe>
                </p>
            )}
        </>
    );
}

function MouseClickEventA0(){
    window.open('https://news.kbs.co.kr/news/view.do?ncd=5594545');
}
function MouseClickEventB0(){
    window.open('https://m.khan.co.kr/national/national-general/article/202211052028001');
}
export default Accordion;
