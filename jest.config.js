// eslint-disable-next-line no-undef
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/.jest/setup-tests.js"],
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/.jest/mocks/fileMock.ts",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@pages/(.*)": "<rootDir>/src/pages/$1",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@mocks/(.*)": "<rootDir>/src/mocks/$1",
    "@styles/(.*)": "<rootDir>/src/styles/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@theme/(.*)": "<rootDir>/src/theme/$1",
    "@types/(.*)": "<rootDir>/src/types/$1",
    "types/(.*)": "<rootDir>/src/types/$1",
    "@context/(.*)": "<rootDir>/src/context/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
  },
  preset: "ts-jest",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.tsx$": "ts-jest",
  },
};
