# React AG Grid 템플릿

- IDE에서 yarn3에서 관리하는 의존성을 알 수 있도록 알맞은 [SDK](https://yarnpkg.com/getting-started/editor-sdks#vscode)를 설치해주세요.
- 프로젝트를 실행하기 위해 먼저 `yarn install`을 실행해주세요.

## dependency

- [yarn](https://yarnpkg.com/)
- [vite](https://vitejs.dev/)
- [mui](https://mui.com/)
- [react](https://ko.reactjs.org/)
- [react-hook-form](https://react-hook-form.com/)
- [react-router-dom v6](https://reactrouter.com/)
- [AG Grid](https://www.ag-grid.com/)
- [zustand](https://zustand-demo.pmnd.rs/)

## scripts

|               script                |                                    설명                                    |
| :---------------------------------: | :------------------------------------------------------------------------: |
|    `yarn (dev\|prod\|stage\|qa)`    |                        각 환경으로 로컬 서버를 실행                        |
| `yarn build:(dev\|prod\|stage\|qa)` |                           각 환경으로 빌드 실행                            |
|            `yarn serve`             |                       빌드 결과물을 로컬 서버로 띄움                       |
|              `yarn cz`              | commitizen에 적합한 메세지 구성와 함께 git commit을 도와주는 스크립트 실행 |

## 프로젝트 환경변수

- root 프로젝트에 env 디렉토리를 생성해주세요
- 생성한 env 디렉토리에 다음과 같이 각 환경에 쓰일 파일을 생성해주세요

```
.env.(dev|prod|stage|qa)
```

- vite 기반 프로젝트는 환경변수에 `VITE_` prefix가 필요합니다.
- 프로젝트 내부에서는 `import.meta.env.{환경변수 명}`으로 접근 가능합니다.
- 환경변수 타입 추론을 위해 추가되는 환경변수는 `src/vite-env.d.ts`의 `ImportMetaEnv` 인터페이스에 정의해주세요.
- 자세한 내용은 [vite 공식문서](https://vitejs.dev/guide/env-and-mode.html)를 참고해주세요.

## commitizen

- husky와 commitlint를 통해 커밋 메세지가 [commitizen](https://www.conventionalcommits.org/ko/v1.0.0/)에 적합한지 검사하도록 설정하였습니다.
- staged 상태의 변경된 파일들을 커밋하기 위해 `yarn cz` 스크립트를 실행해주세요.

## 호환성

- vite 4 부터 ES2020(safari14)을 타겟으로 합니다. 이전 브라우저를 지원해야 하는 경우 [@vitejs/plugin-legacy](https://github.com/vitejs/vite/tree/main/packages/plugin-legacy)를 추가해야 합니다.
