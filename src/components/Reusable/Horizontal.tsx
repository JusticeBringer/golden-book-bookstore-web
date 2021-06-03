type HorizontalProps = {
  children: React.ReactNode;
};

export const Horizontal: React.FC<HorizontalProps> = (props: HorizontalProps) => {
  return <section className='scrolling-wrapper-flexbox'> {props.children} </section>;
};

export default Horizontal;
