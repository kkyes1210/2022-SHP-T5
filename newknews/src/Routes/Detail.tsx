import styled from "styled-components";
import Accordion from "../Components/articles";

const Wrapper = styled.div`
  height: 5vh;
  line-height: 5vh;
  color: #fff;
  font-size: 30px;
  width: 100vw;
  text-align: center;
  background-color: gray;
`;
const Center = styled.div`
  width: 100vw;
  height: auto;
  text-align: center;
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

  &.hover {
    background-color: white;
  }
`;

let headline:string[] = [
  '이태원 참사 서울분향소에 6일간 11만여명 발길',
  '서울 합동분향소에 6일간 추모객 11여 명 다녀가',
  '서울 합동분향소, 6일간 11만명 방문[이태원 핼러윈 참사]',
  '서울광장 분향소, 이태원 사고 사망자 -> 참사 희생자로 문구 변경',
  '피해 신고 15일까지로 연장... 지하철역 안전인력 보강',
  '서울광장 분향소 현판 이태원 참사 희생자로 문구 변경',

  '미국,캐나다 방공시스템 업그레이드 논의... 북한 미사일 위협 대비',
  '금도 넘는 북한과 대화하라는중국',
  '미국의 북한 피 말리기 작전',
  '중국은 비핵화보다 북한과 우호가 중요',
  '북한: 유엔총장은 미국의 허수아비',
  '북한Tv, 김정은 딸 이틀 째 공개..',
]
let articleLink:string[] = [
  'https://v.daum.net/v/20221105203122210',
  'https://v.daum.net/v/20221105202512181',
  'https://news.kbs.co.kr/news/view.do?ncd=5594545',
  'https://m.khan.co.kr/national/national-general/article/202211052028001',
  'https://v.daum.net/v/20221114155323264',
  'https://v.daum.net/v/20221114154435808',


]
let imageFiles:string[] = [
  'https://cdn.rozeus.com/mediaLogo/rectangle/aa007.gif',
  'https://img.segye.com/content/image/2022/11/09/20221109502974.jpg',
  'https://thumb.mt.co.kr/06/2022/11/2022110609562389716_1.jpg/dims/optimize/',
  'https://image.imnews.imbc.com/news/2022/society/article/__icsFiles/afieldfile/2022/11/13/n-221112-05.jpg',
  'https://img1.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/14/yonhap/20221114155323832micr.jpg',
  'https://img4.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202211/14/Edaily/20221114154438854fhmp.jpg',


]

function Detail() {
  return (
    <>
    <Wrapper>
      이슈 vs 이슈
    </Wrapper>

      {
        testitem.map((item)=>{ 
          <Accordion title={item.title}
          contentA0={headline[0]} imageFileA0={imageFiles[0]} articleLinkA0={articleLink[0]}
          contentA1={headline[1]} imageFileA1={imageFiles[1]} articleLinkA1={articleLink[1]}
          contentA2={headline[2]} imageFileA2={imageFiles[2]} articleLinkA2={articleLink[2]}
          contentB0={headline[3]} imageFileB0={imageFiles[3]} articleLinkB0={articleLink[3]}
          contentB1={headline[4]} imageFileB1={imageFiles[4]} articleLinkB1={articleLink[4]}
          contentB2={headline[5]} imageFileB2={imageFiles[5]} articleLinkB2={articleLink[5]}/>
          console.log(item)
        })
      }

    <Center>
      <Accordion title={"이태원 합동분향소"} 
      contentA0={headline[0]} imageFileA0={imageFiles[0]} articleLinkA0={articleLink[0]}
      contentA1={headline[1]} imageFileA1={imageFiles[1]} articleLinkA1={articleLink[1]}
      contentA2={headline[2]} imageFileA2={imageFiles[2]} articleLinkA2={articleLink[2]}
      contentB0={headline[3]} imageFileB0={imageFiles[3]} articleLinkB0={articleLink[3]}
      contentB1={headline[4]} imageFileB1={imageFiles[4]} articleLinkB1={articleLink[4]}
      contentB2={headline[5]} imageFileB2={imageFiles[5]} articleLinkB2={articleLink[5]}/> 

      <Accordion title={"북한"} 
      contentA0={headline[0]} imageFileA0={imageFiles[0]} articleLinkA0={articleLink[0]}
      contentA1={headline[1]} imageFileA1={imageFiles[1]} articleLinkA1={articleLink[1]}
      contentA2={headline[2]} imageFileA2={imageFiles[2]} articleLinkA2={articleLink[2]}
      contentB0={headline[3]} imageFileB0={imageFiles[3]} articleLinkB0={articleLink[3]}
      contentB1={headline[4]} imageFileB1={imageFiles[4]} articleLinkB1={articleLink[4]}
      contentB2={headline[5]} imageFileB2={imageFiles[5]} articleLinkB2={articleLink[5]}/>

      <Accordion title={"건국대학교"} 
      contentA0={headline[0]} imageFileA0={imageFiles[0]} articleLinkA0={articleLink[0]}
      contentA1={headline[1]} imageFileA1={imageFiles[1]} articleLinkA1={articleLink[1]}
      contentA2={headline[2]} imageFileA2={imageFiles[2]} articleLinkA2={articleLink[2]}
      contentB0={headline[3]} imageFileB0={imageFiles[3]} articleLinkB0={articleLink[3]}
      contentB1={headline[4]} imageFileB1={imageFiles[4]} articleLinkB1={articleLink[4]}
      contentB2={headline[5]} imageFileB2={imageFiles[5]} articleLinkB2={articleLink[5]}/>

      <Accordion title={"수능"} 
      contentA0={headline[0]} imageFileA0={imageFiles[0]} articleLinkA0={articleLink[0]}
      contentA1={headline[1]} imageFileA1={imageFiles[1]} articleLinkA1={articleLink[1]}
      contentA2={headline[2]} imageFileA2={imageFiles[2]} articleLinkA2={articleLink[2]}
      contentB0={headline[3]} imageFileB0={imageFiles[3]} articleLinkB0={articleLink[3]}
      contentB1={headline[4]} imageFileB1={imageFiles[4]} articleLinkB1={articleLink[4]}
      contentB2={headline[5]} imageFileB2={imageFiles[5]} articleLinkB2={articleLink[5]}/>
    </Center>
    </>
  );
}

const testitem = [
  {
    index: 1,
    title: `美, 폴란드 피격 미사일, '우크라 오발탄 결론`,
    url: "https://www.bigkinds.or.kr/resources/images/02100851/2022/11/17/02100851.20221117075823001.01.jpg",
    press: "아주경제",
    pageLinke: "https://v.daum.net/v/20221105203122210"
  },
  {
    index: 1,
    title: `‘폴란드 타격’ 미사일 놓고...나토 “우크라 것” 젤렌스키 “러시아 소행”`,
    url: "",
    press: "조선일보",
  },
  {
    index: 1,
    title: `나토 "폴란드에 떨어진 건 우크라 방공 미사일…러 책임"`,
    url: "",
    press: "SBS",
  },
  {
    index: 1,
    title: `美 “우크라 미사일이 폴란드 피격 조사 신뢰”…원인은 러시아"`,
    url: "",
    press: "국민일보",
  },
  {
    index: 1,
    title: `폴란드 두다 대통령 "폴란드에 대한 공격이 아니었다"`,
    url: "",
    press: "파이낸셜뉴스",
  },
  {
    index: 1,
    title: `나토 '우크라 오폭' 결론에… 젤렌스키 "러시아가 미사일 쏜 것" 부인`,
    url: "",
    press: "한국일보",
  },
  {
    index: 1,
    title: `[영상] 젤렌스키 “폴란드 피격 미사일, 러가 쏜 것”…나토 잠정 결론 정면 부인 [나우,어스]`,
    url: "",
    press: "헤럴드경제",
  },
  {
    index: 1,
    title: `나토 "폴란드 떨어진 건 우크라 미사일"…젤렌스키 "우리것 아냐"`,
    url: "",
    press: "머니투데이",
  },
  {
    index: 2,
    title: `코로나19 악화 속 수능 현장…응시생 속속 도착`,
    url: "https://www.bigkinds.or.kr/resources/images/08100101/2022/11/17/08100101.20221117075415001.01.jpg",
    press: "KBS",
  },
  {
    index: 2,
    title: `오늘 2023학년도 수능…이 시각 서대전고`,
    url: "",
    press: "KBS",
  },
  {
    index: 2,
    title: `아이브·뉴진스 '수능 안봐요' vs 男 아이돌 '수능 앞으로'…왜?`,
    url: "",
    press: "머니투데이",
  },
  {
    index: 2,
    title: `광주·전남 96개 시험장에서 수능…이 시각 고사장`,
    url: "",
    press: "KBS",
  },
  {
    index: 2,
    title: `세 번째 '코로나 수능', 51만명 응시…확진 수험생 2천300여명`,
    url: "",
    press: "매일신문",
  },
  {
    index: 2,
    title: `아이유, 수능 응원 “어떤 결과든 박수 쳐줄 것”`,
    url: "",
    press: "매일경제",
  },
  {
    index: 2,
    title: `경남 116개 수능 시험장 입실…이 시각 창원문성고등학교`,
    url: "",
    press: "KBS",
  },
  {
    index: 2,
    title: `코로나19 이후 세 번째 수능…이 시각 수험장`,
    url: "",
    press: "KBS",
  },
  {
    index: 3,
    title: `"명단 공개하라" 그렇게 외치더니..장경태 "민주당이 공개한 거 아니다"`,
    url: "https://www.bigkinds.or.kr/resources/images/02100501/2022/11/17/02100501.20221117075229001.01.jpg",
    press: "파이낸셜뉴스",
  },
  {
    index: 3,
    title: `"李대표가 명단 공개하라 했잖냐" 민주당 내부서도 '이태원' 후폭풍`,
    url: "",
    press: "파이낸셜뉴스",
  },
  {
    index: 3,
    title: `“이태원 참사 당일 불법 주·정차 신고 72건…이동·견인 조치 14건뿐”`,
    url: "",
    press: "문화일보",
  },
  {
    index: 3,
    title: `이태원로 CCTV 입수‥골목길 밖에 경찰 있었는데`,
    url: "",
    press: "MBC",
  },
  {
    index: 3,
    title: `野 “참사당일 신고는 72건… 이동·견인 조치는 14건뿐”`,
    url: "",
    press: "해럴드경제",
  },
  {
    index: 3,
    title: `이태원 참사 ‘이상민 책임론’에 또다시 무한신뢰 보인 尹`,
    url: "",
    press: "세계일보",
  },
  {
    index: 3,
    title: `“명단 공개로 이중적 충격… 사회가 유가족 지지해야”`,
    url: "",
    press: "서울신문",
  },
  {
    index: 3,
    title: `‘명단 공개’ 책임 떠넘기기… 與 “법적 대응” 野 “정부 은폐 탓”`,
    url: "",
    press: "서울신문",
  },
  {
    index: 4,
    title: `“팔짱 원조, 그땐 자랑해 놓고”…허은아가 올린 文·고민정 사진`,
    url: "https://www.bigkinds.or.kr/resources/images/01100801/2022/11/17/01100801.20221117075501001.01.jpg",
    press: "국민일보",
  },
  {
    index: 4,
    title: `이준석 “먹방 유튜버도 포르노 배우냐···이성 찾자”`,
    url: "",
    press: "경향신문",
  },
  {
    index: 4,
    title: `'김건희 독자일정' 공방‥'빈곤 포르노' 윤리위 제소`,
    url: "",
    press: "MBC",
  },
  {
    index: 4,
    title: `장경태 "김여사 가만있는데 제3자들이 왜 난리"..되레 與여성의원들 나무랐다`,
    url: "",
    press: "파이낸셜뉴스",
  },
  {
    index: 4,
    title: `이준석 “빈곤 포르노에서 ‘포르노’에만 꽂힌 분들, 이성 찾자”`,
    url: "",
    press: "조선일보",
  },
  {
    index: 4,
    title: `“‘포르노’에 꽂힌 분들, 먹방 유튜버도 포르노 배우냐”.. 이준석 與에 쓴소리`,
    url: "",
    press: "세계일보",
  },
  {
    index: 4,
    title: `野 "尹 순방 성적표 초라…지소미아 복원 굴욕"`,
    url: "",
    press: "영남일보",
  },
  {
    index: 4,
    title: `與, '빈곤 포르노' 발언 장경태 윤리위 제소…"의원직 사퇴하라"`,
    url: "",
    press: "영남일보",
  },
  {
    index: 5,
    title: `정진상 소환 하루 만에 '구속영장 청구'…내일 영장 심사`,
    url: "https://www.bigkinds.or.kr/resources/images/08100301/2022/11/17/08100301.20221117074043001.01.jpg",
    press: "SBS",
  },
  {
    index: 5,
    title: `野 내부서도…“이재명 측근 일에 당 총력방어, 부적절”`,
    url: "",
    press: "국민일보",
  },
  {
    index: 5,
    title: `민주당 “檢 먼지떨이 조작 수사 규탄…진실 찾아내겠다”`,
    url: "",
    press: "세계일보",
  },
  {
    index: 5,
    title: `정진상 18일 구속심사…발부시 ‘李 수사’ 본격화 예상`,
    url: "",
    press: "세계일보",
  },
  {
    index: 5,
    title: `檢, 정진상 소환 이튿날 구속영장…이미 ‘퍼즐’ 대부분 맞췄나?`,
    url: "",
    press: "세계일보",
  },
  {
    index: 5,
    title: `이화영·김용·정진상까지 포위…이재명 턱밑까지 온 영장 청구`,
    url: "",
    press: "중앙일보",
  },
  {
    index: 5,
    title: `뇌물수수 등 4가지 혐의 적용… ‘이재명 최측근’ 구속 갈림길`,
    url: "",
    press: "국민일보",
  },
  {
    index: 5,
    title: `이재명 측근 정진상 구속영장`,
    url: "",
    press: "조선일보",
  },
  {
    index: 6,
    title: `"백신 맞으면 고궁 무료입장"…정부 인센티브에도 시민반응은 '글쎄'`,
    url: "https://www.bigkinds.or.kr/resources/images/02100801/2022/11/17/02100801.20221117060111001.01.jpg",
    press: "아시아경제",
  },
  {
    index: 6,
    title: `"하루 20만 확진" 전망에도 접종 저조…'백신 인센티브' 통할까`,
    url: "",
    press: "머니투데이",
  },
  {
    index: 6,
    title: `겨울철 재유행 비상인데 ‘백신 접종’ 불신 어쩌나…`,
    url: "",
    press: "국민일보",
  },
  {
    index: 6,
    title: `[사설] 저조한 접종률… 백신 불신 해소에 적극 나서야`,
    url: "",
    press: "국민일보",
  },
  {
    index: 6,
    title: `부산 중구, 코로나19 동절기 추가접종 캠페인 실시`,
    url: "",
    press: "부산일보",
  },
  {
    index: 6,
    title: `국내 확진 6만6천587명...21일부터 동절기 '집중 접종'`,
    url: "",
    press: "경기일보",
  },
  {
    index: 6,
    title: `[취재수첩] 지지부진한 백신 접종에 대책 못 내는 정부`,
    url: "",
    press: "한국경제",
  },
  {
    index: 6,
    title: `국민 65% "개량 백신 안 맞겠다"...정부, 접종률 제고 안간힘`,
    url: "",
    press: "YTN",
  },
  {
    index: 7,
    title: `수천만 원대의 뇌물을 받은 혐의…노웅래 의원 압수수색`,
    url: "https://www.bigkinds.or.kr/resources/images/08100301/2022/11/17/08100301.20221117074447001.01.jpg",
    press: "SBS",
  },
  {
    index: 7,
    title: `압수수색 당한 노웅래 "회기중 의원사무실을..명백한 야당탄압"`,
    url: "",
    press: "파이낸셜뉴스",
  },
  {
    index: 7,
    title: `검찰, '뇌물 혐의' 노웅래 압수수색‥수사 파장 '촉각'`,
    url: "",
    press: "MBC",
  },
  {
    index: 7,
    title: `‘6000만원 수수 혐의’ 檢, 노웅래 의원 압수수색…“명백한 허위사실”`,
    url: "",
    press: "세계일보",
  },
  {
    index: 8,
    title: `"플로리다의 한 은퇴자가 출마선언" 트럼프 조롱한 뉴욕포스트`,
    url: "https://www.bigkinds.or.kr/resources/images/02100801/2022/11/17/02100801.20221117072812001.01.jpg",
    press: "아시아경제",
  },
  {
    index: 8,
    title: `[이 시각 세계] 트럼프, '유산반환 요구' 조카에 승소`,
    url: "",
    press: "MBC",
  },
  {
    index: 8,
    title: `트럼프, 2024년 美 대선 출마 선언…공화당서도 ‘우려’`,
    url: "",
    press: "KBS",
  },
  {
    index: 8,
    title: `트럼프 출마 선언에 내심 ‘트나땡’ 외치는 美 민주당...트럼프 집권 후 민주당 계속 선전`,
    url: "",
    press: "문화일보",
  },
  {
    index: 9,
    title: `경찰, 이상민 피의자 수사‥"직접 지휘 의무 확인 중"`,
    url: "https://www.bigkinds.or.kr/resources/images/08100201/2022/11/17/08100201.20221117074106002.01.jpg",
    press: "MBC",
  },
  {
    index: 9,
    title: `‘물러나야’ 압박에 이상민 “사실상 백지사표 낸 상황. 책임 회피할 생각 전혀 없다”`,
    url: "",
    press: "세계일보",
  },
  {
    index: 9,
    title: `특수본, 이상민 장관 본격 수사 들어가나… “책임 법리 검토” [이태원 핼러윈 참사]`,
    url: "",
    press: "세계일보",
  },
  {
    index: 9,
    title: `서울청, 희생자 명단 공개 매체 수사 착수… 특수본, 이상민 정조준`,
    url: "",
    press: "서울신문",
  },
  {
    index: 10,
    title: `국회 행안위, '전액삭감' 경찰국 예산안 놓고 '파행'`,
    url: "https://www.bigkinds.or.kr/resources/images/02100701/2022/11/17/02100701.20221117071230001.01.jpg",
    press: "해럴드경제",
  },
  {
    index: 10,
    title: `[라병배 칼럼] 90억 삭감은 패착`,
    url: "",
    press: "대전일보",
  },
];

export default Detail;
