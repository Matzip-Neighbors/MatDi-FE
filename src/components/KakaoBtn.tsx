import styled from "styled-components";

const KakaoContainer = styled.button`
  background-color: #fee500;
  border-radius: 12px;
  height: 3rem;
  width: 20rem;
  border: none;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const KakaoLable = styled.span`
  height: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;

const KakaoBtn = () => {
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <KakaoContainer>
      <a href={KAKAO_AUTH_URL}>
        <KakaoLable>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
          >
            <path
              fill="#000"
              fill-rule="nonzero"
              d="M11 0C5.242 0 0 3.823 0 8.539c0 2.932 1.904 5.519 4.804 7.056l-1.22 4.479c-.107.397.343.712.69.483l5.348-3.548c.452.044.91.069 1.377.069 6.076 0 11-3.823 11-8.54 0-4.715-4.924-8.538-11-8.538"
            ></path>
          </svg>
          <span>카카오로 시작하기</span>
        </KakaoLable>
      </a>
    </KakaoContainer>
  );
};

export default KakaoBtn;
