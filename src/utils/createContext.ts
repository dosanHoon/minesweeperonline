import React from "react";

function createContext<T>(ctx: T, displayName?: string) {
  const context = React.createContext(ctx);
  context.displayName = displayName;
  return context;
}

export default createContext;
