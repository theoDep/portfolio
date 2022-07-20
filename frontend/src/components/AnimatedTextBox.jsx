const spanStyleRight = "block text-4xl slide-right lg:text-8xl";
const spanStyleLeft = "block text-4xl slide-left lg:text-8xl";

function AnimatedTextBox() {
  return (
    <div className="text-container text-center lg:pl-12 lg:text-start lg:pt-8 lg:max-w-[60%]">
      <span className={spanStyleRight}>Hey, I'm Theo</span>
      <span className={spanStyleLeft}>A passionate</span>
      <span className={spanStyleRight}>Fullstack Developer</span>
    </div>
  );
}

export default AnimatedTextBox;
