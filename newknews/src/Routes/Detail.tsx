import TypeIframe from "../Components/TypeIframe";
import styled from "styled-components";
const Iframe = styled.iframe<{src: string}>``;

const Wrapper = styled.div`
  height: 5vh;
  font-size: 3vh;
  width: 100vw;
  margin: 0px auto;
  text-align: center;
  background-color: gray;
`;
const Center = styled.div`
  width: 100vw;
  height: auto;
  text-align: center;
  background-color: brown;
`;
const LeftIframe = styled.div`
  float: left;
  background-color: yellow;
  width: 48vw;
  margin: 1vw;
`;
const RightIframe = styled.div`
  float: right;
  background-color: yellow;
  width: 48vw;
  margin: 1vw;
`;
const ImageWrapper = styled.div`
  float: left;
  margin: 1vw;
  width: 8vw;
  height: auto;
  img{
    width: 8vw;
    height: 4vw;
  }
`;
const HeadlineWrapper = styled.div`
  float: right;
  margin: 1vw;
  width: 36vw;
  height: auto;
  text-align: left;
`;

function Detail() {
  return (
    <>
    <Wrapper>
      newKnews
    </Wrapper>
    <Wrapper>
      김대기 "국정상황실 대처 잘해"... 고민정 "대통령실이 먼저 안게 잘했다?"
    </Wrapper>
    <Center>
      <LeftIframe>
        <ImageWrapper>
          <img src="https://cdn.rozeus.com/mediaLogo/rectangle/aa007.gif"/>
        </ImageWrapper>
        <HeadlineWrapper>
        김대기 윤, 그날 사무실에 있었다 ...'청담동 술자리 의혹 반박'
        </HeadlineWrapper>
        {/* <TypeIframe url="https://v.daum.net/v/20221105203122210"/> */}
      </LeftIframe>
      <RightIframe>
        <ImageWrapper>
          <img src="https://img.segye.com/content/image/2022/11/09/20221109502974.jpg"/>
        </ImageWrapper>
        <HeadlineWrapper>
        김대기 "대통령 그날 사무실에 있었다"... 권익위 "공익신고자 검토"
        </HeadlineWrapper>
        {/* <TypeIframe url="https://v.daum.net/v/20221105202512181"/> */}
      </RightIframe>
      <LeftIframe>
        <TypeIframe url="https://v.daum.net/v/20221105203122210"/>
      </LeftIframe>
      <RightIframe>
        <TypeIframe url="https://v.daum.net/v/20221105202512181"/>
      </RightIframe>
      <LeftIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105203122210"/> */}
      </LeftIframe>
      <RightIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105202512181"/> */}
      </RightIframe>
      <LeftIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105203122210"/> */}
      </LeftIframe>
      <RightIframe>
        {/* <TypeIframe url="https://v.daum.net/v/20221105202512181"/> */}
      </RightIframe>
    </Center>
    </>
  ); 
}
export default Detail;