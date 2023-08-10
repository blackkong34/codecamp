import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      black: string;
      blue: string;
      yellow: string;
      gray: string;
      white: string;
    };
    padding: {
      sm?: string;
    };
  }
}
