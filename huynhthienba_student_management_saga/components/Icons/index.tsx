import { IconProps } from "@/utils/interface";

export const Plus = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 50 50"
    className={className}
  >
    <path
      fill="currentColor"
      d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17m0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15"
    />
    <path fill="currentColor" d="M16 24h18v2H16z" />
    <path fill="currentColor" d="M24 16h2v18h-2z" />
  </svg>
);

export const Pen = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 16 16"
    className={className}
  >
    <path
      fill="currentColor"
      d="M13.44 2.56a1.914 1.914 0 0 0-2.707 0L3.338 9.956a1.65 1.65 0 0 0-.398.644l-.914 2.743a.5.5 0 0 0 .632.633l2.743-.915c.243-.08.463-.217.644-.398L12 6.708l.263.262a.75.75 0 0 1 0 1.06l-1.117 1.117a.5.5 0 1 0 .708.707l1.116-1.116a1.75 1.75 0 0 0 0-2.475L12.707 6l.733-.733a1.914 1.914 0 0 0 0-2.707m-1.778 3.072a.458.458 0 0 0-.03.03l-6.294 6.293a.648.648 0 0 1-.253.157l-1.794.598l.598-1.794a.649.649 0 0 1 .156-.254l7.395-7.394a.914.914 0 1 1 1.293 1.293z"
    />
  </svg>
);

export const Recybin = ({ className }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    viewBox="0 0 24 24"
    className={className}
  >
    <path
      fill="currentColor"
      d="M7.615 20q-.67 0-1.143-.472Q6 19.056 6 18.385V6H5V5h4v-.77h6V5h4v1h-1v12.385q0 .69-.462 1.152q-.463.463-1.153.463zM17 6H7v12.385q0 .269.173.442t.442.173h8.77q.23 0 .423-.192q.192-.193.192-.423zM9.808 17h1V8h-1zm3.384 0h1V8h-1zM7 6v13z"
    />
  </svg>
);
