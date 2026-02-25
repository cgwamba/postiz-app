type LegalLinksProps = {
  className?: string;
};

export const LegalLinks = ({ className }: LegalLinksProps) => {
  return (
    <span className={className}>
      <a
        href="https://teknicom.co.uk/terms-conditions/"
        className="underline hover:font-bold"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Terms of Service
      </a>
      &nbsp;and&nbsp;
      <a
        href="https://teknicom.co.uk/privacy-policy/"
        className="underline hover:font-bold"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Privacy Policy
      </a>
    </span>
  );
};
