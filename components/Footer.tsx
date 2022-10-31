import InlineSVG from './InlineSVG';

export default function Footer({ title }: { title?: string }) {
  return (
    <footer title={title}>
      <InlineSVG />
    </footer>
  );
}
