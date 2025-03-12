declare module '@builder.io/partytown/react' {
  export const Partytown: React.ComponentType<{
    debug?: boolean;
    forward?: string[];
  }>;
}