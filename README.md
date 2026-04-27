### 학습 요약

* **파일 형식**: `index.ts`
* **컴파일 (Compile)**: 타입스크립트 파일을 자바스크립트 파일로 변환하는 것. (웹 브라우저는 `.ts` 파일을 읽지 못함)

# TypeScript 프로젝트 초기 세팅

## 1. 프로젝트 초기화

```bash
npm init -y
```

Node.js 패키지를 초기화하고 `package.json`을 생성한다.


## 2. TypeScript 설치

```bash
npm install typescript --save-dev
```

개발 의존성(`devDependencies`)으로 설치한다. 빌드 결과물에는 포함되지 않는다.

설치 후 `package.json` 예시:

```json
{
  "name": "ts_ex_01",
  "version": "1.0.0",
  "main": "index.js",
  "type": "commonjs",
  "devDependencies": {
    "typescript": "^6.0.3"
  }
}
```


## 3. 컴파일 방법

TypeScript 파일을 JavaScript로 변환하는 과정을 **컴파일**이라 하고, 이때 사용하는 도구가 **컴파일러(`tsc`)** 다.

```bash
# 파일 직접 지정
npx tsc src/01/index.ts
```

- 컴파일 후 동일 경로에 `.js` 파일이 생성된다.
- 기본값은 **ES5 이전 기준**이므로, 별도 설정이 필요하다.


## 4. `tsconfig.json` 생성

```bash
npx tsc --init
```

TypeScript 컴파일 환경설정은 `tsconfig.json`으로 관리한다.


## 5. `tsconfig.json` 주요 옵션 설명

```json
{
  "compilerOptions": {

    // 파일 경로 설정
    "rootDir": "./src",       // TS 소스 파일 위치
    "outDir": "./dist",       // 컴파일된 JS 출력 위치

    // 환경 설정
    "module": "nodenext",     // 모듈 시스템 지정
    "target": "ESNext",       // 출력 JS 버전 지정
    "types": [],              // 자동 포함할 타입 패키지 지정

    // 출력 옵션
    "sourceMap": true,        // .map 파일 생성 (디버깅용)
    "declaration": true,      // .d.ts 타입 선언 파일 생성
    "declarationMap": true,   // 선언 파일의 소스맵 생성

    // 엄격한 타입 검사
    "noUncheckedIndexedAccess": true,     // 배열/객체 접근 시 undefined 가능성 체크
    "exactOptionalPropertyTypes": true,   // 선택 속성을 더 엄격하게 검사

    // 권장 옵션
    "strict": true,                       // 엄격 모드 전체 활성화
    "jsx": "react-jsx",                   // JSX 변환 방식
    "verbatimModuleSyntax": true,         // import type 구문 강제
    "isolatedModules": true,              // 각 파일을 독립 모듈로 처리
    "noUncheckedSideEffectImports": true, // 사이드 이펙트 import 체크
    "moduleDetection": "force",           // 모든 파일을 모듈로 인식
    "skipLibCheck": true                  // 외부 라이브러리 타입 검사 생략
  },

  // 컴파일 대상 파일 지정
  "include": ["src/**/*.ts"],

  // 컴파일 제외 파일 지정
  "exclude": ["node_modules"]
}
```

### 와일드카드 패턴

| 패턴 | 의미 |
|------|------|
| `*` | 해당 폴더 안의 모든 파일 |
| `**` | 모든 하위 폴더 (깊이 무관) |


## 6. 설정 적용 후 컴파일

```bash
npx tsc
```

`tsconfig.json`의 설정을 반영해서 `src/` 안의 모든 `.ts` 파일을 컴파일하고, 결과물을 `dist/`에 출력한다.


## 7. 마무리

- 컴파일 후 불필요한 파일(ex. 설정 전에 생성된 `.js`)은 직접 삭제한다.
- 이후에는 `npx tsc` 만으로 전체 프로젝트를 컴파일할 수 있다.