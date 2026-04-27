### 학습 요약

* **파일 형식**: `index.ts`
* **컴파일 (Compile)**: 타입스크립트 파일을 자바스크립트 파일로 변환하는 것. (웹 브라우저는 `.ts` 파일을 읽지 못함)

# TypeScript 환경 설정 및 컴파일 방법

## 1. 프로젝트 초기화 및 패키지 설치

### Node.js 패키지 초기화

```bash
npm init -y
```

### TypeScript 설치 (개발 의존성)

```bash
npm install typescript --save-dev
```

---

## 2. 컴파일러 실행

설치된 패키지를 사용하여 `.ts` 파일을 `.js` 파일로 변환합니다.

- **명령어:** `npx tsc 컴파일경로`
- **예시:** `npx tsc src/01/index.ts`

실행 시 지정된 경로에 `.js` 파일이 새로 생성됩니다.

---

## 3. 컴파일 환경 설정 (`tsconfig.json`)

기본값은 ES5 이전 버전 기준이므로, 현대적인 JavaScript 환경에 맞춰 설정이 필요합니다.

### 설정 파일 생성

```bash
npx tsc --init
```

### 주요 설정 값

```json
{
  "compilerOptions": {
    "rootDir": "./src",       // 소스 파일 시작 위치
    "outDir": "./dist",       // 컴파일된 파일 저장 위치
    "module": "nodenext",     // 모듈 시스템 설정
    "target": "ESNext",       // 변환될 자바스크립트 버전
    "sourceMap": true,        // 에러 추적용 맵 파일 생성
    "strict": true,           // 엄격한 타입 검사 활성화
    "skipLibCheck": true      // 라이브러리 체킹 건너뛰기
  },
  "include": ["src/**/*.ts"], // 컴파일 대상 폴더 및 파일 지정
  "exclude": ["node_modules"] // 컴파일 제외 폴더 지정
}
```

---

## 4. 경로 와일드카드 이해

| 패턴 | 의미 |
|------|------|
| `*` | 해당 폴더 내 모든 파일 |
| `**` | 깊이 상관없이 모든 하위 폴더 |

---

## 5. 설정 적용 및 마무리

1. `tsconfig.json` 수정 후 아래 명령어로 전체 컴파일을 실행합니다.

   ```bash
   npx tsc
   ```

2. 컴파일 완료 후 `src` 폴더 내에 잘못 생성된 `.js` 파일 등 불필요한 파일은 삭제합니다.