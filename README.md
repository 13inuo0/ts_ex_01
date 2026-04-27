### 학습 요약

* **파일 형식**: `index.ts`
* **컴파일 (Compile)**: 타입스크립트 파일을 자바스크립트 파일로 변환하는 것. (웹 브라우저는 `.ts` 파일을 읽지 못함)

# TypeScript 환경 설정 및 컴파일 방법

---

## 1. 프로젝트 초기화

터미널에서 아래 명령어를 실행해 Node.js 패키지를 초기화합니다.

```bash
npm init -y
```



## 2. TypeScript 설치

개발 의존성으로 TypeScript 패키지를 설치합니다.

```bash
npm install typescript --save-dev
```

설치 완료 후 `package.json`에 아래와 같이 반영됩니다.

```json
{
  "name": "ts_ex_01",
  "version": "1.0.0",
  "devDependencies": {
    "typescript": "^6.0.3"
  }
}
```



## 3. 컴파일 실행

설치된 TypeScript 패키지(`tsc`)를 사용해 `.ts` 파일을 `.js` 파일로 변환합니다.

```bash
npx tsc 컴파일경로
# 예시
npx tsc src/01/index.ts
```

> 실행 시 지정된 경로에 `.js` 파일이 새로 생성됩니다.  
> 기본값은 ES5 이전 코드 기준이므로, 별도 설정이 필요합니다.



## 4. 컴파일 환경 설정 (`tsconfig.json`)

### 설정 파일 생성

```bash
npx tsc --init
```

### 설정 파일 (`tsconfig.json`)

```json
{
  "compilerOptions": {

    // 파일 경로
    "rootDir": "./src",       // 소스 파일 루트 위치
    "outDir": "./dist",       // 컴파일 결과물 저장 위치

    // 환경 설정
    "module": "nodenext",
    "target": "ESNext",
    "types": [],

    // 출력 옵션
    "sourceMap": true,        // 에러 추적용 맵 파일 생성
    "declaration": true,
    "declarationMap": true,

    // 타입 체크 강화
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true,

    // 권장 옵션
    "strict": true,
    "jsx": "react-jsx",
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "noUncheckedSideEffectImports": true,
    "moduleDetection": "force",
    "skipLibCheck": true
  },

  "include": ["src/**/*.ts"], // 컴파일 대상 파일 지정
  "exclude": ["node_modules"] // 컴파일 제외 폴더 지정
}
```



## 5. 경로 와일드카드

| 패턴 | 의미 |
|------|------|
| `*` | 해당 폴더 안의 모든 파일 |
| `**` | 깊이 상관없이 모든 하위 폴더 |



## 6. 설정 적용 및 마무리

`tsconfig.json` 수정 후 아래 명령어로 전체 재컴파일합니다.

```bash
npx tsc
```

컴파일 완료 후 `src` 폴더 내에 잘못 생성된 `.js` 파일 등 불필요한 파일은 삭제합니다.