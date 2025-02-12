export function PrimaryLabel({ children, className = "" }) {
  return <p className={`text-base font-medium text- ${className}`}>{children}</p>;
}

export function SecondaryContent({ children, className = "" }) {
  return <p className={`text-sm font-normal text- ${className}`}>{children}</p>;
}

export function PrimaryTitle({ children, className = "" }) {
  return <h1 className={`text-2xl font-bold text-primaryDark ${className}`}>{children}</h1>;
}

export function SecondaryTitle({ children, className = "" }) {
  return <h2 className={`text-xl font-bold text- ${className}`}>{children}</h2>;
}

export function ButtonText({ children, className = "" }) {
  return <span className={`text-xs font-medium text- ${className}`}>{children}</span>;
}

export function ActionLink({ children, className = "" }) {
  return <a className={`text-sm font-medium uppercase  ${className}`}>{children}</a>;
}

export function ContentLink({ children, className = "" }) {
  return <a className={`text-sm font-normal underline  ${className}`}>{children}</a>;
}
