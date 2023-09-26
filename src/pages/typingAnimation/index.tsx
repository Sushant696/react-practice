
import { Typewriter, Cursor } from "react-simple-typewriter";

export default function TextTypingAnimation() {
  return (
    <div>
      <h1>
        I am {" "}
        <Typewriter
          words={["Student.", "Web Developer.", "Tech Enthusiast.", "UI/UX Designer."]}
          loop
          typeSpeed={120}
          deleteSpeed={80}
        />
        <Cursor />
      </h1>
    </div>
  );
}
